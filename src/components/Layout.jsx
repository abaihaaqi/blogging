import Head from "next/head"
import { useRouter } from "next/router"
import Navbar from "./Navbar"

export default function Layout({ children, home, title, author }) {
  const router = useRouter()

  return (
    <div>
      <Head>
        <title>{title} - Nizar Baihaqi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar home={home} />
      {!home && (
        <header>
          <div className={(!home ? `h-[70vh] ` : '' ) + `flex flex-col justify-center items-center text-center max-w-4xl mx-auto px-2`}>
            <>
              <h1 className="text-lg xl:text-2xl mb-6">{title}</h1>
              <button className="text-blue-300" onClick={() => router.back()}>
                &larr; Back
              </button>
            </>
          </div>
        </header>
      )}
      <main className="container max-w-3xl py-4 px-2">{children}</main>
      <footer className="text-center">
        <p><a href="http://nizarbaihaqi.com" className="link" target="_blank" rel="noopener noreferrer">Nizar Baihaqi</a> @ 2022 | Dark Minimalistic</p>
      </footer>
    </div>

  )
}