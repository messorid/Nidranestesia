"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { GA_ID } from "../lib/gtag";

export default function Analytics() {
  const pathname = usePathname();

  // Pageview en cada cambio de ruta
  useEffect(() => {
    if (!window.gtag) return;
    window.gtag("config", GA_ID, { page_path: pathname });
  }, [pathname]);

  // Interceptor global de clics
  useEffect(() => {
    const handleClick = (e) => {
      const link = e.target.closest("a");
      if (!link) return;
      const href = link.getAttribute("href") || "";

      // WhatsApp
      if (href.includes("wa.me")) {
        const label =
          link.dataset.gaLabel ||
          link.innerText?.trim().slice(0, 60) ||
          "whatsapp";
        window.gtag?.("event", "click_boton_whatsapp", {
          event_category: "contacto",
          event_label: label,
          page_path: pathname,
        });
      }

      // Llamada telefónica
      if (href.startsWith("tel:")) {
        window.gtag?.("event", "intento_contacto", {
          event_category: "contacto",
          event_label: "llamada_telefonica",
        });
      }

      // Email
      if (href.startsWith("mailto:")) {
        window.gtag?.("event", "intento_contacto", {
          event_category: "contacto",
          event_label: "correo_electronico",
        });
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [pathname]);

  return null;
}
