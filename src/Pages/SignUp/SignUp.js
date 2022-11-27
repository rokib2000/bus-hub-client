import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div>
      <div class="min-h-screen flex flex-col items-center justify-center ">
        <div class="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
          <div class="font-medium self-center text-xl sm:text-2xl uppercase text-gray-800">Create To Your Account</div>

          <div class="mt-10">
            <form action="#">
              <div class="flex flex-col mb-6">
                <label for="name" class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">
                  Full Name:
                </label>
                <div class="relative">
                  <input
                    id="name"
                    type="text"
                    name="name"
                    class="text-sm sm:text-base placeholder-gray-500 pl-4 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                    placeholder="Your Full Name"
                  />
                </div>
              </div>
              <div class="flex flex-col mb-6">
                <label for="email" class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">
                  Profile Picture:
                </label>
                <div class="relative">
                  <input
                    type="file"
                    // className="file-input file-input-bordered w-full max-w-xs"
                    class=" file-input-bordered text-sm sm:text-base placeholder-gray-500 pl-4 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                  />
                </div>
              </div>
              <div class="flex flex-col mb-6">
                <label for="email" class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">
                  Account Type:
                </label>
                <div class="relative">
                  <select className="w-full text-sm sm:text-base placeholder-gray-500 pl-4 pr-4 rounded-lg border border-gray-400  py-2 focus:outline-none focus:border-blue-400">
                    <option value="Buyer">Buyer</option>
                    <option value="Seller">Seller</option>
                  </select>
                </div>
              </div>
              <div class="flex flex-col mb-6">
                <label for="email" class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">
                  Email Address:
                </label>
                <div class="relative">
                  <input
                    id="email"
                    type="email"
                    name="email"
                    class="text-sm sm:text-base placeholder-gray-500 pl-4 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                    placeholder="Email Address"
                  />
                </div>
              </div>
              <div class="flex flex-col mb-6">
                <label for="password" class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">
                  Password:
                </label>
                <div class="relative">
                  <input
                    id="password"
                    type="password"
                    name="password"
                    class="text-sm sm:text-base placeholder-gray-500 pl-4 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                    placeholder="Password"
                  />
                </div>
              </div>

              <div class="flex w-full">
                <button
                  type="submit"
                  class="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in"
                >
                  <span class="mr-2 uppercase">Signup</span>
                </button>
              </div>
            </form>
          </div>
          <div class="flex justify-center items-center mt-6">
            <Link
              to="/login"
              class="inline-flex items-center font-bold text-blue-500 hover:text-blue-700 text-xs text-center"
            >
              <span class="ml-2">Already have an account? please login</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
