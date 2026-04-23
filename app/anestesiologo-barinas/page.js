import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Anestesiólogo en Barinas | Nidra Servicios Anestésicos",
  description: "Anestesiólogos en Barinas, Venezuela. Dra. Julianne Vivas y Dra. Yermaly Villamizar, egresadas de la Universidad de Los Andes. Valoración preoperatoria, sedación y analgesia postoperatoria.",
};

const servicios = [
  { title: "Valoración Preoperatoria", desc: "Evaluación completa del estado de salud antes de la cirugía para determinar el riesgo anestésico y planificar la estrategia más segura.", href: "/servicios/valoracion" },
  { title: "Sedación para Procedimientos", desc: "Sedación profesional para endoscopias, colonoscopias, biopsias y otros procedimientos fuera de quirófano en Barinas.", href: "/servicios/sedacion" },
  { title: "Analgesia Postoperatoria", desc: "Control efectivo del dolor tras la cirugía mediante técnicas avanzadas y plan individualizado para cada paciente.", href: "/servicios/analgesia" },
];

export default function AnestesiologoBarinasSEO() {
  return (
    <>
      <Navbar />

      <h1 className="sr-only">Anestesiólogo en Barinas</h1>

      {/* Hero */}
      <section className="relative pt-36 pb-20 bg-[#030C18] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 35% 50%, rgba(37,99,235,0.07) 0%, transparent 60%)" }} />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-12 text-center flex flex-col items-center gap-6">
          <span className="text-[10px] tracking-[0.3em] uppercase text-blue-400 font-medium">Barinas, Venezuela</span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-tight">
            Anestesiólogos{" "}
            <em className="not-italic font-semibold" style={{ background: "linear-gradient(135deg, #93C5FD 0%, #60A5FA 50%, #3B82F6 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              en Barinas
            </em>
          </h2>
          <p className="text-slate-400 text-base lg:text-lg leading-relaxed max-w-2xl">
            Nidra es el equipo de anestesiología de referencia en Barinas. La Dra. Julianne Vivas y la Dra. Yermaly Villamizar, ambas egresadas de la Universidad de Los Andes, brindan atención anestésica de alto nivel con trato humanizado.
          </p>
          <a
            href={`https://wa.me/584245567249?text=${encodeURIComponent("Hola, necesito un anestesiólogo en Barinas. Quisiera información sobre sus servicios.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm px-8 py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-0.5 mt-2"
          >
            Contactar al equipo
          </a>
        </div>
      </section>

      {/* Servicios */}
      <section className="py-20 border-t border-white/5" style={{ background: "#050F1D" }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col items-center text-center gap-3 mb-12">
            <span className="text-[10px] tracking-[0.3em] uppercase text-blue-400 font-medium">Nuestros servicios</span>
            <h2 className="font-display text-3xl lg:text-4xl font-light text-white">
              ¿En qué podemos <span className="font-semibold text-blue-300">ayudarle?</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {servicios.map(({ title, desc, href }) => (
              <a key={title} href={href} className="flex flex-col gap-3 p-6 rounded-2xl border border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1 group" style={{ background: "rgba(255,255,255,0.02)" }}>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                  <h3 className="font-display text-white font-medium text-lg group-hover:text-blue-300 transition-colors">{title}</h3>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
                <span className="text-blue-400 text-xs mt-auto">Ver más →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-white/5 bg-[#030C18]">
        <div className="max-w-3xl mx-auto px-6 text-center flex flex-col items-center gap-5">
          <h2 className="font-display text-2xl lg:text-3xl font-light text-white">
            ¿Busca un anestesiólogo en Barinas?
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed max-w-lg">
            Contáctenos directamente. Respondemos con rapidez y coordinamos su atención.
          </p>
          <a
            href={`https://wa.me/584245567249?text=${encodeURIComponent("Hola, estoy buscando un anestesiólogo en Barinas. ¿Pueden ayudarme?")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-green-600 hover:bg-green-500 text-white font-semibold text-sm px-8 py-4 rounded-full transition-all duration-300 hover:-translate-y-0.5"
          >
            Escribir por WhatsApp
          </a>
          <a href="/nosotros" className="text-blue-400 hover:text-blue-300 text-sm transition-colors">
            Conocer al equipo →
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
