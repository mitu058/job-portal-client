import React, { useEffect, useState } from "react";
import { FaMapMarkerAlt, FaClock, FaBolt } from "react-icons/fa";
import { BsBagDash } from "react-icons/bs";
import { Link } from "react-router-dom";

const PopularJob = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/jobs")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div className="container mx-auto my-20 grid grid-cols-3 gap-8">
      {jobs.map((job) => (
        <div
          key={job._id}
          className="max-w-sm  py-8 px-4 bg-white border rounded-lg shadow-md"
        >
          <div className="flex items-center space-x-3 ">
            <img
              src={job.photo} // Replace with your company logo URL
              alt="Company Logo"
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h3 className="mt-3 text-lg font-bold">{job.companyName}</h3>
              <p className="flex items-center text-sm text-gray-500">
                <FaMapMarkerAlt className="mr-1" />
                {job.location}
              </p>
            </div>
          </div>

          <h2 className="mt-4 text-xl font-bold">{job.jobTitle}</h2>
          <div className="flex space-x-5 items-center mt-2 text-sm text-gray-500">
            <BsBagDash className="mr-2" />
            {job.jobType}
            <FaClock className="mr-2" />
            {job.date}
          </div>
          <p className="mt-3 text-sm text-gray-600">{job.description}</p>

          <div className="flex gap-2 mt-3">
            {job.requirements.map((skill,index) => (
              <p key={index} className="btn btn-sm  font-medium text-blue-500 bg-blue-100 ">
                {skill}
              </p>
            ))}
          </div>
          <div className="flex items-center justify-between mt-4">
            <span className="text-lg font-bold text-blue-600">
              Salary : {job.SalaryRange.minSalary} - {job.SalaryRange.maxSalary}{" "}
              {job.SalaryRange.currency}
            </span>
            <Link to={`/jobs/${job._id}`}>
              <button className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded hover:bg-blue-600">
                Apply Now
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PopularJob;
