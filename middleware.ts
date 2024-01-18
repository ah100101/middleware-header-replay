import { NextRequest, NextResponse } from "next/server";
import { geolocation } from "@vercel/edge";

export const matcher = ["/header"];

export function middleware(request: NextRequest, response: Response) {
  const geoData = geolocation(request);
  // console.log(JSON.stringify(geoData));
  const header = request.nextUrl.searchParams.get("h") ?? "";
  request.headers.set("x-vercel-header-request", header);
  request.headers.set("x-custom-header-ip", request.ip ?? "");
  request.headers.set("host", "shop.middleware-header-replay.vercel.app");

  const responseHeaders = response.headers;
  console.log(JSON.stringify({ response }));

  return NextResponse.rewrite(request.nextUrl, {
    headers: {
      "x-vercel-header-response": header,
    },
    request: {
      headers: request.headers,
    },
  });
}
