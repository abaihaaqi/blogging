import Head from 'next/head'
import Link from 'next/link'
import Layout from '~/components/layout.js'

export default function Home () {
  return (
    <Layout home>
      <Head>
        <title>Articles - Nizar Baihaqi</title>
      </Head>
      <main>
        <h1>
          Welcome to my blog 📝
        </h1>
        <p>
          Go to <Link href="/posts">All articles</Link>
        </p>
      </main>
    </Layout>
  )
}
