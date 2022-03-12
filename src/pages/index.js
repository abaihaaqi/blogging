import Head from 'next/head'
import Link from 'next/link'
import Layout from '~/components/layout.js'
import Date from '~/components/date'
import { getSortedPostsData } from '~/lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home ({ allPostsData }) {
  return (
    <Layout home title="Nizar Baihaqi's blog">
      <Head>
        <title>Blog - Nizar Baihaqi</title>
      </Head>
      <main>
        <section>
          <h2 className="text-center">Blog posts</h2>
          <ul>
            {allPostsData.map(({ id, date, title, author }) => (
              <li className="card" key={id}>
                <h4>{title}</h4>
                <Link href={`/posts/${id}`}>
                  <a>
                    <p className="link text-right">
                      Read more &#8599;
                    </p>
                  </a>
                </Link>
                <br />
                <small>
                  {author} | <Date dateString={date} />
                </small>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </Layout>
  )
}