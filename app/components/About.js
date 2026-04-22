import Image from "next/image";

const values = [
  {
    title: "Seguridad",
    desc: "Protocolo riguroso de monitoreo en cada etapa del procedimiento anestésico.",
  },
  {
    title: "Precisión",
    desc: "Técnicas avanzadas adaptadas a las necesidades individuales de cada paciente.",
  },
  {
    title: "Confort",
    desc: "Minimizamos la ansiedad y el dolor para una experiencia tranquila y segura.",
  },
  {
    title: "Confianza",
    desc: "Comunicación clara y transparente con el equipo médico y el paciente.",
  },
];

export default function About() {
  return (
    <section id="nosotros" className="relative bg-[#030C18] py-24 lg:py-32 overflow-hidden">
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.3), transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <span className="text-[10px] tracking-[0.3em] uppercase text-blue-400 font-medium">
                Quiénes somos
              </span>
              <h2 className="font-display text-4xl lg:text-5xl font-light text-white leading-tight">
                Especialistas en
                <br />
                <span className="font-semibold italic text-blue-300">Anestesiología</span>
              </h2>
              <p className="text-slate-400 text-sm lg:text-base leading-relaxed max-w-lg">
                Somos un equipo de anestesiólogos certificados comprometidos con
                ofrecer servicios de la más alta calidad en Barinas. Trabajamos con
                clínicas, hospitales y centros médicos para garantizar procedimientos
                seguros y experiencias cómodas para cada paciente.
              </p>
              <p className="text-slate-500 text-sm leading-relaxed max-w-lg">
                Combinamos años de experiencia clínica con tecnología de punta y
                protocolos internacionales para brindar la atención anestésica que
                cada paciente merece.
              </p>
            </div>

            <a
              href="#contacto"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm tracking-wide transition-colors group w-fit"
            >
              Contáctenos
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Right: Photo + Values */}
          <div className="flex flex-col gap-5">
            {/* Photo */}
            <div className="relative h-64 rounded-2xl overflow-hidden border border-white/10">
              <Image
                src="/nidra.png"
                alt="Consultorio Nidra Servicios Anestésicos"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-blue-950/20" />
              <div
                className="absolute bottom-0 inset-x-0 h-16"
                style={{ background: "linear-gradient(to top, rgba(3,12,24,0.8), transparent)" }}
              />
            </div>
            {/* Values */}
            <div className="grid grid-cols-2 gap-3">
              {values.map(({ title, desc }) => (
                <div
                  key={title}
                  className="flex flex-col gap-2 p-5 rounded-2xl border border-white/10 hover:border-blue-500/25 transition-colors duration-300"
                  style={{
                    background: "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
                  }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                    <h3 className="font-display text-white font-medium text-base">{title}</h3>
                  </div>
                  <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
