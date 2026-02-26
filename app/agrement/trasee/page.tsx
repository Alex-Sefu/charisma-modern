import Navbar from "../../../components/Navbar";
import Link from "next/link";
import { Clock, MapPin, Activity } from "lucide-react";

export const metadata = {
  title: "Agrement — Trasee turistice | Pensiunea Charisma",
};

export default function TraseePage() {
  const trails = [
    {
      name: "Cheile Pecinișcăi",
      description: "Un traseu spectaculos prin prapastii și vegetație bogată. Ideal pentru fotografi și iubitori de natură.De la Podul Cernei (din cartierul Pecinisca) până la Cheile Pecinișcăi se parcurg 2 km pe un drum nemodernizat.",
      mark: "Bandă galbenă",
      time: "3-4 ore",
      difficulty: "Moderată",
    },
    {
      name: "Cheile Feregari",
      description: "Prapastii dramatice cu raci și cascade ascunse. Traseu mai ușor, perfecte pentru familii cu copii.Traseu de lagătură între Valea Cernei (Herculane) și plaiurile mehedințene (Podeni).",
      mark: "Punct roșu",
      time: "2-3 ore",
      difficulty: "Ușoară-Moderată",
    },
    {
      name: "Strand Termal 7 Izvoare",
      description: "O frumoasă cascadă într-un amfiteatru natural. Traseu scurt și accesibil, ideal pentru o jumătate de zi.",
      mark: "punct roșu",
      time: "1.5-2 ore",
      difficulty: "Ușoară",
    },
    {
      name: "Cascada Vânturătoarea",
      description: "O cascadă impresionantă cu o cădere de peste 30 de metri. Traseu scurt, dar abrupt, potrivit pentru cei care doresc o provocare rapidă.",
      mark: "Cruce rosie",
      time: "2 ore",
      difficulty: "Scazuta-Moderată",

    },
    {
      name: "Traseu Elisabeta",
      description: "Un traseu de cu o vedere spectaculoasă asupra orasului. Ideal pentru o plimbare relaxantă în natură.",
      mark: "diverse marcaje",
      time: "3 ore",
      difficulty: "Ușoară-Moderată",
      
    },
    {
      name: "Crucea Alba",
      description: "Traseul până la Crucea Albă urcă în serpentine, ultima parte din aceasta fiind mai îngustă şi poate reprezenta o problemă pentru cei care au rău de înălţime.",
      mark: "Cruce albastră",
      time: "4 ore",
      difficulty: "Scazuta",
      
    },
  ];

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
            Trasee turistice recomandate
          </h1>
          <p className="mt-4 text-lg text-[#5A4638]">
            Explorează cele mai frumoase trasee de drumeții din Băile Herculane și împrejurimi, potrivite pentru toți nivelurile de experiență.
          </p>
        </div>

        {/* Grid Content */}
        <div className="grid gap-6 md:grid-cols-2 mb-12">
          {trails.map((trail) => (
            <div key={trail.name} className="rounded-2xl bg-[#F5EBE0] p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow">
              <h2 className="font-serif text-2xl text-[#3E2A20] mb-2">{trail.name}</h2>
              <p className="text-[#5A4638] leading-relaxed mb-4">{trail.description}</p>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[#9C6644]" />
                  <span className="text-[#3E2A20]"><strong>Timp:</strong> {trail.time}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-[#9C6644]" />
                  <span className="text-[#3E2A20]"><strong>Marcaj:</strong> {trail.mark}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Activity className="w-5 h-5 text-[#9C6644]" />
                  <span className="text-[#3E2A20]"><strong>Dificultate:</strong> {trail.difficulty}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Info Section */}
        <div className="mb-12 rounded-2xl bg-[#F5EBE0] p-8">
          <h2 className="font-serif text-2xl text-[#3E2A20] mb-4">Informații importante</h2>
          <div className="space-y-3 text-[#5A4638]">
           
            <p>
              <strong className="text-[#3E2A20]">Echipament necesar:</strong> Pantofi de drumeție confortabili, rucsac cu apă și mâncare ușoară și protecție solară.
            </p>
            <p>
              <strong className="text-[#3E2A20]">Sezonul optim:</strong> Primăvară și toamnă pentru climat plăcut. Veri calde, ierni cu zăpadă — verificați condiții înainte de plecere.
            </p>
          </div>
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
