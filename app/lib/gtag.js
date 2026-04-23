export const GA_ID = "G-2ZQMWNSVW1";

export function trackWhatsApp(label = "whatsapp") {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", "click_boton_whatsapp", {
    event_category: "contacto",
    event_label: label,
  });
}

export function trackContactIntent(label = "contacto") {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", "intento_contacto", {
    event_category: "contacto",
    event_label: label,
  });
}

export function trackFormSubmit() {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", "formulario_contacto", {
    event_category: "contacto",
    event_label: "formulario_whatsapp",
  });
}
