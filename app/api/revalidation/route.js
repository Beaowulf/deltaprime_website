import { NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

export async function POST(request) {
  const requestHeaders = new Headers(request.headers);
  const secret = requestHeaders.get("x-vercel-reval-key");

  // Validate secret
  if (secret !== process.env.CONTENTFUL_REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  // Parse the incoming request body
  const body = await request.json();

  // Extract the content type from the request
  const contentType = body.sys?.contentType?.sys?.id;

  // Initialize response variables
  let revalidatedTag = null;
  let revalidatedContentType = contentType;

  // Check if the content type is either TokenomicsPage, TokenomicsSection, LandingPage, LandingPageSections, OurStoryPage, or OurStorySections
  if (contentType === "tokenomicsPage" || contentType === "tokenomicsSection") {
    console.log(`Content type ${contentType} matches. Triggering tokenomics revalidation...`);
    revalidateTag("tokenomicsPage");
    revalidatedTag = "tokenomicsPage";
  } 
  else if (contentType === "landingPage" || contentType === "landingPageSections") {
    console.log(`Content type ${contentType} matches. Triggering landing page revalidation...`);
    revalidateTag("landingPage");
    revalidatedTag = "landingPage";
  }
  else if (contentType === "ourStoryPage" || contentType === "ourStorySections") {
    console.log(`Content type ${contentType} matches. Triggering our story page revalidation...`);
    revalidateTag("ourStoryPage");
    revalidatedTag = "ourStoryPage";
  } 
  else {
    console.log(`Content type ${contentType} does not match the expected types.`);
    return NextResponse.json({ message: "No revalidation needed for this content type", contentType }, { status: 200 });
  }

  // If revalidation was successful, return the revalidated tag and content type
  return NextResponse.json({
    revalidated: true,
    now: Date.now(),
    revalidatedTag,
    contentType: revalidatedContentType,
  });
}
