import React, { useState } from "react";
import { useRouter } from "next/router";
import { useSession, signIn, signOut } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

import Hero from "../components/hero";
import Features from "@/components/features";
import FeaturesBlocks from "@/components/features-blocks";
import Testimonials from "@/components/testimonials";
import Newsletter from "@/components/newsletter";
import Header from "@/components/ui/header";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Image from "next/image";
import HeroImage from "@/public/images/hero-image.png";
import { BsGithub, BsTwitter, BsGoogle } from "react-icons/bs";
import Modal from "@/components/utils/modal";

const Signin = () => {
  const { data: session, status } = useSession();
  const { push } = useRouter();
  const [email, setEmail] = useState("");
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  console.log(session);
  if (status === "loading")
    return (
      <div className="flex flex-col place-content-center justify-center place-items-center w-full h-screen pb-24 overflow-auto text-gray-700 bg-white">
        <div role="status pb-2 grid place-content-center justify-center">
            <svg
              aria-hidden="true"
              className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
          <h1>Checking Authentication...</h1>
      </div>
    );

  if (session) {
    setTimeout(() => {
      push("/");
    }, 5000);

    return (
      <div className="flex flex-col place-content-center justify-center place-items-center w-full h-screen pb-24 overflow-auto text-gray-700 bg-white">
        <div role="status pb-2 grid place-content-center justify-center">
            <svg
              aria-hidden="true"
              className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
          <h1>Redirecting to Dashboard...</h1>
      </div>
    );
  }

  const handleOAuthSignIn = (provider) => () => signIn(provider);

  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-b from-green-50 to-green-100">
        <section className="py-10 sm:py-16 lg:py-24">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
              <div>
                <h1 className="text-4xl font-bold text-black sm:text-6xl lg:text-7xl">
                  Collaborate remotely, with
                  <div className="relative inline-flex">
                    <span className="absolute inset-x-0 bottom-0 border-b-[30px] border-[#4ADE80]"></span>
                    <h1 className="relative text-4xl font-bold text-black sm:text-6xl lg:text-7xl">
                      FindAlly.
                    </h1>
                  </div>
                </h1>

                <p className="mt-8 text-base text-black sm:text-xl">
                Study solo? No go! Find your academic partner with Finding Ally. Connect with like-minded learners, crush your goals together, and maybe even make a friend or two. Sign up now and let&apos;s find your ally!”
                </p>

                <div className="mt-10 sm:flex sm:items-center sm:space-x-8">
                  <button
                    onClick={handleOAuthSignIn("google")}
                    title=""
                    className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 bg-orange-500 hover:bg-orange-600 focus:bg-orange-600"
                    role="button"
                  >
                    {" "}
                    Sign Up Now{" "}
                  </button>
                </div>
              </div>

              <div>
                <img
                  className="w-full"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/2/hero-img.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 text-center sm:grid-cols-2 gap-y-8 lg:grid-cols-4 sm:gap-12">
            <div>
              <div className="flex items-center justify-center w-20 h-20 mx-auto bg-blue-100 rounded-full">
                <svg
                  className="text-blue-600 w-9 h-9"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                  />
                </svg>
              </div>
              <h3 className="mt-8 text-lg font-semibold text-black">
                Secured Payments
              </h3>
              <p className="mt-4 text-sm text-gray-600">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </p>
            </div>

            <div>
              <div className="flex items-center justify-center w-20 h-20 mx-auto bg-orange-100 rounded-full">
                <svg
                  className="text-orange-600 w-9 h-9"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="mt-8 text-lg font-semibold text-black">
                Fast & Easy to Load
              </h3>
              <p className="mt-4 text-sm text-gray-600">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </p>
            </div>

            <div>
              <div className="flex items-center justify-center w-20 h-20 mx-auto bg-green-100 rounded-full">
                <svg
                  className="text-green-600 w-9 h-9"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              </div>
              <h3 className="mt-8 text-lg font-semibold text-black">
                Light & Dark Version
              </h3>
              <p className="mt-4 text-sm text-gray-600">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </p>
            </div>

            <div>
              <div className="flex items-center justify-center w-20 h-20 mx-auto bg-red-100 rounded-full">
                <svg
                  className="text-red-600 w-9 h-9"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                  />
                </svg>
              </div>
              <h3 className="mt-8 text-lg font-semibold text-black">
                Filter Blocks
              </h3>
              <p className="mt-4 text-sm text-gray-600">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </p>
            </div>
            <div>
              <div className="flex items-center justify-center w-20 h-20 mx-auto bg-blue-100 rounded-full">
                <svg
                  className="text-blue-600 w-9 h-9"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                  />
                </svg>
              </div>
              <h3 className="mt-8 text-lg font-semibold text-black">
                Secured Payments
              </h3>
              <p className="mt-4 text-sm text-gray-600">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </p>
            </div>

            <div>
              <div className="flex items-center justify-center w-20 h-20 mx-auto bg-orange-100 rounded-full">
                <svg
                  className="text-orange-600 w-9 h-9"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="mt-8 text-lg font-semibold text-black">
                Fast & Easy to Load
              </h3>
              <p className="mt-4 text-sm text-gray-600">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </p>
            </div>

            <div>
              <div className="flex items-center justify-center w-20 h-20 mx-auto bg-green-100 rounded-full">
                <svg
                  className="text-green-600 w-9 h-9"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              </div>
              <h3 className="mt-8 text-lg font-semibold text-black">
                Light & Dark Version
              </h3>
              <p className="mt-4 text-sm text-gray-600">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </p>
            </div>

            <div>
              <div className="flex items-center justify-center w-20 h-20 mx-auto bg-red-100 rounded-full">
                <svg
                  className="text-red-600 w-9 h-9"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                  />
                </svg>
              </div>
              <h3 className="mt-8 text-lg font-semibold text-black">
                Filter Blocks
              </h3>
              <p className="mt-4 text-sm text-gray-600">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Key feature 1  */}

      <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid items-center grid-cols-1 gap-y-8 lg:grid-cols-2 gap-x-16 xl:gap-x-24">
            <div className="relative mb-12">
              <img
                className="w-full rounded-md"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/content/1/team-work.jpg"
                alt=""
              />

              <div className="absolute w-full max-w-xs px-4 -translate-x-1/2 sm:px-0 sm:max-w-sm left-1/2 -bottom-12">
                <div className="overflow-hidden bg-white rounded">
                  <div className="px-10 py-6">
                    <div className="flex items-center">
                      <p className="flex-shrink-0 text-3xl font-bold text-blue-600 sm:text-4xl">
                        37%
                      </p>
                      <p className="pl-6 text-sm font-medium text-black sm:text-lg">
                        High Conversions <br />
                        on Landing Pages
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              
              <h2 className="mt-10 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
                Find Ally
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia conse duis enim velit mollit.
                Exercitation veniam.
              </p>
              
            </div>
          </div>
        </div>
      </section>

      {/* Key feature 2  */}

      <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid items-center grid-cols-1 gap-y-8 lg:grid-cols-2 gap-x-16 xl:gap-x-24">
            <div className="mb-12">
              
              <h2 className="mt-10 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
                Resources
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia conse duis enim velit mollit.
                Exercitation veniam.
              </p>
              
            </div>

            <div className="relative ">
              <img
                className="w-full rounded-md"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/content/1/team-work.jpg"
                alt=""
              />

              <div className="absolute w-full max-w-xs px-4 -translate-x-1/2 sm:px-0 sm:max-w-sm left-1/2 -bottom-12">
                <div className="overflow-hidden bg-white rounded">
                  <div className="px-10 py-6">
                    <div className="flex items-center">
                      <p className="flex-shrink-0 text-3xl font-bold text-blue-600 sm:text-4xl">
                        37%
                      </p>
                      <p className="pl-6 text-sm font-medium text-black sm:text-lg">
                        High Conversions <br />
                        on Landing Pages
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key feature 3  */}

      <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid items-center grid-cols-1 gap-y-8 lg:grid-cols-2 gap-x-16 xl:gap-x-24">
            <div className="relative mb-12">
              <img
                className="w-full rounded-md"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/content/1/team-work.jpg"
                alt=""
              />

              <div className="absolute w-full max-w-xs px-4 -translate-x-1/2 sm:px-0 sm:max-w-sm left-1/2 -bottom-12">
                <div className="overflow-hidden bg-white rounded">
                  <div className="px-10 py-6">
                    <div className="flex items-center">
                      <p className="flex-shrink-0 text-3xl font-bold text-blue-600 sm:text-4xl">
                        37%
                      </p>
                      <p className="pl-6 text-sm font-medium text-black sm:text-lg">
                        High Conversions <br />
                        on Landing Pages
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              
              <h2 className="mt-10 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
                Self Study
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia conse duis enim velit mollit.
                Exercitation veniam.
              </p>
              
            </div>
          </div>
        </div>
      </section>


      <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid items-center grid-cols-1 gap-y-8 lg:grid-cols-2 gap-x-16 xl:gap-x-24">
            <div className="mb-12">
              
              <h2 className="mt-10 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
                Profile
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia conse duis enim velit mollit.
                Exercitation veniam.
              </p>
              
            </div>

            <div className="relative ">
              <img
                className="w-full rounded-md"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/content/1/team-work.jpg"
                alt=""
              />

              <div className="absolute w-full max-w-xs px-4 -translate-x-1/2 sm:px-0 sm:max-w-sm left-1/2 -bottom-12">
                <div className="overflow-hidden bg-white rounded">
                  <div className="px-10 py-6">
                    <div className="flex items-center">
                      <p className="flex-shrink-0 text-3xl font-bold text-blue-600 sm:text-4xl">
                        37%
                      </p>
                      <p className="pl-6 text-sm font-medium text-black sm:text-lg">
                        High Conversions <br />
                        on Landing Pages
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How we work */}

      <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              How do we create success
            </h2>
            <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis.
            </p>
          </div>

          <ul className="max-w-md mx-auto mt-16 space-y-12">
            <li className="relative flex items-start">
              <div
                className="-ml-0.5 absolute mt-0.5 top-14 left-8 w-px border-l-4 border-dotted border-gray-300 h-full"
                aria-hidden="true"
              ></div>

              <div className="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow">
                <svg
                  className="w-10 h-10 text-fuchsia-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <div className="ml-6">
                <h3 className="text-lg font-semibold text-black">
                  Create a free account
                </h3>
                <p className="mt-4 text-base text-gray-600">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>
            </li>

            <li className="relative flex items-start">
              <div
                className="-ml-0.5 absolute mt-0.5 top-14 left-8 w-px border-l-4 border-dotted border-gray-300 h-full"
                aria-hidden="true"
              ></div>

              <div className="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow">
                <svg
                  className="w-10 h-10 text-fuchsia-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                  />
                </svg>
              </div>
              <div className="ml-6">
                <h3 className="text-lg font-semibold text-black">
                  Build your website
                </h3>
                <p className="mt-4 text-base text-gray-600">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>
            </li>

            <li className="relative flex items-start">
              <div className="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow">
                <svg
                  className="w-10 h-10 text-fuchsia-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div className="ml-6">
                <h3 className="text-lg font-semibold text-black">
                  Release & launch
                </h3>
                <p className="mt-4 text-base text-gray-600">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 text-center sm:grid-cols-2 gap-y-8 lg:grid-cols-4 sm:gap-12">
            <div>
              <div className="flex items-center justify-center w-20 h-20 mx-auto bg-blue-100 rounded-full">
                <svg
                  className="text-blue-600 w-9 h-9"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                  />
                </svg>
              </div>
              <h3 className="mt-8 text-lg font-semibold text-black">
                Secured Payments
              </h3>
              <p className="mt-4 text-sm text-gray-600">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </p>
            </div>

            <div>
              <div className="flex items-center justify-center w-20 h-20 mx-auto bg-orange-100 rounded-full">
                <svg
                  className="text-orange-600 w-9 h-9"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="mt-8 text-lg font-semibold text-black">
                Fast & Easy to Load
              </h3>
              <p className="mt-4 text-sm text-gray-600">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </p>
            </div>

            <div>
              <div className="flex items-center justify-center w-20 h-20 mx-auto bg-green-100 rounded-full">
                <svg
                  className="text-green-600 w-9 h-9"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              </div>
              <h3 className="mt-8 text-lg font-semibold text-black">
                Light & Dark Version
              </h3>
              <p className="mt-4 text-sm text-gray-600">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </p>
            </div>

            <div>
              <div className="flex items-center justify-center w-20 h-20 mx-auto bg-red-100 rounded-full">
                <svg
                  className="text-red-600 w-9 h-9"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                  />
                </svg>
              </div>
              <h3 className="mt-8 text-lg font-semibold text-black">
                Filter Blocks
              </h3>
              <p className="mt-4 text-sm text-gray-600">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* social proof */}

      

      {/* Testimonials */}
      {/* <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              What our customers say
            </h2>
            <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 px-4 mt-12 sm:px-0 xl:mt-20 xl:grid-cols-4 sm:grid-cols-2">
            <div className="overflow-hidden bg-white rounded-md">
              <div className="px-5 py-6">
                <div className="flex items-center justify-between">
                  <img
                    className="flex-shrink-0 object-cover w-10 h-10 rounded-full"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-1.jpg"
                    alt=""
                  />
                  <div className="min-w-0 ml-3 mr-auto">
                    <p className="text-base font-semibold text-black truncate">
                      Darrell Steward
                    </p>
                    <p className="text-sm text-gray-600 truncate">@darrels</p>
                  </div>
                  <a href="#" title="" className="inline-block text-sky-500">
                    <svg
                      className="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
                    </svg>
                  </a>
                </div>
                <blockquote className="mt-5">
                  <p className="text-base text-gray-800">
                    You made it so simple. My new site is so much faster and
                    easier to work with than my old site. I just choose the
                    page, make the change and click save.
                    <span className="block text-sky-500">#another</span>
                  </p>
                </blockquote>
              </div>
            </div>

            <div className="overflow-hidden bg-white rounded-md">
              <div className="px-5 py-6">
                <div className="flex items-center justify-between">
                  <img
                    className="flex-shrink-0 object-cover w-10 h-10 rounded-full"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-2.jpg"
                    alt=""
                  />
                  <div className="min-w-0 ml-3 mr-auto">
                    <p className="text-base font-semibold text-black truncate">
                      Leslie Alexander
                    </p>
                    <p className="text-sm text-gray-600 truncate">@lesslie</p>
                  </div>
                  <a href="#" title="" className="inline-block text-sky-500">
                    <svg
                      className="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
                    </svg>
                  </a>
                </div>
                <blockquote className="mt-5">
                  <p className="text-base text-gray-800">
                    Simply the best. Better than all the rest. I’d recommend
                    this product to beginners and advanced users.
                    <span className="block text-sky-500">#Celebration</span>
                  </p>
                </blockquote>
              </div>
            </div>

            <div className="overflow-hidden bg-white rounded-md">
              <div className="px-5 py-6">
                <div className="flex items-center justify-between">
                  <img
                    className="flex-shrink-0 object-cover w-10 h-10 rounded-full"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-3.jpg"
                    alt=""
                  />
                  <div className="min-w-0 ml-3 mr-auto">
                    <p className="text-base font-semibold text-black truncate">
                      Jenny Wilson
                    </p>
                    <p className="text-sm text-gray-600 truncate">@jennywilson</p>
                  </div>
                  <a href="#" title="" className="inline-block text-sky-500">
                    <svg
                      className="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
                    </svg>
                  </a>
                </div>
                <blockquote className="mt-5">
                  <p className="text-base text-gray-800">
                    This is a top quality product. No need to think twice before
                    making it live on web.
                    <span className="block text-sky-500">#make_it_fast</span>
                  </p>
                </blockquote>
              </div>
            </div>

            <div className="overflow-hidden bg-white rounded-md">
              <div className="px-5 py-6">
                <div className="flex items-center justify-between">
                  <img
                    className="flex-shrink-0 object-cover w-10 h-10 rounded-full"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-4.jpg"
                    alt=""
                  />
                  <div className="min-w-0 ml-3 mr-auto">
                    <p className="text-base font-semibold text-black truncate">
                      Kristin Watson
                    </p>
                    <p className="text-sm text-gray-600 truncate">
                      @kristinwatson2
                    </p>
                  </div>
                  <a href="#" title="" className="inline-block text-sky-500">
                    <svg
                      className="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
                    </svg>
                  </a>
                </div>
                <blockquote className="mt-5">
                  <p className="text-base text-gray-800">
                    YFinally, I’ve found a template that covers all bases for a
                    bootstrapped startup. We were able to launch in days, not
                    months.
                    <span className="block text-sky-500">#Celebration</span>
                  </p>
                </blockquote>
              </div>
            </div>

            <div className="overflow-hidden bg-white rounded-md">
              <div className="px-5 py-6">
                <div className="flex items-center justify-between">
                  <img
                    className="flex-shrink-0 object-cover w-10 h-10 rounded-full"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-5.jpg"
                    alt=""
                  />
                  <div className="min-w-0 ml-3 mr-auto">
                    <p className="text-base font-semibold text-black truncate">
                      Guy Hawkins
                    </p>
                    <p className="text-sm text-gray-600 truncate">@jennywilson</p>
                  </div>
                  <a href="#" title="" className="inline-block text-sky-500">
                    <svg
                      className="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
                    </svg>
                  </a>
                </div>
                <blockquote className="mt-5">
                  <p className="text-base text-gray-800">
                    This is a top quality product. No need to think twice before
                    making it live on web.
                    <span className="block text-sky-500">#make_it_fast</span>
                  </p>
                </blockquote>
              </div>
            </div>

            <div className="overflow-hidden bg-white rounded-md">
              <div className="px-5 py-6">
                <div className="flex items-center justify-between">
                  <img
                    className="flex-shrink-0 object-cover w-10 h-10 rounded-full"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-6.jpg"
                    alt=""
                  />
                  <div className="min-w-0 ml-3 mr-auto">
                    <p className="text-base font-semibold text-black truncate">
                      Marvin McKinney
                    </p>
                    <p className="text-sm text-gray-600 truncate">@darrels</p>
                  </div>
                  <a href="#" title="" className="inline-block text-sky-500">
                    <svg
                      className="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
                    </svg>
                  </a>
                </div>
                <blockquote className="mt-5">
                  <p className="text-base text-gray-800">
                    With Celebration, it’s quicker with the customer, the
                    customer is more ensured of getting exactly what they
                    ordered, and I’m all for the efficiency.
                    <span className="block text-sky-500">#dev #tools</span>
                  </p>
                </blockquote>
              </div>
            </div>

            <div className="overflow-hidden bg-white rounded-md">
              <div className="px-5 py-6">
                <div className="flex items-center justify-between">
                  <img
                    className="flex-shrink-0 object-cover w-10 h-10 rounded-full"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-7.jpg"
                    alt=""
                  />
                  <div className="min-w-0 ml-3 mr-auto">
                    <p className="text-base font-semibold text-black truncate">
                      Annette Black
                    </p>
                    <p className="text-sm text-gray-600 truncate">@darrels</p>
                  </div>
                  <a href="#" title="" className="inline-block text-sky-500">
                    <svg
                      className="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
                    </svg>
                  </a>
                </div>
                <blockquote className="mt-5">
                  <p className="text-base text-gray-800">
                    You made it so simple. My new site is so much faster and
                    easier to work with than my old site. I just choose the
                    page, make the change and click save.
                    <span className="block text-sky-500">#another</span>
                  </p>
                </blockquote>
              </div>
            </div>

            <div className="overflow-hidden bg-white rounded-md">
              <div className="px-5 py-6">
                <div className="flex items-center justify-between">
                  <img
                    className="flex-shrink-0 object-cover w-10 h-10 rounded-full"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-8.jpg"
                    alt=""
                  />
                  <div className="min-w-0 ml-3 mr-auto">
                    <p className="text-base font-semibold text-black truncate">
                      Floyd Miles
                    </p>
                    <p className="text-sm text-gray-600 truncate">@darrels</p>
                  </div>
                  <a href="#" title="" className="inline-block text-sky-500">
                    <svg
                      className="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
                    </svg>
                  </a>
                </div>
                <blockquote className="mt-5">
                  <p className="text-base text-gray-800">
                    My new site is so much faster and easier to work with than
                    my old site. I just choose the page, make the change and
                    click save.
                    <span className="block text-sky-500">#Celebration</span>
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* call to action */}
      <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex items-center justify-center">
              <div className="w-20 h-20 -mr-6 overflow-hidden bg-gray-300 rounded-full">
                <img
                  className="object-cover w-full h-full"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/2/female-avatar-1.jpg"
                  alt=""
                />
              </div>

              <div className="relative overflow-hidden bg-gray-300 border-8 border-white rounded-full w-28 h-28">
                <img
                  className="object-cover w-full h-full"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/2/male-avatar-1.jpg"
                  alt=""
                />
              </div>

              <div className="w-20 h-20 -ml-6 overflow-hidden bg-gray-300 rounded-full">
                <img
                  className="object-cover w-full h-full"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/2/female-avatar-2.jpg"
                  alt=""
                />
              </div>
            </div>

            <h2 className="mt-8 text-3xl font-bold leading-tight text-black lg:mt-12 sm:text-4xl lg:text-5xl">
              Join <span className="border-b-8 border-yellow-300">5,482</span> other
              developers
            </h2>
            <p className="max-w-xl mx-auto mt-6 text-xl text-gray-600 md:mt-10">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis.
            </p>

            <a
              href="#"
              title=""
              className="inline-flex items-center justify-center px-4 py-4 mt-8 font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md lg:mt-12 hover:bg-blue-700 focus:bg-blue-700"
              role="button"
            >
              <svg
                className="w-5 h-5 mr-2 -ml-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <span>Create Account</span>
            </a>
          </div>
        </div>
      </section>


      <Footer />
    </>
  );
};

export default Signin;
