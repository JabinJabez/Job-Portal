import React, { useState } from "react";
import { Link } from "react-router-dom";

const Jobs = () => {
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredJobs, setFilteredJobs] = useState([]);

  const jobListings = [
    { id: 1, title: "Software Engineer", company: "Google", location: "New York, USA", type: "Full-time", salary: "₹120,000", description: "Develop scalable software solutions at Google." },
    { id: 2, title: "Frontend Developer", company: "Meta", location: "San Francisco, USA", type: "Remote", salary: "₹110,000", description: "Build modern UI/UX experiences for millions of users." },
    { id: 3, title: "UI/UX Designer", company: "Amazon", location: "London, UK", type: "Part-time", salary: "₹90,000", description: "Design intuitive interfaces for e-commerce solutions." },
    { id: 4, title: "Data Analyst", company: "Microsoft", location: "Seattle, USA", type: "Remote", salary: "₹100,000", description: "Analyze data, find trends, create reports, and help decision-making." },
    { id: 5, title: "Project Manager", company: "Apple", location: "Austin, USA", type: "Full-time", salary: "₹130,000", description: "Manage product development cycles and coordinate teams." },
    { id: 6, title: "Marketing Specialist", company: "Tesla", location: "Los Angeles, USA", type: "Contract", salary: "₹85,000", description: "Create and execute marketing campaigns for electric vehicles." },
    { id: 7, title: "Cybersecurity Analyst", company: "IBM", location: "Washington, USA", type: "Full-time", salary: "₹115,000", description: "Protect systems and networks from cyber threats and attacks." },
    { id: 8, title: "DevOps Engineer", company: "Netflix", location: "San Jose, USA", type: "Remote", salary: "₹125,000", description: "Automate deployment pipelines and ensure system reliability." },
    { id: 9, title: "Product Manager", company: "Airbnb", location: "Toronto, Canada", type: "Hybrid", salary: "₹140,000", description: "Drive product vision and work with cross-functional teams." },
    { id: 10, title: "Customer Support Specialist", company: "Spotify", location: "Berlin, Germany", type: "Part-time", salary: "₹70,000", description: "Assist users with technical and account-related inquiries." },
];


  const handleFilterJobs = () => {
    const filtered = jobListings.filter((job) => {
      return (
        (category ? job.title.includes(category) : true) &&
        (location ? job.location.includes(location) : true) &&
        (searchQuery ? job.title.toLowerCase().includes(searchQuery.toLowerCase()) : true)
      );
    });
    setFilteredJobs(filtered);
  };

  return (
    <section className="py-6 px-4 max-w-7xl mt-28 mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6">Job Listings</h2>

      <div className="flex flex-col md:flex-row gap-4 mb-6 items-center">
        <select onChange={(e) => setCategory(e.target.value)} className="border p-2 w-full md:w-1/4">
          <option value="">Select Category</option>
          {jobListings.map((job) => (
            <option key={job.id} value={job.title}>{job.title}</option>
          ))}
        </select>

        <input type="text" placeholder="Search jobs..." onChange={(e) => setSearchQuery(e.target.value)} className="border p-2 w-full md:w-1/4" />

        <select onChange={(e) => setLocation(e.target.value)} className="border p-2 w-full md:w-1/4">
          <option value="">Select Location</option>
          {jobListings.map((job) => (
            <option key={job.id} value={job.location}>{job.location}</option>
          ))}
        </select>

        <button onClick={handleFilterJobs} className="bg-blue-500 text-white px-4 py-2 rounded w-full md:w-auto">Apply Filters</button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {(filteredJobs.length > 0 ? filteredJobs : jobListings).map((job) => (
          <Link to={`/job/${job.id}`} key={job.id} className="block border p-4 rounded shadow-md hover:shadow-lg transition bg-white">
            <h3 className="font-bold text-xl">{job.title}</h3>
            <p className="text-gray-600">{job.company} - {job.location}</p>
            <p className="text-blue-500 font-bold">{job.type} | {job.salary}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Jobs;
