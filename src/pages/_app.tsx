// ADD GLOBAL STYLING due to convention in _app file
// you can add anything like material ui or bootstrap here
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
