import algoliasearch from "algoliasearch";
import { InstantSearch, SearchBox, Hits } from "react-instantsearch-hooks-web";
import Link from "next/link";

const searchClient = algoliasearch(
  "KE5KMEQDE6",
  "2e5a27e4d94aff7d3b6cb0f482f17f1a"
);

export default function SearchComp({ setIsOpen }) {
  function Hit({ hit }) {
    return (
      <Link href={`/post/${hit.id}`}>
        <a className="text-white hover:no-underline bg-white/5 rounded">
          <p>{hit.title}</p>
          <p>{hit.date}</p>
          <p>{hit.author}</p>
          {hit.category.map((item) => (
            <p>{item}</p>
          ))}
        </a>
      </Link>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center">
      <div
        className="bg-black/50 rounded absolute inset-0 -z-10"
        onClick={() => setIsOpen(false)}
      />
      <div className="bg-zinc-900 p-4">
        <InstantSearch searchClient={searchClient} indexName="dev_blogging">
          <SearchBox />
          <Hits hitComponent={Hit} />
        </InstantSearch>
      </div>
    </div>
  );
}
