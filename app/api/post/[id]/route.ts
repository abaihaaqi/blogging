import { getPostData } from "~/utils/usePost";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const data = await getPostData(params.id);

  return Response.json(data);
}
