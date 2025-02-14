import React from "react";
import { useParams, Link } from "react-router-dom";

const jobListings = [
    { id: 1, title: "Software Engineer", company: "Google", location: "New York, USA", type: "Full-time", salary: "$120,000", description: "Develop scalable software solutions at Google." },
    { id: 2, title: "Frontend Developer", company: "Meta", location: "San Francisco, USA", type: "Remote", salary: "$110,000", description: "Build modern UI/UX experiences for millions of users." },
    { id: 3, title: "UI/UX Designer", company: "Amazon", location: "London, UK", type: "Part-time", salary: "$90,000", description: "Design intuitive interfaces for e-commerce solutions." },
    { id: 4, title: "Data Analyst", company: "Microsoft", location: "Seattle, USA", type: "Remote", salary: "$100,000", description: "Analyze data, find trends, create reports, and help decision-making." },
    { id: 5, title: "Project Manager", company: "Apple", location: "Austin, USA", type: "Full-time", salary: "$130,000", description: "Manage product development cycles and coordinate teams." },
    { id: 6, title: "Marketing Specialist", company: "Tesla", location: "Los Angeles, USA", type: "Contract", salary: "$85,000", description: "Create and execute marketing campaigns for electric vehicles." },
    { id: 7, title: "Cybersecurity Analyst", company: "IBM", location: "Washington, USA", type: "Full-time", salary: "$115,000", description: "Protect systems and networks from cyber threats and attacks." },
    { id: 8, title: "DevOps Engineer", company: "Netflix", location: "San Jose, USA", type: "Remote", salary: "$125,000", description: "Automate deployment pipelines and ensure system reliability." },
    { id: 9, title: "Product Manager", company: "Airbnb", location: "Toronto, Canada", type: "Hybrid", salary: "$140,000", description: "Drive product vision and work with cross-functional teams." },
    { id: 10, title: "Customer Support Specialist", company: "Spotify", location: "Berlin, Germany", type: "Part-time", salary: "$70,000", description: "Assist users with technical and account-related inquiries." },
  ];
  

const JobDetails = () => {
  const { id } = useParams();
  const job = jobListings.find((job) => job.id === parseInt(id));

  if (!job) {
    return <p className="text-red-500 text-center mt-10">Job not found!</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6 border shadow-lg mt-32 rounded">
      <h2 className="text-3xl font-bold">{job.title}</h2>
      <p className="text-gray-600 text-lg">{job.company} - {job.location}</p>
      <p className="text-blue-500 font-bold mt-2">{job.type} | {job.salary}</p>
      <p className="mt-4">{job.description}</p>

      <Link to="/jobs" className="mt-6 inline-block bg-gray-500 text-white px-4 py-2 rounded">Back to Jobs</Link>
    </div>
  );
};

export default JobDetails;
