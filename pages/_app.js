import '../styles/globals.css'
import { AppProvider } from '../context/context'
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        {/* Other meta tags and stylesheets go here */}
      </Head>
      <Component {...pageProps} />
    </AppProvider>
  )
}

export default MyApp
