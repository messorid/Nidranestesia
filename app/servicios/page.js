import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Servicios | Nidra Servicios Anestésicos",
  description:
    "Valoración anestésica preoperatoria, sedación para procedimientos fuera de quirófano y analgesia postoperatoria en Barinas, Venezuela.",
};

const services = [
  {
    number: "01",
    href: "/servicios/valoracion",
    image: "/valoracion2.png",
    imageAlt: "Valoración anestésica preoperatoria — Nidra Barinas",
    title: "Valoración Anestésica Preoperatoria",
    intro:
      "Antes de cualquier procedimiento quirúrgico, una evaluación anestésica completa es fundamental para garantizar la seguridad del paciente. En Nidra realizamos una valoración integral que nos permite conocer su estado de salud y diseñar el plan anestésico más adecuado.",
    includes: [
      "Revisión detallada de historia clínica y antecedentes médicos",
      "Evaluación del riesgo anestésico (clasificación ASA)",
      "Análisis e interpretación de exámenes preoperatorios",
      "Identificación de alergias y reacciones previas a medicamentos",
      "Diseño del plan anestésico personalizado",
      "Indicaciones claras para el día del procedimiento",
      "Espacio para resolver todas sus dudas y preguntas",
    ],
    tags: ["Historia clínica", "Riesgo ASA", "Plan individualizado", "Exámenes preoperatorios"],
    imageRight: false,
  },
  {
    number: "02",
    href: "/servicios/sedacion",
    image: "/sedacion.png",
    imageAlt: "Sedación para procedimientos fuera de quirófano — Nidra Barinas",
    title: "Sedación para Procedimientos y Estudios Fuera de Quirófano",
    intro:
      "Muchos procedimientos diagnósticos y terapéuticos requieren que el paciente esté en un estado de calma y cooperación, sin experimentar dolor ni ansiedad. Administramos sedación controlada con monitoreo continuo para garantizar una experiencia segura y confortable.",
    includes: [
      "Evaluación previa del paciente y revisión de antecedentes",
      "Monitoreo continuo de saturación de oxígeno, frecuencia cardíaca y presión arterial",
      "Administración de sedantes y analgésicos por vía intravenosa",
      "Vigilancia constante durante todo el procedimiento",
      "Disponibilidad de equipos de reanimación y soporte avanzado",
      "Cuidado y supervisión en sala de recuperación",
      "Indicaciones postprocedimiento para el paciente y acompañante",
    ],
    tags: ["Colonoscopias", "Endoscopias", "Cateterismos", "Estudios de imagen", "Monitoreo continuo"],
    imageRight: true,
  },
  {
    number: "03",
    href: "/servicios/analgesia",
    image: "/analgesia.png",
    imageAlt: "Analgesia postoperatoria — Nidra Barinas",
    title: "Analgesia Postoperatoria",
    intro:
      "El control del dolor después de una cirugía es parte esencial de la recuperación. En Nidra aplicamos técnicas analgésicas multimodales que minimizan el dolor, reducen la necesidad de opioides y permiten una recuperación más rápida y confortable.",
    includes: [
      "Bloqueos nerviosos periféricos ecoguiados para analgesia localizada",
      "Analgesia epidural continua para procedimientos de abdomen y miembros inferiores",
      "Infusiones continuas de analgésicos adaptadas a cada paciente",
      "Analgesia multimodal para minimizar el uso de opioides",
      "Seguimiento y evaluación del nivel de dolor en el postoperatorio",
      "Ajuste de dosis según la respuesta y evolución del paciente",
      "Coordinación con el equipo quirúrgico para un manejo integral",
    ],
    tags: ["Bloqueos regionales", "Analgesia epidural", "Infusiones continuas", "Recuperación acelerada"],
    imageRight: false,
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      {/* Page hero */}
      <section
        className="relative pt-40 pb-24 overflow-hidden"
        style={{ background: "linear-gradient(160deg, #020B15 0%, #071424 60%, #030C18 100%)" }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(37,99,235,0.10) 0%, transparent 70%)" }}
          />
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(96,165,250,0.18) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          {/* Breadcrumb */}
          <div className="flex items-center gap-3 mb-8">
            <a href="/" className="text-[11px] tracking-widest uppercase text-slate-500 hover:text-slate-300 transition-colors">
              Inicio
            </a>
            <span className="text-slate-700">/</span>
            <span className="text-[11px] tracking-widest uppercase text-blue-400">Servicios</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-end">
            <div className="flex flex-col gap-5">
              <span className="text-[10px] tracking-[0.3em] uppercase text-blue-400 font-medium">
                Especialidades
              </span>
              <h1 className="font-display text-5xl lg:text-6xl font-light text-white leading-tight">
                Nuestros{" "}
                <em
                  className="not-italic font-semibold"
                  style={{
                    background: "linear-gradient(135deg, #93C5FD 0%, #60A5FA 40%, #3B82F6 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Servicios
                </em>
              </h1>
              <p className="text-slate-400 text-base lg:text-lg max-w-xl leading-relaxed">
                Tres áreas de especialización donde concentramos años de experiencia
                clínica para garantizar la máxima seguridad y bienestar en cada procedimiento.
              </p>
            </div>

            {/* Quick nav */}
            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 lg:items-end">
              {services.map(({ number, title }) => (
                <a
                  key={number}
                  href={`#servicio-${number}`}
                  className="flex items-center gap-3 px-5 py-3.5 rounded-xl border border-white/10 hover:border-blue-500/30 hover:bg-white/5 transition-all duration-200 group"
                >
                  <span className="font-display text-blue-400/50 group-hover:text-blue-400 text-sm font-medium transition-colors">
                    {number}
                  </span>
                  <span className="text-slate-400 group-hover:text-white text-xs leading-tight transition-colors line-clamp-1">
                    {title.split(" ").slice(0, 3).join(" ")}...
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services detail */}
      <div className="bg-[#030C18]">
        {services.map(({ number, href, image, imageAlt, title, intro, includes, tags, imageRight }, i) => (
          <section
            key={number}
            id={`servicio-${number}`}
            className={`relative py-24 lg:py-32 border-t border-white/5 overflow-hidden`}
          >
            {/* Subtle background accent alternating */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: i % 2 === 0
                  ? "radial-gradient(ellipse at left center, rgba(37,99,235,0.04) 0%, transparent 60%)"
                  : "radial-gradient(ellipse at right center, rgba(37,99,235,0.04) 0%, transparent 60%)",
              }}
            />

            <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
              <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${imageRight ? "lg:grid-flow-dense" : ""}`}>

                {/* Image */}
                <div className={`${imageRight ? "lg:col-start-2" : ""}`}>
                  <div className="relative group">
                    {/* Decorative ring */}
                    <div
                      className={`absolute -inset-4 rounded-3xl border border-blue-500/10 ${imageRight ? "-right-4" : "-left-4"}`}
                    />
                    {/* Number watermark */}
                    <div
                      className="absolute -top-6 font-display text-8xl font-light pointer-events-none select-none z-10"
                      style={{
                        color: "rgba(59,130,246,0.08)",
                        right: imageRight ? "auto" : "-10px",
                        left: imageRight ? "-10px" : "auto",
                      }}
                    >
                      {number}
                    </div>
                    {/* Photo */}
                    <div className="relative h-80 lg:h-[500px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/40">
                      <Image
                        src={image}
                        alt={imageAlt}
                        fill
                        className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-blue-950/20" />
                      {/* Edge gradient blend */}
                      <div
                        className={`absolute inset-y-0 w-20 ${imageRight ? "left-0" : "right-0"}`}
                        style={{
                          background: imageRight
                            ? "linear-gradient(to right, rgba(3,12,24,0.6), transparent)"
                            : "linear-gradient(to left, rgba(3,12,24,0.6), transparent)",
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Text */}
                <div className={`flex flex-col gap-7 ${imageRight ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                  {/* Number + label */}
                  <div className="flex items-center gap-3">
                    <span className="font-display text-blue-400/40 text-sm font-medium tracking-widest">
                      {number}
                    </span>
                    <span className="w-8 h-px bg-blue-500/30" />
                    <span className="text-[10px] tracking-[0.25em] uppercase text-blue-400 font-medium">
                      Servicio
                    </span>
                  </div>

                  <h2 className="font-display text-3xl lg:text-4xl font-medium text-white leading-snug">
                    {title}
                  </h2>

                  <p className="text-slate-400 text-sm lg:text-base leading-relaxed">
                    {intro}
                  </p>

                  {/* What's included */}
                  <div className="flex flex-col gap-3">
                    <h3 className="text-[10px] tracking-[0.2em] uppercase text-slate-500 font-medium">
                      ¿Qué incluye?
                    </h3>
                    <ul className="flex flex-col gap-2.5">
                      {includes.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                          <span className="text-slate-400 text-sm leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] tracking-wide uppercase text-blue-400/70 bg-blue-500/10 border border-blue-500/15 px-3 py-1.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex flex-wrap gap-3 pt-2">
                    <a
                      href={href}
                      className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold tracking-wide px-6 py-3 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-0.5"
                    >
                      Ver servicio completo
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                    <a
                      href={`https://wa.me/584245567249?text=${encodeURIComponent(`Hola, los contacto desde la página web nidranestesia.com. Me interesa el servicio de ${title}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border border-white/15 hover:border-blue-400/40 text-slate-400 hover:text-white text-sm px-6 py-3 rounded-full transition-all duration-200 hover:bg-white/5"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA banner */}
      <section
        className="relative py-20 lg:py-24 border-t border-white/5 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #071424 0%, #0B1E36 50%, #071424 100%)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at center, rgba(37,99,235,0.08) 0%, transparent 70%)" }}
        />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-12 text-center flex flex-col items-center gap-7">
          <span className="text-[10px] tracking-[0.3em] uppercase text-blue-400 font-medium">
            ¿Listo para comenzar?
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-light text-white leading-tight">
            Hable con nuestro{" "}
            <span className="font-semibold italic text-blue-300">equipo hoy</span>
          </h2>
          <p className="text-slate-400 text-sm lg:text-base max-w-lg leading-relaxed">
            Contáctenos para agendar su valoración preoperatoria o resolver
            cualquier duda sobre nuestros servicios anestésicos.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`https://wa.me/584245567249?text=${encodeURIComponent("Hola, los contacto desde la página de Servicios en nidranestesia.com. Quisiera recibir información.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm tracking-wide px-8 py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-0.5"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Escribir por WhatsApp
            </a>
            <a
              href="/contacto"
              className="inline-flex items-center gap-2 border border-white/15 hover:border-blue-400/40 text-slate-300 hover:text-white text-sm font-medium px-8 py-4 rounded-full transition-all duration-200 hover:bg-white/5"
            >
              Ver página de contacto
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
