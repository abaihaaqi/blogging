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
      <Navbar />
      <header>
        {title && (
          <div className="flex flex-col items-center max-w-4xl mx-auto px-2">
            {!home && (
              <h1 className="text-lg xl:text-2xl">{title}</h1>
            )}
            {author && (
              <p>
                Author : {author}
              </p>
            )}
            {!home && (
              <button className="text-blue-300" onClick={() => router.back()}>
                &larr; Back
              </button>
            )}
          </div>
        )}
      </header>
      <main className="container max-w-3xl py-4 px-2">{children}</main>
      <footer className="text-center">
        <p><a href="http://nizarbaihaqi.com" className="link" target="_blank" rel="noopener noreferrer">Nizar Baihaqi</a> @ 2022 | Minimalistic</p>
      </footer>
    </div>

  )
}