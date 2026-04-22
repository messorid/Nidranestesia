import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";

export const metadata = {
  title: "Nosotros | Nidra Servicios Anestésicos — Barinas",
  description:
    "Conoce al equipo de Nidra: anestesiólogos certificados comprometidos con la seguridad y el bienestar del paciente en Barinas, Venezuela.",
};

const values = [
  { title: "Seguridad", desc: "Cada decisión clínica se toma priorizando la integridad y el bienestar del paciente, siguiendo protocolos internacionales y manteniendo monitoreo continuo." },
  { title: "Precisión", desc: "Aplicamos técnicas anestésicas avanzadas con la exactitud que cada procedimiento requiere, adaptando el plan a las características individuales de cada paciente." },
  { title: "Confort", desc: "Entendemos que la ansiedad preoperatoria es real. Trabajamos para que cada paciente se sienta tranquilo, informado y en buenas manos desde el primer contacto." },
  { title: "Ética", desc: "Ejercemos la anestesiología con total transparencia, honestidad y respeto, tanto hacia los pacientes como hacia el equipo médico con el que colaboramos." },
  { title: "Compromiso", desc: "No terminamos nuestro trabajo cuando el procedimiento acaba. Acompañamos al paciente en su recuperación y estamos disponibles para responder cualquier duda." },
  { title: "Excelencia", desc: "Nos actualizamos constantemente en las últimas técnicas y guías clínicas para ofrecer siempre el más alto estándar de cuidado anestésico en Barinas." },
];

const reasons = [
  { icon: "🎓", title: "Certificación especializada", desc: "Anestesiólogos certificados por la Sociedad Venezolana de Anestesiología con formación continua en técnicas actuales." },
  { icon: "📋", title: "Protocolos internacionales", desc: "Aplicamos guías y protocolos basados en las sociedades de anestesiología más reconocidas a nivel mundial." },
  { icon: "🤝", title: "Trabajo en equipo", desc: "Coordinación estrecha con el cirujano, enfermería y todo el equipo de salud para garantizar continuidad en el cuidado." },
  { icon: "📱", title: "Comunicación directa", desc: "Acceso directo al anestesiólogo antes, durante y después del procedimiento. Sin intermediarios ni demoras." },
  { icon: "🕐", title: "Disponibilidad 24/7", desc: "Atención para procedimientos programados y urgencias las 24 horas, los 7 días de la semana." },
  { icon: "🏥", title: "Cobertura en Barinas", desc: "Presencia en las principales clínicas, hospitales y centros médicos del estado Barinas." },
];

export default function NosotrosPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative h-[65vh] min-h-[520px] flex items-end overflow-hidden">
        <Image src="/nidra.png" alt="Consultorio Nidra Servicios Anestésicos" fill className="object-cover object-center" priority />
        <div className="absolute inset-0 bg-[#030C18]/60" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #030C18 0%, rgba(3,12,24,0.2) 65%, transparent 100%)" }} />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 pb-16 w-full">
          <div className="flex items-center gap-2 mb-5 flex-wrap">
            <a href="/" className="text-[11px] tracking-widest uppercase text-slate-400 hover:text-white transition-colors">Inicio</a>
            <span className="text-slate-600">/</span>
            <span className="text-[11px] tracking-widest uppercase text-blue-400">Nosotros</span>
          </div>
          <h1 className="font-display text-5xl lg:text-6xl font-light text-white leading-tight max-w-2xl">
            Quiénes{" "}
            <em className="not-italic font-semibold" style={{ background: "linear-gradient(135deg, #93C5FD 0%, #60A5FA 50%, #3B82F6 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Somos
            </em>
          </h1>
        </div>
      </section>

      {/* Misión + Visión */}
      <section className="bg-[#030C18] py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            <ScrollReveal>
              <div className="flex flex-col gap-6">
                <span className="text-[10px] tracking-[0.3em] uppercase text-blue-400 font-medium">Nuestra historia</span>
                <h2 className="font-display text-3xl lg:text-4xl font-light text-white leading-snug">
                  Nidra nació para elevar el{" "}
                  <span className="font-semibold text-blue-300">estándar anestésico</span>{" "}
                  en Barinas
                </h2>
                <p className="text-slate-400 text-sm lg:text-base leading-relaxed">
                  Nidra Servicios Anestésicos surge de la convicción de que cada paciente
                  en Barinas merece acceso a anestesiología de la más alta calidad.
                  Fundado por anestesiólogos con formación especializada y años de
                  experiencia clínica, nuestro equipo trabaja para que la anestesia
                  deje de ser una fuente de temor y se convierta en una garantía de seguridad.
                </p>
                <p className="text-slate-400 text-sm lg:text-base leading-relaxed">
                  Trabajamos de forma independiente y coordinada con clínicas, hospitales
                  y centros médicos de la región, ofreciendo una atención personalizada
                  que pone al paciente en el centro de cada decisión clínica.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 gap-5">
              <ScrollReveal delay={100}>
                <div className="flex flex-col gap-3 p-7 rounded-2xl border border-blue-500/20 hover:border-blue-500/35 transition-colors" style={{ background: "linear-gradient(135deg, rgba(37,99,235,0.06) 0%, rgba(37,99,235,0.02) 100%)" }}>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-px bg-blue-400" />
                    <span className="text-[10px] tracking-[0.25em] uppercase text-blue-400 font-medium">Misión</span>
                  </div>
                  <p className="text-white/80 text-sm lg:text-base leading-relaxed">
                    Brindar servicios anestésicos seguros, precisos y humanizados
                    a cada paciente, respaldados por formación continua, protocolos
                    internacionales y una atención personalizada que genera confianza.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <div className="flex flex-col gap-3 p-7 rounded-2xl border border-white/10 hover:border-blue-500/25 transition-colors" style={{ background: "rgba(255,255,255,0.02)" }}>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-px bg-blue-400/50" />
                    <span className="text-[10px] tracking-[0.25em] uppercase text-blue-400 font-medium">Visión</span>
                  </div>
                  <p className="text-white/80 text-sm lg:text-base leading-relaxed">
                    Ser el equipo de anestesiología de referencia en el estado Barinas,
                    reconocido por su excelencia clínica, innovación y compromiso
                    con la seguridad del paciente.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y border-white/5" style={{ background: "linear-gradient(135deg, #071424 0%, #0B1E36 50%, #071424 100%)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { n: "3", label: "Especialidades anestésicas" },
              { n: "Barinas", label: "Cobertura en el estado" },
              { n: "100%", label: "Procedimientos monitoreados" },
              { n: "24/7", label: "Disponibilidad" },
            ].map(({ n, label }, i) => (
              <ScrollReveal key={label} delay={i * 80}>
                <div className={`flex flex-col items-center text-center gap-1.5 ${i < 3 ? "lg:border-r lg:border-white/10" : ""}`}>
                  <span className="font-display text-4xl lg:text-5xl font-light text-white">{n}</span>
                  <span className="text-[10px] tracking-[0.15em] uppercase text-slate-500">{label}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 lg:py-32 border-t border-white/5" style={{ background: "#050F1D" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <div className="flex flex-col items-center text-center gap-4 mb-16">
              <span className="text-[10px] tracking-[0.3em] uppercase text-blue-400 font-medium">Lo que nos define</span>
              <h2 className="font-display text-4xl lg:text-5xl font-light text-white">
                Nuestros <span className="font-semibold italic text-blue-300">Valores</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map(({ title, desc }, i) => (
              <ScrollReveal key={title} delay={i * 80}>
                <div className="flex flex-col gap-3 p-7 rounded-2xl border border-white/10 hover:border-blue-500/25 transition-all duration-300 hover:-translate-y-1 h-full" style={{ background: "rgba(255,255,255,0.02)" }}>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                    <h3 className="font-display text-white font-medium text-xl">{title}</h3>
                  </div>
                  <div className="w-8 h-px bg-blue-500/30" />
                  <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-24 lg:py-32 border-t border-white/5 bg-[#030C18]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <div className="flex flex-col items-center text-center gap-4 mb-16">
              <span className="text-[10px] tracking-[0.3em] uppercase text-blue-400 font-medium">Razones para elegirnos</span>
              <h2 className="font-display text-4xl lg:text-5xl font-light text-white">
                ¿Por qué <span className="font-semibold italic text-blue-300">Nidra?</span>
              </h2>
              <p className="text-slate-500 text-sm max-w-xl leading-relaxed">
                Más allá de la experiencia técnica, nos diferencia nuestro compromiso
                con cada paciente como persona.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {reasons.map(({ icon, title, desc }, i) => (
              <ScrollReveal key={title} delay={i * 80}>
                <div className="flex flex-col gap-4 p-7 rounded-2xl border border-white/10 hover:border-blue-500/25 transition-all duration-300 hover:-translate-y-1 h-full" style={{ background: "rgba(255,255,255,0.02)" }}>
                  <span className="text-2xl">{icon}</span>
                  <h3 className="font-display text-white font-medium text-lg">{title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-white/5" style={{ background: "linear-gradient(135deg, #071424 0%, #0B1E36 50%, #071424 100%)" }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center flex flex-col items-center gap-7">
          <h2 className="font-display text-3xl lg:text-4xl font-light text-white">
            ¿Listo para ponerse en{" "}
            <span className="font-semibold italic text-blue-300">buenas manos?</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-md leading-relaxed">
            Contáctenos hoy y coordinamos la atención anestésica que su procedimiento requiere.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`https://wa.me/584245567249?text=${encodeURIComponent("Hola, los contacto desde la página Nosotros en nidranestesia.com. Quisiera coordinar una cita.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm px-8 py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-0.5"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Contactar por WhatsApp
            </a>
            <a href="/servicios" className="inline-flex items-center gap-2 border border-white/15 hover:border-blue-400/40 text-slate-300 hover:text-white text-sm px-8 py-4 rounded-full transition-all duration-200 hover:bg-white/5">
              Ver nuestros servicios
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
