import GlobalStyles from "@/styles/GlobalStyles";

export const metadata = {
  title: 'GitHub Profile Searcher',
  description: 'Buscador de perfis do GitHub',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
      <GlobalStyles />
        {children}
        </body>
    </html>
  );
}