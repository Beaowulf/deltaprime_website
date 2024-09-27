import { gql } from 'graphql-request';

export async function fetchTokenomicsData() {
  try {
    console.log('Fetching tokenomics data from Contentful with GraphQL...');

    // GraphQL query for tokenomicsPage content with inline fragments for image fields
    const query = gql`
      query {
        tokenomicsPageCollection(limit: 1) {
          items {
            internalName
            slug
            title
            introText {
              json
            }
            sectionsCollection {
              items {
                ... on TokenomicsSection {
                  sectionId
                  title
                  mainText {
                    json
                  }
                  image {
                    url
                    title
                    width
                    height
                  }
                  chartData
                }
              }
            }
          }
        }
      }
    `;

    const response = await fetchGraphQL(query);

    // Extract data from the response
    const tokenomicsData = response?.data?.tokenomicsPageCollection?.items[0];

    if (tokenomicsData) {
      console.log('Tokenomics data fetched:', tokenomicsData);
      return tokenomicsData;
    }

    console.log('No tokenomics data found');
    return null;
  } catch (error) {
    console.error('Error fetching tokenomics data:', error);
    return null;
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
      next: { tags: ["tokenomicsPage"] },
    }
  );
  return response.json();
}
