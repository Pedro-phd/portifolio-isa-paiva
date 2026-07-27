import './globals.css';

export const metadata = {
  title: 'Isabelly Paiva — Marketing Digital',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Caveat:wght@500;600;700&family=Cherry+Bomb+One&family=Fraunces:opsz,wght,SOFT,WONK@9..144,400..900,0..100,0..1&family=Instrument+Sans:wght@300;400;500;600;700;800&family=Instrument+Serif:ital@0;1&family=Italianno&family=JetBrains+Mono:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
