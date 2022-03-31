import Link from 'next/link'
import Layout from '~/components/Layout'
import Date from '~/components/function/date'
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
    <Layout home title='Homepage'>
      <article>
        <section>
          <h3 className="text-center mb-10">Blog posts</h3>
          <ul>
            {allPostsData.map(({ id, date, title, author }) => (
              <div className="my-6" key={id}>
                <h4>{title}</h4>
                <div className='flex justify-between items-center'>
                  <small>
                    {author} | <Date dateString={date} />
                  </small>
                  <Link href={`/post/${id}`}>
                    <a>
                      Read more &#8599;
                    </a>
                  </Link>
                </div>
              </div>
            ))}
          </ul>
        </section>
      </article>
    </Layout>
  )
}