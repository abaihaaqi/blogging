import { getImageData } from "~/utils/useImageGallery";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const data = await getImageData(params.slug);

  return Response.json(data);
}
