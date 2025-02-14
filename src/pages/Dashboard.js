import React, { useState } from "react";
import ME from '../assests/Jabin Jabez.png'

const Dashboard = () => {
  // Sample user details
  const user = {
    name: "S Jabin Jabez",
    email: "jabin@example.com",
    photo: ME, 
    bio: "Frontend Developer | React | Spring Boot",
  };

  const [appliedJobs, setAppliedJobs] = useState([
    { id: 1, title: "Software Engineer", company: "Google", status: "Pending" },
    { id: 2, title: "Frontend Developer", company: "Meta", status: "Interview Scheduled" },
    { id: 3, title: "UI/UX Designer", company: "Amazon", status: "Rejected" },
  ]);

  return (
    <div className="max-w-4xl mx-auto p-6 mt-28">
      <div className="flex items-center gap-4 border p-4 rounded shadow-md bg-white">
        <img src={user.photo} alt="Profile" className="w-24 h-24 rounded-full object-cover border" />
        <div>
          <h2 className="text-2xl font-bold">{user.name}</h2>
          <p className="text-gray-600">{user.email}</p>
          <p className="mt-2">{user.bio}</p>
        </div>
      </div>

      <div className="mt-6 border p-4 rounded shadow-md bg-white">
        <h3 className="text-xl font-bold">Applied Jobs</h3>
        <p className="text-gray-600">You have applied for <strong>{appliedJobs.length}</strong> jobs.</p>

        <div className="mt-4">
          {appliedJobs.length > 0 ? (
            <ul>
              {appliedJobs.map((job) => (
                <li key={job.id} className="border p-3 rounded mt-2 shadow-sm">
                  <p className="font-semibold">{job.title} - {job.company}</p>
                  <p className={`text-sm font-medium ${job.status === "Rejected" ? "text-red-500" : "text-blue-500"}`}>
                    Status: {job.status}
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">You haven't applied for any jobs yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
