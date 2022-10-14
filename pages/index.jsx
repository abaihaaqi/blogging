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
          <Link key={id} href={`/post/${id}`}>
            <a className="bg-zinc-900 rounded-lg p-4 hover:bg-zinc-800 focus:bg-zinc-800 transform hover:scale-[1.01] active:scale-[0.99] transition-all hover:no-underline focus:no-underline text-white">
              <section>
                <div className="relative rounded-xl overflow-hidden h-[200px] xs:h-[400px] mb-4">
                  <Image
                    src={img || defaultImg}
                    alt={`${title} image`}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <h3>{title}</h3>
                <p>
                  {author} - <Date dateString={date} />
                </p>
                <div className="flex gap-3">
                  {category.map((item) => (
                    <Link href="#">
                      <a title="link under development">{item}</a>
                    </Link>
                  ))}
                </div>
              </section>
            </a>
          </Link>
        ))}
      </div>
    </Layout>
  );
}
