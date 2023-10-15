type imageDataProps = {
  id: number;
  title: string;
  link: string;
  slug: string;
  published: string;
  author: string;
};

export async function getImageData(slug: string) {
  const res = await fetch(`${process.env.BASE_URL}/image-gallery.json`);

  const data = await res.json();

  const imageData = await data[slug];

  return imageData as imageDataProps;
}
