import Head from 'next/head'
import Date from '~/components/function/date'
import Layout from '~/components/Layout'
import { getAllPostIds, getPostData } from '~/lib/posts'

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export default function Post ({ postData }) {
  const metaContent = {
    url: postData.id,
    title: postData.title,
    description: postData.desc,
    img: postData.img
  }

  return (
    <Layout title={postData.title} img={postData.img} metaContent={metaContent}>
      <div className="py-4">
        <Date dateString={postData.date} />
      </div>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>
  )
}