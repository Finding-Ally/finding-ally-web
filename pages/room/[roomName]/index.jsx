import clientPromise from "@/database/connectDB";
// import useSWR from "swr";
import { Tabs } from "flowbite";
import { Key } from "react";
import { useSession } from "next-auth/react";
import Portfolio from "@/components/profile/portfolio";
import Reports from "@/components/profile/reports";



import Timer from '@/components/tools/timer';
import TodoList from "../../../components/tools/todolist";
import {IoCaretBack} from "react-icons/io5";
import {MdOutlineLibraryBooks} from "react-icons/md";
import {IoVideocamOutline} from "react-icons/io5";
import {IoEllipsisVerticalOutline} from "react-icons/io5";


import { FcTemplate } from "react-icons/fc";
import { GiTrophy } from "react-icons/gi";
import { FcParallelTasks } from "react-icons/fc";
import { FcWorkflow } from "react-icons/fc";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useReducer } from "react";

import { useQuery, useMutation, useQueryClient } from "react-query";

import { toast } from "react-toastify";
import LoadingScreen from "@/components/animations/loadingScreen";
import { getUser, getUsers, updateUser } from "@/lib/helper";
import Head from "next/head";
import dynamic from "next/dynamic";

const AblyChatComponent = dynamic(
  () => import("@/components/AblyChatComponent"),
  { ssr: false,
    loading: () => <LoadingScreen />,}
);


export default function Profile({ roomDetails }) {
  console.log(roomDetails);

  useEffect(() => {
    const $modalElement = document.querySelector("#authentication-modal");

    const modalOptions = {
      placement: "bottom-right",
      backdrop: "dynamic",
      backdropClasses:
        "bg-gray-700 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40",
      closable: true,
      onHide: () => {
        console.log("modal is hidden");
      },
      onShow: () => {
        console.log("modal is shown");
      },
      onToggle: () => {
        console.log("modal has been toggled");
      },
    };

    const modal = new Modal($modalElement, modalOptions);

    // modal.show();
  }, []);

  useEffect(() => {
    const $modalElement = document.querySelector("#authentication-modal");

    const modalOptions = {
      placement: "bottom-right",
      backdrop: "dynamic",
      backdropClasses:
        "bg-gray-700 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40",
      closable: true,
      onHide: () => {
        console.log("modal is hidden");
      },
      onShow: () => {
        console.log("modal is shown");
      },
      onToggle: () => {
        console.log("modal has been toggled");
      },
    };

    const modal = new Modal($modalElement, modalOptions);

    // modal.show();
  }, []);

  const roomName = roomDetails[0]?.name;
  console.log(roomName + "roomid");

  useEffect(() => {
    const domain = 'meet.jit.si';
    const options = {
      roomName: `${roomName}`,
      width: 750,
      height: 700,
      parentNode: document.querySelector('#meet')
    };
    const api = new JitsiMeetExternalAPI(domain, options);

    return () => {
      api.dispose();
    };
  }, [roomName]);


  const [quote, setQuote] = useState([]);

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await fetch(`https://type.fit/api/quotes`);
        if (!response.ok) {
          throw new Error("Failed to fetch quotes");
        }
        const jsonData = await response.json();
        
        let randomQuote = null;
        do {
          const randomIndex = Math.floor(Math.random() * jsonData.length);
          randomQuote = jsonData[randomIndex];
        } while (randomQuote && randomQuote.text.split(' ').length > 12);
  
        if (randomQuote) {
          setQuote(randomQuote);
        } else {
          console.error("No quotes found with less than 12 words.");
        }
      } catch (error) {
        console.error("An error occurred while fetching quotes:", error);
      }
    };
  
    fetchQuotes();
  }, []);
  
  console.log(quote);


  return (
    <>
      <div className="w-full pl-[87px] h-screen overflow-auto text-gray-700 bg-gradient-to-r bg-indigo-300 from-10% via-sky-300 via-30% to-emerald-300 to-90%">
      <Head >
      </Head>
        {/* <div className="w-full backdrop-blur-md bg-white/70">
          <div class="px-10 py-3">
            <h1 class="md:text-xl text-lg font-bold">
              Room Name
            </h1>
          </div>
        </div> */}
        <div className="md:px-4 px-2">
        <div className="w-full mt-4 rounded-xl backdrop-blur-md bg-white/70">
          <div className="flex justify-between">
          <div class="pl-6 py-3 flex flex-row my-auto">
            <Link href="/">
            <IoCaretBack className=" text-lg mt-1 text-gray-200 bg-gray-700 mr-2 rounded" />

            </Link>
            <h1 class="md:text-xl text-lg font-bold">
              {roomDetails[0]?.members[1]?.name}
            </h1>
          </div>
          <div className="flex justify-end my-auto">
            <button className="flex flex-row p-3 rounded-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">
            <Link href={`/resources/${roomDetails[0]?.name}`}>
              <MdOutlineLibraryBooks className="text-4xl p-2 mt-1 text-gray-200 bg-gray-700 mr-2 rounded" />
              </Link>
              <IoVideocamOutline className="text-4xl p-2 mt-1 text-gray-200 bg-gray-700 mr-2 rounded" />
              {/* <IoEllipsisVerticalOutline className="text-lg text-gray-200 bg-gray-700 mr-2 rounded" /> */}
            </button>
            </div>
          </div>
          
        </div>
        <div>
            <div className="grid md:grid-cols-5 md:gap-5">
              <div className="md:col-span-3 rounded-2xl p-4">
              <div class="grid relative">
                <div className="backdrop-blur-md static bg-white/80 p-4 rounded-xl mb-4">

                  <div class="w-full h-1/4 ">
                  <div id="meet" className="rounded-xl" />
                  </div></div>

                  <div class="w-full h-3/4 bg-gray-300 backdrop-blur-md bg-white/70 rounded-lg p-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                    <Timer/>
                    <div className="w-fit flex items-center justify-center bg-black rounded-2xl p-2">
                      <p className="text-center flex flex-wrap text-sm text-white">
                        &quot;{quote?.text}&quot; - {quote?.author || "Anonymous"}
                      </p>
                    </div>
                    <div className="w-fit flex items-center justify-center bg-black rounded-2xl p-2">
                      <p className="text-center flex flex-wrap text-sm text-white">
                        space space space space space space space
                      </p>
                    </div>
                  </div>

                  </div>
                </div>
              </div>
              <div className="md:col-span-2 w-full mt-4 rounded-2xl mx-auto  md:pb-10 pb-0 ">
                <div class="grid relative">
                  <div class="w-full h-1/6 backdrop-blur-md bg-white/60 ">
                  <TodoList />
                  </div>
                  <div class="w-full h-fit backdrop-blur-md bg-white/60  top-40 mt-4">
                    <h1 className="text-black backdrop-blur-md bg-white/90 p-2 rounded-xl">
                      Room Chat
                    </h1>
                  <AblyChatComponent roomId={roomDetails[0]?.id} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <style jsx global>{`
          [data-author="me"] {
            background: linear-gradient(
              to right,
              #363795,
              #005c97
            ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
            color: white;
            align-self: flex-end;
            border-bottom-right-radius: 0 !important;
            border-bottom-left-radius: 10px !important;
          }
        `}</style>
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  const client = await clientPromise;
  const db = client.db("database");

  const searchRoute = context.params.roomName;
  // console.log(searchRoute)

  const roomData = await db
    .collection("rooms")
    .find({ name: searchRoute })
    .sort({ metacritic: -1 })
    .toArray();

  const roomDetails = JSON.parse(JSON.stringify(roomData));
  // const session = await getSession(context);

  // console.log(roomDetails[0]?._id + "Cats are cute")

  // const clientProject = await clientPromise;
  // const dbProject = clientProject.db("projects-db");

  // const searchProjects = await dbProject
  //     .collection("projects")
  //     // .find({ "adminUser.id": `${roomDetails[0]?.id}`})
  //     .find({ "contributors": {$elemMatch: {login: `${searchRoute}`}} })
  //     // .find({ "adminUser.id": `642208e7d8a516f45afc5148`})
  //     .sort({ metacritic: -1 })
  //     .limit(20)
  //     .toArray();

  return {
    props: { roomDetails },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const client = await clientPromise;
  const db = client.db("database");

  // Use this to display all projects
  const searchUsers = await db
    .collection("rooms")
    .find()
    .sort({ metacritic: -1 })
    .toArray();

  const paths = searchUsers.map((userPath) => ({
    params: { roomName: userPath.name },
  }));

  return { paths, fallback: false };
}
