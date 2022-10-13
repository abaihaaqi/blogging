import ReactMarkdown from "react-markdown";
import Date from "~/components/function/date";
import Layout from "~/components/Layout";
import { getAllPostIds, getPostData } from "~/lib/posts";

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
  const metaContent = {
    url: postData.id,
    title: postData.title,
    description: postData.desc,
    img: postData.img,
  };

  return (
    <Layout title={postData.title} img={postData.img} topics={postData.topics} metaContent={metaContent}>
      <div className="bg-zinc-900 rounded-lg p-4">
        <p className="py-0">
          {postData.author} - <Date dateString={postData.date} />
        </p>
        <ReactMarkdown children={postData.content} />
      </div>
    </Layout>
  );
}
