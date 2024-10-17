import { notFound } from 'next/navigation'; // For handling 404 if the job is not found
import { getJobDescriptionBySlug, getJobDescriptions } from '@/lib/jobData'; // Function to fetch job description by slug
import JobDescriptionClient from './JobDescriptionClient'; // Placeholder for the client component

// Fetch job description by slug
export async function generateStaticParams() {
  // Fetch all slugs to generate static paths if needed
  const jobs = await getJobDescriptions();
  return jobs.map((job) => ({
    slug: job.slug,
  }));
}

// Dynamic metadata for each job description page
export async function generateMetadata({ params }) {
  const job = await getJobDescriptionBySlug(params.slug);

  if (!job) {
    return {
      title: 'Job Not Found | Delta Prime',
      description: 'The job you are looking for does not exist.',
    };
  }

  return {
    title: `${job.jobTitle} | Delta Prime`,
    description: `${job.jobTitle} position at Delta Prime. Location: ${job.workLocation}, Employment: ${job.employmentType}`,
  };
}

export default async function JobDescriptionPage({ params }) {
  const { slug } = params;

  // Fetch job description based on slug
  const jobDescription = await getJobDescriptionBySlug(slug);

  if (!jobDescription) {
    return notFound();
  }

  // Pass jobDescription to client component for rendering
  return <JobDescriptionClient jobDescription={jobDescription} />;
}
