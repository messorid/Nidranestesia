import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Bombas para el Dolor en Barinas | Nidra Servicios Anestésicos",
  description: "Bombas para el dolor postoperatorio en Barinas, Venezuela. Sistemas de infusión analgésica continua supervisados por anestesiólogos especializados. Recuperación más confortable.",
};

const puntos = [
  { title: "Control continuo del dolor", desc: "Las bombas de infusión permiten mantener niveles estables de analgesia, evitando los picos de dolor que ocurren con la medicación oral intermitente." },
  { title: "Recuperación más confortable", desc: "Un manejo adecuado del dolor postoperatorio favorece la movilización temprana, reduce el tiempo de hospitalización y mejora la experiencia del paciente." },
  { title: "Adaptadas a cada cirugía", desc: "El tipo de bomba y el plan de infusión se seleccionan según el procedimiento quirúrgico, la condición del paciente y la evaluación del anestesiólogo." },
  { title: "Supervisión especializada", desc: "Nuestro equipo realiza el seguimiento durante el período postoperatorio, ajustando parámetros según la respuesta y evolución de cada paciente." },
];

export default function BombasDolorbarinasSEO() {
  return (
    <>
      <Navbar />

      <h1 className="sr-only">Bombas para el dolor en Barinas</h1>

      {/* Hero */}
      <section className="relative pt-36 pb-20 bg-[#030C18] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 60% 40%, rgba(37,99,235,0.07) 0%, transparent 60%)" }} />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-12 text-center flex flex-col items-center gap-6">
          <span className="text-[10px] tracking-[0.3em] uppercase text-blue-400 font-medium">Barinas, Venezuela</span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-tight">
            Bombas para el{" "}
            <em className="not-italic font-semibold" style={{ background: "linear-gradient(135deg, #93C5FD 0%, #60A5FA 50%, #3B82F6 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Dolor en Barinas
            </em>
          </h2>
          <p className="text-slate-400 text-base lg:text-lg leading-relaxed max-w-2xl">
            En Nidra utilizamos sistemas de infusión continua para el manejo del dolor postoperatorio. Una recuperación más cómoda y segura, supervisada por anestesiólogos egresados de la Universidad de Los Andes.
          </p>
          <a
            href={`https://wa.me/584245567249?text=${encodeURIComponent("Hola, necesito información sobre bombas para el dolor postoperatorio en Barinas.")}`}
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
            ¿Su paciente necesita una bomba para el dolor en Barinas?
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed max-w-lg">
            Contáctenos directamente por WhatsApp para coordinar el servicio.
          </p>
          <a
            href={`https://wa.me/584245567249?text=${encodeURIComponent("Hola, necesito información sobre bombas para el dolor en Barinas.")}`}
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
