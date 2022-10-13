import Image from "next/image";
import { useRouter } from "next/router";
import MetaTags from "./MetaTags";
import Navbar from "./Navbar";
import defaultImg from "~/public/images/default.png";
import {
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  MagnifyingGlass,
} from "phosphor-react";

// Implement search with algolia
import algoliasearch from "algoliasearch";
import { InstantSearch, SearchBox } from "react-instantsearch-hooks-web";
import Link from "next/link";

const searchClient = algoliasearch(
  "KE5KMEQDE6",
  "2e5a27e4d94aff7d3b6cb0f482f17f1a"
);

export default function Layout({
  children,
  home,
  title,
  img,
  topics,
  metaContent,
}) {
  const router = useRouter();

  const splitString = (str) => {
    return str.split(`, `);
  };

  return (
    <>
      <MetaTags {...metaContent} />
      <Navbar home={home} />
      <header className={(!home ? `h-[450px] ` : `h-[350px] `) + `relative`}>
        <Image
          src={img || defaultImg}
          alt={`${title} image`}
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />
        <div className="flex flex-col justify-center items-center text-center max-w-4xl mx-auto px-2 absolute inset-0 z-10">
          <h1 className="font-serif text-lg xl:text-2xl mb-6">{title}</h1>
          {/* {home ? (
            <form className="flex items-stretch gap-2 h-[38px]">
              <input type="text" placeholder="Search" />
              <button
                type="submit"
                className="bg-zinc-900 rounded px-2 hover:bg-zinc-800 transition-all"
              >
                <MagnifyingGlass size={24} />
              </button>
            </form>
          ) :  */}
          {!home && (
            <>
              <div className="flex gap-2">
                {topics &&
                  topics.map((topic) => (
                    <button
                      key={topic}
                      className="rounded px-3 bg-zinc-900 hover:bg-zinc-800 transition-all"
                    >
                      {topic}
                    </button>
                  ))}
              </div>
              <Link href="/">
                <a className="text-blue-300">&larr; Home</a>
              </Link>
            </>
          )}
        </div>
      </header>
      <main className="md:rounded-xl container max-w-3xl py-3 px-4">
        <article>{children}</article>
      </main>
      <footer className="my-6 flex justify-center">
        <div className="flex items-center gap-2">
          <a
            href="http://nizarbaihaqi.com"
            className="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nizar Baihaqi
          </a>{" "}
          <p className="py-0">@ 2022 -</p>
          <a
            className="hover:text-white transition-all"
            href="https://www.linkedin.com/in/nizar-baihaqi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinLogo size={24} />
          </a>
          <a
            className="hover:text-white transition-all"
            href="https://github.com/abaihaaqi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubLogo size={24} />
          </a>
        </div>
      </footer>
    </>
  );
}
