import React from "react";
import { useRouter } from "next/router";
// import { Heading, Button, Grid } from '@chakra-ui/react'
import { useSession, signIn, signOut } from "next-auth/react";
import Calendar from "@/components/calendar";
import {useDate} from "@/hooks/useDate";
// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { data: session } = useSession();

  const { date, time, wish } = useDate(); // custom hook

  const { push, asPath } = useRouter();

  const handleSignOut = async () => {
    const data = await signOut({ redirect: false, callbackUrl: "/join" });

    push(data.url);
  };

  const handleSignIn = () => push(`/join?callbackUrl=${asPath}`);

  // <div placeItems='center' className='grid' gridRowGap='1rem'>
  // 	{session ? (
  // 		<>
  // 			<h1>Signed in as {session.user.email}</h1>
  //   <img src={session.user.image} alt="" />
  // 			<button onClick={handleSignOut}>Sign out</button>
  // 		</>
  // 	) : (
  // 		<>
  // 			<h1>You are not signed in</h1>

  // 			<button onClick={handleSignIn}>Sign in</button>
  // 		</>
  // 	)}
  // </div>

  return (
    <div class="flex flex-col w-full pl-[91px] pb-24 h-screen overflow-auto text-gray-700 bg-gradient-to-r from-indigo-300 from-10% via-sky-300 via-30% to-emerald-300 to-90%">
      <div className="w-full bg-yellow-100">
        <div className="h-fit w-fit rounded-xl bg-white py-1 pl-4 pr-8 shadow ml-4 my-2">
          <div className="text-lg font-bold ">{date}</div>
          {/* {wish} */}
          <div className="text-sm font-medium ">{time}</div>
        </div>
        <div className="h-full">
          <p className="text-center text-xl -mt-12 mb-6">
            “The more something scares you, the more you should do it.” -xyz
          </p>
        </div>
      </div>
      <div class="px-10 mt-4">
        <div class="flex items-center flex-shrink-0 h-10">
          <span class="block text-xl font-bold">Your Ally Rooms</span>
          <span class="flex items-center justify-center w-5 h-5 ml-2 text-sm font-semibold text-indigo-500 bg-white rounded bg-opacity-30">
            3
          </span>
          <a href="explore" class="flex items-center justify-center w-6 h-6 ml-auto text-indigo-500 rounded hover:bg-indigo-500 hover:text-indigo-100">
            <svg
              class="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              ></path>
            </svg>
          </a>
        </div>
        <div class="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-4 pb-2 overflow-auto">

          <div
            class="relative flex flex-col items-start p-4 py-4 mt-3 bg-white rounded-lg bg-opacity-90 group hover:bg-opacity-100"
          >
            <button class="absolute top-0 right-0 items-center justify-center hidden w-5 h-5 mt-3 mr-2 text-gray-500 rounded hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
              <svg
                class="w-4 h-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
              </svg>
            </button>
            <span class="text-lg font-bold mt-2 ">
              Room Name
            </span>
            <h4 class="mt-1 text-sm font-medium mb-2">
              This is the title of the card for the thing that needs to be done.
            </h4>
            <div class="flex justify-between items-center mb-2 w-full mt-3 text-xs font-medium text-gray-400">
            <div className="flex">
              <img
                class="w-8 h-8 ml-auto rounded-full"
                src="https://randomuser.me/api/portraits/women/26.jpg"
              />
              <img
                class="w-8 h-8 ml-auto rounded-full"
                src="https://randomuser.me/api/portraits/women/26.jpg"
              />
              </div>
              <div class="flex items-center ">
                <svg
                  class="w-4 h-4 text-gray-300 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="ml-1 leading-none">Dec 12</span>
              </div>
              
              
            </div>
          </div>



          <div
            class="relative flex flex-col items-start p-4 py-4 mt-3 bg-white rounded-lg bg-opacity-90 group hover:bg-opacity-100"
          >
            <button class="absolute top-0 right-0 items-center justify-center hidden w-5 h-5 mt-3 mr-2 text-gray-500 rounded hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
              <svg
                class="w-4 h-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
              </svg>
            </button>
            <span class="text-lg font-bold mt-2 ">
              Room Name
            </span>
            <h4 class="mt-1 text-sm font-medium mb-2">
              This is the title of the card for the thing that needs to be done.
            </h4>
            <div class="flex justify-between items-center mb-2 w-full mt-3 text-xs font-medium text-gray-400">
            <div className="flex">
              <img
                class="w-8 h-8 ml-auto rounded-full"
                src="https://randomuser.me/api/portraits/women/26.jpg"
              />
              <img
                class="w-8 h-8 ml-auto rounded-full"
                src="https://randomuser.me/api/portraits/women/26.jpg"
              />
              </div>
              <div class="flex items-center ">
                <svg
                  class="w-4 h-4 text-gray-300 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="ml-1 leading-none">Dec 12</span>
              </div>
              
              
            </div>
          </div>


          <div
            class="relative flex flex-col items-start p-4 py-4 mt-3 bg-white rounded-lg bg-opacity-90 group hover:bg-opacity-100"
          >
            <button class="absolute top-0 right-0 items-center justify-center hidden w-5 h-5 mt-3 mr-2 text-gray-500 rounded hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
              <svg
                class="w-4 h-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
              </svg>
            </button>
            <span class="text-lg font-bold mt-2 ">
              Room Name
            </span>
            <h4 class="mt-1 text-sm font-medium mb-2">
              This is the title of the card for the thing that needs to be done.
            </h4>
            <div class="flex justify-between items-center mb-2 w-full mt-3 text-xs font-medium text-gray-400">
            <div className="flex">
              <img
                class="w-8 h-8 ml-auto rounded-full"
                src="https://randomuser.me/api/portraits/women/26.jpg"
              />
              <img
                class="w-8 h-8 ml-auto rounded-full"
                src="https://randomuser.me/api/portraits/women/26.jpg"
              />
              </div>
              <div class="flex items-center ">
                <svg
                  class="w-4 h-4 text-gray-300 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="ml-1 leading-none">Dec 12</span>
              </div>
              
              
            </div>
          </div>


          
        </div>


        <br />
        <span class="block text-xl mb-4 font-bold">Calendar</span>
        <Calendar />
      </div>
        
    </div>
  );
}
