import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  // get url from params
  const url = request.nextUrl.searchParams.get("url");
  if (!url) {
    return new Response("No URL provided", { status: 400 });
  }
  // return the content of the url
  const response = await fetch(url);
  const content = await response.text();
  return new Response(content);
}
