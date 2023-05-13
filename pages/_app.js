import '@/styles/globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Dummy from '@/components/Dummy'
export default function App({ Component, pageProps }) {
  return(

    <>
    {/* <Dummy/> */}
    {/* <Navbar/> */}
    <Component {...pageProps} />
    {/* <Footer/> */}
    </>
  )

}
