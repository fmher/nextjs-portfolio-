import '@/styles/globals.css'
import Navbar from '../components/Navbar'

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* navbar below */}
      <Navbar />

      {/* always needs to bottom line of code on this page */}
      <Component {...pageProps} />
    </>
  )
}
