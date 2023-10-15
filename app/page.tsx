import Image from "next/image";
import Link from "next/link";

const TimelineHTML = {
  slug: "timeline-html",
  title: "Sejarah versi HTML dan pengaruhnya ke browser",
  desc: `Pada tahun 1980, Tim Berners-Lee membuat proposal "ENQUIRE",
  sistem untuk peneliti CERN menyimpan data dan bertukar
  dokumen. Lalu pada tahun 1989...`,
  author: "Nizar Baihaqi",
  date: "2023-10-14",
};

export default function Home() {
  return (
    <>
      <div className="bg-gradient-to-br from-blue-700 via-yellow-700 to-blue-700 aspect-[21/9] flex justify-center items-center font-mono">
        <h1 className="md:text-4xl">Nizar Baihaqi Blog</h1>
      </div>
      <h1 className="my-3 md:my-6 font-serif text-center text-2xl">
        Recent Post
      </h1>
      <div className="px-3 pb-3">
        <div className="max-w-sm">
          <Link href={`/post/${TimelineHTML.slug}`}>
            <div className="p-px  bg-gradient-to-br from-slate-700 via-slate-400 to-slate-700 rounded">
              <div className="bg-black rounded overflow-hidden">
                <div className="relative aspect-video">
                  <Image
                    src={`/content/${TimelineHTML.slug}/banner.png`}
                    alt={`${TimelineHTML.slug} image`}
                    fill
                  />
                </div>
                <div className="p-2">
                  <h1 className="font-serif text-center text-lg md:text-xl">
                    {TimelineHTML.title}
                  </h1>
                  <div className="mt-2 text-sm">
                    {TimelineHTML.author} - {TimelineHTML.date}
                  </div>
                  <div className="h-px bg-gray-700 mb-2" />
                  <p className="">{TimelineHTML.desc}</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
