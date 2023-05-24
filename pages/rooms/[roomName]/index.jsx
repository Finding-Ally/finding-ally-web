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
        "text-gray-200 bg-gray-800 hover:bg-gray-700 hover:text-gray-200 dark:text-gray-100 dark:hover:text-gray-200 border-blue-600 dark:border-blue-500",
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
    tabs.show("clubs");
  }, []);

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
      <div className="w-full pl-[91px] h-min-screen pb-24 overflow-auto text-gray-700 bg-gradient-to-r from-indigo-300 from-10% via-sky-300 via-30% to-emerald-300 to-90%">
        <div className="w-full backdrop-blur-md bg-white/50">
          <div class="px-10 py-3">
            <h1 class="md:text-xl text-lg font-bold">
              Good morning, {session?.user?.name}
            </h1>
          </div>
        </div>
        <div className="md:px-4 px-2 ">
          <div className="">
            <div className="grid md:grid-cols-5 md:gap-5">
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
        <div
          id="authentication-modal"
          tabindex="-1"
          aria-hidden="true"
          class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
          <div class="relative w-full max-w-3xl max-h-full">
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <button
                type="button"
                class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                data-modal-hide="authentication-modal"
              >
                <svg
                  aria-hidden="true"
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="sr-only">Close modal</span>
              </button>
              <div class="px-6 py-6 lg:px-8">
                <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                  Let&apos;s create your Portfolio
                </h3>
                <form class="space-y-6" action="#">
                  <div>
                    <label
                      for="countries"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your Major
                    </label>
                    <select
                      id="countries"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      onChange={updateMajor}
                    >
                      <option selected>Choose one field</option>
                      <option value="Computer-Science">Computer Science</option>
                      <option value="IIT-JEE">IIT-JEE</option>
                      <option value="GATE">GATE</option>
                      <option value="UPSC-MPSC">UPSC-MPSC</option>
                    </select>
                  </div>

                  <div>
                    <label
                      for="first_name"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Study Interests
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="add topics here"
                      onChange={updateInterests}
                      required
                    />
                  </div>

                  <div>
                    <label
                      for="numberinput"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Age
                    </label>
                    <input
                      type="number"
                      id="numberinput"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="add topics here"
                      onChange={updateAge}
                      required
                    />
                  </div>

                  <div>
                    <label
                      for="password"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Gender
                    </label>
                    <div className="grid grid-cols-3 gap-4">
                      <div class="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
                        <input
                          defaultChecked
                          id="bordered-radio-4"
                          type="radio"
                          name="bordered-radio-1"
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          onChange={updateGender}
                        />
                        <label
                          for="bordered-radio-4"
                          class="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Male
                        </label>
                      </div>
                      <div class="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
                        <input
                          id="bordered-radio-5"
                          type="radio"
                          value=""
                          name="bordered-radio-1"
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          for="bordered-radio-5"
                          class="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Female
                        </label>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      for="message"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      About Me
                    </label>
                    <textarea
                      id="message"
                      rows="4"
                      class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Write your thoughts here..."
                      // defaultValue={bio}
                      onChange={updateBio}
                    ></textarea>
                  </div>

                  <div>
                    <label
                      for="password"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Preferred Language?
                    </label>
                    <div className="grid grid-cols-3 gap-4">
                      <div class="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
                        <input
                          id="bordered-radio-1"
                          type="radio"
                          value="English"
                          name="bordered-radio"
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          onChange={updateLanguage}
                        />
                        <label
                          for="bordered-radio-1"
                          class="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          English
                        </label>
                      </div>
                      <div class="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
                        <input
                          defaultChecked
                          id="bordered-radio-2"
                          type="radio"
                          value="Hindi"
                          name="bordered-radio"
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          onChange={updateLanguage}
                        />
                        <label
                          for="bordered-radio-2"
                          class="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Hindi
                        </label>
                      </div>
                      <div class="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
                        <input
                          id="bordered-radio-3"
                          type="radio"
                          value="other"
                          name="bordered-radio"
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          onChange={updateLanguage}
                        />
                        <label
                          for="bordered-radio-3"
                          class="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Other
                        </label>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={handleSubmit}
                    id="save-btn"
                    type="submit"
                    class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Create My Portfolio
                  </button>
                </form>
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