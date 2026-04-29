"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

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
    nrPersone: "2",
    mesaj: "",
    botcheck: false, // Pentru Honeypot
  });
  const [nightlyPrice, setNightlyPrice] = useState<number | null>(null);
  const [totalPrice, setTotalPrice] = useState<number | null>(null);

  // Tarife centralizate
  const tarife = {
    ian_martie: 220,
    aprilie: 230,
    mai: 240,
    sezonMediu: 250, // Iun, Sept
    varfSezon: 300,  // Iul-Aug, Dec
    oct_nov: 230,
    pretPatSuplimentar: 50
  };

  const calculatePrices = () => {
    if (!formData.checkIn) {
      setNightlyPrice(null);
      setTotalPrice(null);
      return;
    }

    const month = new Date(formData.checkIn).getMonth() + 1;
    let basePrice = tarife.ian_martie;

    if ([1, 2, 3].includes(month)) basePrice = tarife.ian_martie;
    else if ([4].includes(month)) basePrice = tarife.aprilie;
    else if ([5].includes(month)) basePrice = tarife.mai;
    else if ([6, 9].includes(month)) basePrice = tarife.sezonMediu;
    else if ([10, 11].includes(month)) basePrice = tarife.oct_nov;
    else if ([7, 8, 12].includes(month)) basePrice = tarife.varfSezon;

    const finalNightlyPrice = formData.tipCamera === "dubla-suplimentar" 
      ? basePrice + tarife.pretPatSuplimentar 
      : basePrice;

    setNightlyPrice(finalNightlyPrice);

    if (formData.checkOut) {
      const start = new Date(formData.checkIn);
      const end = new Date(formData.checkOut);
      const diffTime = end.getTime() - start.getTime();
      const nights = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      if (nights > 0) {
        setTotalPrice(finalNightlyPrice * nights);
      } else {
        setTotalPrice(null);
      }
    }
  };

  useEffect(() => {
    calculatePrices();
  }, [formData.checkIn, formData.checkOut, formData.tipCamera]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.botcheck) return; // Stop dacă e bot (Honeypot)

    setErrorMessage("");
    setIsLoading(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "e2113dc0-a11d-4a6f-83a5-458bf6cff6b0",
          subject: `Rezervare Nouă: ${formData.numeComplet}`,
          from_name: "Pensiunea Charisma - Site",
          ...formData,
          pret_noapte: nightlyPrice,
          total_estimat: totalPrice
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
          nrPersone: "2",
          mesaj: "",
          botcheck: false,
        });
      } else {
        setErrorMessage("Eroare la trimitere. Verificați datele.");
      }
    } catch (error) {
      setErrorMessage("Problemă de conexiune. Încercați telefonic.");
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
            <p className="mb-2 text-xs uppercase tracking-[0.3em] text-[#F5EBE0]">Rezervă sejurul tău</p>
            <h1 className="mb-4 font-serif text-2xl text-white md:text-4xl drop-shadow-sm">Solicită o Rezervare</h1>
            <p className="mx-auto max-w-2xl text-sm text-[#F5EBE0]/90 md:text-base">
              Trimite-ne detaliile sejurului tău și revenim cu confirmarea disponibilității în cel mai scurt timp.
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
                {/* Honeypot - NU sterge, protejeaza de spam fara hCaptcha */}
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} onChange={handleChange} checked={formData.botcheck} />

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-wider text-[#5A4638]">Nume Complet</label>
                    <input type="text" name="numeComplet" value={formData.numeComplet} onChange={handleChange} required className="w-full rounded-xl border border-[#E0D4C5] bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-[#9C6644]/20" placeholder="Ex: Ion Popescu" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-wider text-[#5A4638]">Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full rounded-xl border border-[#E0D4C5] bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-[#9C6644]/20" placeholder="email@exemplu.com" />
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-wider text-[#5A4638]">Telefon</label>
                  <input type="tel" name="telefon" value={formData.telefon} onChange={handleChange} required className="w-full rounded-xl border border-[#E0D4C5] bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-[#9C6644]/20" placeholder="07xx xxx xxx" />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-wider text-[#5A4638]">Data Check-in</label>
                    <input type="date" name="checkIn" value={formData.checkIn} onChange={handleChange} required className="w-full rounded-xl border border-[#E0D4C5] px-4 py-3 outline-none focus:ring-2 focus:ring-[#9C6644]/20" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-wider text-[#5A4638]">Data Check-out</label>
                    <input type="date" name="checkOut" value={formData.checkOut} onChange={handleChange} required className="w-full rounded-xl border border-[#E0D4C5] px-4 py-3 outline-none focus:ring-2 focus:ring-[#9C6644]/20" />
                  </div>
                </div>

                {nightlyPrice && (
                  <div className="rounded-2xl border border-[#8FB373]/30 bg-[#F5EBE0] p-5 shadow-inner animate-in fade-in slide-in-from-top-2">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium">Tarif Cameră:</span>
                      <span className="font-bold text-[#9C6644]">{nightlyPrice} RON/noapte</span>
                    </div>
                    {totalPrice && (
                      <div className="flex justify-between items-center pt-2 border-t border-[#E0D4C5]">
                        <span className="text-base font-bold">Total Estimat:</span>
                        <span className="text-xl font-black text-[#3E2A20]">{totalPrice} RON</span>
                      </div>
                    )}
                  </div>
                )}

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-wider text-[#5A4638]">Tip cameră</label>
                    <select name="tipCamera" value={formData.tipCamera} onChange={handleChange} className="w-full rounded-xl border border-[#E0D4C5] bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-[#9C6644]/20">
                      <option value="dubla">Cameră Dublă</option>
                      <option value="dubla-suplimentar">Cameră cu Pat Suplimentar</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-wider text-[#5A4638]">Nr. Persoane</label>
                    <select name="nrPersone" value={formData.nrPersone} onChange={handleChange} className="w-full rounded-xl border border-[#E0D4C5] bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-[#9C6644]/20">
                      {[1,2,3,4,5].map(n => <option key={n} value={n}>{n} {n===1?'persoană':'persoane'}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-wider text-[#5A4638]">Mesaj (opțional)</label>
                  <textarea name="mesaj" value={formData.mesaj} onChange={handleChange} rows={4} className="w-full rounded-xl border border-[#E0D4C5] bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-[#9C6644]/20" placeholder="Ex: Avem nevoie de parcare, ajungem după ora 18:00..." />
                </div>

                <button type="submit" disabled={isLoading} className="w-full rounded-2xl bg-[#9C6644] py-4 font-bold uppercase tracking-widest text-[#FEFAE0] shadow-lg transition-all hover:bg-[#846644] active:scale-95 disabled:opacity-50">
                  {isLoading ? "Se trimite solicitarea..." : "Solicită Disponibilitate →"}
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
              <h2 className="mb-3 font-serif text-2xl font-bold text-[#3E2A20]">Solicitare Trimisă!</h2>
              <p className="mb-8 text-[#5A4638]">Vă mulțumim! Verificăm calendarul și vă contactăm pe email în cel mai scurt timp pentru confirmare.</p>
              <button onClick={() => setSuccessModal(false)} className="w-full rounded-2xl bg-[#9C6644] py-4 font-bold text-white shadow-md hover:bg-[#846644]">Închide</button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
