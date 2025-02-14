import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const jobCategories = [
        "Software Development",
        "Marketing",
        "Design",
        "Data & Analytics",
        "Finance",
        "Healthcare",
        "Engineering",
        "Project Management",
        "Cybersecurity",
        "Customer Service",
      ];
      

  const featuredJobs = [
    { id: 1, title: "Software Engineer", company: "Google", location: "New York, USA", type: "Full-time" },
    { id: 2, title: "Frontend Developer", company: "Meta", location: "San Francisco, USA", type: "Remote" },
    { id: 3, title: "UI/UX Designer", company: "Amazon", location: "London, UK", type: "Part-time" },
    { id: 4, title: "Data Analyst", company: "Microsoft", location: "Seattle, USA", type: "Remote" },
    { id: 5, title: "Project Manager", company: "Apple", location: "Austin, USA", type: "Full-time" },
    { id: 6, title: "Marketing Specialist", company: "Tesla", location: "Los Angeles, USA", type: "Contract" },
    { id: 7, title: "Cybersecurity Analyst", company: "IBM", location: "Washington, USA", type: "Full-time" },
    { id: 8, title: "DevOps Engineer", company: "Netflix", location: "San Jose, USA", type: "Remote" },
    { id: 9, title: "Product Manager", company: "Airbnb", location: "Toronto, Canada", type: "Hybrid" },
    { id: 10, title: "Customer Support Specialist", company: "Spotify", location: "Berlin, Germany", type: "Part-time" },
  ];
  

  return (
    <section className="text-center py-10 px-6 mt-24">
      <h2 className="text-4xl font-bold mb-4">Find Your Dream Job</h2>
      <p className="text-gray-700 text-lg mb-6">
        Explore thousands of job opportunities that match your skills.
      </p>

      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8">
        <input
          type="text"
          placeholder="Search jobs..."
          className="border p-2 rounded w-full md:w-1/3"
        />
        <input
          type="text"
          placeholder="Location..."
          className="border p-2 rounded w-full md:w-1/3"
        />
        <button className="bg-blue-600 text-white px-6 py-2 rounded">Search</button>
      </div>

      <h3 className="text-2xl font-semibold mt-8 mb-4">Popular Job Categories</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-center">
        {jobCategories.map((category, index) => (
          <Link 
            key={index} 
            to={`/jobs?category=${category}`} 
            className="p-4 border rounded-lg shadow hover:shadow-lg transition text-blue-600 font-semibold"
          >
            {category}
          </Link>
        ))}
      </div>

      <h3 className="text-2xl font-semibold mt-10 mb-4">Featured Jobs</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {featuredJobs.map((job) => (
          <Link 
            to={`/job/${job.id}`} 
            key={job.id} 
            className="border p-4 rounded shadow-md hover:shadow-lg transition block text-left"
          >
            <h4 className="font-bold">{job.title}</h4>
            <p className="text-gray-600">{job.company} - {job.location}</p>
            <p className="text-blue-500 font-bold">{job.type}</p>
          </Link>
        ))}
      </div>

      <div className="mt-10">
        <Link to="/jobs" className="rounded-lg bg-blue-600 text-white px-6 py-2">Browse All Jobs</Link>
      </div>
    </section>
  );
};

export default Home;
