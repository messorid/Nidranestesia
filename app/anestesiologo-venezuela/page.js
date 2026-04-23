import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Anestesiólogo Venezuela | Nidra Servicios Anestésicos — Barinas",
  description: "Anestesiólogos en Venezuela — Nidra Servicios Anestésicos en Barinas. Valoración preoperatoria, sedación y analgesia postoperatoria. Formación ULA, atención humanizada 24/7.",
};

const puntos = [
  { title: "Formación universitaria de excelencia", desc: "Nuestras anestesiólogas son egresadas de la Universidad de Los Andes (ULA), con sólida formación académica y práctica en anestesia general, regional y sedación." },
  { title: "Estándares internacionales", desc: "Aplicamos protocolos basados en las guías de las principales sociedades de anestesiología a nivel mundial, adaptados al contexto clínico venezolano." },
  { title: "Atención fuera de quirófano", desc: "Especializadas en sedación para procedimientos diagnósticos e intervencionistas fuera de sala de operaciones, un área de alta demanda en Venezuela." },
  { title: "Compromiso con el paciente", desc: "Trato humanizado, comunicación directa y acompañamiento antes, durante y después de cada procedimiento. El paciente siempre en el centro de cada decisión." },
];

export default function AnestesiologoVenezuelaSEO() {
  return (
    <>
      <Navbar />

      <h1 className="sr-only">Anestesiólogo Venezuela</h1>

      {/* Hero */}
      <section className="relative pt-36 pb-20 bg-[#030C18] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 65% 45%, rgba(37,99,235,0.07) 0%, transparent 60%)" }} />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-12 text-center flex flex-col items-center gap-6">
          <span className="text-[10px] tracking-[0.3em] uppercase text-blue-400 font-medium">Barinas · Venezuela</span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-tight">
            Anestesiólogos en{" "}
            <em className="not-italic font-semibold" style={{ background: "linear-gradient(135deg, #93C5FD 0%, #60A5FA 50%, #3B82F6 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Venezuela
            </em>
          </h2>
          <p className="text-slate-400 text-base lg:text-lg leading-relaxed max-w-2xl">
            Nidra Servicios Anestésicos opera en Barinas, Venezuela, con un equipo de anestesiólogas comprometidas con los más altos estándares de calidad y el bienestar de cada paciente.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-2">
            <a
              href={`https://wa.me/584245567249?text=${encodeURIComponent("Hola, los encontré buscando anestesiólogos en Venezuela. Quisiera más información.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm px-8 py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-0.5"
            >
              Contactar al equipo
            </a>
            <a href="/nosotros" className="inline-flex items-center gap-2 border border-white/15 hover:border-blue-400/40 text-slate-300 hover:text-white text-sm px-8 py-4 rounded-full transition-all duration-200 hover:bg-white/5">
              Conocer a las doctoras
            </a>
          </div>
        </div>
      </section>

      {/* Puntos */}
      <section className="py-20 border-t border-white/5" style={{ background: "#050F1D" }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="grid sm:grid-cols-2 gap-5">
            {puntos.map(({ title, desc }) => (
              <div key={title} className="flex flex-col gap-3 p-6 rounded-2xl border border-white/10 hover:border-blue-500/25 transition-all duration-300" style={{ background: "rgba(255,255,255,0.02)" }}>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                  <h3 className="font-display text-white font-medium text-lg">{title}</h3>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-white/5 bg-[#030C18]">
        <div className="max-w-3xl mx-auto px-6 text-center flex flex-col items-center gap-5">
          <h2 className="font-display text-2xl lg:text-3xl font-light text-white">
            ¿Necesita un anestesiólogo en Venezuela?
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed max-w-lg">
            Estamos en Barinas y atendemos con disponibilidad 24/7. Escríbanos.
          </p>
          <a
            href={`https://wa.me/584245567249?text=${encodeURIComponent("Hola, los contacto desde Venezuela. Necesito información sobre sus servicios de anestesiología.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-green-600 hover:bg-green-500 text-white font-semibold text-sm px-8 py-4 rounded-full transition-all duration-300 hover:-translate-y-0.5"
          >
            Escribir por WhatsApp
          </a>
          <a href="/servicios" className="text-blue-400 hover:text-blue-300 text-sm transition-colors">
            Ver todos nuestros servicios →
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
