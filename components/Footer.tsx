export default function Footer() {
  return (
    <footer className="border-t border-[#8FB373]/40 bg-[#F5EBE0]/95">
      <div className="mx-auto max-w-6xl px-4 py-8">
        {/* Main Footer Content */}
        <div className="flex flex-col items-center justify-between gap-4 pb-6 md:flex-row md:gap-3">
          <p className="text-xs text-[#7B6B5C]">
            &copy; {new Date().getFullYear()} Pensiunea Charisma. Toate drepturile
            rezervate.
          </p>
          <p className="flex items-center gap-2 text-xs text-[#7B6B5C]">
            Design modern-rustic
            <span className="font-serif text-[#3E2A20]"></span>.
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-[#E0D4C5] my-4"></div>

        {/* Legal Information Section */}
        <div className="text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-wide text-[#7B6B5C]">
            Informații Legale
          </p>
          <div className="flex flex-col items-center justify-center gap-2 text-xs text-[#8B7355] sm:flex-row sm:gap-4 md:gap-6">
            {/* ANPC Link */}
            <a
              href="https://anpc.ro/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[#3E2A20] hover:underline"
            >
              Protecția Consumatorului - ANPC
            </a>

            {/* Divider */}
            <span className="hidden text-[#D4AF9F] sm:inline">•</span>

            {/* Certificate Link */}
            <a
              href="/docs/certificat-clasificare.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[#3E2A20] hover:underline"
            >
              Certificat de Clasificare Pensiune (PDF)
            </a>

            {/* Divider */}
            <span className="hidden text-[#D4AF9F] sm:inline">•</span>

            {/* SOL Link */}
            <a
              href="https://ec.europa.eu/consumers/odr/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[#3E2A20] hover:underline"
            >
              Soluționarea Online a Litigiilor (SOL)
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
