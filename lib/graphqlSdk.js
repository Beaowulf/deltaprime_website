const POST_GRAPHQL_FIELDS = `
  sys {
    id
  }
  blogTitle
  blogTakeaways
  blogImage {
    title
    description
    fileName
    url
    width
    height
  }
  blogCategory
  previewImageBlog {
    title
    description
    fileName
    url
    width
    height
  }
  blogDescription
  blogRichTextParagraph
  blogAuthor
`;
async function fetchGraphQL(query, preview = false, tags = [""]) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
      next: { tags },
    }
  ).then((response) => response.json());
}

function extractPostEntries(fetchResponse, caller) {
  const items = fetchResponse?.data?.postCollection?.items;
  console.log(`fetchResponse ${caller}`, items, fetchResponse);
  return items;
}

export async function getAllPosts(limit = 3, isDraftMode = false) {
  const query = `query {
      postCollection(where: {slug_exists: true}, limit: ${limit}, preview: ${
    isDraftMode ? "true" : "false"
  }) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`;

  const blogs = await fetchGraphQL(query, isDraftMode);
  return extractPostEntries(blogs, "getAllPosts");
}

export async function getPost(slug, isDraftMode = false) {
  const query = `query {
      postCollection(where: {slug: "${slug}"}, limit: 1, preview: ${
    isDraftMode ? "true" : "false"
  }) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`;

  const blog = await fetchGraphQL(query, isDraftMode, [slug]);
  return extractPostEntries(blog, "getPost")[0];
}
