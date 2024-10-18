import { sitemap } from "@/app/sitemap";

export async function GET(req) {
  try {
    const urls = await sitemap();
    const xml = `
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${urls
          .map((url) => `
            <url>
              <loc>${url.url}</loc>
              <lastmod>${url.lastModified}</lastmod>
            </url>`)
          .join("")}
      </urlset>
    `;

    return new Response(xml, {
      headers: {
        "Content-Type": "application/xml",
      },
    });
  } catch (error) {
    console.error("Error generating sitemap:", error);
    return new Response("Error generating sitemap", { status: 500 });
  }
}
