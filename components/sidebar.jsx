// import a from "next/link";
import { BsFillLightningFill } from "react-icons/bs";
import { FaSearch, FaPlus } from "react-icons/fa";
import { TbListSearch } from "react-icons/tb";
import { useEffect, useState } from "react";

import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Sidebar() {
  const { data: session } = useSession();

  const { push, asPath } = useRouter();

  const handleSignOut = async () => {
    const data = await signOut({ redirect: false, callbackUrl: "/join" });

    push(data.url);
  };

  // Dashboard
  // Resources
  // FindAlly
  // Self Study
  // Profile
  // Logout

  return (
    <>
      {session && (
        <div className="fixed h-screen w-fit flex bg-gray-200">
          <aside className="flex flex-col items-center bg-white text-gray-700 shadow h-full px-1 pb-2">
            <div className="h-14 flex items-center w-full hover:bg-gray-200 rounded-xl">
              <Link className="h-6 w-6 mx-auto" href="">
                <img
                  className="h-6 w-6 mx-auto"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/512px-Svelte_Logo.svg.png"
                  alt="svelte logo"
                />
              </Link>
            </div>

            <ul>
              <li className="hover:bg-blue-200 rounded-xl">
                <Link
                  href="\"
                  className="h-14 px-2 flex flex-col justify-center items-center w-full
                     focus:text-gray-700"
                >
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
                    <path
                      d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0
                         2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0
                         0-1.79 1.11z"
                    ></path>
                  </svg>

                  <p className="text-xs font-semibold">Dashboard</p>
                </Link>
              </li>

              <li className="hover:bg-purple-200 rounded-xl">
                <Link
                  href="resources"
                  className="h-14 px-2 flex flex-col justify-center items-center w-full
                     focus:text-gray-700"
                >
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                  </svg>
                  <p className="text-xs font-semibold">Resources</p>
                </Link>
              </li>

              <li className="hover:bg-emerald-200 rounded-xl">
                <Link
                  href="explore"
                  className="h-14 px-2 flex flex-col justify-center items-center w-full
                     focus:text-gray-700"
                >
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="3 6 5 6 21 6"></polyline>
                    <path
                      d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2
                         0 0 1 2-2h4a2 2 0 0 1 2 2v2"
                    ></path>
                  </svg>
                  <p className="text-xs font-semibold">FindAlly</p>
                </Link>
              </li>

              <li className="hover:bg-amber-200 rounded-xl">
                <Link
                  href="study"
                  className="h-14 px-2 flex flex-col justify-center items-center w-full
                     focus:text-gray-700"
                >
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path
                      d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0
                         2-1.61L23 6H6"
                    ></path>
                  </svg>
                  <p className="text-xs font-semibold">Self Study</p>
                </Link>
              </li>

              {/* <li className="hover:bg-blue-400 rounded-xl">
                   <Link
                     href="."
                     className="h-14 px-2 flex justify-center items-center w-full
                     focus:text-orange-500">
                     <svg
                       className="h-5 w-5"
                       xmlns="http://www.w3.org/2000/svg"
                       width="24"
                       height="24"
                       viewBox="0 0 24 24"
                       fill="none"
                       stroke="currentColor"
                       stroke-width="2"
                       stroke-linecap="round"
                       stroke-linejoin="round">
                       <circle cx="12" cy="12" r="3"></circle>
                       <path
                         d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1
                         0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0
                         0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2
                         2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0
                         0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1
                         0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0
                         0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65
                         0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0
                         1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0
                         1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2
                         0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0
                         1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0
                         2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0
                         0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65
                         1.65 0 0 0-1.51 1z"></path>
                     </svg>
                     
                   </Link>

                 </li> */}

              {/* <li className="hover:bg-blue-400 rounded-xl">
                   <Link
                     href="."
                     className="h-14 px-2 flex justify-center items-center w-full
                     focus:text-orange-500">
                     <svg
                       className="h-5 w-5"
                       xmlns="http://www.w3.org/2000/svg"
                       width="24"
                       height="24"
                       viewBox="0 0 24 24"
                       fill="none"
                       stroke="currentColor"
                       stroke-width="2"
                       stroke-linecap="round"
                       stroke-linejoin="round">
                       <path
                         d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                       <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                     </svg>
                   </Link>
                 </li> */}
            </ul>

            <div className="mt-auto h-32 flex flex-col items-center w-full">
              <div className="hover:bg-red-200 rounded-xl w-full">
                <Link
                  href={session?.user?.email}
                  className="h-14 px-2 flex flex-col justify-center items-center 
                     focus:text-gray-700"
                >
                  <img
                    src={`https://robohash.org/${session?.user?.email}}`}
                    className="rounded-full w-9 h-9 bg-gray-300"
                    alt=""
                  />
                  <p className="text-xs font-semibold">Profile</p>
                </Link>
              </div>
              <div className="hover:bg-gray-200 rounded-xl w-full">
                <Link
                  onClick={handleSignOut}
                  href="join"
                  className="h-14 px-2 flex flex-col justify-center items-center 
                     focus:text-gray-700"
                >
                  <svg
                    className="h-5 w-5 text-red-700"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                    <polyline points="16 17 21 12 16 7"></polyline>
                    <line x1="21" y1="12" x2="9" y2="12"></line>
                  </svg>
                  <p className="text-xs font-semibold">Logout</p>
                </Link>
              </div>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}