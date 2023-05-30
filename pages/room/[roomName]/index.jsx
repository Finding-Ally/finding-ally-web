import clientPromise from "@/database/connectDB";
// import useSWR from "swr";
import { Tabs } from "flowbite";
import { Key } from "react";
import { useSession } from "next-auth/react";
import Portfolio from "@/components/profile/portfolio";
import Reports from "@/components/profile/reports";

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
import Head from 'next/head'
import dynamic from 'next/dynamic'



const AblyChatComponent = dynamic(() => import('@/components/AblyChatComponent'), { ssr: false });



const formReducer = (state, event) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};

export default function Profile({ roomDetails }) {


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


  const { data: session } = useSession();

  const [userName, setuserName] = useState();
  const [userImage, setuserImage] = useState();
  const [subjectMajor, setsubjectMajor] = useState();
  const [studyInterests, setstudyInterests] = useState();
  const [userAge, setuserAge] = useState();
  const [userGender, setuserGender] = useState();
  const [userBio, setuserBio] = useState();
  const [language, setLanguage] = useState();
  //  from  form file
  const [formData, setFormData] = useReducer(formReducer, {});
  // const formId = useSelector((state) => state.app.client.formId)

  console.log(session);

  // const userId = session?.user?.id;
  const userId = "645111b866682caf52a4cca5";

  const queryClient = useQueryClient();
  const { isLoading, isError, data, error } = useQuery(["users", userId], () =>
    getUser(userId)
  );
  const UpdateMutation = useMutation((newData) => updateUser(userId, newData), {
    onSuccess: async (data) => {
      // queryClient.setQueryData('users', (old) => [data])
      queryClient.prefetchQuery("users", getUsers);
    },
  });



  // if (isLoading) return <div>
  //   <ul
  //                     className="flex flex-wrap -mb-px text-sm font-medium text-center"
  //                     id="myTab"
  //                     data-tabs-toggle="#myTabContent"
  //                     role="tablist"
  //                   >
  //                     <li className="mr-2" role="presentation">
  //                       <button
  //                         className="flex flex-row p-3 rounded-lg"
  //                         id="clubs-tab"
  //                         data-tabs-target="#clubs"
  //                         type="button"
  //                         role="tab"
  //                         aria-controls="clubs"
  //                         aria-selected="false"
  //                       >
  //                         Portfolio
  //                       </button>
  //                     </li>
  //                     <li className="mr-2" role="presentation">
  //                       <button
  //                         className="flex flex-row p-3 rounded-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
  //                         id="repositories-tab"
  //                         data-tabs-target="#repositories"
  //                         type="button"
  //                         role="tab"
  //                         aria-controls="repositories"
  //                         aria-selected="false"
  //                       >
                         
  //                         Reports
  //                       </button>
  //                     </li>
  //                   </ul>
  //   <LoadingScreen />
  //   </div>;
  // if (isError) return <div>Error : {error}</div>;

  if (data){
    let { name, email, age, gender, notifications, bio, goals, availibility, interests, major, language } =
    data;
  }

  const handleSubmit = async (e) => {
    document.getElementById("save-btn").disabled = true;
    document.getElementById("save-btn").textContent = "Saving...";
    e.preventDefault();
    console.log("buttton");
    // let userName = `${formData.firstname ?? firstname} ${formData.lastname ?? lastname}`;
    let updated = Object.assign({}, data, formData);
    await UpdateMutation.mutate(updated);
    document.getElementById("save-btn").disabled = false;
    document.getElementById("save-btn").textContent = "Saved";
    toast.success("Changes saved", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const updateUserName = (e) => {
    setuserName(e.target.value.trim());
    formData.name = e.target.value.trim();
  };


  const updateBio = (e) => {
    setuserBio(e.target.value.trim());
    formData.bio = e.target.value.trim();
  };

  const updateGoals = (e) => {
    setuserGoals(e.target.value.trim());
    formData.goals = e.target.value.trim();
  };

  const updateAvailibility = (e) => {
    setuserAvailibility(e.target.value.trim());
    formData.availibility = e.target.value.trim();
  };

  const updateInterests = (e) => {
    setstudyInterests(e.target.value.trim());
    formData.interests = e.target.value.trim();
  };

  const updateMajor = (e) => {
    setsubjectMajor(e.target.value.trim());
    formData.major = e.target.value.trim();
  };

  const updateLanguage = (e) => {
    setLanguage(e.target.value.trim());
    formData.language = e.target.value.trim();
  };

  const updateAge = (e) => {
    setuserAge(e.target.value.trim());
    formData.age = e.target.value.trim();
  };

  const updateGender = (e) => {
    setuserGender(e.target.value.trim());
    formData.gender = e.target.value.trim();
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    console.log(file);
    const base64 = await converToBase64(file);
    formData.image = base64;
    setuserImage(base64);
    // console.log(base64);
    // data.logo = base64;
    // event.target.value.trim().replace(/\s/g, "-")
  };

  return (
    <>
      <div className="w-full pl-[87px] h-screen overflow-auto text-gray-700 bg-gradient-to-r from-indigo-300 from-10% via-sky-300 via-30% to-emerald-300 to-90%">
        <div className="w-full backdrop-blur-md bg-white/70">
          <div class="px-10 py-3">
            <h1 class="md:text-xl text-lg font-bold">
              Room Name
            </h1>
          </div>
        </div>
        <div className="md:px-4 px-2 ">
          <div className="">
            <div className="grid md:grid-cols-5 md:gap-5">
              <div className="md:col-span-4  backdrop-blur-md bg-white/40 mt-6 rounded-2xl p-4">
              <h1 className="text-black">Chat With Your Partner</h1>
              <AblyChatComponent />
              </div>
              <div className="md:card h-fit w-full mt-20 rounded-2xl mx-auto backdrop-blur-md bg-white/60 md:pb-10 pb-0  shadow ">
                <div className="relative">
                  <img
                    className="w-32 mx-auto rounded-full mt-8 border-2 border-gray-400 bg-gray-200"
                    src={`https://robohash.org/${roomDetails[0]?.email}}`}
                    alt=""
                  />
                  {/* <div className="absolute bottom-2 left-44 p-1.5 bg-green-500 hover:border-2 cursor-pointer rounded-full w-fit h-fit"></div> */}
                </div>
                <div className="text-center mt-2 text-xl font-medium ">
                  {roomDetails[0]?.name}
                </div>
                {/* <div className="text-center text-sm font-medium ">
                  @{roomDetails[0]?.email.split("@")[0]}
                </div> */}
                <div className="text-center text-sm font-bold ">
                  Pune, India
                </div>
                {/* {
                  roomDetails[0]?.email == session?.user?.email && (
                    <button
                  data-modal-target="authentication-modal"
                  data-modal-toggle="authentication-modal"
                  type="button"
                  class="inline-flex items-center justify-center ml-20 mb-2 my-4 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group "
                >
                  <span class="relative px-3 py-2 transition-all duration-300  bg-gradient-to-br from-green-400 to-blue-400 group-hover:from-green-400 group-hover:to-blue-400 hover:from-green-500 hover:to-blue-400  font-bold rounded-md group-hover:bg-opacity-0 text-black hover:text-white">
                    Edit Portfolio
                  </span>
                </button>
                  )
                } */}
                <button
                  data-modal-target="authentication-modal"
                  data-modal-toggle="authentication-modal"
                  type="button"
                  class="inline-flex items-center justify-center ml-20 mb-2 my-4 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group "
                >
                  <span class="relative px-3 py-2 transition-all duration-300  bg-gradient-to-br from-green-400 to-blue-400 group-hover:from-green-400 group-hover:to-blue-400 hover:from-green-500 hover:to-blue-400  font-bold rounded-md group-hover:bg-opacity-0 text-gray-700 hover:text-gray-900">
                    Edit Portfolio
                  </span>
                </button>
              </div>
            </div>
            </div>
        </div>

      <style jsx global>{`

        [data-author="me"] {
          background: linear-gradient(to right, #363795, #005C97); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
          color: white;
          align-self: flex-end;
          border-bottom-right-radius: 0!important;
          border-bottom-left-radius: 10px!important;
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
    .collection("users")
    .find({ email: searchRoute })
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
    .collection("users")
    .find()
    .sort({ metacritic: -1 })
    .toArray();

  const paths = searchUsers.map((userPath) => ({
    params: { roomName: userPath.email },
  }));

  return { paths, fallback: "blocking" };
}
