import Head from "next/head"
import { useRouter } from "next/router"

export default function Layout({ children, home, title, author }) {
  const router = useRouter()

  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        {home ? (
          <div className="bg-blue-300 text-center w-full text-sm py-1">
            This brand new website created 7 March 2022 in the morning vibe ✨
          </div>
        ) : (
          <div className="bg-jar flex flex-col justify-center items-center h-[50vh]">
            <h1>{title}</h1>
            {author && (
              <p>
                Author : {author}
              </p>
            )}
            <button className="text-blue-800" onClick={() => router.back()}>
              &larr; Back
            </button>
          </div>
        )}
      </header>
      <main className="container max-w-screen-md py-4 px-2">{children}</main>
      
      <style jsx>{`
      .bg-jar {
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask2552%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='url(%23SvgjsLinearGradient2553)'%3e%3c/rect%3e%3cpath d='M1440 0L1379.82 0L1440 178.59z' fill='rgba(255%2c 255%2c 255%2c .1)'%3e%3c/path%3e%3cpath d='M1379.82 0L1440 178.59L1440 354.96000000000004L832.8 0z' fill='rgba(255%2c 255%2c 255%2c .075)'%3e%3c/path%3e%3cpath d='M832.8000000000001 0L1440 354.96000000000004L1440 471.36L408.68000000000006 0z' fill='rgba(255%2c 255%2c 255%2c .05)'%3e%3c/path%3e%3cpath d='M408.68000000000006 0L1440 471.36L1440 482.57L339.68000000000006 0z' fill='rgba(255%2c 255%2c 255%2c .025)'%3e%3c/path%3e%3cpath d='M0 560L612.89 560L0 386.51z' fill='rgba(0%2c 0%2c 0%2c .1)'%3e%3c/path%3e%3cpath d='M0 386.51L612.89 560L979.05 560L0 339.13z' fill='rgba(0%2c 0%2c 0%2c .075)'%3e%3c/path%3e%3cpath d='M0 339.13L979.05 560L1212.79 560L0 273.94z' fill='rgba(0%2c 0%2c 0%2c .05)'%3e%3c/path%3e%3cpath d='M0 273.94L1212.79 560L1281.45 560L0 262.33z' fill='rgba(0%2c 0%2c 0%2c .025)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask2552'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='84.72%25' y1='-39.29%25' x2='15.28%25' y2='139.29%25' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient2553'%3e%3cstop stop-color='rgba(255%2c 255%2c 255%2c 1)' offset='0'%3e%3c/stop%3e%3cstop stop-color='rgba(82%2c 159%2c 255%2c 1)' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-color: aqua;
      }
      `}</style>
    </div>

  )
}
