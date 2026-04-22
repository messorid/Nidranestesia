import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #020B15 0%, #071424 55%, #030C18 100%)" }}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(37,99,235,0.09) 0%, transparent 70%)" }}
        />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(96,165,250,0.18) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="absolute top-1/2 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/10 to-transparent" />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-20 grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">

        {/* Left: Text */}
        <div className="flex flex-col gap-8 lg:gap-10 items-center lg:items-start text-center lg:text-left">
          <div className="flex items-center gap-3">
            <span className="w-6 h-px bg-blue-500" />
            <span className="w-2 h-px bg-blue-500/40" />
            <span className="text-[11px] tracking-[0.25em] uppercase text-blue-400 font-medium">
              Barinas, Venezuela
            </span>
          </div>

          <div className="space-y-4">
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-light text-white leading-[1.1] tracking-tight">
              Tranquilidad
              <br />
              <em
                className="not-italic font-semibold"
                style={{
                  background: "linear-gradient(135deg, #93C5FD 0%, #60A5FA 40%, #3B82F6 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                en cada procedimiento
              </em>
            </h1>
            <p className="text-slate-400 text-base lg:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              Servicios anestésicos de alto nivel para procedimientos médicos.
              Seguridad, confort y profesionalismo en cada etapa.
            </p>
          </div>

          {/* Mobile image */}
          <div className="relative lg:hidden h-64 w-full rounded-2xl overflow-hidden border border-white/10">
            <Image
              src="/nidrahero.png"
              alt="Nidra Servicios Anestésicos"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-blue-950/25" />
            <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-[#071424] to-transparent" />
          </div>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <a
              href="/contacto"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm tracking-wide px-7 py-3.5 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-0.5"
            >
              Solicitar Consulta
            </a>
            <a
              href="/#servicios"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white text-sm tracking-wide transition-colors duration-200 group"
            >
              Ver Servicios
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

          <div className="flex justify-center lg:justify-start gap-8 pt-6 border-t border-white/10 w-full">
            {[
              { n: "3", label: "Especialidades anestésicas" },
              { n: "Barinas", label: "Cobertura en el estado" },
              { n: "24/7", label: "Disponibilidad" },
            ].map(({ n, label }) => (
              <div key={label} className="flex flex-col items-center lg:items-start gap-0.5">
                <span className="font-display text-2xl font-bold text-white">{n}</span>
                <span className="text-[10px] text-slate-500 uppercase tracking-widest">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Photo — desktop only */}
        <div className="hidden lg:flex justify-end items-center">
          <div className="relative w-full max-w-lg">
            {/* Gradient left blend */}
            <div
              className="absolute inset-y-0 left-0 w-28 z-10 rounded-l-3xl"
              style={{ background: "linear-gradient(to right, #071424, transparent)" }}
            />
            {/* Gradient bottom blend */}
            <div
              className="absolute bottom-0 inset-x-0 h-28 z-10 rounded-b-3xl"
              style={{ background: "linear-gradient(to top, #030C18, transparent)" }}
            />
            {/* Photo */}
            <div className="relative h-[600px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/40">
              <Image
                src="/nidrahero.png"
                alt="Nidra — Anestesióloga administrando anestesia"
                fill
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-blue-950/15" />
            </div>
            {/* Decorative rings */}
            <div className="absolute -top-5 -right-5 w-36 h-36 rounded-full border border-blue-500/15 pointer-events-none" />
            <div className="absolute -bottom-5 -left-5 w-24 h-24 rounded-full border border-blue-500/10 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-[9px] tracking-[0.2em] uppercase text-slate-400">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-slate-400 to-transparent" />
      </div>
    </section>
  );
}
