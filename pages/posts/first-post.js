import Head from "next/head"
import Link from "next/link"
import Script from "next/script"
import Layout from "../../components/layout"

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post - Nizar Baihaqi</title>
      </Head>
      <Script
        src="https:/connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <div>
        <h1>First Post</h1>
        <Link href="/">
          <a>Back &rarr;</a>
        </Link>
      </div>
    </Layout>
  )
}