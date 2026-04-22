"use client";
import { useState } from "react";

const faqs = [
  {
    q: "¿Necesito valoración anestésica para cualquier cirugía?",
    a: "Sí. Toda cirugía o procedimiento que requiera anestesia o sedación debe ir precedida de una valoración anestésica preoperatoria. Esta evaluación es fundamental para garantizar su seguridad y diseñar el plan anestésico más adecuado para usted.",
  },
  {
    q: "¿Con cuánta anticipación debo contactarlos?",
    a: "Para la valoración preoperatoria lo ideal es contactarnos al menos 48 a 72 horas antes del procedimiento. Para sedación o analgesia postoperatoria, comuníquese tan pronto como tenga la fecha de su cirugía programada para coordinar con tiempo.",
  },
  {
    q: "¿Prestan servicios en todas las clínicas de Barinas?",
    a: "Trabajamos con las principales clínicas, hospitales y centros médicos de Barinas. Contáctenos indicando el lugar de su procedimiento y confirmamos disponibilidad para su caso específico.",
  },
  {
    q: "¿Qué pasa si tengo alergia a algún anestésico?",
    a: "Es muy importante que nos informe de cualquier alergia o reacción adversa previa a medicamentos, especialmente anestésicos o antibióticos. Durante la valoración anestésica evaluamos su historial y seleccionamos alternativas seguras para usted.",
  },
  {
    q: "¿Atienden emergencias o solo procedimientos programados?",
    a: "Atendemos tanto procedimientos programados como urgencias. Contamos con disponibilidad 24/7 para situaciones que requieran atención anestésica inmediata. En caso de emergencia, contáctenos directamente por WhatsApp.",
  },
  {
    q: "¿Trabajan con seguros médicos HCM?",
    a: "Sí, trabajamos con las principales pólizas de HCM vigentes en Venezuela. Le recomendamos verificar la cobertura de su seguro antes del procedimiento. Podemos orientarle en el proceso de solicitud de autorización.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className="relative bg-[#030C18] py-24 lg:py-32 border-t border-white/5">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center bottom, rgba(37,99,235,0.04) 0%, transparent 70%)" }}
      />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col items-center text-center gap-4 mb-14">
          <span className="text-[10px] tracking-[0.3em] uppercase text-blue-400 font-medium">
            Resolvemos sus dudas
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-light text-white">
            Preguntas{" "}
            <span className="font-semibold italic text-blue-300">Frecuentes</span>
          </h2>
          <p className="text-slate-500 text-sm max-w-lg leading-relaxed">
            Si tiene alguna pregunta que no está aquí, escríbanos por WhatsApp
            y le respondemos a la brevedad.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map(({ q, a }, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/10 overflow-hidden transition-colors duration-200 hover:border-blue-500/25"
              style={{ background: "rgba(255,255,255,0.02)" }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex items-center justify-between w-full px-6 py-5 text-left gap-4 group"
              >
                <span className={`font-display font-medium text-base lg:text-lg leading-snug transition-colors duration-200 ${open === i ? "text-white" : "text-white/80 group-hover:text-white"}`}>
                  {q}
                </span>
                <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center border transition-all duration-300 ${open === i ? "bg-blue-500/20 border-blue-500/40 rotate-45" : "border-white/15 group-hover:border-blue-500/30"}`}>
                  <svg className="w-3.5 h-3.5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </span>
              </button>

              <div
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{ maxHeight: open === i ? "200px" : "0px" }}
              >
                <p className="px-6 pb-5 text-slate-400 text-sm leading-relaxed">
                  {a}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <a
            href={`https://wa.me/584245567249?text=${encodeURIComponent("Hola, los contacto desde la página web nidranestesia.com. Tengo una consulta adicional.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 border border-green-500/30 text-green-400 hover:bg-green-500/10 hover:border-green-500/50 text-sm font-medium px-7 py-3.5 rounded-full transition-all duration-200"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            ¿Otra pregunta? Escríbanos
          </a>
        </div>
      </div>
    </section>
  );
}
