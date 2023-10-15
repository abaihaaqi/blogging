type imageDataProps = {
  id: number;
  title: string;
  link: string;
  slug: string;
  published: string;
  author: string;
};

export async function getImageData(slug: string) {
  const res = await fetch("http://localhost:3000/image-gallery.json");

  const data = await res.json();

  const imageData = await data[slug];

  return imageData as imageDataProps;
}
