"use client";
import { useState } from "react";

const faqs = [
  {
    q: "¿Con cuánta anticipación debo agendar la valoración preoperatoria?",
    a: "Lo ideal es al menos 48 a 72 horas antes del procedimiento. Esto nos da tiempo suficiente para revisar su historia clínica completa, solicitar exámenes adicionales si fueran necesarios y resolver cualquier duda antes de la cirugía.",
  },
  {
    q: "¿Qué documentos debo llevar a la valoración?",
    a: "Exámenes de laboratorio recientes (hematología, química sanguínea), electrocardiograma si lo tiene, estudios previos como radiografías o ecocardiogramas, lista completa de medicamentos actuales y cualquier informe médico relevante de su historial.",
  },
  {
    q: "¿Los servicios se prestan en todas las clínicas de Barinas?",
    a: "Trabajamos con las principales clínicas, hospitales y centros de endoscopía del estado Barinas. Contáctenos indicando el lugar de su procedimiento y confirmamos disponibilidad para su caso.",
  },
  {
    q: "¿Necesito acompañante para los procedimientos con sedación?",
    a: "Sí, es obligatorio. Los efectos de la sedación pueden persistir varias horas y no podrá conducir ni tomar decisiones importantes. Un adulto responsable debe acompañarlo a casa y permanecer con usted las primeras horas.",
  },
  {
    q: "¿Atienden emergencias fuera del horario habitual?",
    a: "Sí. Contamos con disponibilidad las 24 horas, los 7 días de la semana para situaciones que requieran atención anestésica urgente. En caso de emergencia, comuníquese directamente por WhatsApp.",
  },
];

export default function ContactFAQ() {
  const [open, setOpen] = useState(null);

  return (
    <div className="flex flex-col gap-3">
      {faqs.map(({ q, a }, i) => (
        <div
          key={i}
          className="rounded-2xl border overflow-hidden transition-colors duration-200"
          style={{
            borderColor: open === i ? "rgba(59,130,246,0.25)" : "rgba(255,255,255,0.08)",
            background: open === i
              ? "linear-gradient(135deg, rgba(37,99,235,0.05) 0%, rgba(255,255,255,0.01) 100%)"
              : "rgba(255,255,255,0.02)",
          }}
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="flex items-center justify-between w-full px-6 py-5 text-left gap-4 group"
          >
            <span className={`font-display font-medium text-base lg:text-lg leading-snug transition-colors ${open === i ? "text-white" : "text-white/75 group-hover:text-white"}`}>
              {q}
            </span>
            <span
              className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center border transition-all duration-300"
              style={{
                borderColor: open === i ? "rgba(59,130,246,0.4)" : "rgba(255,255,255,0.12)",
                background: open === i ? "rgba(37,99,235,0.15)" : "transparent",
                transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
              }}
            >
              <svg className="w-3.5 h-3.5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </span>
          </button>

          <div
            className="overflow-hidden transition-all duration-300 ease-in-out"
            style={{ maxHeight: open === i ? "200px" : "0px" }}
          >
            <p className="px-6 pb-5 text-slate-400 text-sm leading-relaxed border-t border-white/5 pt-4">
              {a}
            </p>
          </div>
        </div>
      ))}

      <div className="flex justify-center mt-6">
        <a
          href={`https://wa.me/584245567249?text=${encodeURIComponent("Hola, los contacto desde la página de Contacto en nidranestesia.com. Tengo una consulta adicional.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 border border-green-500/25 text-green-400 hover:bg-green-500/8 hover:border-green-500/45 text-sm font-medium px-7 py-3.5 rounded-full transition-all duration-200"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          ¿Otra pregunta? Escríbanos por WhatsApp
        </a>
      </div>
    </div>
  );
}
