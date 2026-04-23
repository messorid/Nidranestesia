import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Analgesia Postoperatoria | Nidra — Barinas",
  description:
    "Control efectivo del dolor después de la cirugía mediante bloqueos nerviosos, analgesia epidural e infusiones continuas. Recuperación cómoda en Barinas, Venezuela.",
};

const techniques = [
  {
    title: "Bloqueos Nerviosos Periféricos",
    desc: "Administración de anestésico local alrededor de nervios específicos para bloquear el dolor en una región determinada del cuerpo. Altamente efectivos para cirugías de extremidades, hombro, rodilla y cadera.",
    tags: ["Bloqueo de plexo braquial", "Bloqueo femoral", "Bloqueo ciático", "Bloqueo de tobillo"],
  },
  {
    title: "Analgesia Epidural",
    desc: "Infusión continua de anestésico local y/u opioides a través de un catéter en el espacio epidural. Ofrece analgesia de larga duración para cirugías abdominales, torácicas y de miembros inferiores.",
    tags: ["Cirugía abdominal", "Cirugía torácica", "Parto y cesárea", "Infusión continua"],
  },
  {
    title: "Analgesia Intravenosa (PCA)",
    desc: "Sistema controlado por el paciente que permite administrarse dosis de analgésico intravenoso dentro de límites seguros predefinidos. Otorga autonomía y control al paciente en su manejo del dolor.",
    tags: ["Morphine PCA", "Fentanilo", "Tramadol IV", "Control del paciente"],
  },
  {
    title: "Analgesia Multimodal",
    desc: "Combinación de diferentes tipos de analgésicos que actúan en distintos puntos del proceso del dolor, logrando mayor eficacia con un plan individualizado para cada paciente.",
    tags: ["AINEs", "Paracetamol IV", "Gabapentinoides", "Plan individualizado"],
  },
];

const benefits = [
  "Reducción significativa del dolor postoperatorio",
  "Recuperación más rápida y confortable",
  "Control efectivo del dolor con plan adaptado a cada caso",
  "Movilización más temprana tras la cirugía",
  "Menor riesgo de dolor crónico postoperatorio",
  "Mejor calidad del sueño en el postoperatorio",
  "Alta hospitalaria más temprana",
  "Mayor satisfacción del paciente con su experiencia quirúrgica",
];

const steps = [
  {
    n: "01",
    title: "Planificación preoperatoria",
    desc: "Evaluamos el tipo de cirugía, la extensión del dolor esperado y sus características como paciente para diseñar el plan analgésico óptimo.",
  },
  {
    n: "02",
    title: "Técnica pre o intraoperatoria",
    desc: "Aplicamos bloqueos nerviosos antes o durante la cirugía para que el efecto analgésico esté presente desde el momento del despertar.",
  },
  {
    n: "03",
    title: "Monitoreo postoperatorio",
    desc: "Evaluamos periódicamente su nivel de dolor usando escalas validadas y ajustamos la analgesia según su respuesta.",
  },
  {
    n: "04",
    title: "Seguimiento y ajuste",
    desc: "Realizamos seguimiento para asegurar una transición exitosa hacia analgesia oral y orientamos sobre el manejo del dolor en casa.",
  },
];

const faqs = [
  {
    q: "¿Cuándo se aplica la analgesia postoperatoria?",
    a: "Los bloqueos nerviosos generalmente se aplican antes o durante la cirugía, antes de que el paciente despierte, para que el alivio del dolor esté presente desde el primer momento. Otras técnicas como la analgesia epidural o intravenosa se inician o ajustan en la sala de recuperación.",
  },
  {
    q: "¿Cuál es la diferencia entre analgesia y anestesia?",
    a: "La anestesia produce pérdida de consciencia y bloqueo completo de todas las sensaciones para permitir la cirugía. La analgesia postoperatoria tiene como objetivo específico el control del dolor después del procedimiento, sin afectar el nivel de consciencia del paciente.",
  },
  {
    q: "¿Voy a sentir dolor igual después de la cirugía?",
    a: "Con un plan analgésico adecuado, el objetivo es que el dolor sea mínimo y manejable. No podemos prometer ausencia total de dolor, ya que es una respuesta normal del organismo, pero sí podemos garantizar que se mantendrá en niveles tolerables y no interferirá significativamente con su recuperación.",
  },
  {
    q: "¿Los bloqueos nerviosos tienen efectos secundarios?",
    a: "Como cualquier procedimiento médico, los bloqueos nerviosos tienen riesgos potenciales, aunque son poco frecuentes. Los más comunes son debilidad temporal en la extremidad afectada y sensación de entumecimiento que desaparece a medida que el efecto del anestésico cede. Se discuten los riesgos específicos durante la valoración.",
  },
  {
    q: "¿Cuánto tiempo dura el efecto de un bloqueo nervioso?",
    a: "Depende del anestésico local utilizado. Un bloqueo con bupivacaína puede durar entre 12 y 20 horas. Con catéter continuo, el efecto puede mantenerse por días. Esto se planifica según la duración del dolor esperado para cada tipo de cirugía.",
  },
];

export default function AnalgesiaPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative h-[65vh] min-h-[520px] flex items-end overflow-hidden">
        <Image src="/analgesia.png" alt="Analgesia postoperatoria — Nidra Barinas" fill className="object-cover object-center" priority />
        <div className="absolute inset-0 bg-[#030C18]/60" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #030C18 0%, rgba(3,12,24,0.3) 60%, transparent 100%)" }} />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 pb-16 w-full">
          <div className="flex items-center gap-2 mb-5 flex-wrap">
            <a href="/" className="text-[11px] tracking-widest uppercase text-slate-400 hover:text-white transition-colors">Inicio</a>
            <span className="text-slate-600">/</span>
            <a href="/servicios" className="text-[11px] tracking-widest uppercase text-slate-400 hover:text-white transition-colors">Servicios</a>
            <span className="text-slate-600">/</span>
            <span className="text-[11px] tracking-widest uppercase text-blue-400">Analgesia</span>
          </div>
          <div className="flex items-start gap-5">
            <span className="font-display text-6xl font-light text-blue-400/30 leading-none hidden sm:block">03</span>
            <div className="flex flex-col gap-3">
              <h1 className="font-display text-4xl lg:text-6xl font-medium text-white leading-tight">
                Analgesia<br />
                <span className="font-light italic" style={{ background: "linear-gradient(135deg, #93C5FD 0%, #60A5FA 50%, #3B82F6 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  Postoperatoria
                </span>
              </h1>
              <p className="text-slate-300 text-base lg:text-lg max-w-xl leading-relaxed">
                Recuperación sin dolor. Control preciso del manejo analgésico tras su cirugía.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro + benefits */}
      <section className="bg-[#030C18] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div className="flex flex-col gap-6">
              <span className="text-[10px] tracking-[0.3em] uppercase text-blue-400 font-medium">¿Por qué es importante?</span>
              <h2 className="font-display text-3xl lg:text-4xl font-light text-white leading-snug">
                El dolor postoperatorio<br />
                <span className="font-semibold text-blue-300">tiene solución</span>
              </h2>
              <p className="text-slate-400 text-sm lg:text-base leading-relaxed">
                El control adecuado del dolor después de una cirugía no es solo una cuestión
                de confort. Un dolor mal manejado puede retrasar la recuperación, aumentar el
                riesgo de complicaciones pulmonares, favorecer la inmovilidad y en algunos
                casos derivar en dolor crónico.
              </p>
              <p className="text-slate-400 text-sm lg:text-base leading-relaxed">
                En Nidra aplicamos estrategias analgésicas multimodales, combinando técnicas
                regionales, medicamentos sistémicos y protocolos de recuperación acelerada
                para que su postoperatorio sea lo más cómodo y breve posible.
              </p>
              <a
                href={`https://wa.me/584245567249?text=${encodeURIComponent("Hola, los contacto desde la página web nidranestesia.com. Necesito información sobre analgesia postoperatoria.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm tracking-wide px-7 py-3.5 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-0.5 w-fit mt-2"
              >
                <WhatsAppIcon />
                Consultar sobre analgesia
              </a>
            </div>

            {/* Benefits */}
            <div className="flex flex-col gap-4">
              <span className="text-[10px] tracking-[0.3em] uppercase text-blue-400 font-medium">Beneficios del manejo analgésico</span>
              <div className="flex flex-col gap-2.5">
                {benefits.map((b, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-white/5 hover:border-blue-500/20 transition-colors" style={{ background: "rgba(255,255,255,0.02)" }}>
                    <div className="w-5 h-5 rounded-full bg-blue-500/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">{b}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Techniques */}
      <section className="py-20 lg:py-28 border-t border-white/5" style={{ background: "#050F1D" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col items-center text-center gap-4 mb-14">
            <span className="text-[10px] tracking-[0.3em] uppercase text-blue-400 font-medium">Técnicas</span>
            <h2 className="font-display text-3xl lg:text-4xl font-light text-white">
              Métodos de <span className="font-semibold italic text-blue-300">Analgesia</span>
            </h2>
            <p className="text-slate-500 text-sm max-w-lg">
              Seleccionamos y combinamos las técnicas más adecuadas según el tipo de
              cirugía y las características de cada paciente.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {techniques.map(({ title, desc, tags }) => (
              <div key={title} className="flex flex-col gap-4 p-7 rounded-2xl border border-white/10 hover:border-blue-500/25 transition-all duration-300 hover:-translate-y-1" style={{ background: "rgba(255,255,255,0.02)" }}>
                <h3 className="font-display text-white font-medium text-xl">{title}</h3>
                <div className="w-8 h-px bg-blue-500/40" />
                <p className="text-slate-400 text-sm leading-relaxed flex-1">{desc}</p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {tags.map((t) => (
                    <span key={t} className="text-[10px] tracking-wide uppercase text-blue-400/70 bg-blue-500/10 border border-blue-500/15 px-3 py-1 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
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
              ¿Cómo <span className="font-semibold italic text-blue-300">lo realizamos?</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map(({ n, title, desc }, i) => (
              <div key={n} className="relative flex flex-col gap-4 p-6 rounded-2xl border border-white/10 hover:border-blue-500/25 transition-colors" style={{ background: "rgba(255,255,255,0.02)" }}>
                {i < steps.length - 1 && <div className="hidden lg:block absolute top-8 -right-3 w-6 h-px bg-blue-500/20 z-10" />}
                <span className="font-display text-4xl font-light text-blue-400/25">{n}</span>
                <h3 className="font-display text-white font-medium text-lg">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
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
          ¿Tiene una cirugía <span className="font-semibold italic text-blue-300">programada?</span>
        </h2>
        <p className="text-slate-400 text-sm max-w-md leading-relaxed">
          Hable con nosotros para planificar su analgesia postoperatoria y asegurar
          una recuperación cómoda desde el primer momento.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={`https://wa.me/584245567249?text=${encodeURIComponent("Hola, los contacto desde la página web nidranestesia.com. Tengo una cirugía programada y necesito información sobre analgesia postoperatoria.")}`}
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
