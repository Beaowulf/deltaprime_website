import { gql } from 'graphql-request';

// GraphQL Query for Our Story Page
export async function getOurStorySections() {
  try {
    console.log('Fetching Our Story page data from Contentful with GraphQL...');

    // GraphQL query for Our Story Page content
    const query = gql`
      query {
        ourStoryPageCollection(limit: 1) {
          items {
            internalName
            slug
            title
            introText {
              json
            }
            sectionsCollection {
              items {
                ... on OurStorySections {
                  sectionId
                  heading
                  subheading
                  subposition
                  linkUrl
                  imagePlacement
                  mainText {
                    json
                  }
                  image {
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

    // Use the same fetchGraphQL function for querying
    const response = await fetchGraphQL(query);

    // Extract the sections from the response
    const ourStoryData = response?.data?.ourStoryPageCollection?.items[0];

    if (ourStoryData) {
      console.log('Our Story data fetched:', ourStoryData);
      return ourStoryData.sectionsCollection.items; // Return the sections
    }

    console.log('No Our Story data found');
    return [];
  } catch (error) {
    console.error('Error fetching Our Story data:', error);
    return [];
  }
}

// Utility to fetch from GraphQL endpoint
async function fetchGraphQL(query) {
  const response = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({ query }),
      next: { tags: ["ourStoryPage"] },

    }
  );
  return response.json();
}

