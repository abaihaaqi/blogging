import Head from "next/head"
import Link from "next/link"

import { getSortedPostsData } from '~/lib/posts'

import Layout from "~/components/layout"
import Date from '~/components/date'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faStar
} from "@fortawesome/free-solid-svg-icons"

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function AllPosts ({ allPostsData }) {
  return (
    <Layout title="Articles">
      <Head>
        <title>First Post - Nizar Baihaqi</title>
      </Head>
      <div>
        <section>
          <h2>All Articles</h2>
          <ul>
            {allPostsData.map(({ id, date, title, author }) => (
              <li className="" key={id}>
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <small>
                  {author} | <Date dateString={date} />
                </small>
              </li>
            ))}
          </ul>
        </section>
        <div>
          <FontAwesomeIcon
            icon={faStar}
            style={{ color: "blue" }}
          />
        </div>
      </div>
    </Layout>
  )
}