export async function GET(req) {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://deltaprime.io';
  
    const robotsTxt = `
      User-agent: *
      Allow: /
      Sitemap: ${baseUrl}/api/sitemap
    `;
  
    return new Response(robotsTxt.trim(), {
      headers: {
        "Content-Type": "text/plain",
      },
    });
  }
  