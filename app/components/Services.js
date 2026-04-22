import Image from "next/image";

const services = [
  {
    number: "01",
    image: "/valoracion2.png",
    imageAlt: "Valoración anestésica preoperatoria — Nidra",
    title: "Valoración Anestésica Preoperatoria",
    desc: "Evaluación integral del estado de salud del paciente antes de cualquier procedimiento quirúrgico. Revisamos antecedentes médicos, identificamos factores de riesgo y diseñamos el plan anestésico más seguro para cada persona.",
    tags: ["Historia clínica", "Riesgo anestésico", "Plan individualizado"],
  },
  {
    number: "02",
    image: "/sedacion.png",
    imageAlt: "Sedación para procedimientos fuera de quirófano — Nidra",
    title: "Sedación para Procedimientos y Estudios Fuera de Quirófano",
    desc: "Administración controlada de sedación para colonoscopias, endoscopias, cateterismos y estudios diagnósticos. El paciente experimenta confort total con monitoreo continuo de sus signos vitales.",
    tags: ["Endoscopias", "Estudios diagnósticos", "Monitoreo continuo"],
  },
  {
    number: "03",
    image: "/analgesia.png",
    imageAlt: "Analgesia postoperatoria — Nidra",
    title: "Analgesia Postoperatoria",
    desc: "Control efectivo del dolor tras la cirugía mediante técnicas multimodales: bloqueos nerviosos regionales, analgesia epidural e infusiones continuas. Una recuperación cómoda y segura con mínima dependencia de opioides.",
    tags: ["Bloqueos regionales", "Analgesia epidural", "Recuperación cómoda"],
  },
];

export default function Services() {
  return (
    <section id="servicios" className="relative bg-[#050F1D] py-24 lg:py-36 overflow-hidden">
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.4), transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-16 lg:mb-20">
          <span className="text-[10px] tracking-[0.3em] uppercase text-blue-400 font-medium">
            Especialidades
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-light text-white">
            Nuestros{" "}
            <span className="font-semibold italic text-blue-300">Servicios</span>
          </h2>
          <p className="text-slate-500 max-w-lg text-sm lg:text-base leading-relaxed">
            Tres áreas de especialización donde concentramos nuestra experiencia
            para garantizar la máxima seguridad y bienestar del paciente.
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-7">
          {services.map(({ number, image, imageAlt, title, desc, tags }) => (
            <div
              key={number}
              className="group relative flex flex-col rounded-3xl border border-white/10 overflow-hidden transition-all duration-300 hover:border-blue-500/35 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/20"
              style={{
                background: "linear-gradient(160deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)",
              }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden flex-shrink-0">
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-blue-950/30" />
                {/* Bottom gradient */}
                <div
                  className="absolute bottom-0 inset-x-0 h-20"
                  style={{ background: "linear-gradient(to top, rgba(5,15,29,0.95), transparent)" }}
                />
                {/* Number badge */}
                <div className="absolute top-4 right-4 font-display text-4xl font-light text-white/20">
                  {number}
                </div>
              </div>

              {/* Content */}
              <div className="relative flex flex-col gap-4 p-7 flex-1">
                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: "radial-gradient(circle at top left, rgba(37,99,235,0.07) 0%, transparent 70%)",
                  }}
                />

                <h3 className="font-display text-white font-medium text-xl leading-snug">
                  {title}
                </h3>

                <div className="w-8 h-px bg-blue-500/50 group-hover:w-14 transition-all duration-300" />

                <p className="text-slate-400 text-sm leading-relaxed flex-1">{desc}</p>

                <div className="flex flex-wrap gap-2 pt-1">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] tracking-wide uppercase text-blue-400/70 bg-blue-500/10 border border-blue-500/15 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
