import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Página no encontrada | Nidra",
};

export default function NotFound() {
  return (
    <>
      <Navbar />
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ background: "linear-gradient(135deg, #020B15 0%, #071424 55%, #030C18 100%)" }}
      >
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)" }}
          />
          <div
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(96,165,250,0.18) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
        </div>

        <div className="relative flex flex-col items-center text-center gap-8 px-6 max-w-lg">
          {/* 404 number */}
          <div className="relative">
            <span
              className="font-display font-light select-none"
              style={{
                fontSize: "clamp(100px, 20vw, 180px)",
                lineHeight: 1,
                background: "linear-gradient(135deg, rgba(59,130,246,0.15) 0%, rgba(37,99,235,0.08) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              404
            </span>
            <div className="absolute inset-0 flex items-center justify-center">
              <span
                className="font-display font-light"
                style={{
                  fontSize: "clamp(100px, 20vw, 180px)",
                  lineHeight: 1,
                  background: "linear-gradient(135deg, rgba(147,197,253,0.4) 0%, rgba(96,165,250,0.2) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  filter: "blur(1px)",
                }}
              >
                404
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h1 className="font-display text-2xl lg:text-3xl font-medium text-white">
              Página no encontrada
            </h1>
            <p className="text-slate-400 text-sm leading-relaxed">
              La página que busca no existe o fue movida. Le invitamos a
              regresar al inicio o contactarnos directamente.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm px-7 py-3.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-0.5"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Ir al inicio
            </a>
            <a
              href={`https://wa.me/584245567249?text=${encodeURIComponent("Hola, los contacto desde la página web nidranestesia.com. Quisiera recibir información.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-green-500/30 text-green-400 hover:bg-green-500/10 text-sm font-medium px-7 py-3.5 rounded-full transition-all duration-200"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Contactar por WhatsApp
            </a>
          </div>

          <a href="/servicios" className="text-slate-500 hover:text-slate-300 text-xs tracking-wider uppercase transition-colors">
            Ver nuestros servicios →
          </a>
        </div>
      </section>
      <Footer />
    </>
  );
}
