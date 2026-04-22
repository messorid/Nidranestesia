import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Sedación para Procedimientos Fuera de Quirófano | Nidra — Barinas",
  description:
    "Sedación controlada y segura para colonoscopias, endoscopias, cateterismos y estudios diagnósticos en Barinas, Venezuela. Monitoreo continuo garantizado.",
};

const types = [
  {
    title: "Sedación Mínima / Ansiolisis",
    desc: "El paciente permanece despierto y puede responder a instrucciones. Reduce la ansiedad manteniendo reflejos protectores y función respiratoria intactos.",
    icon: "①",
  },
  {
    title: "Sedación Moderada (Consciente)",
    desc: "Estado de depresión reducida de la consciencia. El paciente responde a estímulos verbales y táctiles. Es el nivel más frecuente para endoscopias y procedimientos diagnósticos.",
    icon: "②",
  },
  {
    title: "Sedación Profunda",
    desc: "El paciente no se despierta fácilmente pero responde a estímulos dolorosos. Se utiliza para procedimientos más invasivos o en pacientes con alta ansiedad.",
    icon: "③",
  },
];

const procedures = [
  "Colonoscopias y rectosigmoidoscopias",
  "Endoscopias digestivas altas (EGD)",
  "Broncoscopias",
  "Cateterismo cardíaco",
  "Cardioversión eléctrica",
  "Biopsias guiadas por imagen",
  "Estudios de resonancia magnética (pacientes con claustrofobia)",
  "Procedimientos de radiología intervencionista",
  "Punciones y drenajes diagnósticos",
  "Procedimientos odontológicos complejos",
];

const steps = [
  {
    n: "01",
    title: "Evaluación previa",
    desc: "Revisamos su historia clínica, condiciones médicas y medicamentos para determinar el tipo de sedación más adecuado.",
  },
  {
    n: "02",
    title: "Preparación y monitoreo",
    desc: "Instalamos el monitoreo completo: oximetría, frecuencia cardíaca, presión arterial y acceso venoso periférico.",
  },
  {
    n: "03",
    title: "Administración de sedación",
    desc: "Administramos los medicamentos de forma gradual y controlada, ajustando la dosis según su respuesta individual.",
  },
  {
    n: "04",
    title: "Vigilancia durante el procedimiento",
    desc: "Mantenemos monitoreo continuo durante todo el procedimiento, listos para ajustar la sedación en cualquier momento.",
  },
  {
    n: "05",
    title: "Sala de recuperación",
    desc: "Lo acompañamos hasta que recupere el estado de alerta completo y le entregamos indicaciones para las siguientes horas.",
  },
];

const faqs = [
  {
    q: "¿Puedo comer antes del procedimiento con sedación?",
    a: "No. Es obligatorio un ayuno de al menos 6 horas para sólidos y 2 horas para líquidos claros. El ayuno es fundamental para prevenir complicaciones graves durante la sedación. Recibirá instrucciones específicas según el tipo de procedimiento.",
  },
  {
    q: "¿Necesito ir acompañado?",
    a: "Sí, es imprescindible. Los efectos de los medicamentos utilizados en la sedación pueden persistir por varias horas. Debe ir con un adulto responsable que lo acompañe a casa y permanezca con usted durante las primeras horas posteriores al procedimiento.",
  },
  {
    q: "¿Cuánto tiempo dura la recuperación?",
    a: "Generalmente entre 30 y 60 minutos en sala de recuperación. Sin embargo, se recomienda no conducir ni tomar decisiones importantes durante las siguientes 12 a 24 horas, ya que los medicamentos pueden afectar sutilmente la coordinación y el juicio.",
  },
  {
    q: "¿Voy a sentir dolor durante el procedimiento?",
    a: "No. El objetivo de la sedación es que usted esté completamente cómodo y sin dolor. La combinación de sedantes y analgésicos garantiza que no experimente molestias durante el procedimiento.",
  },
  {
    q: "¿Es segura la sedación fuera del quirófano?",
    a: "Sí, siempre que sea administrada por un anestesiólogo certificado con el equipo de monitoreo y reanimación adecuado. En Nidra contamos con todos los recursos necesarios para garantizar su seguridad en todo momento.",
  },
];

export default function SedacionPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative h-[65vh] min-h-[520px] flex items-end overflow-hidden">
        <Image src="/sedacion.png" alt="Sedación para procedimientos fuera de quirófano — Nidra" fill className="object-cover object-center" priority />
        <div className="absolute inset-0 bg-[#030C18]/55" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #030C18 0%, rgba(3,12,24,0.3) 60%, transparent 100%)" }} />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 pb-16 w-full">
          <div className="flex items-center gap-2 mb-5 flex-wrap">
            <a href="/" className="text-[11px] tracking-widest uppercase text-slate-400 hover:text-white transition-colors">Inicio</a>
            <span className="text-slate-600">/</span>
            <a href="/servicios" className="text-[11px] tracking-widest uppercase text-slate-400 hover:text-white transition-colors">Servicios</a>
            <span className="text-slate-600">/</span>
            <span className="text-[11px] tracking-widest uppercase text-blue-400">Sedación</span>
          </div>
          <div className="flex items-start gap-5">
            <span className="font-display text-6xl font-light text-blue-400/30 leading-none hidden sm:block">02</span>
            <div className="flex flex-col gap-3">
              <h1 className="font-display text-4xl lg:text-6xl font-medium text-white leading-tight">
                Sedación para Procedimientos<br />
                <span className="font-light italic" style={{ background: "linear-gradient(135deg, #93C5FD 0%, #60A5FA 50%, #3B82F6 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  Fuera de Quirófano
                </span>
              </h1>
              <p className="text-slate-300 text-base lg:text-lg max-w-xl leading-relaxed">
                Confort total durante estudios y procedimientos diagnósticos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro + procedures */}
      <section className="bg-[#030C18] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div className="flex flex-col gap-6">
              <span className="text-[10px] tracking-[0.3em] uppercase text-blue-400 font-medium">¿Qué es?</span>
              <h2 className="font-display text-3xl lg:text-4xl font-light text-white leading-snug">
                Procedimientos sin estrés,<br />
                <span className="font-semibold text-blue-300">con total seguridad</span>
              </h2>
              <p className="text-slate-400 text-sm lg:text-base leading-relaxed">
                Cada vez más procedimientos diagnósticos y terapéuticos se realizan fuera del
                quirófano tradicional. Sin el contexto de un bloque quirúrgico, la presencia
                de un anestesiólogo especializado es aún más importante para garantizar la
                seguridad del paciente.
              </p>
              <p className="text-slate-400 text-sm lg:text-base leading-relaxed">
                En Nidra administramos sedación de manera controlada y precisa, adaptando
                el nivel de profundidad a las necesidades de cada procedimiento y paciente.
                Nuestro monitoreo continuo permite detectar y responder a cualquier cambio
                en tiempo real.
              </p>
              <a
                href={`https://wa.me/584245567249?text=${encodeURIComponent("Hola, los contacto desde la página web nidranestesia.com. Necesito información sobre sedación para un procedimiento.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm tracking-wide px-7 py-3.5 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-0.5 w-fit mt-2"
              >
                <WhatsAppIcon />
                Consultar disponibilidad
              </a>
            </div>

            {/* Procedures list */}
            <div className="flex flex-col gap-4">
              <span className="text-[10px] tracking-[0.3em] uppercase text-blue-400 font-medium">Procedimientos que cubrimos</span>
              <div className="grid sm:grid-cols-2 gap-2">
                {procedures.map((p, i) => (
                  <div key={i} className="flex items-center gap-3 p-3.5 rounded-xl border border-white/5 hover:border-blue-500/20 transition-colors" style={{ background: "rgba(255,255,255,0.02)" }}>
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                    <span className="text-slate-400 text-sm">{p}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of sedation */}
      <section className="py-20 lg:py-24 border-t border-white/5" style={{ background: "#050F1D" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col items-center text-center gap-4 mb-12">
            <span className="text-[10px] tracking-[0.3em] uppercase text-blue-400 font-medium">Tipos</span>
            <h2 className="font-display text-3xl lg:text-4xl font-light text-white">
              Niveles de <span className="font-semibold italic text-blue-300">Sedación</span>
            </h2>
            <p className="text-slate-500 text-sm max-w-lg">
              Adaptamos el nivel de profundidad anestésica al tipo de procedimiento
              y a las características individuales de cada paciente.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {types.map(({ title, desc, icon }) => (
              <div key={title} className="flex flex-col gap-4 p-7 rounded-2xl border border-white/10 hover:border-blue-500/25 transition-colors" style={{ background: "rgba(255,255,255,0.02)" }}>
                <span className="font-display text-3xl text-blue-400/30">{icon}</span>
                <h3 className="font-display text-white font-medium text-xl">{title}</h3>
                <div className="w-8 h-px bg-blue-500/40" />
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 lg:py-28 border-t border-white/5 bg-[#030C18]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col items-center text-center gap-4 mb-14">
            <span className="text-[10px] tracking-[0.3em] uppercase text-blue-400 font-medium">Proceso</span>
            <h2 className="font-display text-3xl lg:text-4xl font-light text-white">
              ¿Cómo <span className="font-semibold italic text-blue-300">funciona?</span>
            </h2>
          </div>
          <div className="flex flex-col gap-4 max-w-3xl mx-auto">
            {steps.map(({ n, title, desc }, i) => (
              <div key={n} className="flex items-start gap-5">
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-blue-500/15 border border-blue-500/25 flex items-center justify-center">
                    <span className="font-display text-blue-400 text-sm font-medium">{n}</span>
                  </div>
                  {i < steps.length - 1 && <div className="w-px h-8 bg-blue-500/15 mt-1" />}
                </div>
                <div className="flex flex-col gap-1 pb-4">
                  <h3 className="font-display text-white font-medium text-lg">{title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 border-t border-white/5" style={{ background: "#050F1D" }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col items-center text-center gap-4 mb-12">
            <span className="text-[10px] tracking-[0.3em] uppercase text-blue-400 font-medium">Preguntas frecuentes</span>
            <h2 className="font-display text-3xl lg:text-4xl font-light text-white">
              Dudas <span className="font-semibold italic text-blue-300">frecuentes</span>
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            {faqs.map(({ q, a }) => (
              <div key={q} className="flex flex-col gap-3 p-6 rounded-2xl border border-white/10 hover:border-blue-500/20 transition-colors" style={{ background: "rgba(255,255,255,0.02)" }}>
                <h3 className="font-display text-white font-medium text-lg leading-snug">{q}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
      <Footer />
    </>
  );
}

function CtaBanner() {
  return (
    <section className="py-20 border-t border-white/5" style={{ background: "linear-gradient(135deg, #071424 0%, #0B1E36 50%, #071424 100%)" }}>
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center flex flex-col items-center gap-6">
        <h2 className="font-display text-3xl lg:text-4xl font-light text-white">
          ¿Tiene un procedimiento <span className="font-semibold italic text-blue-300">programado?</span>
        </h2>
        <p className="text-slate-400 text-sm max-w-md leading-relaxed">
          Contáctenos para coordinar la sedación. Le indicamos qué necesita preparar y resolvemos sus dudas.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={`https://wa.me/584245567249?text=${encodeURIComponent("Hola, los contacto desde la página web nidranestesia.com. Necesito sedación para un procedimiento. Quisiera información.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm px-8 py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-0.5"
          >
            <WhatsAppIcon />
            Contactar por WhatsApp
          </a>
          <a href="/servicios" className="inline-flex items-center gap-2 border border-white/15 hover:border-blue-400/40 text-slate-300 hover:text-white text-sm px-8 py-4 rounded-full transition-all duration-200 hover:bg-white/5">
            Ver todos los servicios
          </a>
        </div>
      </div>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
