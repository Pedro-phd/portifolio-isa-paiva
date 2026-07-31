import './globals.css';
import { Caveat, Instrument_Sans, Instrument_Serif } from 'next/font/google';

export const metadata = {
  title: 'Paiva & Co.',
  description:
    'Estratégia, identidade visual, fotografia gastronômica e presença digital.',
};

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-gp-sans',
  display: 'swap',
});

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  variable: '--font-gp-serif',
  display: 'swap',
  weight: '400',
});

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-gp-hand',
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="pt-BR"
      className={`${instrumentSans.variable} ${instrumentSerif.variable} ${caveat.variable}`}
    >
      <body>
        {children}
      </body>
    </html>
  );
}
