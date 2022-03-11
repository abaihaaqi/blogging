import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false
import '~/styles/global.css'

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}