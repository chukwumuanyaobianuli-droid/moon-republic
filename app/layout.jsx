import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Moon Republic - Learn Money-Making Skills',
  description: 'A vibrant community for young Nigerians to learn programming, forex, AI, and more.',
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-white font-sans">
        <Header />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  )
}
