const stats = [
  { value: "3", label: "Especialidades Anestésicas" },
  { value: "Barinas", label: "Cobertura en el Estado" },
  { value: "100%", label: "Procedimientos Monitoreados" },
  { value: "24/7", label: "Disponibilidad" },
];

export default function Stats() {
  return (
    <section
      className="relative py-16 lg:py-20 border-y border-white/5"
      style={{ background: "linear-gradient(135deg, #071424 0%, #0B1E36 50%, #071424 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map(({ value, label }, i) => (
            <div
              key={label}
              className={`flex flex-col items-center text-center gap-1.5 ${
                i < stats.length - 1 ? "lg:border-r lg:border-white/10" : ""
              }`}
            >
              <span className="font-display text-4xl lg:text-5xl font-light text-white">
                {value}
              </span>
              <span className="text-[10px] tracking-[0.15em] uppercase text-slate-500">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
