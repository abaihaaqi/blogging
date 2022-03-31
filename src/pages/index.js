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
    <Layout>
      <main>
        <section>
          <h2 className="text-center">Blog posts</h2>
          <ul>
            {allPostsData.map(({ id, date, title, author }) => (
              <li className="card" key={id}>
                <h4>{title}</h4>
                <Link href={`/post/${id}`}>
                  <a>
                    <p className="text-right">
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