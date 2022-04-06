import { useRouter } from "next/router"
import MetaTags from "./MetaTags"
import Navbar from "./Navbar"

export default function Layout({ children, home, title, metaContent }) {
  const router = useRouter()

  return (
    <>
      <MetaTags {...metaContent} />
      <Navbar home={home} />
      <header>
        <div className={(!home ? `h-[70vh] ` : `h-[40vh] ` ) + `flex flex-col justify-center items-center text-center max-w-4xl mx-auto px-2`}>
          <h1 className="text-lg xl:text-2xl mb-6">{title}</h1>
          {!home && (
            <button className="text-blue-300" onClick={() => router.back()}>
              &larr; Back
            </button>
          )}
        </div>
      </header>
      <main className={(!home ? `bg-slate-800 ` : '') + `rounded-xl container max-w-3xl py-3 px-4`}>
        <article>
          {children}
        </article>
      </main>
      <footer className="text-center">
        <p><a href="http://nizarbaihaqi.com" className="link" target="_blank" rel="noopener noreferrer">Nizar Baihaqi</a> @ 2022 | Dark Minimalistic</p>
      </footer>
    </>
  )
}