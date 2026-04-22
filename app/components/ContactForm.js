"use client";
import { useState } from "react";

const services = [
  "Valoración anestésica preoperatoria",
  "Sedación para procedimientos fuera de quirófano",
  "Analgesia postoperatoria",
  "Otro",
];

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceText = form.service ? `Servicio de interés: ${form.service}. ` : "";
    const text = encodeURIComponent(
      `Hola, los contacto desde la página web nidranestesia.com. Soy ${form.name}. ${serviceText}${form.message} Mi teléfono: ${form.phone}`
    );
    window.open(`https://wa.me/584245567249?text=${text}`, "_blank");
    setSent(true);
    setForm({ name: "", phone: "", service: "", message: "" });
    setTimeout(() => setSent(false), 6000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5"
    >
      {sent && (
        <div className="flex items-center gap-3 text-sm text-green-400 bg-green-400/10 border border-green-400/20 rounded-xl px-5 py-4">
          <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          ¡Mensaje enviado! Lo redirigimos a WhatsApp para continuar la conversación.
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <label className="text-[10px] tracking-[0.15em] uppercase text-slate-400 font-medium">
            Nombre completo <span className="text-blue-400">*</span>
          </label>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Su nombre"
            className="bg-white/5 border border-white/10 text-white placeholder:text-slate-600 text-sm px-4 py-3.5 rounded-xl outline-none focus:border-blue-500/60 focus:bg-white/8 transition-all"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-[10px] tracking-[0.15em] uppercase text-slate-400 font-medium">
            Teléfono <span className="text-blue-400">*</span>
          </label>
          <input
            type="tel"
            required
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="0424-000 0000"
            className="bg-white/5 border border-white/10 text-white placeholder:text-slate-600 text-sm px-4 py-3.5 rounded-xl outline-none focus:border-blue-500/60 focus:bg-white/8 transition-all"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-[10px] tracking-[0.15em] uppercase text-slate-400 font-medium">
          Servicio de interés
        </label>
        <select
          value={form.service}
          onChange={(e) => setForm({ ...form, service: e.target.value })}
          className="bg-[#071424] border border-white/10 text-sm px-4 py-3.5 rounded-xl outline-none focus:border-blue-500/60 transition-all appearance-none cursor-pointer"
          style={{ color: form.service ? "white" : "rgb(75 85 99)" }}
        >
          <option value="" disabled style={{ color: "rgb(75 85 99)" }}>
            Seleccione un servicio...
          </option>
          {services.map((s) => (
            <option key={s} value={s} style={{ color: "white" }}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-[10px] tracking-[0.15em] uppercase text-slate-400 font-medium">
          Mensaje <span className="text-blue-400">*</span>
        </label>
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Cuéntenos en qué podemos ayudarle. Incluya detalles del procedimiento si los conoce..."
          className="bg-white/5 border border-white/10 text-white placeholder:text-slate-600 text-sm px-4 py-3.5 rounded-xl outline-none focus:border-blue-500/60 focus:bg-white/8 transition-all resize-none"
        />
      </div>

      <button
        type="submit"
        className="flex items-center justify-center gap-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold tracking-wide px-6 py-4 rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-0.5 mt-1"
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        Enviar por WhatsApp
      </button>

      <p className="text-center text-[11px] text-slate-600">
        Al enviar, será redirigido a WhatsApp para completar la comunicación.
      </p>
    </form>
  );
}
