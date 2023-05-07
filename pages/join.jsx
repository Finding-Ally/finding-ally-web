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
      <div className="flex flex-col place-content-center justify-center place-items-center w-full h-screen pb-24 overflow-auto text-gray-700 bg-gradient-to-tr from-blue-200 via-indigo-200 to-pink-200">
        <div role="status grid place-content-center justify-center">
            <svg
              aria-hidden="true"
              class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
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
            <span class="sr-only">Loading...</span>
          </div>
          <h1>Checking Authentication</h1>
      </div>
    );

  if (session) {
    setTimeout(() => {
      push("/");
    }, 5000);

    return (
      <div className="flex flex-col place-content-center justify-center place-items-center w-full h-screen pb-24 overflow-auto text-gray-700 bg-gradient-to-tr from-blue-200 via-indigo-200 to-pink-200">
        <button
          type="button"
          className="bg-indigo-500 rounded-2xl p-2 grid place-content-center justify-center"
          disabled
        >
          <div role="status grid place-content-center justify-center">
            <svg
              aria-hidden="true"
              class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
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
            <span class="sr-only">Loading...</span>
          </div>
          <svg
            className="animate-spin h-5 w-5 mr-3 ..."
            viewBox="0 0 24 24"
          ></svg>
          Redirecting to Dashboard...
        </button>
      </div>
    );
  }

  const handleOAuthSignIn = (provider) => () => signIn(provider);

  return (
    <>
      <Navbar />
      {/* Hero */}

      <div class="bg-gradient-to-b from-green-50 to-green-100">
        <section class="py-10 sm:py-16 lg:py-24">
          <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div class="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
              <div>
                <h1 class="text-4xl font-bold text-black sm:text-6xl lg:text-7xl">
                  Collaborate remotely, with
                  <div class="relative inline-flex">
                    <span class="absolute inset-x-0 bottom-0 border-b-[30px] border-[#4ADE80]"></span>
                    <h1 class="relative text-4xl font-bold text-black sm:text-6xl lg:text-7xl">
                      FindAlly.
                    </h1>
                  </div>
                </h1>

                <p class="mt-8 text-base text-black sm:text-xl">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat.
                </p>

                <div class="mt-10 sm:flex sm:items-center sm:space-x-8">
                  <button
                    onClick={handleOAuthSignIn("google")}
                    title=""
                    class="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 bg-orange-500 hover:bg-orange-600 focus:bg-orange-600"
                    role="button"
                  >
                    {" "}
                    Start exploring{" "}
                  </button>

                  <a
                    href="#"
                    title=""
                    class="inline-flex text-black items-center mt-6 text-base font-semibold transition-all duration-200 sm:mt-0 hover:opacity-80"
                  >
                    <svg
                      class="w-10 h-10 mr-3"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        fill="#F97316"
                        stroke="#F97316"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Watch video
                  </a>
                </div>
              </div>

              <div>
                <img
                  class="w-full"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/2/hero-img.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Key feature 1  */}

      <section class="py-10 bg-gray-100 sm:py-16 lg:py-24">
        <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div class="grid items-center grid-cols-1 gap-y-8 lg:grid-cols-2 gap-x-16 xl:gap-x-24">
            <div class="relative mb-12">
              <img
                class="w-full rounded-md"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/content/1/team-work.jpg"
                alt=""
              />

              <div class="absolute w-full max-w-xs px-4 -translate-x-1/2 sm:px-0 sm:max-w-sm left-1/2 -bottom-12">
                <div class="overflow-hidden bg-white rounded">
                  <div class="px-10 py-6">
                    <div class="flex items-center">
                      <p class="flex-shrink-0 text-3xl font-bold text-blue-600 sm:text-4xl">
                        37%
                      </p>
                      <p class="pl-6 text-sm font-medium text-black sm:text-lg">
                        High Conversions <br />
                        on Landing Pages
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div class="flex items-center justify-center w-16 h-16 bg-white rounded-full">
                <svg
                  class="w-8 h-8 text-orange-400"
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
              <h2 class="mt-10 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
                Build a perfect team within hours.
              </h2>
              <p class="mt-6 text-lg leading-relaxed text-gray-600">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia conse duis enim velit mollit.
                Exercitation veniam.
              </p>
              <a
                href="#"
                title=""
                class="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 rounded-md mt-9 bg-gradient-to-r from-fuchsia-600 to-blue-600 hover:opacity-80 focus:opacity-80"
                role="button"
              >
                {" "}
                Explore more{" "}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Key feature 2  */}

      <section class="py-10 bg-gray-100 sm:py-16 lg:py-24">
        <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div class="grid items-center grid-cols-1 gap-y-8 lg:grid-cols-2 gap-x-16 xl:gap-x-24">
            <div className="mb-12">
              <div class="flex items-center justify-center w-16 h-16 bg-white rounded-full">
                <svg
                  class="w-8 h-8 text-orange-400"
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
              <h2 class="mt-10 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
                Build a perfect team within hours.
              </h2>
              <p class="mt-6 text-lg leading-relaxed text-gray-600">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia conse duis enim velit mollit.
                Exercitation veniam.
              </p>
              <a
                href="#"
                title=""
                class="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 rounded-md mt-9 bg-gradient-to-r from-fuchsia-600 to-blue-600 hover:opacity-80 focus:opacity-80"
                role="button"
              >
                {" "}
                Explore more{" "}
              </a>
            </div>

            <div class="relative ">
              <img
                class="w-full rounded-md"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/content/1/team-work.jpg"
                alt=""
              />

              <div class="absolute w-full max-w-xs px-4 -translate-x-1/2 sm:px-0 sm:max-w-sm left-1/2 -bottom-12">
                <div class="overflow-hidden bg-white rounded">
                  <div class="px-10 py-6">
                    <div class="flex items-center">
                      <p class="flex-shrink-0 text-3xl font-bold text-blue-600 sm:text-4xl">
                        37%
                      </p>
                      <p class="pl-6 text-sm font-medium text-black sm:text-lg">
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

      <section class="py-10 bg-gray-100 sm:py-16 lg:py-24">
        <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div class="grid items-center grid-cols-1 gap-y-8 lg:grid-cols-2 gap-x-16 xl:gap-x-24">
            <div class="relative mb-12">
              <img
                class="w-full rounded-md"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/content/1/team-work.jpg"
                alt=""
              />

              <div class="absolute w-full max-w-xs px-4 -translate-x-1/2 sm:px-0 sm:max-w-sm left-1/2 -bottom-12">
                <div class="overflow-hidden bg-white rounded">
                  <div class="px-10 py-6">
                    <div class="flex items-center">
                      <p class="flex-shrink-0 text-3xl font-bold text-blue-600 sm:text-4xl">
                        37%
                      </p>
                      <p class="pl-6 text-sm font-medium text-black sm:text-lg">
                        High Conversions <br />
                        on Landing Pages
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div class="flex items-center justify-center w-16 h-16 bg-white rounded-full">
                <svg
                  class="w-8 h-8 text-orange-400"
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
              <h2 class="mt-10 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
                Build a perfect team within hours.
              </h2>
              <p class="mt-6 text-lg leading-relaxed text-gray-600">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia conse duis enim velit mollit.
                Exercitation veniam.
              </p>
              <a
                href="#"
                title=""
                class="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 rounded-md mt-9 bg-gradient-to-r from-fuchsia-600 to-blue-600 hover:opacity-80 focus:opacity-80"
                role="button"
              >
                {" "}
                Explore more{" "}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How we work */}

      <section class="py-10 bg-gray-100 sm:py-16 lg:py-24">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              How do we create success
            </h2>
            <p class="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis.
            </p>
          </div>

          <ul class="max-w-md mx-auto mt-16 space-y-12">
            <li class="relative flex items-start">
              <div
                class="-ml-0.5 absolute mt-0.5 top-14 left-8 w-px border-l-4 border-dotted border-gray-300 h-full"
                aria-hidden="true"
              ></div>

              <div class="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow">
                <svg
                  class="w-10 h-10 text-fuchsia-600"
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
              <div class="ml-6">
                <h3 class="text-lg font-semibold text-black">
                  Create a free account
                </h3>
                <p class="mt-4 text-base text-gray-600">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>
            </li>

            <li class="relative flex items-start">
              <div
                class="-ml-0.5 absolute mt-0.5 top-14 left-8 w-px border-l-4 border-dotted border-gray-300 h-full"
                aria-hidden="true"
              ></div>

              <div class="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow">
                <svg
                  class="w-10 h-10 text-fuchsia-600"
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
              <div class="ml-6">
                <h3 class="text-lg font-semibold text-black">
                  Build your website
                </h3>
                <p class="mt-4 text-base text-gray-600">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>
            </li>

            <li class="relative flex items-start">
              <div class="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow">
                <svg
                  class="w-10 h-10 text-fuchsia-600"
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
              <div class="ml-6">
                <h3 class="text-lg font-semibold text-black">
                  Release & launch
                </h3>
                <p class="mt-4 text-base text-gray-600">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* features */}

      <section class="py-10 bg-gray-50 sm:py-16 lg:py-24">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div class="max-w-xl mx-auto text-center">
            <p class="text-sm font-semibold tracking-widest text-blue-600 uppercase">
              130+ Handcoded Blocks
            </p>

            <h2 class="mt-6 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Celebration helps you build beautiful website
            </h2>
          </div>

          <div class="grid items-center grid-cols-1 mt-12 gap-y-10 lg:grid-cols-5 sm:mt-20 gap-x-4">
            <div class="space-y-8 lg:pr-16 xl:pr-24 lg:col-span-2 lg:space-y-12">
              <div class="flex items-start">
                <svg
                  class="flex-shrink-0 text-green-500 w-9 h-9"
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
                <div class="ml-5">
                  <h3 class="text-xl font-semibold text-black">
                    Simply Copy & Paste
                  </h3>
                  <p class="mt-3 text-base text-gray-600">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint.
                  </p>
                </div>
              </div>

              <div class="flex items-start">
                <svg
                  class="flex-shrink-0 text-blue-600 w-9 h-9"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <div class="ml-5">
                  <h3 class="text-xl font-semibold text-black">
                    Easy to Customize
                  </h3>
                  <p class="mt-3 text-base text-gray-600">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint.
                  </p>
                </div>
              </div>

              <div class="flex items-start">
                <svg
                  class="flex-shrink-0 text-red-500 w-9 h-9"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                <div class="ml-5">
                  <h3 class="text-xl font-semibold text-black">
                    Made with TailwindCSS
                  </h3>
                  <p class="mt-3 text-base text-gray-600">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint.
                  </p>
                </div>
              </div>
            </div>

            <div class="lg:col-span-3">
              <img
                class="w-full rounded-lg shadow-xl"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/features/7/dashboard-screenshot.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section class="py-10 bg-gray-50 sm:py-16 lg:py-24">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 text-center sm:grid-cols-2 gap-y-8 lg:grid-cols-4 sm:gap-12">
            <div>
              <div class="flex items-center justify-center w-20 h-20 mx-auto bg-blue-100 rounded-full">
                <svg
                  class="text-blue-600 w-9 h-9"
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
              <h3 class="mt-8 text-lg font-semibold text-black">
                Secured Payments
              </h3>
              <p class="mt-4 text-sm text-gray-600">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </p>
            </div>

            <div>
              <div class="flex items-center justify-center w-20 h-20 mx-auto bg-orange-100 rounded-full">
                <svg
                  class="text-orange-600 w-9 h-9"
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
              <h3 class="mt-8 text-lg font-semibold text-black">
                Fast & Easy to Load
              </h3>
              <p class="mt-4 text-sm text-gray-600">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </p>
            </div>

            <div>
              <div class="flex items-center justify-center w-20 h-20 mx-auto bg-green-100 rounded-full">
                <svg
                  class="text-green-600 w-9 h-9"
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
              <h3 class="mt-8 text-lg font-semibold text-black">
                Light & Dark Version
              </h3>
              <p class="mt-4 text-sm text-gray-600">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </p>
            </div>

            <div>
              <div class="flex items-center justify-center w-20 h-20 mx-auto bg-red-100 rounded-full">
                <svg
                  class="text-red-600 w-9 h-9"
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
              <h3 class="mt-8 text-lg font-semibold text-black">
                Filter Blocks
              </h3>
              <p class="mt-4 text-sm text-gray-600">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* social proof */}

      <section class="py-10 bg-gray-100 sm:py-16 lg:py-24">
        <div class="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
          <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Numbers tell our story
            </h2>
            <p class="mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis.
            </p>
          </div>

          <div class="grid grid-cols-1 gap-8 mt-10 text-center lg:mt-24 sm:gap-x-8 md:grid-cols-3">
            <div>
              <h3 class="font-bold text-7xl">
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600">
                  {" "}
                  6+{" "}
                </span>
              </h3>
              <p class="mt-4 text-xl font-medium text-gray-900">
                Years in business
              </p>
              <p class="text-base mt-0.5 text-gray-500">
                Creating the successful path
              </p>
            </div>

            <div>
              <h3 class="font-bold text-7xl">
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600">
                  {" "}
                  4821{" "}
                </span>
              </h3>
              <p class="mt-4 text-xl font-medium text-gray-900">
                Projects delivered
              </p>
              <p class="text-base mt-0.5 text-gray-500">In last 6 years</p>
            </div>

            <div>
              <h3 class="font-bold text-7xl">
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600">
                  {" "}
                  37+{" "}
                </span>
              </h3>
              <p class="mt-4 text-xl font-medium text-gray-900">Team members</p>
              <p class="text-base mt-0.5 text-gray-500">
                Working for your success
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section class="py-10 bg-gray-100 sm:py-16 lg:py-24">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              What our customers say
            </h2>
            <p class="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis.
            </p>
          </div>

          <div class="grid grid-cols-1 gap-6 px-4 mt-12 sm:px-0 xl:mt-20 xl:grid-cols-4 sm:grid-cols-2">
            <div class="overflow-hidden bg-white rounded-md">
              <div class="px-5 py-6">
                <div class="flex items-center justify-between">
                  <img
                    class="flex-shrink-0 object-cover w-10 h-10 rounded-full"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-1.jpg"
                    alt=""
                  />
                  <div class="min-w-0 ml-3 mr-auto">
                    <p class="text-base font-semibold text-black truncate">
                      Darrell Steward
                    </p>
                    <p class="text-sm text-gray-600 truncate">@darrels</p>
                  </div>
                  <a href="#" title="" class="inline-block text-sky-500">
                    <svg
                      class="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
                    </svg>
                  </a>
                </div>
                <blockquote class="mt-5">
                  <p class="text-base text-gray-800">
                    You made it so simple. My new site is so much faster and
                    easier to work with than my old site. I just choose the
                    page, make the change and click save.
                    <span class="block text-sky-500">#another</span>
                  </p>
                </blockquote>
              </div>
            </div>

            <div class="overflow-hidden bg-white rounded-md">
              <div class="px-5 py-6">
                <div class="flex items-center justify-between">
                  <img
                    class="flex-shrink-0 object-cover w-10 h-10 rounded-full"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-2.jpg"
                    alt=""
                  />
                  <div class="min-w-0 ml-3 mr-auto">
                    <p class="text-base font-semibold text-black truncate">
                      Leslie Alexander
                    </p>
                    <p class="text-sm text-gray-600 truncate">@lesslie</p>
                  </div>
                  <a href="#" title="" class="inline-block text-sky-500">
                    <svg
                      class="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
                    </svg>
                  </a>
                </div>
                <blockquote class="mt-5">
                  <p class="text-base text-gray-800">
                    Simply the best. Better than all the rest. I’d recommend
                    this product to beginners and advanced users.
                    <span class="block text-sky-500">#Celebration</span>
                  </p>
                </blockquote>
              </div>
            </div>

            <div class="overflow-hidden bg-white rounded-md">
              <div class="px-5 py-6">
                <div class="flex items-center justify-between">
                  <img
                    class="flex-shrink-0 object-cover w-10 h-10 rounded-full"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-3.jpg"
                    alt=""
                  />
                  <div class="min-w-0 ml-3 mr-auto">
                    <p class="text-base font-semibold text-black truncate">
                      Jenny Wilson
                    </p>
                    <p class="text-sm text-gray-600 truncate">@jennywilson</p>
                  </div>
                  <a href="#" title="" class="inline-block text-sky-500">
                    <svg
                      class="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
                    </svg>
                  </a>
                </div>
                <blockquote class="mt-5">
                  <p class="text-base text-gray-800">
                    This is a top quality product. No need to think twice before
                    making it live on web.
                    <span class="block text-sky-500">#make_it_fast</span>
                  </p>
                </blockquote>
              </div>
            </div>

            <div class="overflow-hidden bg-white rounded-md">
              <div class="px-5 py-6">
                <div class="flex items-center justify-between">
                  <img
                    class="flex-shrink-0 object-cover w-10 h-10 rounded-full"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-4.jpg"
                    alt=""
                  />
                  <div class="min-w-0 ml-3 mr-auto">
                    <p class="text-base font-semibold text-black truncate">
                      Kristin Watson
                    </p>
                    <p class="text-sm text-gray-600 truncate">
                      @kristinwatson2
                    </p>
                  </div>
                  <a href="#" title="" class="inline-block text-sky-500">
                    <svg
                      class="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
                    </svg>
                  </a>
                </div>
                <blockquote class="mt-5">
                  <p class="text-base text-gray-800">
                    YFinally, I’ve found a template that covers all bases for a
                    bootstrapped startup. We were able to launch in days, not
                    months.
                    <span class="block text-sky-500">#Celebration</span>
                  </p>
                </blockquote>
              </div>
            </div>

            <div class="overflow-hidden bg-white rounded-md">
              <div class="px-5 py-6">
                <div class="flex items-center justify-between">
                  <img
                    class="flex-shrink-0 object-cover w-10 h-10 rounded-full"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-5.jpg"
                    alt=""
                  />
                  <div class="min-w-0 ml-3 mr-auto">
                    <p class="text-base font-semibold text-black truncate">
                      Guy Hawkins
                    </p>
                    <p class="text-sm text-gray-600 truncate">@jennywilson</p>
                  </div>
                  <a href="#" title="" class="inline-block text-sky-500">
                    <svg
                      class="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
                    </svg>
                  </a>
                </div>
                <blockquote class="mt-5">
                  <p class="text-base text-gray-800">
                    This is a top quality product. No need to think twice before
                    making it live on web.
                    <span class="block text-sky-500">#make_it_fast</span>
                  </p>
                </blockquote>
              </div>
            </div>

            <div class="overflow-hidden bg-white rounded-md">
              <div class="px-5 py-6">
                <div class="flex items-center justify-between">
                  <img
                    class="flex-shrink-0 object-cover w-10 h-10 rounded-full"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-6.jpg"
                    alt=""
                  />
                  <div class="min-w-0 ml-3 mr-auto">
                    <p class="text-base font-semibold text-black truncate">
                      Marvin McKinney
                    </p>
                    <p class="text-sm text-gray-600 truncate">@darrels</p>
                  </div>
                  <a href="#" title="" class="inline-block text-sky-500">
                    <svg
                      class="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
                    </svg>
                  </a>
                </div>
                <blockquote class="mt-5">
                  <p class="text-base text-gray-800">
                    With Celebration, it’s quicker with the customer, the
                    customer is more ensured of getting exactly what they
                    ordered, and I’m all for the efficiency.
                    <span class="block text-sky-500">#dev #tools</span>
                  </p>
                </blockquote>
              </div>
            </div>

            <div class="overflow-hidden bg-white rounded-md">
              <div class="px-5 py-6">
                <div class="flex items-center justify-between">
                  <img
                    class="flex-shrink-0 object-cover w-10 h-10 rounded-full"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-7.jpg"
                    alt=""
                  />
                  <div class="min-w-0 ml-3 mr-auto">
                    <p class="text-base font-semibold text-black truncate">
                      Annette Black
                    </p>
                    <p class="text-sm text-gray-600 truncate">@darrels</p>
                  </div>
                  <a href="#" title="" class="inline-block text-sky-500">
                    <svg
                      class="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
                    </svg>
                  </a>
                </div>
                <blockquote class="mt-5">
                  <p class="text-base text-gray-800">
                    You made it so simple. My new site is so much faster and
                    easier to work with than my old site. I just choose the
                    page, make the change and click save.
                    <span class="block text-sky-500">#another</span>
                  </p>
                </blockquote>
              </div>
            </div>

            <div class="overflow-hidden bg-white rounded-md">
              <div class="px-5 py-6">
                <div class="flex items-center justify-between">
                  <img
                    class="flex-shrink-0 object-cover w-10 h-10 rounded-full"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-8.jpg"
                    alt=""
                  />
                  <div class="min-w-0 ml-3 mr-auto">
                    <p class="text-base font-semibold text-black truncate">
                      Floyd Miles
                    </p>
                    <p class="text-sm text-gray-600 truncate">@darrels</p>
                  </div>
                  <a href="#" title="" class="inline-block text-sky-500">
                    <svg
                      class="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
                    </svg>
                  </a>
                </div>
                <blockquote class="mt-5">
                  <p class="text-base text-gray-800">
                    My new site is so much faster and easier to work with than
                    my old site. I just choose the page, make the change and
                    click save.
                    <span class="block text-sky-500">#Celebration</span>
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* call to action */}
      <section class="py-10 bg-gray-100 sm:py-16 lg:py-24">
        <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div class="max-w-2xl mx-auto text-center">
            <div class="flex items-center justify-center">
              <div class="w-20 h-20 -mr-6 overflow-hidden bg-gray-300 rounded-full">
                <img
                  class="object-cover w-full h-full"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/2/female-avatar-1.jpg"
                  alt=""
                />
              </div>

              <div class="relative overflow-hidden bg-gray-300 border-8 border-white rounded-full w-28 h-28">
                <img
                  class="object-cover w-full h-full"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/2/male-avatar-1.jpg"
                  alt=""
                />
              </div>

              <div class="w-20 h-20 -ml-6 overflow-hidden bg-gray-300 rounded-full">
                <img
                  class="object-cover w-full h-full"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/2/female-avatar-2.jpg"
                  alt=""
                />
              </div>
            </div>

            <h2 class="mt-8 text-3xl font-bold leading-tight text-black lg:mt-12 sm:text-4xl lg:text-5xl">
              Join <span class="border-b-8 border-yellow-300">5,482</span> other
              developers
            </h2>
            <p class="max-w-xl mx-auto mt-6 text-xl text-gray-600 md:mt-10">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis.
            </p>

            <a
              href="#"
              title=""
              class="inline-flex items-center justify-center px-4 py-4 mt-8 font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md lg:mt-12 hover:bg-blue-700 focus:bg-blue-700"
              role="button"
            >
              <svg
                class="w-5 h-5 mr-2 -ml-1"
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

      {/* FAQs */}

      <section class="py-10 bg-gray-100 sm:py-16 lg:py-24">
        <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Frequently Asked Questions
            </h2>
            <p class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
            </p>
          </div>

          <div class="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
            <div class="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50">
              <button
                type="button"
                class="flex items-center justify-between w-full px-4 py-5 sm:p-6"
              >
                <span class="flex text-lg font-semibold text-black">
                  {" "}
                  How to create an account?{" "}
                </span>

                <svg
                  class="w-6 h-6 text-gray-400 rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div class="px-4 pb-5 sm:px-6 sm:pb-6">
                <p>
                  Amet minim mollit non deserunt ullamco est sit{" "}
                  <a
                    href="#"
                    title=""
                    class="text-blue-600 transition-all duration-200 hover:underline"
                  >
                    aliqua dolor
                  </a>{" "}
                  do amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>
            </div>

            <div class="transition-all duration-200 bg-white border border-gray-200 cursor-pointer hover:bg-gray-50">
              <button
                type="button"
                class="flex items-center justify-between w-full px-4 py-5 sm:p-6"
              >
                <span class="flex text-lg font-semibold text-black">
                  {" "}
                  How can I make payment using Paypal?{" "}
                </span>

                <svg
                  class="w-6 h-6 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div class="hidden px-4 pb-5 sm:px-6 sm:pb-6">
                <p>
                  Amet minim mollit non deserunt ullamco est sit{" "}
                  <a
                    href="#"
                    title=""
                    class="text-blue-600 transition-all duration-200 hover:underline"
                  >
                    aliqua dolor
                  </a>{" "}
                  do amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>
            </div>

            <div class="transition-all duration-200 bg-white border border-gray-200 cursor-pointer hover:bg-gray-50">
              <div class="">
                <button
                  type="button"
                  class="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                >
                  <span class="flex text-lg font-semibold text-black">
                    {" "}
                    Can I cancel my plan?{" "}
                  </span>

                  <svg
                    class="w-6 h-6 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <div class="hidden px-4 pb-5 sm:px-6 sm:pb-6">
                  <p>
                    Amet minim mollit non deserunt ullamco est sit{" "}
                    <a
                      href="#"
                      title=""
                      class="text-blue-600 transition-all duration-200 hover:underline"
                    >
                      aliqua dolor
                    </a>{" "}
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </p>
                </div>
              </div>
            </div>

            <div class="transition-all duration-200 bg-white border border-gray-200 cursor-pointer hover:bg-gray-50">
              <button
                type="button"
                class="flex items-center justify-between w-full px-4 py-5 sm:p-6"
              >
                <span class="flex text-lg font-semibold text-black">
                  {" "}
                  How can I reach to support?{" "}
                </span>

                <svg
                  class="w-6 h-6 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div class="hidden px-4 pb-5 sm:px-6 sm:pb-6">
                <p>
                  Amet minim mollit non deserunt ullamco est sit{" "}
                  <a
                    href="#"
                    title=""
                    class="text-blue-600 transition-all duration-200 hover:underline"
                  >
                    aliqua dolor
                  </a>{" "}
                  do amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>
            </div>
          </div>

          <p class="text-center text-gray-600 textbase mt-9">
            Didn’t find the answer you are looking for?{" "}
            <a
              href="#"
              title=""
              class="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline"
            >
              Contact our support
            </a>
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Signin;
