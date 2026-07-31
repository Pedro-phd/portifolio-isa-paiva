import './globals.css';
import { Caveat, Instrument_Sans, Instrument_Serif } from 'next/font/google';

export const metadata = {
  title: 'Isabelly Paiva — Marketing Digital',
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
      <head>
        {/* globals.css (usado pela home) referencia familias pelo nome literal.
            Instrument Sans, Instrument Serif e Caveat ja vem self-hosted pelo
            next/font acima, com esses mesmos nomes. Repeti-las aqui criaria um
            @font-face concorrente e quebraria o italico serif de /food.
            Do Google vem so o que o next/font nao fornece. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Fraunces:opsz,wght,SOFT,WONK@9..144,400..900,0..100,0..1&family=JetBrains+Mono:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
