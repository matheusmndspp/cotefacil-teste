import '../styles/globals.css'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
