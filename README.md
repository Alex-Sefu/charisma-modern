# 🏨 Pensiunea Charisma - Site Oficial

Acesta este proiectul web pentru Pensiunea Charisma din Băile Herculane. Este un site modern, de tip broșură digitală, construit pentru a facilita rezervările directe. Gasiti site ul la "pensiune-charisma.ro"

## 📋 Informații Tehnice
- **Framework:** Next.js 14+ (App Router)
- **CSS:** Tailwind CSS
- **Componente:** Lucide React (pentru iconițe)
- **Formulare:** Web3Forms API (trimitere email)
- **Securitate:** hCaptcha

## ⚙️ Configurare (Setup)
Dacă vrei să lucrezi pe cod, după ce descarci arhiva:
1. Descarcă node_modules: `npm install`
2. Rulează proiectul: `npm run dev`

## 🔑 Chei API Necesare
Pentru ca site-ul să fie funcțional 100%, trebuie adăugate următoarele variabile de mediu (Environment Variables) în platforma de hosting (ex: Vercel):

- `NEXT_PUBLIC_WEB3FORMS_KEY`: Cheia primită de la Web3Forms pentru trimiterea mail-urilor.
- `NEXT_PUBLIC_HCAPTCHA_SITEKEY`: Site Key-ul de la hCaptcha pentru protecția formularului.

## 🌟 Funcționalități Implementate
- **Prețuri Dinamice:** Calculator automat în pagina de rezervare care schimbă tariful în funcție de lună și opțiunea de pat suplimentar.
- **Interfață Curată:** Design pe nuanțe de Verde Salvie și Crem.
- **Fără Bază de Date:** Am optat pentru o soluție serverless (email-based) pentru a elimina costurile de întreținere a unei baze de date.
- **Harta Interactivă:** Localizare precisă cu pinpoint în Băile Herculane.

## 📌 De Reținut pentru Hosting
- Site-ul este gata pentru a fi urcat pe Vercel (este recomandat pentru Next.js).
- Trebuie verificate căile imaginilor din folderul `/public` (să corespundă cu numele fișierelor foto reale).
- Am specificat clar în text că pensiunea NU are restaurant/mic dejun, deci nu trebuie modificate acele avertismente fără consultare.

---
Creat cu ajutorul AI pentru Pensiunea Charisma.
