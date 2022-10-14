import ReactMarkdown from "react-markdown";
import Date from "~/components/function/date";
import Layout from "~/components/Layout";
import { getAllPostIds, getPostData } from "~/lib/posts";
import Disqus from "disqus-react";

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

  const shortname = "nizar-baihaqi";
  const disqusConfig = {
    url: "https://blog.nizarbaihaqi.com",
    identifier: postData.id,
    title: postData.title,
  };

  return (
    <Layout
      title={postData.title}
      img={postData.img}
      topics={postData.topics}
      metaContent={metaContent}
    >
      <div className="bg-zinc-900 rounded-lg p-4 mb-3">
        <p className="py-0">
          {postData.author} - <Date dateString={postData.date} />
        </p>
        <ReactMarkdown children={postData.content} />
      </div>
      <div className="bg-white rounded-lg px-3">
        <Disqus.DiscussionEmbed shortname={shortname} config={disqusConfig} />
      </div>
    </Layout>
  );
}
