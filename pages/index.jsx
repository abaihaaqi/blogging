import Link from 'next/link'
import Layout from '~/components/Layout'
import Date from '~/components/function/date'
import { getSortedPostsData } from '~/lib/posts'
import Image from 'next/image'
import defaultImg from '~/public/images/default.png'

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
    <Layout home title="Blog posts">
      {allPostsData.map(({ id, date, title, img }) => (
        <section className="my-3 bg-white/5 rounded-lg p-4" key={id}>
          <div className='relative rounded-xl overflow-hidden h-[30vh] mb-4'>
            <Image src={img || defaultImg} alt={`${title} image`} layout='fill' objectFit='cover' />
          </div>
          <h4>{title}</h4>
          <div className='flex justify-between items-center mt-3'>
            <small>
              <Date dateString={date} />
            </small>
            <Link href={`/post/${id}`}>
              <a>
                Read more &#8599;
              </a>
            </Link>
          </div>
        </section>
      ))}
    </Layout>
  )
}