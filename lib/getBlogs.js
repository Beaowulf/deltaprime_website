import { createClient } from "contentful";

// todo: rename file into getContentfulData

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export const fetchBlogBySlug = async (slug) => {
  const [blogTestRes, newsLetterRes] = await Promise.all([
    client.getEntries({
      content_type: "blogTest",
      "fields.slug": slug,
      limit: 1, // Ensures only one blog is fetched
    }),
    client.getEntries({
      content_type: "newsLetterV01",
      "fields.slug": slug,
      limit: 1, // Ensures only one newsletter is fetched
    }),
  ]);

  const combinedItems = [...blogTestRes.items, ...newsLetterRes.items];

  if (combinedItems.length > 0) {
    const item = combinedItems[0];
    return {
      ...item.fields,
      blogSYS: item.sys,
      blogID: item.sys.id,
    };
  } else {
    return null; // Return null if no blog or newsletter is found with the given slug
  }
};

export async function fetchGlossaryEntries() {
  const res = await client.getEntries({ content_type: "glossary" });
  return res.items.map((item) => item.fields);
}

export const fetchBlogs = async () => {
  const [blogTestRes, newsLetterRes] = await Promise.all([
    client.getEntries({
      content_type: "blogTest",
      select:
        "fields.slug,fields.blogDescription,fields.previewImageBlog,fields.blogCategory,sys.id,fields.blogTitle",
      order: "-sys.createdAt",
    }),
    client.getEntries({
      content_type: "newsLetterV01",
      select:
        "fields.slug,fields.newsLetterTitle,fields.blogCategory,fields.previewImageBlog,sys.id,fields.blogDescription,fields.blogTitle",
      order: "-sys.createdAt",
    }),
  ]);

  const combinedItems = [...blogTestRes.items, ...newsLetterRes.items];

  return combinedItems.map((item) => ({
    blogID: item.sys.id,
    slug: item.fields.slug,
    blogTitle: item.fields.blogTitle,
    blogDescription: item.fields.blogDescription,
    previewImageBlog: item.fields.previewImageBlog,
    blogCategory: item.fields.blogCategory,
  }));
};

export const fetchStrategies = async () => {
  const res = await client.getEntries({
    content_type: "strategy",
    select:
      "fields.strategyTitle,fields.strategyDescription,fields.strategyImage,fields.difficultyLevel,fields.slug,fields.backCardDownsides,fields.backCardBenefits,fields.backCardTitle",
    order: "-sys.createdAt",
  });
  return res.items.map((item) => ({
    strategyID: item.sys.id,
    strategyTitle: item.fields.strategyTitle,
    strategyDescription: item.fields.strategyDescription,
    strategyImage: item.fields.strategyImage,
    strategyHeroImage: item.fields.strategyHeroImage,
    difficultyLevel: item.fields.difficultyLevel,
    backCardtitle: item.fields.backCardTitle,
    backCardBenefits: item.fields.backCardBenefits,
    backCardDownsides: item.fields.backCardDownsides,
    slug: item.fields.slug,
  }));
};

export const fetchHowToVideos = async () => {
  const res = await client.getEntries({
    content_type: "howToVideos",
    select:
      "fields.howToVideoTitle,fields.howToVideoDescription,fields.howToVideoDescriptionImage,fields.slug",
    order: "-sys.createdAt",
  });

  return res.items.map((item) => ({
    howToVideosID: item.sys.id,
    howToVideoTitle: item.fields.howToVideoTitle,
    howToVideoDescription: item.fields.howToVideoDescription,
    howToVideoDescriptionImage: item.fields.howToVideoDescriptionImage,
    slug: item.fields.slug,
  }));
};

export const fetchStrategyBySlug = async (slug) => {
  const res = await client.getEntries({
    content_type: "strategy",
    "fields.slug": slug,
    limit: 1, // Ensure we get only one entry
  });

  if (!res.items.length) {
    return null;
  }

  const item = res.items[0];

  return {
    ...item.fields,
    strategyID: item.sys.id,
  };
};

export const fetchHowToVideoBySlug = async (slug) => {
  const res = await client.getEntries({
    content_type: "howToVideos",
    "fields.slug": slug,
    limit: 1,
  });

  if (!res.items.length) {
    return null;
  }

  const item = res.items[0];
  return {
    ...item.fields,
    howToVideosID: item.sys.id,
  };
};

export const fetchTermsOfUse = async () => {
  const res = await client.getEntries({
    content_type: "termsOfUse",
    limit: 1,
  });

  if (!res.items || !res.items.length) {
    return null;
  }

  return res.items[0].fields;
};

export const fetchPrivacyPolicy = async () => {
  const res = await client.getEntries({
    content_type: "privacyAndPolicy",
    limit: 1,
  });

  if (!res.items || !res.items.length) {
    return null;
  }

  return res.items[0].fields;
};

export default client;
