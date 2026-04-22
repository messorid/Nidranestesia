import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import WhatsAppFloat from "./components/WhatsAppFloat";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const BASE_URL = "https://www.nidranestesia.com";

export const metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Nidra | Servicios Anestésicos — Barinas, Venezuela",
    template: "%s | Nidra Barinas",
  },
  description:
    "Servicios anestésicos de alto nivel en Barinas, Venezuela. Valoración anestésica preoperatoria, sedación para procedimientos fuera de quirófano y analgesia postoperatoria. Seguridad y profesionalismo en cada procedimiento.",
  keywords: [
    "anestesiología Barinas",
    "anestesiólogo Barinas",
    "valoración anestésica",
    "sedación Barinas",
    "analgesia postoperatoria",
    "servicios anestésicos Venezuela",
    "Nidra anestesia",
  ],
  authors: [{ name: "Nidra Servicios Anestésicos" }],
  creator: "Nidra Servicios Anestésicos",
  openGraph: {
    type: "website",
    locale: "es_VE",
    url: BASE_URL,
    siteName: "Nidra Servicios Anestésicos",
    title: "Nidra | Servicios Anestésicos — Barinas, Venezuela",
    description:
      "Anestesiología de alto nivel en Barinas. Valoración preoperatoria, sedación y analgesia postoperatoria. Seguridad y profesionalismo en cada procedimiento.",
    images: [
      {
        url: "/hero.png",
        width: 1200,
        height: 630,
        alt: "Nidra Servicios Anestésicos — Barinas, Venezuela",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nidra | Servicios Anestésicos — Barinas",
    description:
      "Anestesiología de alto nivel en Barinas. Valoración preoperatoria, sedación y analgesia postoperatoria.",
    images: ["/hero.png"],
  },
  icons: {
    icon: [
      { url: "/assets/nidra-icon.png", type: "image/png" },
    ],
    apple: "/assets/nidra-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="min-h-screen antialiased">
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
