"use client";

import Link from "next/link";
import { useState } from "react";

export default function RezervariePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    numeComplet: "",
    email: "",
    telefon: "",
    checkIn: "",
    checkOut: "",
    tipCamera: "dubla",
    nrCamere: "1",
    nrPersone: "2",
    mesaj: "",
    botcheck: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.botcheck) return; // Honeypot spam protection

    setErrorMessage("");
    setIsLoading(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "e2113dc0-a11d-4a6f-83a5-458bf6cff6b0",
          subject: `Solicitare Rezervare: ${formData.numeComplet} (${formData.nrCamere} căm.)`,
          from_name: "Pensiunea Charisma - Site",
          ...formData,
          detalii_camera: `${formData.nrCamere}x Cameră ${formData.tipCamera === "dubla" ? "Dublă" : "cu Pat Suplimentar"}`,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSuccessModal(true);
        setFormData({
          numeComplet: "",
          email: "",
          telefon: "",
          checkIn: "",
          checkOut: "",
          tipCamera: "dubla",
          nrCamere: "1",
          nrPersone: "2",
          mesaj: "",
          botcheck: false,
        });
      } else {
        setErrorMessage("Eroare la trimitere. Verificați datele introduse.");
      }
    } catch (error) {
      setErrorMessage("Problemă de conexiune. Vă rugăm să încercați telefonic.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#8FB373] text-[#3E2A20] font-sans antialiased">
      <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18)_0,_transparent_55%)]">
        
        {/* HEADER */}
        <header className="sticky top-0 z-30 border-b border-[#8FB373]/40 bg-[#FEFAE0]/95 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
            <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-75">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#9C6644] font-serif text-xl text-[#FEFAE0]">C</div>
              <div className="leading-tight">
                <div className="font-serif text-lg text-[#3E2A20] md:text-xl">Pensiunea Charisma</div>
                <div className="text-xs text-[#5A4638]">Eleganță rustică în Băile Herculane</div>
              </div>
            </Link>
            <Link href="/" className="rounded-xl px-5 py-2.5 font-semibold text-[#FEFAE0] bg-[#9C6644] hover:bg-[#846644] shadow-md transition-all text-sm md:text-base">
              ← Înapoi
            </Link>
          </div>
        </header>

        {/* HERO */}
        <section className="py-8 md:py-12 text-center">
          <div className="mx-auto max-w-4xl px-4">
            <p className="mb-2 text-xs uppercase tracking-[0.3em] text-[#F5EBE0]">Verificare Disponibilitate</p>
            <h1 className="mb-4 font-serif text-2xl text-white md:text-4xl drop-shadow-sm">Solicită o Rezervare</h1>
            <p className="mx-auto max-w-2xl text-sm text-[#F5EBE0]/90 md:text-base">
              Trimite-ne perioada dorită, iar noi vom verifica disponibilitatea camerelor în cel mai scurt timp.
            </p>
          </div>
        </section>

        {/* FORM */}
        <section className="pb-16">
          <div className="mx-auto max-w-2xl px-4">
            <div className="rounded-3xl border border-[#8FB373]/40 bg-[#FEFAE0] p-6 shadow-2xl md:p-10">
              
              {errorMessage && (
                <div className="mb-6 rounded-xl border border-red-200 bg-red-50 p-4 text-red-800 text-sm">{errorMessage}</div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} onChange={handleChange} checked={formData.botcheck} />

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-wider text-[#5A4638]">Nume Complet *</label>
                    <input type="text" name="numeComplet" value={formData.numeComplet} onChange={handleChange} required className="w-full rounded-xl border border-[#E0D4C5] bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-[#9C6644]/20" placeholder="Ex: Ion Popescu" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-wider text-[#5A4638]">Email *</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full rounded-xl border border-[#E0D4C5] bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-[#9C6644]/20" placeholder="email@exemplu.com" />
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-wider text-[#5A4638]">Telefon *</label>
                  <input type="tel" name="telefon" value={formData.telefon} onChange={handleChange} required className="w-full rounded-xl border border-[#E0D4C5] bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-[#9C6644]/20" placeholder="07xx xxx xxx" />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-wider text-[#5A4638]">Data Check-in *</label>
                    <input type="date" name="checkIn" value={formData.checkIn} onChange={handleChange} required className="w-full rounded-xl border border-[#E0D4C5] px-4 py-3 outline-none focus:ring-2 focus:ring-[#9C6644]/20" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-wider text-[#5A4638]">Data Check-out *</label>
                    <input type="date" name="checkOut" value={formData.checkOut} onChange={handleChange} required className="w-full rounded-xl border border-[#E0D4C5] px-4 py-3 outline-none focus:ring-2 focus:ring-[#9C6644]/20" />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-wider text-[#5A4638]">Tip cameră *</label>
                    <select name="tipCamera" value={formData.tipCamera} onChange={handleChange} className="w-full rounded-xl border border-[#E0D4C5] bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-[#9C6644]/20">
                      <option value="dubla">Cameră Dublă</option>
                      <option value="dubla-suplimentar">Cameră cu Pat Suplimentar</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-wider text-[#5A4638]">Număr camere *</label>
                    <select name="nrCamere" value={formData.nrCamere} onChange={handleChange} className="w-full rounded-xl border border-[#E0D4C5] bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-[#9C6644]/20">
                      {[1, 2, 3, 4, 5, 6].map(n => <option key={n} value={n}>{n} {n === 1 ? 'cameră' : 'camere'}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-wider text-[#5A4638]">Nr. Total Persoane *</label>
                  <select name="nrPersone" value={formData.nrPersone} onChange={handleChange} className="w-full rounded-xl border border-[#E0D4C5] bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-[#9C6644]/20">
                    {Array.from({ length: 12 }, (_, i) => i + 1).map(n => (
                      <option key={n} value={n}>{n} {n === 1 ? 'persoană' : 'persoane'}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-wider text-[#5A4638]">Mesaj (opțional)</label>
                  <textarea name="mesaj" value={formData.mesaj} onChange={handleChange} rows={4} className="w-full rounded-xl border border-[#E0D4C5] bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-[#9C6644]/20" placeholder="Ex: Structura dorită pe camere, dacă aveți copii, detalii despre parcare..." />
                </div>

                {/* Caseta Informativă Pro */}
                <div className="rounded-2xl border border-[#8FB373]/30 bg-[#F5EBE0] p-4 text-center">
                  <p className="text-xs text-[#5A4638] leading-relaxed">
                    ℹ️ <strong>Notă privind tarifele:</strong> După trimiterea formularului, echipa noastră va verifica manual disponibilitatea camerelor pentru intervalul ales. Prețul final exact și detaliile de plată vă vor fi comunicate telefonic sau prin e-mail.
                  </p>
                </div>

                <button type="submit" disabled={isLoading} className="w-full rounded-2xl bg-[#9C6644] py-4 font-bold uppercase tracking-widest text-[#FEFAE0] shadow-lg transition-all hover:bg-[#846644] active:scale-95 disabled:opacity-50">
                  {isLoading ? "Se trimite solicitarea..." : "Trimite Solicitarea →"}
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* MODAL SUCCES */}
        {successModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-[#3E2A20]/60 backdrop-blur-sm" onClick={() => setSuccessModal(false)} />
            <div className="relative w-full max-w-md rounded-[2.5rem] bg-[#FEFAE0] p-8 text-center shadow-2xl animate-in zoom-in duration-300">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-600 border-4 border-white shadow-lg">
                <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
              </div>
              <h2 className="mb-3 font-serif text-2xl font-bold text-[#3E2A20]">Solicitare Primită!</h2>
              <p className="mb-8 text-[#5A4638] text-sm leading-relaxed">
                Vă mulțumim! Verificăm imediat situația camerelor libere și vă vom contacta prin e-mail sau telefonic pentru a vă confirma disponibilitatea și prețul total calculat.
              </p>
              <button onClick={() => setSuccessModal(false)} className="w-full rounded-2xl bg-[#9C6644] py-4 font-bold text-white shadow-md hover:bg-[#846644]">Închide</button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
