import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Manejo del Dolor en Barinas | Nidra Servicios Anestésicos",
  description: "Manejo del dolor en Barinas, Venezuela. Analgesia postoperatoria, bloqueos regionales y técnicas avanzadas de control del dolor. Anestesiólogos especializados disponibles 24/7.",
};

const puntos = [
  { title: "Evaluación del dolor", desc: "Valoramos el nivel, tipo y origen del dolor para diseñar la estrategia analgésica más adecuada para cada paciente y cada tipo de procedimiento." },
  { title: "Técnicas regionales", desc: "Bloqueos nerviosos periféricos ecoguiados y analgesia neuroaxial para un control localizado y efectivo sin necesidad de medicación sistémica excesiva." },
  { title: "Manejo postoperatorio integral", desc: "Acompañamos al paciente desde el fin del procedimiento hasta su recuperación, ajustando el tratamiento del dolor según su evolución clínica." },
  { title: "Atención en Barinas", desc: "Coordinamos el servicio en las principales clínicas, hospitales y centros médicos del estado Barinas. Disponibilidad para procedimientos programados y urgentes." },
];

export default function ManejoDolorbarinasSEO() {
  return (
    <>
      <Navbar />

      <h1 className="sr-only">Manejo del dolor en Barinas</h1>

      {/* Hero */}
      <section className="relative pt-36 pb-20 bg-[#030C18] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(37,99,235,0.07) 0%, transparent 60%)" }} />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-12 text-center flex flex-col items-center gap-6">
          <span className="text-[10px] tracking-[0.3em] uppercase text-blue-400 font-medium">Barinas, Venezuela</span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-tight">
            Manejo del Dolor{" "}
            <em className="not-italic font-semibold" style={{ background: "linear-gradient(135deg, #93C5FD 0%, #60A5FA 50%, #3B82F6 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              en Barinas
            </em>
          </h2>
          <p className="text-slate-400 text-base lg:text-lg leading-relaxed max-w-2xl">
            Nidra ofrece un enfoque especializado para el manejo del dolor perioperatorio en Barinas. Técnicas analgésicas avanzadas, plan individualizado y seguimiento continuo por anestesiólogos certificados.
          </p>
          <a
            href={`https://wa.me/584245567249?text=${encodeURIComponent("Hola, necesito información sobre manejo del dolor en Barinas.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm px-8 py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-0.5 mt-2"
          >
            Consultar disponibilidad
          </a>
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
            ¿Necesita manejo del dolor en Barinas?
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed max-w-lg">
            Contáctenos y le orientamos sobre la mejor opción para su caso.
          </p>
          <a
            href={`https://wa.me/584245567249?text=${encodeURIComponent("Hola, necesito información sobre manejo del dolor postoperatorio en Barinas.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-green-600 hover:bg-green-500 text-white font-semibold text-sm px-8 py-4 rounded-full transition-all duration-300 hover:-translate-y-0.5"
          >
            Escribir por WhatsApp
          </a>
          <a href="/servicios/analgesia" className="text-blue-400 hover:text-blue-300 text-sm transition-colors">
            Ver servicio de analgesia →
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
