import { Modal } from "flowbite";
import { ModalOptions, ModalInterface } from "flowbite";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useReducer } from "react";

import { useQuery, useMutation, useQueryClient } from "react-query";

import { toast } from "react-toastify";
import LoadingScreen from "@/components/animations/loadingScreen";
import { getRooms, getRoom, updateRoom } from "../database/controllerRoom";

import axios from "axios";

const formReducer = (state, event) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};

export default function Explore() {
  var [userEmail, setEmail] = useState();
  var [Subject, setSubject] = useState();
  var [Message, setMessage] = useState();

  const emailUpdate = (event) => {
    // Dealing with name field changes to update our state
    setEmail(event.target.value);
  };
  const subjectUpdate = (event) => {
    // Dealing with name field changes to update our state

    setSubject(event.target.value);
  };
  const messageUpdate = (event) => {
    // Dealing with name field changes to update our state

    setMessage(event.target.value);
  };

  useEffect(() => {
    const $modalElement = document.querySelector("#authentication-modal");

    const modalOptions = {
      placement: "bottom-right",
      backdrop: "dynamic",
      backdropClasses:
        "bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40",
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

  const userId = session?.user?.id;

  const [userName, setuserName] = useState();
  const [userImage, setuserImage] = useState();
  const [course, setCourse] = useState();
  const [studyInterests, setstudyInterests] = useState();
  const [userAge, setuserAge] = useState();
  const [userGender, setuserGender] = useState();
  const [userBio, setuserBio] = useState();
  const [language, setLanguage] = useState();

  const [goal, setGoal] = useState();
  const [phase, setPhase] = useState("Intermediate");
  const [availability, setAvailability] = useState("Anytime");
  const [group_or_duo, setgroup_or_duo] = useState("duo");

  const [fetchRooms, setFetchRooms] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
          // Fetch data from MongoDB using useEffect
    try {
      const response = await fetch(`/api/createroom`);
      const jsonData = await response.json();
      setFetchRooms(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    };

    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    document.getElementById("save-btn").disabled = true;
    document.getElementById("save-btn").textContent = "Saving...";
    e.preventDefault();

    const data = {
      // We should keep the fields consistent for managing this data later
      submittedAt: Date.now(),
      adminUser: {
        name: session?.user?.name,
        id: session?.user?.id,
        email: session?.user?.email,
        login: session?.user?.login || session?.user?.email.split("@")[0],
        image: session?.user?.image,
        age: session?.user?.age,
        major: session?.user?.major,
        goals: session?.user?.goals,
        bio: session?.user?.bio,
        availability: session?.user?.availability,
        language: session?.user?.language,
        interests: session?.user?.interests,
      },
      members: [],
      goal: goal,
      phase: phase,
      availability: availability,
      group_or_duo: group_or_duo,
      isMatched: false,
      // studyInterests : formData?.studyInterests,
      language: "English",
    };

    // matching algorithm

    // fetchRequestedRooms();

    // data --> current form data which needs to be matched to the fetched rooms
    console.log("fetchRooms", fetchRooms);

    const matchedRooms = fetchRooms.filter((room) => {
      if(room.adminUser.id === userId) return false;
      return (
        room?.goal === data?.goal
      );
    });


    console.log("matchedRooms", matchedRooms);



    if (matchedRooms.length > 0) {
      console.log("matchedRooms", matchedRooms);
      const matchedRoom = matchedRooms[0];
      console.log("matchedRoom", matchedRoom);
      const matchedRoomId = matchedRoom._id;
      console.log("matchedRoomId", matchedRoomId);
      return;
    } else {
      console.log("No matched rooms");
      try {
        const response = await fetch("/api/createroom", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
  
        if (response.ok) {
          console.log("Document created successfully");
          toast.success("🔮 Room Created Successfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          // Reset form fields
        } else {
          console.error("Failed to create document");
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
  
    }

    
    document.getElementById("save-btn").disabled = false;
    document.getElementById("save-btn").textContent = "Saved";
  };

  const updateGoal = (e) => {
    setGoal(e.target.value.trim());
  };

  const updatePhase = (e) => {
    setPhase(e.target.value.trim());
  };

  const updateAvailibility = (e) => {
    setAvailability(e.target.value.trim());
  };

  const updateGroup_or_duo = (e) => {
    setgroup_or_duo(e.target.value.trim());
  };

  // const handleImageUpload = async (e) => {
  //   const file = e.target.files[0];
  //   console.log(file);
  //   const base64 = await converToBase64(file);
  //   formData.image = base64;
  //   setuserImage(base64);
  //   // console.log(base64);
  //   // data.logo = base64;
  //   // event.target.value.trim().replace(/\s/g, "-")
  // };

  // Fetch the Request rooms of the current user

  // Initialize a state to store the fetched data
  const [requestedRooms, setRequestedRooms] = useState([]);

  // Fetch data from MongoDB using useEffect

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `/api/createroom?adminId=${session?.user?.id}`
        );
        const jsonData = await response.json();
        setRequestedRooms(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [session?.user?.id, userId]);

  const handleDeleteRoom = async (roomId) => {
    try {
      const response = await fetch(`/api/createroom?roomId=${roomId}`, {
        method: "DELETE",
      });
      if (response.status === 204) {
        // Successful deletion
        // Perform any necessary actions or update the UI accordingly
        console.log("Room deleted successfully");
      } else {
        // Handle the error or display an error message
        console.error("Failed to delete room");
      }
    } catch (error) {
      // Handle the error or display an error message
      console.error("Error deleting room:", error);
    }
  };

  return (
    <div className="w-full pl-[87px] h-screen pb-10 overflow-auto text-gray-700 bg-gradient-to-r bg-emerald-300 from-10% to-indigo-300 to-90%">
      <div className="w-full bg-gray-900">
        <div className="px-10 py-3">
          <h1 className="text-2xl font-bold text-white">Find your Ally</h1>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white  rounded-lg shadow-xl border border-black p-8 w-full m-4">
          <button
            data-modal-target="authentication-modal"
            data-modal-toggle="authentication-modal"
            type="button"
            className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
          >
            <span className="relative px-5 py-2.5 transition-all duration-75  bg-green-400 font-bold rounded-md group-hover:bg-opacity-0">
              FIND ALLY
            </span>
          </button>

          <div
            id="authentication-modal"
            tabindex="-1"
            aria-hidden="true"
            className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
          >
            <div className="relative w-full max-w-3xl max-h-full">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <button
                  type="button"
                  className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                  data-modal-hide="authentication-modal"
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
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
                  <span className="sr-only">Close modal</span>
                </button>
                <div className="px-6 py-6 lg:px-8">
                  <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                    Tell us about your Goal
                  </h3>
                  <form className="space-y-6" action="#">
                    <div>
                      <label
                        for="countries"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Select an option
                      </label>
                      <select
                        onChange={updateGoal}
                        id="countries"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      >
                        <option selected>Choose a goal</option>
                        <option value="University-Studies">
                          University Studies
                        </option>
                        <option value="IIT-JEE">IIT-JEE</option>
                        <option value="GATE">GATE</option>
                        <option value="UPSC-MPSC">UPSC-MPSC</option>
                      </select>
                    </div>
                    <div>
                      <label
                        for="password"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        What level are you on for your Goal?
                      </label>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
                          <input
                            id="bordered-radio-1"
                            type="radio"
                            value="Beginner"
                            name="bordered-radio"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            onChange={updatePhase}
                            // onClick={setPhase("Beginner")}
                          />
                          <label
                            for="bordered-radio-1"
                            className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Beginner
                          </label>
                        </div>
                        <div className="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
                          <input
                            defaultChecked
                            id="bordered-radio-2"
                            type="radio"
                            value="Intermediate"
                            name="bordered-radio"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            onChange={updatePhase}
                            // onClick={setPhase("Intermediate")}
                          />
                          <label
                            for="bordered-radio-2"
                            className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Intermediate
                          </label>
                        </div>
                        <div className="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
                          <input
                            id="bordered-radio-3"
                            type="radio"
                            value="Advanced"
                            name="bordered-radio"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            onChange={updatePhase}
                            // onClick={setPhase("Advanced")}
                          />
                          <label
                            for="bordered-radio-3"
                            className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Advanced
                          </label>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label
                        for="default-radio"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        What is your availability?
                      </label>
                      <div className="flex items-center mb-4">
                        <input
                          defaultChecked
                          id="default-radio-2"
                          type="radio"
                          value="flexible"
                          name="default-radio"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          onChange={updateAvailibility}
                          // onClick={setAvailability("anytime")}
                        />
                        <label
                          for="default-radio-2"
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          I’m flexible / I’m available all the time
                        </label>
                      </div>
                      <div className="flex items-center mb-4">
                        <input
                          id="default-radio-1"
                          type="radio"
                          value="weekdays"
                          name="default-radio"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          onChange={updateAvailibility}
                          // onClick={setAvailability("weekdays")}
                        />
                        <label
                          for="default-radio-1"
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Weekdays
                        </label>
                      </div>
                      <div className="flex items-center ">
                        <input
                          id="default-radio-3"
                          type="radio"
                          value="weekends"
                          name="default-radio"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          onChange={updateAvailibility}
                          // onClick={setAvailability("weekends")}
                        />
                        <label
                          for="default-radio-3"
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Weekends
                        </label>
                      </div>
                    </div>

                    <div>
                      <label
                        for="password"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Duo or Group?
                      </label>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
                          <input
                            defaultChecked
                            id="bordered-radio-4"
                            type="radio"
                            value="Duo"
                            name="bordered-radio-1"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            onChange={updateGroup_or_duo}
                            // onClick={setgroup_or_duo("Duo")}
                          />
                          <label
                            for="bordered-radio-4"
                            className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Duo
                          </label>
                        </div>
                        <div className="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
                          <input
                            id="bordered-radio-5"
                            type="radio"
                            value="Group"
                            name="bordered-radio-1"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            onChange={updateGroup_or_duo}
                            // onClick={setgroup_or_duo("Group")}
                          />
                          <label
                            for="bordered-radio-5"
                            className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Group
                          </label>
                        </div>
                      </div>
                      <label className="block my-2 text-xs font-medium text-gray-900 dark:text-white">
                        *you can switch from duo to group later if required
                      </label>
                    </div>
                    {/* <div className="flex justify-between">
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="remember"
                            type="checkbox"
                            value=""
                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                            required
                          />
                        </div>
                        <label
                          for="remember"
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Remember me
                        </label>
                      </div>
                      <a
                        href="#"
                        className="text-sm text-blue-700 hover:underline dark:text-blue-500"
                      >
                        Lost Password?
                      </a>
                    </div> */}
                    <button
                      onClick={handleSubmit}
                      id="save-btn"
                      type="submit"
                      className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Find Now
                    </button>
                    {/* <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                      Not registered?{" "}
                      <a
                        href="#"
                        className="text-blue-700 hover:underline dark:text-blue-500"
                      >
                        Create account
                      </a>
                    </div> */}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-rows-2 gap-4">
          <div className="bg-white rounded-lg shadow-xl border border-black p-4 w-full mt-4">
            <div className="mb-4">
              <h1 className="font-semibold text-gray-800">Your Allies</h1>
            </div>

            <div className="flex justify-between items-start mb-2 bg-gray-50 p-2 rounded-xl hover:bg-gray-100 w-full">
              <div className="flex">
                <img
                  className="w-12 h-12 rounded-full mr-4 border border-gray-100 shadow-sm"
                  src="https://randomuser.me/api/portraits/men/20.jpg"
                  alt=""
                />
                <span className="font-semibold text-gray-800 my-auto">
                  Ezio Dani
                </span>
              </div>
              <div className="my-auto">
                <a
                  href=""
                  className="text-gray-100 mr-2 bg-gray-600 hover:bg-gray-800 p-2 rounded-lg"
                >
                  Unmatch
                </a>
                <a
                  href=""
                  className="text-gray-700 mr-2 bg-gray-200 hover:bg-gray-100 p-2 rounded-lg"
                >
                  Report
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white  rounded-lg shadow-xl border border-black p-4 w-full">
            <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
              Waiting List:
            </h2>
            <ul className="space-y-1 text-gray-500 list-inside dark:text-gray-400">
              {requestedRooms !== null && requestedRooms.length > 0 ? (
                requestedRooms.map((room) => (
                  <li
                    className="flex items-center bg-gray-50 p-2 rounded-xl hover:bg-gray-100 w-full"
                    key={room?.id}
                  >
                    <svg
                      className="w-6 h-6 mr-1.5 text-blue-500 dark:text-green-400 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <div className="flex justify-between w-full items-start mb-2">
                      <span className="font-semibold text-gray-800 flex flex-row my-auto">
                        {room?.goal}
                      </span>
                      <div>
                        <button
                          onClick={() => handleDeleteRoom(room?._id)}
                          className="text-gray-700 mr-2 bg-gray-200 hover:bg-gray-300 p-2 rounded-lg"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </li>
                ))
              ) : (
                <h1>Rooms Not Found</h1>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
