import { useSession } from "next-auth/react";

import Link from "next/link";


export default function Resources(){

    const {data: session} = useSession();
    console.log(session);

    return (
        <div className="w-full pl-[87px] h-screen pb-24 overflow-auto text-gray-700 bg-gradient-to-r bg-purple-300 from-10% to-blue-300 to-90%">

      
      <div className="px-10 mt-4">
        <div className="flex items-center flex-shrink-0 h-10">
          <span className="block text-xl font-bold">Your Ally Resources</span>
          <span className="flex items-center justify-center w-5 h-5 ml-2 text-sm font-semibold text-indigo-500 bg-white rounded bg-opacity-30">
            3
          </span>
          <Link href="/explore" className="flex items-center justify-center w-6 h-6 ml-auto text-indigo-500 rounded hover:bg-indigo-500 hover:text-indigo-100">
            <svg
              className="w-5 h-5"
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
          </Link>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-4 pb-2 overflow-auto">

          <div
            className="relative flex flex-col items-start p-4 py-4 mt-3 bg-white rounded-lg bg-opacity-90 group hover:bg-opacity-100"
          >
            <button className="absolute top-0 right-0 items-center justify-center hidden w-5 h-5 mt-3 mr-2 text-gray-500 rounded hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
              <svg
                className="w-4 h-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
              </svg>
            </button>
            <span className="text-lg font-bold mt-2 ">
              Room Name
            </span>
            <h4 className="mt-1 text-sm font-medium mb-2">
              This is the title of the card for the thing that needs to be done.
            </h4>
            <div className="flex justify-between items-center mb-2 w-full mt-3 text-xs font-medium text-gray-400">
            <div className="flex">
              <img
                className="w-8 h-8 ml-auto rounded-full"
                src="https://randomuser.me/api/portraits/women/26.jpg"
              />
              <img
                className="w-8 h-8 ml-auto rounded-full"
                src="https://randomuser.me/api/portraits/women/26.jpg"
              />
              </div>
              <div className="flex items-center ">
                <svg
                  className="w-4 h-4 text-gray-300 fill-current"
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
                <span className="ml-1 leading-none">Dec 12</span>
              </div>
              
              
            </div>
          </div>



          <div
            className="relative flex flex-col items-start p-4 py-4 mt-3 bg-white rounded-lg bg-opacity-90 group hover:bg-opacity-100"
          >
            <button className="absolute top-0 right-0 items-center justify-center hidden w-5 h-5 mt-3 mr-2 text-gray-500 rounded hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
              <svg
                className="w-4 h-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
              </svg>
            </button>
            <span className="text-lg font-bold mt-2 ">
              Room Name
            </span>
            <h4 className="mt-1 text-sm font-medium mb-2">
              This is the title of the card for the thing that needs to be done.
            </h4>
            <div className="flex justify-between items-center mb-2 w-full mt-3 text-xs font-medium text-gray-400">
            <div className="flex">
              <img
                className="w-8 h-8 ml-auto rounded-full"
                src="https://randomuser.me/api/portraits/women/26.jpg"
              />
              <img
                className="w-8 h-8 ml-auto rounded-full"
                src="https://randomuser.me/api/portraits/women/26.jpg"
              />
              </div>
              <div className="flex items-center ">
                <svg
                  className="w-4 h-4 text-gray-300 fill-current"
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
                <span className="ml-1 leading-none">Dec 12</span>
              </div>
              
              
            </div>
          </div>


          <div
            className="relative flex flex-col items-start p-4 py-4 mt-3 bg-white rounded-lg bg-opacity-90 group hover:bg-opacity-100"
          >
            <button className="absolute top-0 right-0 items-center justify-center hidden w-5 h-5 mt-3 mr-2 text-gray-500 rounded hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
              <svg
                className="w-4 h-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
              </svg>
            </button>
            <span className="text-lg font-bold mt-2 ">
              Room Name
            </span>
            <h4 className="mt-1 text-sm font-medium mb-2">
              This is the title of the card for the thing that needs to be done.
            </h4>
            <div className="flex justify-between items-center mb-2 w-full mt-3 text-xs font-medium text-gray-400">
            <div className="flex">
              <img
                className="w-8 h-8 ml-auto rounded-full"
                src="https://randomuser.me/api/portraits/women/26.jpg"
              />
              <img
                className="w-8 h-8 ml-auto rounded-full"
                src="https://randomuser.me/api/portraits/women/26.jpg"
              />
              </div>
              <div className="flex items-center ">
                <svg
                  className="w-4 h-4 text-gray-300 fill-current"
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
                <span className="ml-1 leading-none">Dec 12</span>
              </div>
              
              
            </div>
          </div>


          
        </div>


        <br />
        <span className="block text-xl mb-2 font-bold">Personal Resources</span>
        <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-4 pb-2 overflow-auto">

          <Link href={`/resources/private`}
            className="relative flex flex-col items-start p-4 py-4 mt-3 bg-white rounded-lg bg-opacity-90 group hover:bg-opacity-100"
          >
            <button className="absolute top-0 right-0 items-center justify-center hidden w-5 h-5 mt-3 mr-2 text-gray-500 rounded hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
              <svg
                className="w-4 h-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
              </svg>
            </button>
            <span className="text-lg font-bold mt-2 ">
              {session?.user?.name}
            </span>
            <h4 className="mt-1 text-sm font-medium mb-2">
              {session?.user?.major}
            </h4>
            <div className="flex justify-between items-center mb-2 w-full mt-3 text-xs font-medium text-gray-400">
            <div className="flex">
              <img
                className="w-8 h-8 ml-auto bg-gray-300 rounded-full"
                src={`https://robohash.org/${session?.user?.email}}`}
              />
              {/* <img
                className="w-8 h-8 ml-auto rounded-full"
                src="https://randomuser.me/api/portraits/women/26.jpg"
              /> */}
              </div>
              <div className="flex items-center ">
                <svg
                  className="w-4 h-4 text-gray-300 fill-current"
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
                <span className="ml-1 leading-none">Dec 12</span>
              </div>
              
              
            </div>
          </Link>



          
        </div>
      </div>
        
        </div>
    )
}