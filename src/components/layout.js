import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const name = 'Nizar Baihaqi'
export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children }) {
  return (
    <div className="">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="">
        <h1>Nizar Baihaqi</h1>
      </header>
      <main>{children}</main>
    </div>
  )
}
