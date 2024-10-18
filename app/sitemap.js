import { fetchBlogs } from "@/lib/getBlogs";
import { fetchHowToVideos } from "@/lib/getBlogs";
import { fetchStrategies } from "@/lib/getBlogs";
import { getJobDescriptions } from "@/lib/jobData";

export async function sitemap() {
  const blogs = await fetchBlogs();
  const howToVideos = await fetchHowToVideos(); // Fetch how-to videos
  const strategies = await fetchStrategies(); // Fetch strategies
  const jobDescriptions = await getJobDescriptions(); // Fetch job descriptions
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://deltaprime.io";

  // todo: doublecheck this.
  // Generate sitemap entries for each blog
  const blogUrls = blogs.map((blog) => ({
    url: `${baseUrl}/blogs/academy/${blog.slug}`,
    lastModified: new Date().toISOString(),
  }));

  // Generate sitemap entries for each how-to video
  const howToVideoUrls = howToVideos.map((video) => ({
    url: `${baseUrl}/how-to-videos/${video.slug}`,
    lastModified: new Date().toISOString(),
  }));

  const strategyUrls = strategies.map((strategy) => ({
    url: `${baseUrl}/strategies/${strategy.slug}`,
    lastModified: new Date().toISOString(),
  }));

  const jobDescriptionUrls = jobDescriptions.map((job) => ({
    url: `${baseUrl}/our-story/job-description/${job.slug}`,
    lastModified: new Date().toISOString(),
  }));

  // Define the static routes
  const staticRoutes = [
    { url: `${baseUrl}`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/contact-us`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/how-to-videos`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/our-story`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/tokenomics`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/strategies`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/blogs`, lastModified: new Date().toISOString() },
    {
      url: `${baseUrl}/blogs/academy/glossary`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/legals/terms-Of-Use`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/legals/privacy-And-Policy`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/legals/tokenomics-Risk-Disclaimer`,
      lastModified: new Date().toISOString(),
    },

    // Add other static pages here
  ];

  // Return the combined list of URLs
  return [
    ...staticRoutes,
    ...blogUrls,
    ...howToVideoUrls,
    ...strategyUrls,
    ...jobDescriptionUrls,
  ];
}

export default sitemap;
