export default function DaisyIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* Petale (Cream) */}
      <circle cx="12" cy="6" r="2.5" fill="#F5EBE0" stroke="#D4AF9F" strokeWidth="0.5" />
      <circle cx="16.5" cy="7.5" r="2.5" fill="#F5EBE0" stroke="#D4AF9F" strokeWidth="0.5" />
      <circle cx="18" cy="12" r="2.5" fill="#F5EBE0" stroke="#D4AF9F" strokeWidth="0.5" />
      <circle cx="16.5" cy="16.5" r="2.5" fill="#F5EBE0" stroke="#D4AF9F" strokeWidth="0.5" />
      <circle cx="12" cy="18" r="2.5" fill="#F5EBE0" stroke="#D4AF9F" strokeWidth="0.5" />
      <circle cx="7.5" cy="16.5" r="2.5" fill="#F5EBE0" stroke="#D4AF9F" strokeWidth="0.5" />
      <circle cx="6" cy="12" r="2.5" fill="#F5EBE0" stroke="#D4AF9F" strokeWidth="0.5" />
      <circle cx="7.5" cy="7.5" r="2.5" fill="#F5EBE0" stroke="#D4AF9F" strokeWidth="0.5" />

      {/* Centru (Galben/Verde Salvie) */}
      <circle cx="12" cy="12" r="3" fill="#E8C547" stroke="#D4AF9F" strokeWidth="0.5" />
      <circle cx="12" cy="12" r="1.5" fill="#8FB373" opacity="0.3" />
    </svg>
  );
}
