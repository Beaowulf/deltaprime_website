import { gql } from 'graphql-request';

export async function fetchLandingData() {
  try {
    console.log('Fetching landing page data from Contentful with GraphQL...');

    // GraphQL query for landingPage content with inline fragments for image fields
    const query = gql`
      query {
        landingPageCollection(limit: 1) {
          items {
            internalName
            slug
            title
            introText {
              json
            }
            sectionsCollection {
              items {
                ... on LandingPageSections {
                  sectionId
                  heading
                  subheading
                  linkUrl
                  mainText {
                    json
                  }
                  media {
                    url
                    title
                    width
                    height
                  }
                }
              }
            }
          }
        }
      }
    `;

    const response = await fetchGraphQL(query, "landingPage");

    // Extract data from the response
    const landingData = response?.data?.landingPageCollection?.items[0];

    if (landingData) {
      console.log('Landing page data fetched:', landingData);
      return landingData;
    }

    console.log('No landing page data found');
    return null;
  } catch (error) {
    console.error('Error fetching landing page data:', error);
    return null;
  }
}

// Utility to fetch from GraphQL endpoint
async function fetchGraphQL(query, tag) {
  const response = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({ query }),
      next: { tags: [tag] },
    }
  );
  return response.json();
}
