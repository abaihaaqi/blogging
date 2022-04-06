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
          {allPostsData.map(({ id, date, title, author }) => (
            <div className="my-3 bg-slate-900/40 rounded-lg py-3 px-4" key={id}>
              <h4>{title}</h4>
              <div className='flex justify-between items-center mt-3'>
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
        </section>
      </article>
    </Layout>
  )
}