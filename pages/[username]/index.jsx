import clientPromise from "../../database/connectDB";
// import useSWR from "swr";
import { Tabs } from "flowbite";
import { Key } from "react";
import { useSession } from "next-auth/react";
import Portfolio from "../../components/profile/portfolio";
import Reports from "../../components/profile/reports";

import { FcTemplate } from "react-icons/fc";
import { GiTrophy } from "react-icons/gi";
import { FcParallelTasks } from "react-icons/fc";
import { FcWorkflow } from "react-icons/fc";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Profile({ userDetails }) {
  useEffect(() => {
    const tabElements = [
      {
        id: "clubs",
        triggerEl: document.querySelector("#clubs-tab"),
        targetEl: document.querySelector("#clubs"),
      },
      // {
      //     id: 'dashboard',
      //     triggerEl: document.querySelector('#dashboard-tab'),
      //     targetEl: document.querySelector('#dashboard')
      // },
      {
        id: "repositories",
        triggerEl: document.querySelector("#repositories-tab"),
        targetEl: document.querySelector("#repositories"),
      },
      // {
      //     id: 'contacts',
      //     triggerEl: document.querySelector('#contacts-tab'),
      //     targetEl: document.querySelector('#contacts')
      // }
    ];

    // options with default values
    const options = {
      defaultTabId: "repositories",
      activeClasses:
        "text-blue-600 bg-gray-800 hover:bg-gray-700 hover:text-blue-600 dark:text-gray-100 dark:hover:text-gray-200 border-blue-600 dark:border-blue-500",
      inactiveClasses:
        "text-gray-700 bg-white hover:bg-gray-100 hover:text-gray-600 dark:text-gray-700 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-900",
      onShow: () => {
        console.log("tab is shown");
      },
    };

    /*
     * tabElements: array of tab objects
     * options: optional
     */
    const tabs = new Tabs(tabElements, options);
    // const tabs = new Tabs(tabElements);

    // open tab item based on id
    tabs.show("clubs");
  }, []);

  const { data: session } = useSession();
  console.log(session);
  // console.log(session?.user?.id);

  // console.log(userDetails)
  return (
    <>
      <div className="w-full pl-[91px] h-screen pb-24 overflow-auto text-gray-700 bg-gradient-to-tr from-blue-200 via-indigo-200 to-pink-200">
        <div className="w-full bg-gray-200">
          <div class="px-10 py-3">
            <h1 class="text-2xl font-bold">
              Good morning, {session?.user?.name}
            </h1>
          </div>
        </div>
        <div className="md:px-4 px-2 ">
          <div className="">
            <div className="grid md:grid-cols-5 md:gap-5">
              <div className="md:col-span-4 mt-4 md:mt-0">
                <div className="">
                  {/* <nav className="flex my-8" aria-label="Breadcrumb">
                    <ol className="inline-flex items-center space-x-1 md:space-x-3">
                      <li className="inline-flex items-center">
                        <Link
                          href="/"
                          className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                        >
                          <svg
                            aria-hidden="true"
                            className="w-4 h-4 mr-2"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                          </svg>
                          Home
                        </Link>
                      </li>
                      <li>
                        <div className="flex items-center">
                          <svg
                            aria-hidden="true"
                            className="w-6 h-6 text-gray-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                          <Link
                            href="/leaderboard"
                            className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white"
                          >
                            profile
                          </Link>
                        </div>
                      </li>
                      <li aria-current="page">
                        <div className="flex items-center">
                          <svg
                            aria-hidden="true"
                            className="w-6 h-6 text-gray-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                          <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                            {userDetails[0]?.name}
                          </span>
                        </div>
                      </li>
                    </ol>
                  </nav> */}

                  <div className="mb-4 mt-6 border-gray-200 dark:border-gray-700">
                    <ul
                      className="flex flex-wrap -mb-px text-sm font-medium text-center"
                      id="myTab"
                      data-tabs-toggle="#myTabContent"
                      role="tablist"
                    >
                      <li className="mr-2" role="presentation">
                        <button
                          className="flex flex-row p-3 rounded-lg"
                          id="clubs-tab"
                          data-tabs-target="#clubs"
                          type="button"
                          role="tab"
                          aria-controls="clubs"
                          aria-selected="false"
                        >
                          <FcWorkflow className="text-xl mr-2" />
                          Portfolio
                        </button>
                      </li>
                      {/* <li className="mr-2" role="presentation">
                        <button
                          className="flex flex-row p-3 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                          id="dashboard-tab"
                          data-tabs-target="#dashboard"
                          type="button"
                          role="tab"
                          aria-controls="dashboard"
                          aria-selected="false"
                        >
                          <FcTemplate className="text-xl mr-2"/>
                          ShowCase
                          </button>
                      </li> */}
                      <li className="mr-2" role="presentation">
                        <button
                          className="flex flex-row p-3 rounded-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                          id="repositories-tab"
                          data-tabs-target="#repositories"
                          type="button"
                          role="tab"
                          aria-controls="repositories"
                          aria-selected="false"
                        >
                          <FcParallelTasks className="text-xl mr-2" />
                          Reports
                        </button>
                      </li>
                      {/* <li role="presentation">
                        <button
                          className="flex flex-row p-3 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                          id="contacts-tab"
                          data-tabs-target="#contacts"
                          type="button"
                          role="tab"
                          aria-controls="contacts"
                          aria-selected="false"
                        >
                          <GiTrophy className="text-xl mr-2"/>
                          Achievements
                          </button>
                      </li> */}
                    </ul>
                  </div>
                  <div id="myTabContent" className="mt-5">
                    <div
                      className="hidden "
                      id="clubs"
                      role="tabpanel"
                      aria-labelledby="clubs-tab"
                    >
                      <Portfolio />
                    </div>
                    {/* <div
                      className="hidden  "
                      id="dashboard"
                      role="tabpanel"
                      aria-labelledby="dashboard-tab"
                    >
                     <ProfileShowCase userDetails={userDetails} data={data}/>
                    </div> */}
                    <div
                      className="hidden "
                      id="repositories"
                      role="tabpanel"
                      aria-labelledby="repositories-tab"
                    >
                      <Reports />
                    </div>
                    {/* <div
                      className="hidden"
                      id="contacts"
                      role="tabpanel"
                      aria-labelledby="contacts-tab"
                    >
                      <ProfileAchievements trophies={userDetails[0].trophies || 0}/>
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="md:card h-fit w-full mt-20 rounded-2xl mx-auto bg-white md:pb-10 pb-0  shadow ">
                <div className="relative">
                  <img
                    className="w-32 mx-auto rounded-full mt-8 border-2 border-gray-200 bg-gray-300"
                    src={`https://robohash.org/${session?.user?.name}}`}
                    alt=""
                  />
                  {/* <div className="absolute bottom-2 left-44 p-1.5 bg-green-500 hover:border-2 cursor-pointer rounded-full w-fit h-fit"></div> */}
                </div>
                <div className="text-center mt-2 text-xl font-medium ">
                  {userDetails[0]?.name}
                </div>
                <div className="text-center mt-2 text-sm font-medium ">
                  @{userDetails[0]?.email.split("@")[0]}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  const client = await clientPromise;
  const db = client.db("database");

  const searchRoute = context.params.userName;
  // console.log(searchRoute)

  const userData = await db
    .collection("users")
    .find({ email: searchRoute })
    .sort({ metacritic: -1 })
    .toArray();

  const userDetails = JSON.parse(JSON.stringify(userData));
  // const session = await getSession(context);

  // console.log(userDetails[0]?._id + "Cats are cute")

  // const clientProject = await clientPromise;
  // const dbProject = clientProject.db("projects-db");

  // const searchProjects = await dbProject
  //     .collection("projects")
  //     // .find({ "adminUser.id": `${userDetails[0]?.id}`})
  //     .find({ "contributors": {$elemMatch: {login: `${searchRoute}`}} })
  //     // .find({ "adminUser.id": `642208e7d8a516f45afc5148`})
  //     .sort({ metacritic: -1 })
  //     .limit(20)
  //     .toArray();

  return {
    props: { userDetails },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const client = await clientPromise;
  const db = client.db("database");

  // Use this to display all projects
  const searchUsers = await db
    .collection("users")
    .find()
    .sort({ metacritic: -1 })
    .toArray();

  const paths = searchUsers.map((userPath) => ({
    params: { userName: userPath.email },
  }));

  return { paths, fallback: "blocking" };
}
