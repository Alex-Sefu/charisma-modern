"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  // Array de imagini din public/images/poze/ - editeaza cu numele reale ale fisierelor
  const galleryImages = [
    "charisma.jpg",
    "casuta2.jpg",
    "casuta1.jpg",
    "curte1.jpg",
    "piscina5.jpg",
  ];

  // Lightbox handler
  const handleCloseModal = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-[#8FB373] text-[#3E2A20] font-sans antialiased">
      {/* Background texturat subtil peste verde salvie */}
      <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18)_0,_transparent_55%)]">
        <Navbar />

        {/* HERO + WIDGET DISPONIBILITATE */}
        <section id="hero" className="relative">
          {/* Imagine încadrată în bordură verde salvie */}
          <div className="relative mx-auto mt-4 h-[70vh] max-w-6xl border border-[#8FB373] bg-[#FEFAE0] md:h-[80vh] md:rounded-3xl md:shadow-sm overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: "url('/images/poze/pensiune.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/55 via-black/40 to-black/25" />

            {/* Conținut Hero */}
            <div className="relative mx-auto flex h-full max-w-4xl flex-col justify-center px-6 md:px-10">
              <div className="max-w-xl">
                <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#FEFAE0]/80 md:text-sm">
                  Pensiune în Băile Herculane
                </p>
                <h1 className="mb-4 font-serif text-3xl leading-tight text-[#FEFAE0] md:text-5xl lg:text-6xl">
                  Eleganță rustică și Confort
                  <br />în Inima Naturii
                </h1>
                <p className="mb-8 max-w-md text-sm text-[#FEFAE0]/85 md:text-base">
                  Pensiunea Charisma este o oază de liniște situată chiar în mijlocul naturii, acolo unde muntele întâlnește 
                  șoapta discretă a râului Cerna, care curge chiar prin spatele curții noastre. 
                  Aici, aerul tare de munte și priveliștea panoramică te invită la deconectare totală.<br/><br/>
                  Design modern-rustic, camere primitoare și
                  priveliști montane, la câțiva pași de izvoarele termale din
                  Băile Herculane.Inspirati si de dorințele celor care ne-au vizitat pana acum, am reusit 
                  – credem noi – sa oferim un spatiu placut, intim, de neuitat.<br/>
                
                </p>
              </div>
            </div>


          </div>
        </section>

        {/* SPACER după card */}
        <div className="h-24 md:h-28" />

        {/* SECȚIUNE CAMERE */}
        <section id="cazare" className="border-y border-[#8FB373]/40 bg-[#F5EBE0]/80 py-12 md:py-16">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left: Text details */}
              <div>
                <p className="mb-2 text-xs uppercase tracking-[0.35em] text-[#7B6B5C]">
                  CAMERE 
                </p>
                <h2 className="mb-3 font-serif text-2xl text-[#3E2A20] md:text-3xl">
                  Spații de cazare cu suflet,
                  <br className="hidden md:block" />
                  create pentru relaxare autentică
                </h2>

                <div className="mt-6 space-y-4 text-sm text-[#5A4638]">
                  <p>
                    Pensiunea noastră dispune de un total de <strong>12 camere duble</strong>. Fiecare spațiu este proiectat cu atenție la detalii, garantând confort și
                    intimitate pentru fiecare oaspete.
                  </p>
                   <p>
                  Fiecare cameră îmbină texturi naturale pentru seri liniștite după o zi petrecută în aerul curat
                  al munților Cernei.<br/> <br/>
                  Deoarece spatiile de cazare sunt retrase față de șoseaua principală, zgomotul mașinilor este înlocuit de sunetul naturii. 
                  Te bucuri de un somn odihnitor în spații de cazare intime, unde singura 'tulburare' este cântecul păsărilor la răsărit.
                </p>
                  <p>
                    <strong>Camera dublă</strong> - Ideală pentru cupluri, cu pat matrimonial confortabil, terasă și vedere către grădină.
                  </p>
                  <p>
                    <strong>Pat suplimentar</strong> - Perfect pentru familii cu copii care doresc un plus de
                    confort.
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-3 text-xs text-[#7B6B5C]">
                  <span className="inline-flex items-center gap-1.5">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                      <path d="M5 12.55a11 11 0 0 1 14.08 0" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M8.5 16a6 6 0 0 1 7 0" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M12 20h.01" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Wifi
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                      <rect x="3" y="7" width="18" height="12" rx="2" ry="2" />
                      <path d="M9 3l3 3 3-3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    TV
                  </span>
                </div>

                <div className="mt-6 text-xs text-[#7B6B5C] md:text-sm">
                  Check-in de la <span className="font-medium">14:00</span>, check-out până la <span className="font-medium">11:00</span>.
                </div>
              </div>

              {/* Right: Video presentation */}
              <div className="w-full flex items-center justify-center">
                <div className="rounded-3xl overflow-hidden shadow-lg border-4 border-[#8FB373]">
                  <video
                    src="/images/charisma_video.mp4"
                    poster="/images/poze/camera6.jpg"
                    controls
                    playsInline
                    className="w-full h-[400px] lg:h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECȚIUNE TARIFE */}
        <section className="bg-[#8FB373] py-12 md:py-16">
          <div className="mx-auto max-w-6xl px-4">
            {/* Tabel Tarife 2025 */}
            <div className="rounded-2xl border border-[#8FB373]/40 bg-[#FEFAE0] p-6 md:p-8 overflow-x-auto">
              <h3 className="mb-4 font-serif text-xl text-[#3E2A20] md:text-2xl">
                Tarife 2026- Cameră Dublă
              </h3>
              <table className="w-full text-sm md:text-base">
                <thead>
                  <tr className="border-b-2 border-[#8FB373]/30">
                    <th className="text-left px-3 py-3 font-semibold text-[#3E2A20]">
                      Perioada
                    </th>
                    <th className="text-right px-3 py-3 font-semibold text-[#3E2A20]">
                      Tarif/Noapte
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#E0D4C5] hover:bg-[#F5EBE0]/50 transition">
                    <td className="px-3 py-3 text-[#5A4638]">5 Ianuarie - 31 Martie</td>
                    <td className="text-right px-3 py-3 font-medium text-[#3E2A20]">220 RON</td>
                  </tr>
                  <tr className="border-b border-[#E0D4C5] hover:bg-[#F5EBE0]/50 transition">
                    <td className="px-3 py-3 text-[#5A4638]">1 Aprilie - 30 Aprilie</td>
                    <td className="text-right px-3 py-3 font-medium text-[#3E2A20]">230 RON</td>
                  </tr>
                  <tr className="border-b border-[#E0D4C5] hover:bg-[#F5EBE0]/50 transition">
                    <td className="px-3 py-3 text-[#5A4638]">1 Mai - 31 Mai</td>
                    <td className="text-right px-3 py-3 font-medium text-[#3E2A20]">240 RON</td>
                  </tr>
                  <tr className="border-b border-[#E0D4C5] hover:bg-[#F5EBE0]/50 transition">
                    <td className="px-3 py-3 text-[#5A4638]">1 Iunie - 30 Iunie</td>
                    <td className="text-right px-3 py-3 font-medium text-[#3E2A20]">250 RON</td>
                  </tr>
                  <tr className="border-b border-[#E0D4C5] hover:bg-[#F5EBE0]/50 transition">
                    <td className="px-3 py-3 text-[#5A4638]">1 Iulie - 31 August</td>
                    <td className="text-right px-3 py-3 font-medium text-[#3E2A20]">300 RON</td>
                  </tr>
                  <tr className="border-b border-[#E0D4C5] hover:bg-[#F5EBE0]/50 transition">
                    <td className="px-3 py-3 text-[#5A4638]">1 septembrie - 30 Septembrie</td>
                    <td className="text-right px-3 py-3 font-medium text-[#3E2A20]">250 RON</td>
                  </tr>
                  <tr className="hover:bg-[#F5EBE0]/50 transition">
                    <td className="px-3 py-3 text-[#5A4638]">1 Octombrie - 20 Decembrie</td>
                    <td className="text-right px-3 py-3 font-medium text-[#3E2A20]">230 RON</td>
                  </tr>
                </tbody>
              </table>
              <div className="mt-4 pt-4 border-t border-[#E0D4C5] text-xs text-[#5A4638]">
                <p><span className="font-semibold text-[#3E2A20]">📌 Tarife suplimentare:</span> Copii peste 9 ani / Pat suplimentar: <span className="font-semibold">50 RON/zi</span></p>
                <p className="mt-2"><span className="font-semibold text-[#3E2A20]">✓ Notă:</span> Prețul final va fi confirmat telefonic sau prin email.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FACILITĂȚI */}
        <section
          id="facilitati"
          className="border-y border-[#8FB373]/40 bg-[#F5EBE0]/80 py-10 md:py-14"
        >
          <div className="mx-auto max-w-6xl px-4">
            <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
              <div className="md:max-w-md">
                <p className="mb-2 text-xs uppercase tracking-[0.35em] text-[#7B6B5C]">
                  FACILITĂȚI
                </p>
                <h2 className="mb-3 font-serif text-2xl text-[#3E2A20] md:text-3xl">
                  Detalii care transformă
                  <br className="hidden md:block" />
                  un sejur într-o amintire dragă
                </h2>
                <p className="text-sm text-[#5A4638] md:text-base">
                  De la foișoarele unde puteți servi masa, la zona de relaxare în aer liber de pe malul Cernei,
                  la care avem deschidere,
                   Pensiunea Charisma este gândită pentru a te reconecta cu
                  natura, fără a renunța la confortul modern.<br/><br/>
                  Malul Cernei este locul preferat al oaspeților noștri pentru momentele de reculegere sau pentru poveștile de seară. 
                  Este un privilegiu rar să ai muntele în față și răul la picioare, toate acestea în intimitatea unei curți private, 
                  unde natura rămâne neatinsă și sălbatică<br/><br/> 
                  Copiii sunt prioritari la noi. Ne-am asigurat că părinții se pot relaxa cu adevărat, oferind o curte mare si un loc de joaca pentru copii,
                   unde cei mici se pot juca în deplină siguranță.
                </p>
              </div>

              <div className="grid flex-1 grid-cols-1 gap-4 text-sm sm:grid-cols-2">
                <div className="rounded-xl border border-[#E0D4C5] bg-[#FEFAE0] p-4">
                  <h3 className="mb-1.5 font-medium text-[#3E2A20]">
                    Piscină exterioară
                  </h3>
                  <p className="text-sm text-[#5A4638]">
                    Piscină sezonieră cu șezlonguri și zonă verde, perfectă
                    pentru zilele calde de vară.
                  </p>
                </div>
                <div className="rounded-xl border border-[#E0D4C5] bg-[#FEFAE0] p-4">
                  <h3 className="mb-1.5 font-medium text-[#3E2A20]">
                    Foișor & Grătar
                  </h3>
                  <p className="text-sm text-[#5A4638]">
                    Foișor rustic din lemn, grătar și spații comune pentru seri
                    relaxante cu prietenii.
                  </p>
                </div>
                <div className="rounded-xl border border-[#E0D4C5] bg-[#FEFAE0] p-4">
                  <h3 className="mb-1.5 font-medium text-[#3E2A20]">
                    Parcare privată
                  </h3>
                  <p className="text-sm text-[#5A4638]">
                    Parcare gratuită, supravegheată, direct în incinta pensiunii.
                  </p>
                </div>
                <div className="rounded-xl border border-[#E0D4C5] bg-[#FEFAE0] p-4">
                  <h3 className="mb-1.5 font-medium text-[#3E2A20]">
                    Wi-Fi & Recepție
                  </h3>
                  <p className="text-sm text-[#5A4638]">
                    Conexiune Wi-Fi în întreaga pensiune și recepție gata să te
                    ajute cu recomandări locale.
                  </p>
                </div>
                <div className="rounded-xl border border-[#E0D4C5] bg-[#FEFAE0] p-4">
                  <h3 className="mb-1.5 font-medium text-[#3E2A20]">
                    🎪 Loc de joacă pentru copii
                  </h3>
                  <p className="text-sm text-[#5A4638]">
                    Spațiu sigur și echipat în curtea pensiunii, ideal pentru ca cei mici să se joace și să se distreze în aer liber, sub supravegherea părinților.
                  </p>
                </div>
                <div className="col-span-1 sm:col-span-2 rounded-xl border border-[#D4AF9F] bg-[#F5EBE0] p-4">
                  <p className="text-sm text-[#3E2A20] font-medium">
                    ℹ️ Mențiune importantă:
                  </p>
                  <p className="text-sm text-[#5A4638] mt-1.5">
                    Pensiunea nu dispune de restaurant și nu servește mic dejun. 
                    Oaspeții au acces la o bucătărie comună complet echipată și la 
                    spații de grătar în aer liber pentru a se pregăti propriile mese.<br/> <br/>
                    De asemnea, din motive de igienă nu este permis accesul cu animale de companie 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* GALERIE FOTO */}
        <section id="galerie" className="bg-[#8FB373] py-12 md:py-16">
          <div className="mx-auto max-w-6xl px-4">
            <div className="mb-10 text-center">
              <p className="mb-2 text-xs uppercase tracking-[0.35em] text-[#FEFAE0]/80">
                GALERIE FOTO
              </p>
              <h2 className="font-serif text-2xl text-[#FEFAE0] md:text-3xl">
                Descoperă frumusețea Pensiunii Charisma
              </h2>
              <p className="mt-3 max-w-2xl mx-auto text-sm text-[#FEFAE0]/90 md:text-base">
                Imagini din camerele noastre, grădina, piscină și facilități dedicate relaxării și confortului.
              </p>
            </div>

            {/* Grid Galerie */}
            <div className="grid gap-4 md:gap-6 grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
              {galleryImages.slice(0, 4).map((img, idx) => (
                <div
                  key={idx}
                  className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group"
                  onClick={() => setSelectedImage(img)}
                >
                  <Image
                    src={`/images/poze/${img}`}
                    alt={`Galerie imagine ${idx + 1}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              ))}

              {/* Imagine cu overlay "Vezi tot" */}
              <Link
                href="/galerie"
                className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer"
              >
                <Image
                  src={`/images/poze/${galleryImages[4]}`}
                  alt="Vezi întreaga galerie"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-colors flex flex-col items-center justify-center">
                  <div className="text-white text-4xl md:text-5xl font-light mb-2">+</div>
                  <p className="text-white text-sm md:text-base font-medium text-center px-2">
                    Vezi întreaga galerie
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* CONTACT + HARTĂ */}
        <section
          id="contact"
          className="border-t border-[#8FB373]/40 bg-[#F5EBE0]/90 py-12 md:py-16"
        >
          <div className="mx-auto max-w-6xl px-4">
            <p className="mb-8 text-xs uppercase tracking-[0.35em] text-[#7B6B5C]">
              CONTACT
            </p>
            
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-8">
              {/* Contact Card - Left */}
              <div className="rounded-xl border border-[#E0D4C5] bg-[#FEFAE0] p-6 text-sm h-full">
                <h3 className="mb-4 font-medium text-[#3E2A20]">
                  Date de contact
                </h3>
                <p className="text-[#5A4638] mb-4">
                  <span className="font-medium">Adresă:</span>
                  <br />
                  Strada Trandafirilor nr. 137,
                  <br />
                  Băile Herculane, Caraș-Severin, 325200, România
                </p>
                <p className="text-[#5A4638] mb-4">
                  <span className="font-medium">Telefon:</span>
                  <br/> 
                  0723 886 182 
                  <br />
                  0255 561 381
                </p>
                <p className="text-[#5A4638] mb-4">
                  <span className="font-medium">Email:</span>
                  <br/>
                  info@pensiunea-charisma.ro
                </p>
                <p className="text-[#5A4638] mb-4">
                  <span className="font-medium">Informații bancare:</span>
                  <br/>
                  DRĂGULESCU FLOAREA INT. IND.<br/>
                  IBAN: RO48BRDE260SV69315812600<br/>
                  Moneda: RON
                </p>
                <div className="border-t border-[#E0D4C5] pt-4">
                  <p className="text-xs text-[#7B6B5C]">
                    <span className="font-medium text-[#3E2A20]">Notă:</span> Pensiunea noastră este 
                    extrem de ușor de găsit. Imediat dupa intrarea in Stațiunea Băile-Herculane, 
                    pe Strada Trandafirilor la numărul 137, pe partea dreapta o sa observați 
                    vilele noastre (de culoare verde).<br/>Daca ati rezervat deja, si ati sosit cu mașina,
                     va invitam sa intrați in pensiune, sa parcati si sa va înregistrați la recepție.
                     <br/>In cazul in care nu ati rezervat si cautati doar o camera libera, va rugam sa lasati
                      autoturismul afara (din motive de securitate) 
                    si sa ne cautati la receptie unde veti obtine informatiile dorite.
                  </p>
                </div>
              </div>

              {/* Map - Right */}
              <div className="overflow-hidden rounded-2xl border border-[#E0D4C5] shadow-md h-full">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2828.1432346767015!2d22.393690076470335!3d44.85937877107052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47518cfd83f25ecd%3A0xe9c1e86ddd69777a!2sCHARISMA!5e0!3m2!1sro!2sro!4v1771261507448!5m2!1sro!2sro" 
                  width="100%" 
                  height="100%"  
                  allowFullScreen={true}
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  style={{ border: 0, minHeight: '350px' }}
                />
              </div>
            </div>
          </div>
        </section>

        

        {/* TESTIMONIALS */}
        <section className="bg-[#FEFAE0] py-12 md:py-16">
          <div className="mx-auto max-w-6xl px-4">
            <div className="mb-10 text-center">
              <p className="mb-2 text-xs uppercase tracking-[0.35em] text-[#7B6B5C]">
                EXPERIENȚA OASPEȚILOR
              </p>
              <h2 className="font-serif text-2xl text-[#3E2A20] md:text-3xl">
                Ce spun oaspeții noștri
              </h2>
              <p className="mt-3 max-w-2xl mx-auto text-sm text-[#5A4638] md:text-base">
                Mii de oameni au găsit în Pensiunea Charisma locul perfect pentru a se relaxa și a se reconecta cu natura.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {/* Review 1 */}
              <article className="rounded-2xl border border-[#E0D4C5] bg-[#FEFAE0] p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-4 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-5 w-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="mb-4 font-serif text-[#3E2A20] text-base">
                    "Am citit numai lucruri bune despre aceasta pensiune si m-am convins 
                    săptămâna trecuta ca este super,nu am nimic de reproșat. Am fost cu
                     băiețelul de 1 an, curtea este superba, plina de flori, loc de joaca 
                     pentru copii, bucătăria avea de toate, camerele frumos mobilate,curate
                      si căldura in camere. Suntem foarte mulțumiți, ne-am simțit excelent.
                       Va mulțumim!"                </blockquote>
                <div>
                  <p className="font-medium text-[#3E2A20]">Magda din Arad</p>
                </div>
              </article>

              {/* Review 2 */}
              <article className="rounded-2xl border border-[#E0D4C5] bg-[#FEFAE0] p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-4 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-5 w-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="mb-4 font-serif text-[#3E2A20] text-base">
„Numai cine nu merge acolo poate spune ceva de rău despre aceasta pensiune, care depășește din punct de vedere al calității serviciilor si dotărilor, nivelul multor hoteluri si pensiuni cu pretenții foarte mari!
Pentru cei care vor sa se simtă cu adevarat bine dupa un drum obositor pana la Herculane va recomand sa va faceți rezervări din timp la aceasta pensiune,si nu veți regreta!!…”                </blockquote>
                <div>
                  <p className="font-medium text-[#3E2A20]">Bogdan din Galati</p>
                </div>
              </article>

              {/* Review 3 */}
              <article className="rounded-2xl border border-[#E0D4C5] bg-[#FEFAE0] p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-4 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-5 w-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="mb-4 font-serif text-[#3E2A20] text-base">
„O pensiune superba la un preț excelent. Suntem din Constanta si am găsit aici un loc de vis, totul este ireproșabil de la apa in piscina si pana la curățenia din camere. Curtea este generoasa, copiii se pot juca in voie, in timp ce adulții fac un grătar sau se odihnesc sub foișoarele pline de flori.
Va mulțumim, vom reveni cu siguranță!”                </blockquote>
                <div>
                  <p className="font-medium text-[#3E2A20]">Burnichi Mari, Adi si Alexandra din Constanta</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <Footer />

        {/* Buton WhatsApp flotant */}
        <a
          href="https://wa.me/40723886182?text=Bună%20ziua!%20Doresc%20informații%20despre%20disponibilitatea%20la%20Pensiunea%20Charisma."
          target="_blank"
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

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            onClick={handleCloseModal}
            className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4"
          >
            <div className="relative w-full max-w-4xl">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-2 right-2 text-white hover:bg-white/20 rounded-full p-2 transition"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <Image
                src={`/images/poze/${selectedImage}`}
                alt="Lightbox image"
                width={1200}
                height={800}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
