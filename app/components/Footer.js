import Image from "next/image";

const links = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/servicios" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "/contacto" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-14" style={{ background: "#020810" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-10 justify-between items-center lg:items-start">
          {/* Brand */}
          <div className="flex flex-col gap-4 items-center lg:items-start">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10">
                <Image
                  src="/assets/logosinfondo.png"
                  alt="Nidra"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <span className="font-display text-lg font-semibold tracking-[0.25em] text-white">
                  NIDRA
                </span>
                <p className="text-[9px] tracking-[0.12em] text-blue-400/70 uppercase -mt-0.5">
                  Servicios Anestésicos
                </p>
              </div>
            </div>
            <p className="text-slate-600 text-xs max-w-xs text-center lg:text-left leading-relaxed">
              Excelencia anestésica al servicio de Barinas y Venezuela.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {links.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-[11px] tracking-widest uppercase text-slate-500 hover:text-slate-300 transition-colors"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* WhatsApp */}
          <a
            href={`https://wa.me/584245567249?text=${encodeURIComponent("Hola, los contacto desde la página web nidranestesia.com. Quisiera recibir información.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-green-500/25 text-green-400 hover:bg-green-500/10 text-xs font-semibold tracking-wide px-5 py-2.5 rounded-full transition-all duration-200"
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp
          </a>
        </div>

        {/* SEO links */}
        <div className="mt-10 pt-8 border-t border-white/5">
          <p className="text-[9px] tracking-[0.15em] uppercase text-slate-700 mb-3">Búsquedas frecuentes</p>
          <div className="flex flex-wrap gap-x-4 gap-y-1.5">
            {[
              { label: "Analgesia en Barinas", href: "/analgesia-barinas" },
              { label: "Sedaciones en Barinas", href: "/sedacion-barinas" },
              { label: "Bomba de analgésicos en Barinas", href: "/bomba-analgesia-barinas" },
              { label: "Bombas para el dolor en Barinas", href: "/bombas-dolor-barinas" },
              { label: "Bombas de analgesia en Barinas", href: "/bombas-analgesia-barinas" },
              { label: "Manejo del dolor en Barinas", href: "/manejo-dolor-barinas" },
              { label: "Anestesiólogo en Barinas", href: "/anestesiologo-barinas" },
              { label: "Anestesiólogo Venezuela", href: "/anestesiologo-venezuela" },
            ].map(({ label, href }) => (
              <a key={href} href={href} className="text-[10px] text-slate-700 hover:text-slate-500 transition-colors">
                {label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 mt-6 pt-6 border-t border-white/5">
          <p className="text-slate-700 text-[10px] tracking-wider">
            © 2026 Nidra Servicios Anestésicos. Barinas, Venezuela.
          </p>
          <p className="text-slate-700 text-[10px]">Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
