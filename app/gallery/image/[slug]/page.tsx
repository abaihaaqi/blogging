import Image from "next/image";
import Link from "next/link";
import { getImageData } from "~/utils/useImageGallery";

export default async function ImagePage({
  params,
}: {
  params: { slug: string };
}) {
  const paramSlug = params.slug;

  const imageData = await getImageData(paramSlug);

  return (
    <>
      <Link href={imageData.link}>
        <div className="">
          <Image
            src={`/images/${imageData.slug}.png`}
            alt={`${imageData.title} image`}
            width={1920}
            height={1280}
          />
        </div>
      </Link>
      <h1 className="my-3 md:my-6 font-serif text-center md:text-3xl">
        {imageData.title}
      </h1>
      <p className="text-center">
        {imageData.author} - {imageData.published}
      </p>
    </>
  );
}
