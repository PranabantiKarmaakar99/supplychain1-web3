import '@/styles/globals.css';

//Internal Imports
import {TrackingProvider} from "../context/tracking5.jsx";
import { Navbar,Footer } from '@/components/Index.jsx';

export default function App({ Component, pageProps }) {



  return (<>
  <TrackingProvider>
  <Navbar />
  <Component {...pageProps} />
  </TrackingProvider>
  <Footer />
  </>)
}
