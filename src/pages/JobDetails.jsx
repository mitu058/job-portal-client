import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const job = useLoaderData();
  const {
    jobTitle,
    _id,
    companyName,
    jobType,
    category,
    description,
    responsibilities,
    photo,
    SalaryRange,
  } = job;

  return (
    <div className="flex max-w-[400px] mx-auto my-10 flex-col items-center justify-center space-y-4 rounded-xl bg-white p-8 shadow-lg dark:bg-[#18181B]">
      <div className="group relative">
        <img
          width={110}
          height={110}
          className="h-[110px] w-[110px] rounded-full border-2 object-cover"
          src={photo}
          alt="card navigate ui"
        />
        <span className="absolute bottom-3 right-0 h-5 w-5 rounded-full border-[3px] border-white bg-green-500 dark:border-[#18181B]"></span>
        <span className="absolute bottom-3 right-0 h-5 w-5 animate-ping rounded-full bg-green-500"></span>
      </div>
      <div className="space-y-1 text-center">
        <h1 className="text-2xl text-gray-700 dark:text-white/90">
          {companyName}
        </h1>
        <p className="text-lg text-gray-400">{jobTitle}</p>
      </div>
      <div className="flex w-full justify-between py-2">
        <div className="space-y-1 text-center">
          <p className="text-gray-500 text-lg dark:text-white/70">Type</p>
          <p className="font-mono text-base text-gray-700 dark:text-white/50">
            {jobType}
          </p>
        </div>
        <div className="space-y-1 text-center">
          <p className="text-gray-500 text-lg dark:text-white/70">Category</p>
          <p className="font-mono text-base text-gray-700 dark:text-white/50">
            {category}
          </p>
        </div>
        <div className="space-y-1 text-center">
          <p className="text-gray-500 dark:text-white/70">Salary</p>
          <p className="font-mono text-sm text-gray-700 dark:text-white/50">
            {SalaryRange.minSalary} - {SalaryRange.maxSalary}{" "}
            {SalaryRange.currency}
          </p>
        </div>
      </div>
      {/* bio  */}
      <p className="pb-2 text-center text-sm text-gray-500">{description}</p>
      <div className="w-full">
        <h2 className="text-lg font-semibold text-gray-700 dark:text-white/90 mb-2">
          Responsibilities:
        </h2>
        <ul className="list-disc pl-5 text-sm text-gray-500 dark:text-white/70">
          {responsibilities.map((item, index) => (
            <li key={index} className="mb-1">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <Link to={`/jobApply/${_id}`} className="w-full">
       
        <button className="w-full rounded-full py-2 text-[12px] font-semibold text-sky-700 ring-1 ring-sky-700 hover:bg-sky-700 hover:text-white sm:text-sm md:text-base">
          Apply Now
        </button>
      </Link>
    </div>
  );
};

export default JobDetails;
