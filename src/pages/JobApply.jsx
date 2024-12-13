import React from "react";
import { useParams } from "react-router-dom";

const JobApply = () => {
const {id}= useParams()
console.log(id)

const submitJobApplication = e =>{
    e.preventDefault()
    // submit job application to server here
  const form = e.target
  const github = form.github.value
  const linkedin = form.linkedin.value
  const resume = form.resume.value

  console.log(github, linkedin, resume)
}

  return (
    <div className="flex justify-center items-center my-12">
      <div className="w-full max-w-md rounded-lg bg-white px-10 pb-10 pt-8 shadow-md dark:bg-zinc-900">
        <div className="mb-6">
          <h2 className="text-center text-3xl font-semibold tracking-tight">
            Contact Us
          </h2>
          <p className="text-center text-sm text-zinc-500 dark:text-zinc-400">
            We&apos;d love to hear from you!
          </p>
        </div>
        <form onSubmit={submitJobApplication} className="w-full space-y-6">
          <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-400">
            <label className="block font-medium" htmlFor="name">
              Github URL
            </label>
            <input
              className="h-10 w-full rounded border px-3 py-2 text-sm leading-tight focus:outline-none focus:ring-1 dark:border-zinc-700"
              id="name"
              placeholder="Your github url"
              name="github"
              type="url"
              required
            />
          </div>
          <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-400">
            <label className="block font-medium" htmlFor="_email">
              LinkedIn URL
            </label>
            <input
              className="h-10 w-full rounded border px-3 py-2 text-sm leading-tight focus:outline-none focus:ring-1 dark:border-zinc-700"
              id="_email"
              placeholder="Your linked url"
              name="linkedin"
              type="url"
              required
            />
          </div>
          <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-400">
            <label className="block font-medium" htmlFor="_email">
              Resume URL
            </label>
            <input
              className="h-10 w-full rounded border px-3 py-2 text-sm leading-tight focus:outline-none focus:ring-1 dark:border-zinc-700"
              id="_email"
              placeholder="Your resume url"
              name="resume"
              type="url"
              required
            />
          </div>

          <button className="rounded-md w-full bg-sky-500 px-4 py-2 text-white transition-colors hover:bg-sky-600 dark:bg-sky-700">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default JobApply;
