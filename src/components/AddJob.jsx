import React from "react";

const AddJob = () => {

const handelAddJob = e =>{
  e.preventDefault()
  const formData = new FormData(e.target);
const initialData = Object.fromEntries(formData.entries())
console.log('form data',initialData)
const {minSalary,maxSalary,currency, ...newJob} = initialData
console.log('new job',newJob)
newJob.SalaryRange = {minSalary,maxSalary,currency}
newJob.requirements = newJob.requirements.split('\n')
newJob.responsibilities = newJob.responsibilities.split('\n')
console.log('new salary',newJob)

fetch('http://localhost:5000/jobs',{
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(newJob)
 
})
.then(res => res.json())
 .then(data => {
  console.log('data',data)
  alert('Job Added Successfully')
 })

}


  return (
    <div className="my-10">
      <div className="flex items-center justify-center ">
        <div className="w-full max-w-3xl p-8 bg-white rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold text-center mb-8">
            Job Posting Form
          </h1>
          <form onSubmit={handelAddJob}>
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Job Title
                </label>
                <select
                  name="jobTitle"
                  className="w-full px-3 py-2 mt-1 border rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
                >
                  <option>Software Engineer</option>
                  <option>Marketing Specialist</option>
                  <option>Finance Manager</option>
                  <option>Project Manager</option>
                  <option>UI/UX Designer</option>
                  <option>Teaching Assistant</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  className="w-full px-3 py-2 mt-1 border rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
                  placeholder="location"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Company Name
                </label>
                <input
                  type="text"
                  name="companyName"
                  className="w-full px-3 py-2 mt-1 border rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
                  placeholder="company name"
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Job Type
                </label>
                <select
                  name="jobType"
                  className="w-full px-3 py-2 mt-1 border rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
                >
                  <option>Hybrid</option>
                  <option>Remote</option>
                  <option>On-site</option>
                  <option>Full Time</option>
                  <option>Intern</option>
                  <option>Part Time</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Category
                </label>
                <select
                  name="category"
                  className="w-full px-3 py-2 mt-1 border rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
                >
                  <option>Engineering</option>
                  <option>Development</option>
                  <option>Marketing</option>
                  <option>Teaching</option>
                  <option>Design</option>
                  <option>Management</option>
                </select>
              </div>
              <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Application Deadline
              </label>
              <input
                type="date"
                name="date"
                className="w-full px-3 py-2 mt-1 border rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
              />
            </div>
            </div>
            <div>
              <label className="label">
                <span className="text-base">SalaryRange</span>
              </label>
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div> 
                <label className="block text-sm font-medium text-gray-700">
                  Min Salary 
                </label>
                <input
                  type="number"
                  name="minSalary"
                  className="w-full px-3 py-2 mt-1 border rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
                  placeholder="min-salary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Max Salary 
                </label>
                <input
                  type="number"
                  name="maxSalary"
                  className="w-full px-3 py-2 mt-1 border rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
                  placeholder="max-salary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Currency
                </label>
                <select
                  name="currency"
                  className="w-full px-3 py-2 mt-1 border rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
                >
                  <option>BDT</option>
                  <option>USD</option>
                  <option>EUR</option>
                </select>
              </div>
            </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                name="description"
                className="w-full px-3 py-2 mt-1 border rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
                rows="4"
                placeholder="Job description here..."
              ></textarea>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  HR Name
                </label>
                <input
                  type="text"
                  name="hrName"
                  className="w-full px-3 py-2 mt-1 border rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
                  placeholder="Enter Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  HR Email
                </label>
                <input
                  type="email"
                  name="hrEmail"
                  className="w-full px-3 py-2 mt-1 border rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
                  placeholder="Enter Email"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Requirements
                </label>
                <textarea
                  name="requirements"
                  className="w-full px-3 py-2 mt-1 border rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
                  rows="3"
                  placeholder="Requirements"
                ></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Responsibilities
                </label>
                <textarea
                  name="responsibilities"
                  className="w-full px-3 py-2 mt-1 border rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
                  rows="3"
                  placeholder="Responsibilities"
                ></textarea>
              </div>
            </div>
           
            <div className="space-y-2 mb-4 text-sm text-zinc-700 dark:text-zinc-400">
            <label className="block font-medium" htmlFor="_email">
              Company Logo
            </label>
            <input
              className="w-full px-3 py-2 mt-1 border rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
              placeholder="Your photo"
              name="photo"
              type="url"
              required
            />
          </div>
            <div className="text-center">
              <button
                type="submit"
                className="px-6 w-full py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
              >
                Post Job
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddJob;
