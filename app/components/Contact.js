"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hola, los contacto desde la página web nidranestesia.com. Soy ${form.name}. ${form.message} Mi teléfono: ${form.phone}`
    );
    window.open(`https://wa.me/584245567249?text=${text}`, "_blank");
    setSent(true);
    setForm({ name: "", phone: "", message: "" });
  };

  return (
    <section id="contacto" className="relative bg-[#050F1D] py-24 lg:py-32 overflow-hidden">
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.3), transparent)" }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(37,99,235,0.05) 0%, transparent 70%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <span className="text-[10px] tracking-[0.3em] uppercase text-blue-400 font-medium">
            Estamos para ayudarte
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-light text-white">
            Contáctenos
          </h2>
          <p className="text-slate-500 max-w-md text-sm leading-relaxed">
            Estamos disponibles para responder sus preguntas y coordinar sus
            procedimientos anestésicos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Info */}
          <div className="flex flex-col gap-5">
            <a
              href={`https://wa.me/584245567249?text=${encodeURIComponent("Hola, los contacto desde la página web nidranestesia.com. Quisiera recibir información.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-2xl bg-green-500/10 border border-green-500/20 hover:border-green-500/40 hover:bg-green-500/15 transition-all duration-200 group"
            >
              <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 flex-shrink-0 group-hover:bg-green-500/30 transition-colors">
                <WhatsAppIcon className="w-6 h-6" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-white font-medium text-sm">Escribir por WhatsApp</span>
                <span className="text-green-400/70 text-xs mt-0.5">Respuesta rápida garantizada</span>
              </div>
              <svg
                className="w-4 h-4 text-green-400 ml-auto group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

            {[
              {
                icon: <PhoneIcon />,
                label: "Teléfono",
                value: "0424-556 7249",
                href: "tel:+584245567249",
              },
              {
                icon: <EmailIcon />,
                label: "Correo electrónico",
                value: "nidranestesiabns@gmail.com",
                href: "mailto:nidranestesiabns@gmail.com",
              },
              {
                icon: <LocationIcon />,
                label: "Ubicación",
                value: "Barinas, Venezuela",
                href: null,
              },
            ].map(({ icon, label, value, href }) => (
              <div
                key={label}
                className="flex items-center gap-4 p-4 rounded-xl border border-white/5 hover:border-white/10 transition-colors"
                style={{ background: "rgba(255,255,255,0.02)" }}
              >
                <div className="w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 flex-shrink-0">
                  {icon}
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider">{label}</span>
                  {href ? (
                    <a href={href} className="text-white/80 hover:text-white text-sm transition-colors mt-0.5">
                      {value}
                    </a>
                  ) : (
                    <span className="text-white/80 text-sm mt-0.5">{value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Right: Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 p-7 rounded-2xl border border-white/10"
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
            }}
          >
            <h3 className="font-display text-white text-xl font-medium mb-1">
              Enviar Mensaje
            </h3>

            {sent && (
              <div className="text-sm text-green-400 bg-green-400/10 border border-green-400/20 rounded-lg px-4 py-3">
                ¡Mensaje enviado! Nos comunicaremos pronto por WhatsApp.
              </div>
            )}

            {[
              { key: "name", label: "Nombre", type: "text", placeholder: "Su nombre completo" },
              { key: "phone", label: "Teléfono", type: "tel", placeholder: "+58 424 000 0000" },
            ].map(({ key, label, type, placeholder }) => (
              <div key={key} className="flex flex-col gap-1.5">
                <label className="text-[10px] tracking-wider uppercase text-slate-400">{label}</label>
                <input
                  type={type}
                  required
                  value={form[key]}
                  onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                  placeholder={placeholder}
                  className="bg-white/5 border border-white/10 text-white placeholder:text-slate-600 text-sm px-4 py-3 rounded-xl outline-none focus:border-blue-500/50 transition-all"
                />
              </div>
            ))}

            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] tracking-wider uppercase text-slate-400">Mensaje</label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="¿En qué podemos ayudarte?"
                className="bg-white/5 border border-white/10 text-white placeholder:text-slate-600 text-sm px-4 py-3 rounded-xl outline-none focus:border-blue-500/50 transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold tracking-wide px-6 py-3.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/20 mt-2"
            >
              <WhatsAppIcon className="w-4 h-4" />
              Enviar por WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function WhatsAppIcon({ className }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
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
