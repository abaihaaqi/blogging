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
          <div>
            <h1 className="text-center">{title}</h1>
            {author && (
              <p>
                Author : {author}
              </p>
            )}
            {!home && (
              <button className="text-blue-800" onClick={() => router.back()}>
                &larr; Back
              </button>
            )}
          </div>
        )}
      </header>
      <main className="container max-w-screen-md py-4 px-2">{children}</main>
      <footer className="text-center">
        <p><a href="http://nizarbaihaqi.com" className="link" target="_blank" rel="noopener noreferrer">Nizar Baihaqi</a> @ 2022</p>
      </footer>
    </div>

  )
}