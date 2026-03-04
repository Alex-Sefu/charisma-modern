import Navbar from "../../../components/Navbar";
import Link from "next/link";

export const metadata = {
  title: "Agrement — Ce este de văzut în oraș | Pensiunea Charisma",
};

export default function OrasPage() {
  return (
    <div className="min-h-screen bg-[#87A96B] text-[#3E2A20] font-sans antialiased">
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
      
      <div className="mx-auto max-w-6xl px-4 py-12">
        {/* Hero Section */}
        <div className="mb-12 rounded-2xl bg-[#F5EBE0] p-8 md:p-12">
          <h1 className="font-serif text-4xl md:text-5xl text-[#3E2A20] leading-tight">
            Ce este de văzut în oraș și împrejurimi
          </h1>
          <p className="mt-4 text-lg text-[#5A4638]">
            Descoperă atracțiile principale din Băile Herculane și împrejurimi, perfect pentru o zi de explorare și relaxare.
          </p>
        </div>

        {/* Grid Content */}
        <div className="grid gap-6 md:grid-cols-2 mb-12">
          <article className="rounded-2xl bg-[#F5EBE0] p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow">
            <h2 className="font-serif text-2xl text-[#3E2A20] mb-3">Excursii pe Dunăre — Orșova</h2>
            <p className="text-[#5A4638] leading-relaxed mb-4">
              Plimbări cu barca din Orșova oferă priveliști istorice și liniște, ideale pentru fotografii și relaxare pe ape. Peisajele dramatice ale Dunării vă vor cuceri.
            </p>
            <div className="bg-[#F5EBE0]/50 rounded-lg p-3 border-l-4 border-[#9C6644]">
              <p className="text-sm text-[#3E2A20]"><strong>Recomandat:</strong> Excursii de jumătate de zi; haine pentru vânt</p>
            </div>
          </article>

          <article className="rounded-2xl bg-[#F5EBE0] p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow">
            <h2 className="font-serif text-2xl text-[#3E2A20] mb-3">Cazanele Dunării</h2>
            <p className="text-[#5A4638] leading-relaxed mb-4">
              Trasee spectaculoase pe porțiunea îngustă a Dunării, cu stânci dramatice și biodiversitate locală. Un spectacol natural pe care nu trebuie să îl ratați.
            </p>
            <div className="bg-[#F5EBE0]/50 rounded-lg p-3 border-l-4 border-[#9C6644]">
              <p className="text-sm text-[#3E2A20]"><strong>Recomandat:</strong> Tururi ghidate, acces cu barca; nivel ușor-moderat</p>
            </div>
          </article>

          <article className="rounded-2xl bg-[#F5EBE0] p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow">
            <h2 className="font-serif text-2xl text-[#3E2A20] mb-3">Chipul lui Decebal</h2>
            <p className="text-[#5A4638] leading-relaxed mb-4">
              Monumentul sculptat în stâncă este o atracție emblematică — potrivit pentru scurte opriri foto și trasee scurte în natură. O opere de arhitectură și istorie.
            </p>
            <div className="bg-[#F5EBE0]/50 rounded-lg p-3 border-l-4 border-[#9C6644]">
              <p className="text-sm text-[#3E2A20]"><strong>Acces:</strong> Drum scurt din Orșova; vizitare liberă</p>
            </div>
          </article>

          <article className="rounded-2xl bg-[#F5EBE0] p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow">
            <h2 className="font-serif text-2xl text-[#3E2A20] mb-3">Cetatea Golubac (Serbia)</h2>
            <p className="text-[#5A4638] leading-relaxed mb-4">
              O cetate medievală spectaculoasă pe malul Dunării. Ușor accesibilă cu barca sau excursii organizate, oferă viste uimitoare și o lecție de istorie.
            </p>
            <div className="bg-[#F5EBE0]/50 rounded-lg p-3 border-l-4 border-[#9C6644]">
              <p className="text-sm text-[#3E2A20]"><strong>Acces:</strong> Excursii cu barca de la Orșova; durată 4-6 ore</p>
            </div>
          </article>
        </div>

        {/* Sfatul nostru Section */}
        <div className="mb-12 rounded-2xl bg-[#F5EBE0] p-8">
          <h2 className="font-serif text-2xl text-[#3E2A20] mb-3">Sfatul nostru</h2>
          <p className="text-[#5A4638] leading-relaxed">
            Pentru o experiență completă, combinați aceste atracții cu o zi de relaxare și odihna la Pensiunea Charisma. După explorarea orașului, vă așteptăm cu o atmosferă de neuitat.
          </p>
        </div>

        {/* Back Button */}
        <div className="flex justify-center">
          <Link href="/" className="inline-flex items-center justify-center gap-2 rounded-xl px-8 py-3 font-medium tracking-wide text-[#FEFAE0] bg-[#9C6644] hover:bg-[#846644] shadow-md hover:shadow-lg transition-all">
            ← Înapoi la pagina principală
          </Link>
        </div>
      </div>
    </div>
  );
}

