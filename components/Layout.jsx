import Image from "next/image"
import { useRouter } from "next/router"
import MetaTags from "./MetaTags"
import Navbar from "./Navbar"
import defaultImg from '~~/public/images/default.png'

export default function Layout({ children, home, title, img, metaContent }) {
  const router = useRouter()

  return (
    <>
      <MetaTags {...metaContent} />
      <Navbar home={home} />
      <header className={(!home ? `h-[70vh] ` : `h-[40vh] ` ) + `relative mb-4`}>
        <Image src={img || defaultImg} alt={`${title} image`} layout="fill" objectFit="cover" />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-lg" />
        <div className="flex flex-col justify-center items-center text-center max-w-4xl mx-auto px-2 absolute inset-0 z-10">
          <h1 className="text-lg xl:text-2xl mb-6">{title}</h1>
          {!home && (
            <button className="text-blue-300" onClick={() => router.back()}>
              &larr; Back
            </button>
          )}
        </div>
      </header>
      <main className={(!home ? `bg-white/5 ` : '') + `md:rounded-xl container max-w-3xl py-3 px-4`}>
        <article>
          {children}
        </article>
      </main>
      <footer className="text-center my-6">
        <p><a href="http://nizarbaihaqi.com" className="link" target="_blank" rel="noopener noreferrer">Nizar Baihaqi</a> @ 2022 | Dark Minimalistic</p>
      </footer>
    </>
  )
}