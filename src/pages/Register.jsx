import Lottie from "lottie-react";
import React from "react";
import register from "../Lottie/login-animation.json";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="flex justify-around gap-16 w-[70%] mx-auto my-12">
      <div className="w-full max-w-md rounded-lg bg-white px-10 pb-10 pt-8 shadow-md dark:bg-zinc-900">
        <div className="mb-6">
          <h2 className="text-center text-3xl font-semibold tracking-tight">
            Register Now
          </h2>
          <p className="text-center">
            Please fill in the form to create an account.
          </p>
        </div>
        <form className="w-full space-y-6">
          <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-400">
            <label className="block font-medium" htmlFor="name">
              Name
            </label>
            <input
              className="h-10 w-full rounded border px-3 py-2 text-sm leading-tight focus:outline-none focus:ring-1 dark:border-zinc-700"
              id="name"
              placeholder="Your Name"
              name="name"
              type="text"
              required
            />
          </div>
          <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-400">
            <label className="block font-medium" htmlFor="_email">
              Email
            </label>
            <input
              className="h-10 w-full rounded border px-3 py-2 text-sm leading-tight focus:outline-none focus:ring-1 dark:border-zinc-700"
              id="_email"
              placeholder="Your Email"
              name="email"
              type="email"
              required
            />
          </div>
          <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-400">
            <label className="block font-medium" htmlFor="_email">
              Password
            </label>
            <input
              className="h-10 w-full rounded border px-3 py-2 text-sm leading-tight focus:outline-none focus:ring-1 dark:border-zinc-700"
              placeholder="Your password"
              name="password"
              type="password"
              required
            />
          </div>
          <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-400">
            <label className="block font-medium" htmlFor="_email">
              Photo
            </label>
            <input
              className="h-10 w-full rounded border px-3 py-2 text-sm leading-tight focus:outline-none focus:ring-1 dark:border-zinc-700"
              placeholder="Your photo"
              name="photo"
              type="url"
              required
            />
          </div>

          <button className="rounded-md w-full bg-sky-500 px-4 py-2 text-white transition-colors hover:bg-sky-600 dark:bg-sky-700">
            Register
          </button>
        </form>
        <p className="text-center pt-4 text-sm text-zinc-700 dark:text-zinc-300">
         Already have an account?
          <Link to="/login" className="font-semibold underline">
         Login
          </Link>
        </p>
      </div>
      <div>
        <Lottie
          animationData={register}
          loop={true}
          className="w-4/3 mx-auto items-center"
        ></Lottie>
      </div>
    </div>
  );
};

export default Register;
