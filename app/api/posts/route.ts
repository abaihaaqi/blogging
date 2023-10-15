import { getSortedPostsData } from "~/utils/usePost";

export async function GET() {
  const data = getSortedPostsData();

  return Response.json(data);
}
