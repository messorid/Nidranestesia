import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Valoración Anestésica Preoperatoria | Nidra — Barinas",
  description:
    "Evaluación integral antes de su cirugía. Identificamos riesgos, revisamos antecedentes y diseñamos su plan anestésico personalizado en Barinas, Venezuela.",
};

const steps = [
  {
    n: "01",
    title: "Contacto y agendamiento",
    desc: "Comuníquese por WhatsApp o teléfono para programar su cita de valoración con anticipación al procedimiento.",
  },
  {
    n: "02",
    title: "Consulta presencial",
    desc: "Revisamos su historia clínica, antecedentes médicos, medicamentos actuales, alergias y resultados de exámenes previos.",
  },
  {
    n: "03",
    title: "Evaluación y clasificación",
    desc: "Determinamos su clasificación de riesgo anestésico (ASA) y solicitamos exámenes adicionales si es necesario.",
  },
  {
    n: "04",
    title: "Plan anestésico e instrucciones",
    desc: "Diseñamos el plan individualizado y le entregamos instrucciones claras para el día del procedimiento.",
  },
];

const includes = [
  "Revisión detallada de historia clínica y antecedentes médicos",
  "Evaluación del riesgo anestésico (clasificación ASA I–VI)",
  "Análisis e interpretación de exámenes preoperatorios",
  "Identificación de alergias y reacciones previas a medicamentos",
  "Evaluación de vía aérea y predicción de dificultad",
  "Optimización preoperatoria de enfermedades crónicas (HTA, diabetes, etc.)",
  "Diseño del plan anestésico personalizado",
  "Instrucciones de ayuno y medicamentos para el día del procedimiento",
  "Espacio para resolver todas sus dudas y las de su familia",
];

const faqs = [
  {
    q: "¿Con cuánta anticipación debo realizar la valoración?",
    a: "Lo ideal es realizarla entre 48 y 72 horas antes del procedimiento. En casos de cirugías electivas complejas, puede ser necesario hacerla con más tiempo para optimizar condiciones médicas previas.",
  },
  {
    q: "¿Qué documentos debo llevar a la consulta?",
    a: "Exámenes de laboratorio recientes (hematología, química sanguínea), electrocardiograma si lo tiene, informes de estudios previos, lista de medicamentos que toma actualmente y cualquier informe médico relevante.",
  },
  {
    q: "¿Cuánto dura la consulta de valoración?",
    a: "La consulta dura entre 20 y 40 minutos dependiendo de la complejidad del caso y los antecedentes del paciente. Es un tiempo dedicado completamente a usted.",
  },
  {
    q: "¿La valoración es obligatoria para toda cirugía?",
    a: "Sí. La valoración anestésica preoperatoria es un requisito médico y de seguridad fundamental para cualquier procedimiento que requiera anestesia o sedación. Nos permite conocerlo y planificar el manejo más seguro.",
  },
  {
    q: "¿Puedo llevar a un familiar a la consulta?",
    a: "Por supuesto y lo recomendamos. El familiar puede aportar información importante sobre los antecedentes del paciente y también recibirá las instrucciones para el día del procedimiento.",
  },
];

export default function ValoracionPage() {
  return (
    <>
      <Navbar />

      {/* Hero con imagen de fondo */}
      <section className="relative h-[65vh] min-h-[520px] flex items-end overflow-hidden">
        <Image
          src="/valoracion2.png"
          alt="Valoración anestésica preoperatoria Nidra"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-[#030C18]/55" />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, #030C18 0%, rgba(3,12,24,0.3) 60%, transparent 100%)" }}
        />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 pb-16 w-full">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-5 flex-wrap">
            <a href="/" className="text-[11px] tracking-widest uppercase text-slate-400 hover:text-white transition-colors">Inicio</a>
            <span className="text-slate-600">/</span>
            <a href="/servicios" className="text-[11px] tracking-widest uppercase text-slate-400 hover:text-white transition-colors">Servicios</a>
            <span className="text-slate-600">/</span>
            <span className="text-[11px] tracking-widest uppercase text-blue-400">Valoración</span>
          </div>

          <div className="flex items-start gap-5">
            <span className="font-display text-6xl font-light text-blue-400/30 leading-none hidden sm:block">01</span>
            <div className="flex flex-col gap-3">
              <h1 className="font-display text-4xl lg:text-6xl font-medium text-white leading-tight">
                Valoración Anestésica<br />
                <span
                  className="font-light italic"
                  style={{
                    background: "linear-gradient(135deg, #93C5FD 0%, #60A5FA 50%, #3B82F6 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Preoperatoria
                </span>
              </h1>
              <p className="text-slate-300 text-base lg:text-lg max-w-xl leading-relaxed">
                La evaluación que garantiza su seguridad antes de la cirugía.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro + includes */}
      <section className="bg-[#030C18] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left */}
            <div className="flex flex-col gap-6">
              <span className="text-[10px] tracking-[0.3em] uppercase text-blue-400 font-medium">¿Qué es?</span>
              <h2 className="font-display text-3xl lg:text-4xl font-light text-white leading-snug">
                Una consulta dedicada <br />
                <span className="font-semibold text-blue-300">a su seguridad</span>
              </h2>
              <p className="text-slate-400 text-sm lg:text-base leading-relaxed">
                La valoración anestésica preoperatoria es la consulta en la que el anestesiólogo
                evalúa integralmente al paciente antes de cualquier procedimiento quirúrgico o
                invasivo. Es el punto de partida para un plan anestésico seguro y personalizado.
              </p>
              <p className="text-slate-400 text-sm lg:text-base leading-relaxed">
                Durante esta evaluación conocemos su historial médico, condiciones crónicas,
                medicamentos actuales y realizamos una evaluación física enfocada en la vía aérea
                y el sistema cardiovascular. Con esta información, clasificamos el riesgo anestésico
                y definimos la estrategia más adecuada para usted.
              </p>
              <a
                href={`https://wa.me/584245567249?text=${encodeURIComponent("Hola, los contacto desde la página web nidranestesia.com. Deseo agendar una valoración anestésica preoperatoria.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm tracking-wide px-7 py-3.5 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-0.5 w-fit mt-2"
              >
                <WhatsAppIcon />
                Agendar valoración
              </a>
            </div>

            {/* Right: includes */}
            <div className="flex flex-col gap-4">
              <span className="text-[10px] tracking-[0.3em] uppercase text-blue-400 font-medium">¿Qué incluye?</span>
              <div className="flex flex-col gap-3">
                {includes.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 rounded-xl border border-white/5 hover:border-blue-500/20 transition-colors"
                    style={{ background: "rgba(255,255,255,0.02)" }}
                  >
                    <div className="w-5 h-5 rounded-full bg-blue-500/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 lg:py-24 border-t border-white/5" style={{ background: "#050F1D" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col items-center text-center gap-4 mb-14">
            <span className="text-[10px] tracking-[0.3em] uppercase text-blue-400 font-medium">Proceso</span>
            <h2 className="font-display text-3xl lg:text-4xl font-light text-white">
              ¿Cómo <span className="font-semibold italic text-blue-300">funciona?</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map(({ n, title, desc }, i) => (
              <div key={n} className="relative flex flex-col gap-4 p-6 rounded-2xl border border-white/10 hover:border-blue-500/25 transition-colors" style={{ background: "rgba(255,255,255,0.02)" }}>
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-3 w-6 h-px bg-blue-500/20 z-10" />
                )}
                <span className="font-display text-4xl font-light text-blue-400/25">{n}</span>
                <h3 className="font-display text-white font-medium text-lg">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 border-t border-white/5 bg-[#030C18]">
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

      <CtaBanner service="una valoración anestésica preoperatoria" />
      <Footer />
    </>
  );
}

function CtaBanner({ service }) {
  return (
    <section className="py-20 border-t border-white/5" style={{ background: "linear-gradient(135deg, #071424 0%, #0B1E36 50%, #071424 100%)" }}>
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center flex flex-col items-center gap-6">
        <h2 className="font-display text-3xl lg:text-4xl font-light text-white">
          ¿Necesita agendar <span className="font-semibold italic text-blue-300">{service}?</span>
        </h2>
        <p className="text-slate-400 text-sm max-w-md leading-relaxed">
          Contáctenos por WhatsApp y le respondemos a la brevedad para coordinar su cita.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={`https://wa.me/584245567249?text=${encodeURIComponent(`Hola, los contacto desde la página web nidranestesia.com. Necesito ${service}`)}`}
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
