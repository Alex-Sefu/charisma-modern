"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";

export default function RezervariePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const captchaRef = useRef<HCaptcha>(null);
  const [formData, setFormData] = useState({
    numeComplet: "",
    email: "",
    telefon: "",
    checkIn: "",
    checkOut: "",
    tipCamera: "dubla",
    nrPersone: "2",
    mesaj: "",
  });
  const [nightlyPrice, setNightlyPrice] = useState<number | null>(null);
  const [totalPrice, setTotalPrice] = useState<number | null>(null);
  const [seasonName, setSeasonName] = useState<string>("");

  // Calculare prețuri dinamice pe bază de lună

  const calculatePrices = () => {
    if (!formData.checkIn) {
      setNightlyPrice(null);
      setTotalPrice(null);
      setSeasonName("");
      return;
    }

    const [year, month, day] = formData.checkIn.split("-").map(Number);
    // Datele tale pe care le vei modifica o dată pe an aici în cod
const tarife = {
  ian_martie: 220,
  aprilie: 230,
  mai:240,    
  sezonMediu: 250,    // Iun, Sept
  varfSezon: 300,     // Iul-Aug, Dec
  oct_nov: 230,    // Oct-Nov
  pretPatSuplimentar: 50
};

// Funcția care calculează prețul în funcție de lună
function getPriceByMonth(dateString: string) {
  if (!dateString) return tarife.ian_martie;
  const month = new Date(dateString).getMonth() + 1; // 1 = Ianuarie

  if ([1, 2, 3].includes(month)) return tarife.ian_martie;
  if ([4].includes(month)) return tarife.aprilie;
  if ([5].includes(month)) return tarife.mai;
  if ([6, 9].includes(month)) return tarife.sezonMediu;
  if ([10,11].includes(month)) return tarife.oct_nov;
  if ([7,8].includes(month)) return tarife.varfSezon;
  return tarife.ian_martie;
}
    const checkInPrice = getPriceByMonth(formData.checkIn);
    

    // Calcul preț cu pat suplimentar dacă e cazul
    const finalNightlyPrice =
      formData.tipCamera === "dubla-suplimentar"
        ? checkInPrice + 50
        : checkInPrice;

    setNightlyPrice(finalNightlyPrice);

    if (formData.checkOut) {
      const checkIn = new Date(formData.checkIn);
      const checkOut = new Date(formData.checkOut);
      const nights = Math.ceil(
        (checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24)
      );

      if (nights > 0) {
        setTotalPrice(finalNightlyPrice * nights);
      } else {
        setTotalPrice(null);
      }
    } else {
      setTotalPrice(null);
    }
  };

  useEffect(() => {
    calculatePrices();
  }, [formData.checkIn, formData.checkOut, formData.tipCamera]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");

    // Verificare hCaptcha
    if (!captchaToken) {
      setErrorMessage("Vă rugăm să confirmați că nu sunteți robot.");
      return;
    }

    setIsLoading(true);

    try {
      // Web3Forms API - Înlocuiește YOUR_ACCESS_KEY cu cheia ta din Web3Forms
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "e2113dc0-a11d-4a6f-83a5-458bf6cff6b0",
          name: formData.numeComplet,
          email: formData.email,
          phone: formData.telefon,
          checkIn: formData.checkIn,
          checkOut: formData.checkOut,
          roomType: formData.tipCamera,
          guests: formData.nrPersone,
          message: formData.mesaj,
          subject: `Cerere de Rezervare de la ${formData.numeComplet}`,
          "h-captcha-response": captchaToken,
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
        });
        setCaptchaToken(null);
        
        // Reset hCaptcha widget
        if (captchaRef.current) {
          captchaRef.current.resetCaptcha();
        }
      } else {
        setErrorMessage(result.message || "A apărut o problemă la trimitere. Vă rugăm să încercați din nou.");
      }
    } catch (error) {
      console.error("Eroare la trimiterea formularu:", error);
      setErrorMessage("A apărut o problemă. Vă rugăm să încercați din nou sau să ne contactați telefonic.");
    } finally {
      setIsLoading(false);
    }
  };

  const closeModal = () => {
    setSuccessModal(false);
  };

  return (
    <div className="min-h-screen bg-[#8FB373] text-[#3E2A20] font-sans antialiased">
      {/* Background texturat */}
      <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18)_0,_transparent_55%)]">
        {/* HEADER */}
        <header className="sticky top-0 z-30 border-b border-[#8FB373]/40 bg-[#FEFAE0]/90 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 transition-opacity hover:opacity-75"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#9C6644] font-serif text-xl tracking-[0.2em] text-[#FEFAE0]">
                C
              </div>
              <div className="leading-tight">
                <div className="font-serif text-lg tracking-wide text-[#3E2A20] md:text-xl">
                  Pensiunea Charisma
                </div>
                <div className="text-xs text-[#5A4638] md:text-sm">
                  Eleganță rustică în Băile Herculane
                </div>
              </div>
            </Link>

            {/* Buton Înapoi */}
            <div>
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-semibold tracking-wide text-[#FEFAE0] bg-[#9C6644] hover:bg-[#846644] hover:shadow-lg shadow-md transition-all"
              >
                ← Înapoi
              </Link>
            </div>
          </div>
        </header>

        {/* HERO SECTION */}
        <section className="relative py-8 md:py-12">
          <div className="mx-auto max-w-4xl px-4">
            <div className="mb-8 text-center md:mb-10">
              <p className="mb-2 text-xs uppercase tracking-[0.35em] text-[#5A4638] md:text-sm">
                Rezervă sejurul tău
              </p>
              <h1 className="mb-4 font-serif text-2xl text-[#3E2A20] md:text-4xl">
                Completează formularul și noi vom confirma disponibilitatea
              </h1>
              <p className="mx-auto max-w-2xl text-sm text-[#5A4638] md:text-base">
                Vei primi rapid o confirmare pe email cu detaliile ofertei
                personalizate. Dacă ai întrebări, contactează-ne pe telefon sau
                WhatsApp.
              </p>
            </div>
          </div>
        </section>

        {/* FORMULAR */}
        <section className="pb-12 md:pb-16">
          <div className="mx-auto max-w-2xl px-4">
            <div className="rounded-3xl border border-[#8FB373]/40 bg-[#FEFAE0] p-6 shadow-lg md:p-8">
              {/* Mesaj de eroare */}
              {errorMessage && (
                <div className="mb-6 rounded-xl border border-red-300 bg-red-50 p-4 text-red-800 animate-fade-in">
                  <div className="flex items-start gap-3">
                    <svg className="h-5 w-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h3 className="font-semibold">Eroare la trimitere</h3>
                      <p className="text-sm mt-1">{errorMessage}</p>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Input ascuns pentru Web3Forms Access Key */}
                <input
                  type="hidden"
                  name="access_key"
                  value="YOUR_ACCESS_KEY"
                />

                {/* Rândul 1: Nume și Email */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-[#5A4638]">
                      Nume complet *
                    </label>
                    <input
                      type="text"
                      name="numeComplet"
                      value={formData.numeComplet}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-[#E0D4C5] bg-white px-4 py-3 text-[#3E2A20] placeholder-[#8FB373] outline-none transition focus:border-[#9C6644] focus:ring-2 focus:ring-[#9C6644]/20"
                      placeholder="Exemplu: Ion Popescu"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-[#5A4638]">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-[#E0D4C5] bg-white px-4 py-3 text-[#3E2A20] placeholder-[#8FB373] outline-none transition focus:border-[#9C6644] focus:ring-2 focus:ring-[#9C6644]/20"
                      placeholder="email@exemplu.com"
                    />
                  </div>
                </div>

                {/* Rândul 2: Telefon */}
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-[#5A4638]">
                    Telefon *
                  </label>
                  <input
                    type="tel"
                    name="telefon"
                    value={formData.telefon}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-[#E0D4C5] bg-white px-4 py-3 text-[#3E2A20] placeholder-[#8FB373] outline-none transition focus:border-[#9C6644] focus:ring-2 focus:ring-[#9C6644]/20"
                    placeholder="+40 XXX XXX XXX"
                  />
                </div>

                {/* Rândul 3: Check-in și Check-out */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-[#5A4638]">
                      Data Check-in *
                    </label>
                    <input
                      type="date"
                      name="checkIn"
                      value={formData.checkIn}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-[#E0D4C5] bg-white px-4 py-3 text-[#3E2A20] outline-none transition focus:border-[#9C6644] focus:ring-2 focus:ring-[#9C6644]/20"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-[#5A4638]">
                      Data Check-out *
                    </label>
                    <input
                      type="date"
                      name="checkOut"
                      value={formData.checkOut}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-[#E0D4C5] bg-white px-4 py-3 text-[#3E2A20] outline-none transition focus:border-[#9C6644] focus:ring-2 focus:ring-[#9C6644]/20"
                    />
                  </div>
                </div>

                {/* Preț dinamic */}
                {nightlyPrice && (
                  <div className="rounded-xl border border-[#8FB373]/30 bg-[#F5EBE0] p-4">
                    <p className="text-sm text-[#5A4638]">
                      <span className="font-semibold text-[#3E2A20]">📊 Tarif cameră în perioada selectată:</span> <span className="text-lg font-bold text-[#9C6644]">{nightlyPrice} RON</span>/noapte
                    </p>
                    {totalPrice && (
                      <p className="mt-2 text-sm text-[#5A4638]">
                        <span className="font-semibold text-[#3E2A20]">💰 Total estimat:</span> <span className="text-lg font-bold text-[#9C6644]">{totalPrice} RON</span> ({Math.ceil((new Date(formData.checkOut).getTime() - new Date(formData.checkIn).getTime()) / (1000 * 60 * 60 * 24))} nopți)
                      </p>
                    )}
                    <p className="mt-2 text-xs text-[#7B6B5C]">
                      ✓ Prețul final va fi confirmat telefonic sau prin email.
                    </p>
                  </div>
                )}

                {/* Rândul 4: Tip cameră și Nr. persoane */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-[#5A4638]">
                      Tip cameră *
                    </label>
                    <select
                      name="tipCamera"
                      value={formData.tipCamera}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-[#E0D4C5] bg-white px-4 py-3 text-[#3E2A20] outline-none transition focus:border-[#9C6644] focus:ring-2 focus:ring-[#9C6644]/20"
                    >
                      <option value="dubla">Cameră Dublă </option>
                      <option value="dubla-suplimentar">
                        Cameră Dublă cu Pat Suplimentar (+50 RON/noapte)
                      </option>
                    </select>
                    <p className="mt-1.5 text-xs text-[#7B6B5C]">
                      <span className="font-medium">Notă:</span> Patul suplimentar se achită separat față de tariful standard al camerei.
                    </p>
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-[#5A4638]">
                      Număr persoane *
                    </label>
                    <select
                      name="nrPersone"
                      value={formData.nrPersone}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-[#E0D4C5] bg-white px-4 py-3 text-[#3E2A20] outline-none transition focus:border-[#9C6644] focus:ring-2 focus:ring-[#9C6644]/20"
                    >
                      <option value="1">1 persoană</option>
                      <option value="2">2 persoane</option>
                      <option value="3">3 persoane</option>
                      <option value="4">4 persoane</option>
                      <option value="5+">5+ persoane</option>
                    </select>
                  </div>
                </div>

                {/* Rândul 5: Mesaj */}
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-[#5A4638]">
                    Mesaj (opțional)
                  </label>
                  <textarea
                    name="mesaj"
                    value={formData.mesaj}
                    onChange={handleChange}
                    rows={5}
                    className="w-full rounded-lg border border-[#E0D4C5] bg-white px-4 py-3 text-[#3E2A20] placeholder-[#8FB373] outline-none transition focus:border-[#9C6644] focus:ring-2 focus:ring-[#9C6644]/20"
                    placeholder="Preferințe de cazare, întrebări speciale, alergii alimentare, etc."
                  />
                  <p className="mt-1 text-xs text-[#7B6B5C]">
                    Maxim 500 de caractere
                  </p>
                </div>

                {/* hCaptcha Widget */}
                <div className="flex justify-center">
                  <HCaptcha
                    ref={captchaRef}
                    sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
                    onVerify={(token) => setCaptchaToken(token)}
                    onExpire={() => setCaptchaToken(null)}
                    theme="light"
                  />
                </div>

                {/* Buton Submit */}
                <div className="flex flex-col gap-3 pt-2">
                  <button
                    type="submit"
                    disabled={isLoading || !captchaToken}
                    className={`inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-semibold tracking-wide text-[#FEFAE0] shadow-md transition-all ${
                      isLoading || !captchaToken
                        ? "bg-[#8FB373] cursor-not-allowed opacity-60"
                        : "bg-[#9C6644] hover:bg-[#846644] hover:shadow-lg"
                    }`}
                  >
                    {isLoading ? (
                      <>
                        <svg
                          className="h-4 w-4 animate-spin"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Se trimite...
                      </>
                    ) : (
                      <>
                        Solicită Disponibilitate
                        <span aria-hidden="true">→</span>
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-[#7B6B5C]">
                    * Câmpurile marcate cu astersc sunt obligatorii.
                    <br />
                    Vei fi contactat/ă la emailul și telefonul furnizat pentru
                    a confirma disponibilitatea și pentru detalii finale.
                  </p>
                </div>
              </form>
            </div>

            {/* Info adițională */}
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-xl border border-[#E0D4C5] bg-[#FEFAE0] p-4 text-center">
                <h3 className="mb-1 font-semibold text-[#3E2A20]">
                  Check-in
                </h3>
                <p className="text-sm text-[#5A4638]">de la 14:00</p>
              </div>
              <div className="rounded-xl border border-[#E0D4C5] bg-[#FEFAE0] p-4 text-center">
                <h3 className="mb-1 font-semibold text-[#3E2A20]">
                  Check-out
                </h3>
                <p className="text-sm text-[#5A4638]">până la 11:00</p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT INFO */}
        <section className="border-t border-[#8FB373]/40 bg-[#F5EBE0]/90 py-10 md:py-12">
          <div className="mx-auto max-w-4xl px-4">
            <div className="grid gap-6 text-center md:grid-cols-3">
              <div>
                <h3 className="mb-2 font-serif text-lg text-[#3E2A20]">
                  Telefon
                </h3>
                <a
                  href="tel:+40723886182"
                  className="text-[#9C6644] transition-colors hover:text-[#846644]"
                >
                  0723 886 182
                </a>
              </div>
              <div>
                <h3 className="mb-2 font-serif text-lg text-[#3E2A20]">
                  WhatsApp
                </h3>
                <a
                  href="https://wa.me/40723886182?text=Bună%20ziua!%20Vreau%20informații%20despre%20disponibilitatea%20la%20Pensiunea%20Charisma."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#9C6644] transition-colors hover:text-[#846644]"
                >
                  Contactează-ne pe WhatsApp
                </a>
              </div>
              <div>
                <h3 className="mb-2 font-serif text-lg text-[#3E2A20]">
                  Email
                </h3>
                <a
                  href="mailto:contact@pensiunea-charisma.ro"
                  className="text-[#9C6644] transition-colors hover:text-[#846644]"
                >
                  info@pensiunea-charisma.ro
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-[#8FB373]/40 bg-[#F5EBE0]/95">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-4 text-xs text-[#7B6B5C] md:flex-row">
            <p>
              &copy; {new Date().getFullYear()} Pensiunea Charisma. Toate
              drepturile rezervate.
            </p>
            <p className="flex items-center gap-2">
              Design modern-rustic realizat cu{" "}
              <span className="font-serif text-[#3E2A20]">Tailwind CSS</span>.
            </p>
          </div>
        </footer>

        {/* Buton WhatsApp flotant */}
        <a
          href="https://wa.me/40723886182?text=Bună%20ziua!%20Doresc%20informații%20despre%20disponibilitatea%20la%20Pensiunea%20Charisma."
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-5 right-5 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-colors hover:bg-green-600"
          aria-label="Contact pe WhatsApp"
        >
          {/* Icon WhatsApp simplu */}
          <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden="true">
            <path
              fill="currentColor"
              d="M16.04 5C10.53 5 6.04 9.49 6.04 15c0 2.01.59 3.88 1.61 5.46L6 27l6.7-1.6A10 10 0 0 0 16.04 25C21.55 25 26 20.51 26 15S21.55 5 16.04 5Zm0 17.92c-1.64 0-3.17-.44-4.51-1.29l-.32-.19-3.98.95.95-3.88-.21-.33A7.63 7.63 0 0 1 8.38 15c0-4.23 3.44-7.67 7.66-7.67 4.23 0 7.67 3.44 7.67 7.67 0 4.22-3.44 7.66-7.67 7.66Zm4.21-5.71c-.23-.11-1.37-.68-1.58-.76-.21-.08-.36-.11-.51.11-.15.23-.58.76-.71.91-.13.15-.26.17-.49.06-.23-.11-.95-.35-1.8-1.11-.67-.6-1.12-1.34-1.25-1.56-.13-.23-.01-.35.1-.46.1-.1.23-.26.34-.39.11-.13.15-.23.23-.38.08-.15.04-.28-.02-.39-.06-.11-.51-1.23-.7-1.69-.18-.45-.38-.39-.51-.4h-.44c-.15 0-.39.06-.6.28-.21.23-.79.77-.79 1.88 0 1.11.81 2.19.92 2.34.11.15 1.6 2.44 3.89 3.42.54.23.96.37 1.29.48.54.17 1.03.15 1.42.09.43-.06 1.37-.56 1.57-1.11.19-.55.19-1.01.13-1.11-.06-.1-.21-.16-.44-.27Z"
            />
          </svg>
        </a>

        {/* SUCCESS MODAL */}
        {successModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            {/* Overlay */}
            <div
              className="absolute inset-0 bg-black/20"
              onClick={closeModal}
            />
            {/* Modal Container */}
            <div className="relative z-10 w-full max-w-md rounded-3xl bg-[#F5EBE0] p-8 shadow-2xl animate-fade-in">
              {/* Header cu icon de succes */}
              <div className="mb-6 flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-green-200 opacity-20 blur-xl" />
                  <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-green-100 to-green-50 border-2 border-green-400">
                    <svg
                      className="h-10 w-10 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="mb-8 text-center">
                <h2 className="mb-3 font-serif text-2xl font-semibold text-[#3E2A20]">
                  Solicitare Trimisă cu Succes!
                </h2>
                <p className="text-[#5A4638] leading-relaxed">
                  Vă mulțumim pentru interes. Verificăm disponibilitatea și vă
                  contactăm pe email în cel mai scurt timp.
                </p>
              </div>

              {/* Info Box */}
              <div className="mb-8 rounded-2xl bg-[#FEFAE0] p-4 border border-[#E0D4C5]">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#7B6B5C] mb-2">
                  📧 Verifică emailul tău
                </p>
                <p className="text-sm text-[#5A4638]">
                  Vor putea dura 5-10 minute până ajunge confirmarea. Verifică și folderul Spam.
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col gap-3">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-semibold tracking-wide text-[#FEFAE0] bg-[#9C6644] hover:bg-[#846644] hover:shadow-lg shadow-md transition-all"
                  onClick={closeModal}
                >
                  ← Înapoi la Acasă
                </Link>
                <button
                  onClick={closeModal}
                  className="rounded-xl border border-[#8FB373] px-6 py-3 font-semibold text-[#8FB373] transition-colors hover:bg-[#8FB373]/5"
                >
                  Închide
                </button>
              </div>

              {/* Footer text */}
              <div className="mt-6 border-t border-[#E0D4C5] pt-4 text-center">
                <p className="text-xs text-[#7B6B5C]">
                  Pentru întrebări imediate, sunați-ne la{" "}
                  <a
                    href="tel:+40723886182"
                    className="font-semibold text-[#9C6644] hover:underline"
                  >
                    0723 886 182
                  </a>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

