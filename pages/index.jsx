import Link from "next/link";
import Layout from "~/components/Layout";
import Date from "~/components/function/date";
import { getSortedPostsData } from "~/lib/posts";
import Image from "next/image";
import defaultImg from "~/public/images/default.png";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home title="Blog posts">
      <div className="grid grid-cols-1 gap-6">
        {allPostsData.map(({ id, date, title, img, author, category }) => (
          <section
            key={id}
            className="bg-zinc-900 rounded-lg hover:bg-zinc-800 focus:bg-zinc-800 transform hover:scale-[1.01] active:scale-[0.99] transition-all"
          >
            <Link href={`/post/${id}`}>
              <a className="hover:no-underline focus:no-underline text-white">
                <div className="relative rounded-xl overflow-hidden h-[200px] xs:h-[400px] mb-4">
                  <Image
                    src={img || defaultImg}
                    alt={`${title} image`}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="px-4 pb-4">
                  <h3>{title}</h3>
                  <p>
                    {author} - <Date dateString={date} />
                  </p>
                </div>
              </a>
            </Link>
          </section>
        ))}
      </div>
    </Layout>
  );
}
