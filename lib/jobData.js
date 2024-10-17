import { createClient } from 'contentful';

// Initialize Contentful client
const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

// Fetch job description data from Contentful
export async function getJobDescriptions() {
  try {
    const response = await client.getEntries({
      content_type: 'jobDescriptions', // Use the correct Content Type ID
      select: 'fields.jobTitle,fields.workLocation,fields.employmentType,fields.jobCategory,fields.slug',
    });

    // Map over the response items to extract only relevant fields
    const jobDescriptions = response.items.map((item) => ({
      jobTitle: item.fields.jobTitle,
      workLocation: item.fields.workLocation,
      employmentType: item.fields.employmentType,
      jobCategory: item.fields.jobCategory,
      slug: item.fields.slug,
    }));

    return jobDescriptions;
  } catch (error) {
    console.error('Error fetching job descriptions:', error);
    return [];
  }
}


export async function getJobDescriptionBySlug(slug) {
    try {
      const response = await client.getEntries({
        content_type: 'jobDescriptions',
        'fields.slug': slug,
        limit: 1,
      });
  
      if (!response.items.length) {
        return null;
      }
  
      const job = response.items[0].fields;
      return {
        jobTitle: job.jobTitle,
        workLocation: job.workLocation,
        employmentType: job.employmentType,
        jobCategory: job.jobCategory,
        description: job.description,
        department: job.department,
        minimumExperience: job.minimumExperience,
      };
    } catch (error) {
      console.error('Error fetching job description by slug:', error);
      return null;
    }
  }
  