import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import ContactFAQ from "./ContactFAQ";

export const metadata = {
  title: "Contacto | Nidra Servicios Anestésicos",
  description:
    "Contáctenos para valoraciones anestésicas, sedación o analgesia postoperatoria en Barinas, Venezuela. Respondemos por WhatsApp.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />

      {/* Hero con imagen */}
      <section className="relative h-[70vh] min-h-[560px] flex items-end overflow-hidden">
        <Image
          src="/nidra.png"
          alt="Nidra Servicios Anestésicos — Contacto"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-[#030C18]/65" />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, #030C18 0%, rgba(3,12,24,0.15) 65%, transparent 100%)" }}
        />

        <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-12 pb-16">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-6">
            <a href="/" className="text-[11px] tracking-widest uppercase text-slate-400 hover:text-white transition-colors">Inicio</a>
            <span className="text-slate-600">/</span>
            <span className="text-[11px] tracking-widest uppercase text-blue-400">Contacto</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div className="flex flex-col gap-4 max-w-xl">
              <h1 className="font-display text-5xl lg:text-6xl font-light text-white leading-tight">
                Estamos{" "}
                <em
                  className="not-italic font-semibold"
                  style={{
                    background: "linear-gradient(135deg, #93C5FD 0%, #60A5FA 40%, #3B82F6 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  para ayudarle
                </em>
              </h1>
              <p className="text-slate-300 text-base lg:text-lg leading-relaxed">
                Comuníquese con nosotros para coordinar su valoración, agendar
                un procedimiento o resolver cualquier duda.
              </p>
            </div>

            {/* WhatsApp hero CTA */}
            <a
              href={`https://wa.me/584245567249?text=${encodeURIComponent("Hola, los contacto desde la página de Contacto en nidranestesia.com. Quisiera coordinar una cita.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 bg-green-500 hover:bg-green-400 text-white px-7 py-4 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/30 hover:-translate-y-1 w-fit flex-shrink-0"
            >
              <div className="relative">
                <span className="absolute inset-0 rounded-full bg-white/20 animate-ping" />
                <svg className="w-6 h-6 relative" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-sm">Escribir por WhatsApp</span>
                <span className="text-green-100/80 text-xs">0424-556 7249 · Respuesta inmediata</span>
              </div>
              <svg className="w-4 h-4 opacity-70 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Info strip */}
      <div className="border-y border-white/5" style={{ background: "linear-gradient(90deg, #071424, #0B1E36, #071424)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/5">
            {[
              { icon: <PhoneIcon />, label: "Teléfono", value: "0424-556 7249", href: "tel:+584245567249" },
              { icon: <EmailIcon />, label: "Correo", value: "nidranestesiabns@gmail.com", href: "mailto:nidranestesiabns@gmail.com" },
              { icon: <LocationIcon />, label: "Ubicación", value: "Barinas, Venezuela", href: null },
              { icon: <ClockIcon />, label: "Disponibilidad", value: "24 horas · 7 días", href: null },
            ].map(({ icon, label, value, href }) => (
              <div key={label} className="flex items-center gap-3 px-6 py-5">
                <div className="text-blue-400 flex-shrink-0">{icon}</div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[9px] tracking-[0.2em] uppercase text-slate-500">{label}</span>
                  {href ? (
                    <a href={href} className="text-white/70 hover:text-white text-xs mt-0.5 truncate transition-colors">{value}</a>
                  ) : (
                    <span className="text-white/70 text-xs mt-0.5 truncate">{value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main content */}
      <section className="relative bg-[#030C18] py-20 lg:py-28">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 70% 50%, rgba(37,99,235,0.04) 0%, transparent 60%)" }}
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">

            {/* Left: info + servicios */}
            <div className="lg:col-span-2 flex flex-col gap-6">

              <div className="flex flex-col gap-2">
                <span className="text-[10px] tracking-[0.3em] uppercase text-blue-400 font-medium">Canales de atención</span>
                <h2 className="font-display text-2xl lg:text-3xl font-light text-white">
                  Elija cómo <span className="font-semibold text-blue-300">contactarnos</span>
                </h2>
              </div>

              {/* WhatsApp card */}
              <a
                href={`https://wa.me/584245567249?text=${encodeURIComponent("Hola, los contacto desde la página de Contacto en nidranestesia.com. Quisiera recibir información.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-5 rounded-2xl border border-green-500/20 hover:border-green-500/45 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-green-900/20"
                style={{ background: "linear-gradient(135deg, rgba(34,197,94,0.07) 0%, rgba(34,197,94,0.02) 100%)" }}
              >
                <div className="w-12 h-12 rounded-xl bg-green-500/15 flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/25 transition-colors">
                  <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div className="flex flex-col flex-1">
                  <span className="text-white font-semibold text-sm">WhatsApp</span>
                  <span className="text-green-400 text-xs mt-0.5">0424-556 7249</span>
                  <span className="text-slate-500 text-[10px] mt-1">Respuesta inmediata · 24/7</span>
                </div>
                <svg className="w-4 h-4 text-green-400/50 group-hover:text-green-400 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>

              {/* Servicios rápidos */}
              <div
                className="flex flex-col gap-3 p-5 rounded-2xl border border-white/8"
                style={{ background: "rgba(255,255,255,0.02)" }}
              >
                <p className="text-[10px] tracking-[0.2em] uppercase text-slate-500 font-medium">Consultar sobre</p>
                <div className="flex flex-col gap-1">
                  {[
                    { label: "Valoración anestésica preoperatoria", href: "/servicios/valoracion" },
                    { label: "Sedación para procedimientos", href: "/servicios/sedacion" },
                    { label: "Analgesia postoperatoria", href: "/servicios/analgesia" },
                  ].map(({ label, href }) => (
                    <a
                      key={label}
                      href={`https://wa.me/584245567249?text=${encodeURIComponent(`Hola, los contacto desde la página web nidranestesia.com. Necesito información sobre: ${label}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between gap-3 py-3 border-b border-white/5 last:border-0 group"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500/40 group-hover:bg-blue-400 flex-shrink-0 transition-colors" />
                        <span className="text-slate-400 group-hover:text-white text-xs leading-snug transition-colors">{label}</span>
                      </div>
                      <svg className="w-3.5 h-3.5 text-slate-600 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability note */}
              <div className="flex items-start gap-3 p-4 rounded-xl border border-blue-500/15 bg-blue-500/5">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-1.5 flex-shrink-0 animate-pulse" />
                <p className="text-slate-400 text-xs leading-relaxed">
                  Atendemos procedimientos programados y urgencias las{" "}
                  <span className="text-white font-medium">24 horas, los 7 días</span> de la semana.
                </p>
              </div>
            </div>

            {/* Right: form */}
            <div className="lg:col-span-3">
              <div
                className="p-8 lg:p-10 rounded-3xl border border-white/10"
                style={{ background: "linear-gradient(160deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)" }}
              >
                <div className="flex flex-col gap-1.5 mb-8">
                  <h2 className="font-display text-2xl lg:text-3xl text-white font-medium">
                    Envíenos un Mensaje
                  </h2>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Complete el formulario y lo redirigimos a WhatsApp para una
                    atención directa y personalizada.
                  </p>
                </div>
                <ContactForm />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ interactivo */}
      <section className="py-20 lg:py-24 border-t border-white/5" style={{ background: "#050F1D" }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col items-center text-center gap-4 mb-12">
            <span className="text-[10px] tracking-[0.3em] uppercase text-blue-400 font-medium">
              Preguntas frecuentes
            </span>
            <h2 className="font-display text-3xl lg:text-4xl font-light text-white">
              Dudas <span className="font-semibold italic text-blue-300">frecuentes</span>
            </h2>
          </div>
          <ContactFAQ />
        </div>
      </section>

      <Footer />
    </>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}
