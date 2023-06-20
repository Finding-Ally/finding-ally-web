import { Modal } from "flowbite";
import { ModalOptions, ModalInterface } from "flowbite";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

import { toast } from "react-toastify";
import styles from "@/styles/loadingAnimation.module.css";



export default function Explore() {

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

  const [goal, setGoal] = useState("University-Studies");
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
      if (room.adminUser.id === userId) return false;
      return (
        room?.goal === data?.goal &&
        room?.gender === data?.gender &&
        room?.group_or_duo === data?.group_or_duo &&
        room?.phase === data?.phase 
        // room?.location === data?.location
      );
    });

    // Calculate the matching score based on specific criteria
    const calculateMatchingScore = (formData, room) => {
      let score = 0;

      // Compare the goal
      if (formData.goal === room.goal) {
        score += 10; // Increment score if goal matches
      }

      // Compare the availability
      if (formData.availability === room.availability) {
        score += 5; // Increment score if availability matches
      }

      if (formData.phase === room.phase) {
        score += 5;
      }

      // Compare other criteria and update the score accordingly
      // Add more conditions and assign appropriate scores based on your matching logic

      return score;
    };

    if (matchedRooms.length > 0) {
      console.log("matchedRooms", matchedRooms);

      // Calculate the matching score here and then sort the matchedRooms array
      // based on the matching score
      matchedRooms.forEach((room) => {
        // Calculate the matching score based on your criteria
        const matchingScore = calculateMatchingScore(data, room);

        // Add the matching score to the room object
        room.matchingScore = matchingScore;
      });

      // Sort the matchedRooms array based on the matching score in descending order
      matchedRooms.sort((a, b) => b.matchingScore - a.matchingScore);

      const matchedRoom = matchedRooms[0];

      console.log("matchedRoom", matchedRoom);
      const matchedRoomId = matchedRoom._id;
      console.log("matchedRoomId", matchedRoomId);

      // Update the matched room with the current user

      const newData = {
        ...matchedRoom,
        name: matchedRoom.goal + "-" + matchedRoom.adminUser.id.slice(-6),
        members: [
          ...matchedRoom.members,
          matchedRoom.adminUser,
          {
            name: session?.user?.name,
            id: session?.user?.id,
            image: session?.user?.image,
            age: session?.user?.age,
            major: session?.user?.major,
            goals: session?.user?.goals,
            bio: session?.user?.bio,
            availability: session?.user?.availability,
            language: session?.user?.language,
            interests: session?.user?.interests,
          },
        ],
        isMatched: true,
      };

      const response = await fetch("/api/newroom", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newData),
      });

      console.log("response", response);

      if (response.ok) {
        console.log("Document created successfully");
        setCurrentUserRooms([ currentUserRooms, newData]);
        toast.success(" Room Created Successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          
        });

        try {
          const response = await fetch(`/api/createroom?roomId=${matchedRoomId}`, {
            method: "DELETE",
            contentType: "application/json",
          });
          if (response.status === 204) {
            // Successful deletion
            // Perform any necessary actions or update the UI accordingly
            setRequestedRooms((prevRooms) =>
              prevRooms.filter((room) => room._id !== roomId)
            );
            console.log("Room deleted successfully");
          } else {
            // Handle the error or display an error message
            console.error("Failed to delete room");
          }
        } catch (error) {
          // Handle the error or display an error message
          console.error("Error deleting room:", error);
        }
        
        // Reset form fields
      } else {
        console.error("Failed to create document");
      }


      document.getElementById("save-btn").disabled = false;
      document.getElementById("save-btn").textContent = "Saved";

      handleFindAllyFormToggle();

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
          setRequestedRooms([...requestedRooms, data]);
          toast.success(" Request initiated...", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            
          });
          // Reset form fields
        } else {
          console.error("Failed to create document");
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    }
    handleFindAllyFormToggle();
    document.getElementById("save-btn").disabled = false;
    document.getElementById("save-btn").textContent = "Saved";
  };

  const updateGoal = (e) => {
    setGoal(e.target.value.trim());
  };


  const [isFindAllyFormOpen, setIsFindAllyFormOpen] = useState(false);

  const handleFindAllyFormToggle = () => {
    setIsFindAllyFormOpen(!isFindAllyFormOpen);
  };

  const [isReportFormOpen, setIsReportFormOpen] = useState(false);

  const handleReportFormToggle = () => {
    setIsReportFormOpen(!isReportFormOpen);
  };


  const [isMaxFormOpen, setIsMaxFormOpen] = useState(false);

  const handleMaxFormToggle = () => {
    setIsMaxFormOpen(!isMaxFormOpen);

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

  const [reportReason, setReportReason] = useState("Other");
  const [reportReasonText, setReportReasonText] = useState("");

  const updateReportReason = (e) => {
    setReportReason(e.target.value.trim());
  };


  const updateReportReasonText = (e) => {
    setReportReasonText(e.target.value.trim());
  };

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

  const handleDeleteRequestedRoom = async (roomId) => {
    try {
      const response = await fetch(`/api/createroom?roomId=${roomId}`, {
        method: "DELETE",
        contentType: "application/json",
      });
      if (response.status === 204) {
        // Successful deletion
        // Perform any necessary actions or update the UI accordingly
        setRequestedRooms((prevRooms) =>
          prevRooms.filter((room) => room._id !== roomId)
        );
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

  const handleDeleteRoomConnected = async (roomId) => {
    try {
      const response = await fetch(`/api/newroom?roomId=${roomId}`, {
        method: "DELETE",
        contentType: "application/json",
      });
      if (response.status === 204) {
        // Successful deletion
        // Perform any necessary actions or update the UI accordingly
        setCurrentUserRooms((prevRooms) =>
          prevRooms.filter((room) => room._id !== roomId)
        );
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


  const handleSubmitReport = async (roomId) => {
    document.getElementById("report-btn").disabled = true;
    document.getElementById("report-btn").textContent = "Reporting...";
    const data = {
      userId: session?.user?.id,
      reportedAt: new Date().toISOString(),
      type: reportReason,
      reportReason: reportReasonText,
      reportedRoomId: roomId,
      ReportedUser: currentUserRooms[0].adminName,
    };

    const response = await fetch("/api/forms/report", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {

      toast.success(" Reported User", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      try {
        const response = await fetch(`/api/createroom?newroom=${reportedRoomId}`, {
          method: "DELETE",
          contentType: "application/json",
        });
        if (response.status === 204) {
          // Successful deletion
          // Perform any necessary actions or update the UI accordingly
          toast.success(" Room Removed", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });

          setRequestedRooms((prevRooms) =>
            prevRooms.filter((room) => room._id !== roomId)
          );
          console.log("Room deleted successfully");
        } else {
          // Handle the error or display an error message
          console.error("Failed to delete room");
        }
      } catch (error) {
        // Handle the error or display an error message
        console.error("Error deleting room:", error);
      }


      document.getElementById("report-btn").disabled = true;
      document.getElementById("report-btn").textContent = "Reported";
      handleReportFormToggle();
      return;


    } else {
      console.error("Failed to create document");
    }

    handleReportFormToggle();
    return;
    // // setReportModal(false);
    // setCurrentUserRooms((prevRooms) =>
    // prevRooms.filter((room) => room._id !== roomId)
    // )
  };

  // Fetch the Request rooms of the current user

  // Initialize a state to store the fetched data
  const [currentUserRooms, setCurrentUserRooms] = useState([]);

  // Fetch data from MongoDB using useEffect

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `/api/newroom?userId=${session?.user?.id}`
        );
        const jsonData = await response.json();
        setCurrentUserRooms(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [session?.user?.id]);

  const [userRoomsLength, setUserRoomsLength] = useState();

  useEffect(() => {
    setUserRoomsLength(currentUserRooms.length + requestedRooms?.length);
  }, [currentUserRooms, requestedRooms]);


  return (
    <div className="pb-6 pt-4 md:ml-[79px] md:pl-0 pl-2 pr-4 bg-white  overflow-auto">
    <div className="w-full rounded-2xl p-4 text-gray-700 bg-[#e6f5e5]">
      {/* <div className="w-full bg-gray-900">
        <div className="px-10 py-3">
          <h1 className="text-2xl font-bold text-white">Find your Ally</h1>
        </div>
      </div> */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pr-4">
        <div
          className={`bg-white mx-auto h-full flex items-center  rounded-lg justify-center place-content-center border border-gray-300 w-full ${styles["parent-div"]}`}
        >
          {userRoomsLength >= 3 ? (
            <button
              onClick={handleMaxFormToggle}
              type="button"
              className="absolute z-10 justify-center place-content-center mx-auto w-fit flex items-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
            >
              <span className="px-5 py-2.5 transition-all justify-center place-content-center mx-auto w-fit flex  duration-75 bg-green-400 font-bold rounded-md group-hover:bg-opacity-0">
                max rooms reached
              </span>
            </button>
          ) : (
            <button
              onClick={handleFindAllyFormToggle}
              type="button"
              className="absolute z-10 justify-center place-content-center mx-auto w-fit flex items-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
            >
              <span className="px-5 py-2.5 transition-all justify-center place-content-center mx-auto w-fit flex  duration-75 bg-green-400 font-bold rounded-md group-hover:bg-opacity-0">
                FIND ALLY
              </span>
            </button>
          )}


          {
            isMaxFormOpen && (
              <div className="bg-gray-700 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-20 backdrop-blur-sm bg-black/30 grid place-content-center justify-center w-screen h-screen ">
            <div
              id="maxrooms-modal"
              tabindex="-1"
              class="z-20 w-screen h-[calc(100%-1rem)] grid justify-center mb-4 p-4 overflow-x-hidden overflow-y-auto"
            >
              
            <div className="relative w-full max-w-xl max-h-full">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <button
                onClick={handleMaxFormToggle}
                  type="button"
                  className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                  data-modal-hide="report-modal"
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
                <div className="px-3 py-3">
                  <div class="p-6 text-center">
                    <svg
                      aria-hidden="true"
                      class="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                       Maximum rooms reached, delete a room to create a new one
                    </h3>
                    {/* <button
                      data-modal-hide="maxrooms-modal"
                      type="button"
                      class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                    >
                      Yes, Im sure
                    </button> */}
                    <button
                      onClick={handleMaxFormToggle}
                      type="button"
                      class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                    >
                      Ok, got it
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
            )
          }

         

          {/* <LoadingAnimation /> */}
          <div className={styles["loadingio-spinner-ripple-jierxddzni"]}>
            <div className={styles["ldio-apoyzbf4opq"]}>
              <div></div>
              <div></div>
            </div>
          </div>

          {
            isFindAllyFormOpen && (
              <div className="bg-gray-700 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-20 backdrop-blur-sm bg-black/30 grid place-content-center justify-center w-screen h-screen ">
            <div
              id="authentication-modal"
              tabindex="-1"
              class="z-20 w-screen h-[calc(100%-1rem)] grid justify-center mb-4 p-4 overflow-x-hidden overflow-y-auto"
            >
            <div className="relative w-full max-w-4xl max-h-full">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <button
                  onClick={handleFindAllyFormToggle}
                  type="button"
                  className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
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
                        for="goals"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Select an option
                      </label>
                      <select
                        onChange={updateGoal}
                        id="goals" 
                        required
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      >
                        <option selected value="University-Studies">
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
                      <div className="grid grid-cols-3 gap-2">
                        <div className="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
                          <input
                            id="bordered-radio-1"
                            type="radio"
                            value="Beginner"
                            name="bordered-radio"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-400"
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
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-400"
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
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-400"
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
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-400"
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
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-400"
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
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-400"
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
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-400"
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
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-400"
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

            )
          }
          
        </div>
        <div className="grid grid-rows-3 ">
          <div className="bg-white rounded-lg border border-gray-300 p-4 w-full">
            <div className="mb-4">
              <h1 className="font-semibold text-gray-800">
                Let’s make this a <span className="text-green-600">safe</span>{" "}
                and{" "}
                <span className=" italic underline text-blue-800">
                  productive
                </span>{" "}
                experience
              </h1>
            </div>
            <span className="font-semibold text-gray-800 my-auto">
              <div className="grid grid-cols-1">
                <p className="text-sm font-bold text-gray-900 dark:text-gray-300">
                  ✨ Be respectful and professional.
                </p>
                <p className="text-xs font-medium text-gray-900 dark:text-gray-300 ml-6">
                  Avoid offensive language and harassment towards others.
                </p>
              </div>

              <div className="grid grid-cols-1">
                <p className="text-sm font-bold text-gray-900 dark:text-gray-300">
                  ⚠️ Report inappropriate behavior.
                </p>
                <p className="text-xs font-medium text-gray-900 dark:text-gray-300 ml-6">
                  Users should promptly report any inappropriate behavior or
                  messages to the platform administrators.
                </p>
              </div>

              <div className="grid grid-cols-1">
                <p className="text-sm font-bold text-gray-900 dark:text-gray-300">
                  ✅ Use the platform for its intended purpose.
                </p>
                <p className="text-xs font-medium text-gray-900 dark:text-gray-300 ml-6">
                  Only use the platform to find study partners and it is not
                  meant for dating or business networking.
                </p>
              </div>

              <div className="grid grid-cols-1">
                <p className="text-sm font-bold text-gray-900 dark:text-gray-300">
                  🏃🏻‍♀️ Be proactive and communicate.
                </p>
                <p className="text-xs font-medium text-gray-900 dark:text-gray-300 ml-6">
                  Communication is key! Keep your allies informed about any
                  changes to your schedule or study plans. Take the lead in
                  scheduling study sessions.
                </p>
              </div>
            </span>
          </div>

          <div className="bg-white rounded-lg border border-gray-300   p-4 w-full mt-2">
            <div className="mb-4">
              <h1 className="font-semibold text-gray-800">Your Allies</h1>
            </div>

            {currentUserRooms.length > 0 ? (
              currentUserRooms.map((room) => (
                <div
                  key={room?._id}
                  className="flex justify-between items-start mb-2 bg-gray-50 p-2 rounded-xl hover:bg-gray-100 w-full"
                >
                  <div className="flex">
                    <img
                      className="w-12 h-12 rounded-full mr-4 border border-gray-100 bg-gray-300 shadow-sm"
                      src={`https://robohash.org/${room?.members[1]?.id}}`}
                      alt=""
                    />
                    <span className="font-semibold text-gray-800 my-auto">
                      {room?.members[1]?.name}
                    </span>
                  </div>
                  <div className="my-auto">
                    <button
                      onClick={() => handleDeleteRoomConnected(room?._id)}
                      className="text-gray-100 mr-2 bg-gray-600 hover:bg-gray-800 p-2 rounded-lg"
                    >
                      Unmatch
                    </button>
                    <button
                      onClick={handleReportFormToggle}
                      className="text-gray-700 mr-2 bg-gray-200 hover:bg-gray-100 p-2 rounded-lg"
                    >
                      Report
                    </button>
                  </div>


                  {
                    isReportFormOpen && (
                      <div className="bg-gray-700 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-20 backdrop-blur-sm bg-black/30 grid place-content-center justify-center w-screen h-screen ">
            <div
              id="report-modal"
              tabindex="-1"
              class="z-20 w-screen h-[calc(100%-1rem)] grid justify-center mb-4 p-4 overflow-x-hidden overflow-y-auto"
            >
                    <div className="relative w-full max-w-xl max-h-full">
                      <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <button
                        onClick={handleReportFormToggle}
                          type="button"
                          className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                          data-modal-hide="report-modal"
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
                          <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                            Report user
                          </h3>
                          <form className="space-y-6" action="#">

                            <div>
                              <label
                                className="block mb-2 text-sm font-bold text-gray-900 dark:text-white"
                              >
                                Explain why you are reporting this user
                              </label>
                              <div className="flex items-center mb-4">
                                <input
                                  defaultChecked
                                  id="default-1"
                                  type="radio"
                                  value="Inappropriate-behaviour"
                                  name="default-radio"
                                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-400"
                                  onChange={updateReportReason}
                                  // onClick={setAvailability("anytime")}
                                />
                                <label
                                  for="default-1"
                                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                >
                                  Inappropriate behaviour
                                </label>
                              </div>
                              <div className="flex items-center mb-4">
                                <input
                                  id="default-2"
                                  type="radio"
                                  value="Abusive-Language"
                                  name="default-radio"
                                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-400"
                                  onChange={updateReportReason}
                                  // onClick={setAvailability("weekdays")}
                                />
                                <label
                                  for="default-2"
                                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                >
                                  Abusive Language
                                </label>
                              </div>
                              <div className="flex items-center mb-4">
                                <input
                                  id="default-3"
                                  type="radio"
                                  value="Spam-or-Phishing"
                                  name="default-radio"
                                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-400"
                                  onChange={updateReportReason}
                                  // onClick={setAvailability("weekends")}
                                />
                                <label
                                  for="default-3"
                                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                >
                                  Spam or Phishing
                                </label>
                              </div>
                              <div className="flex items-center ">
                                <input
                                  id="default-4"
                                  type="radio"
                                  value="Other"
                                  name="default-radio"
                                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-400"
                                  onChange={updateReportReason}
                                  // onClick={setAvailability("weekends")}
                                />
                                <label
                                  for="default-4"
                                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                >
                                  Other
                                </label>
                              </div>
                            </div>

                            <div>
                            <label
                              for="aboutMe"
                              class="block mb-2 text-sm font-bold text-gray-900 dark:text-white"
                            >
                              Relevant Information (Optional)
                            </label>
                            <textarea
                              id="aboutMe"
                              rows="4"
                              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="Anything else you want to add?"
                              onChange={updateReportReasonText}
                            ></textarea>
                          </div>

                            {/* updateReportReasonText */}

                            <button
                              onClick={() => handleSubmitReport(room?.members[1]?.id)}
                              id="report-btn"
                              type="submit"
                              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                              Report User
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                    )
                  }
                  
                </div>
              ))
            ) : (
              <div className="flex justify-between items-start mb-2 bg-gray-50 p-2 rounded-xl hover:bg-gray-100  py-16 w-full">
                <div className="flex mx-auto text-center w-full">
                  <span className="font-semibold text-gray-800 my-auto mx-auto text-center w-full">
                    No Allies Yet
                  </span>
                </div>
              </div>
            )}
          </div>

          <div className="bg-white  rounded-lg border border-gray-300  p-4 w-full mt-2">
            <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
              Waiting List:
            </h2>
            <ul className="space-y-1 text-gray-500 list-inside dark:text-gray-400">
              {requestedRooms !== null && requestedRooms.length > 0 ? (
                requestedRooms.map((room) => (
                  <li
                    className="flex items-center bg-gray-50 p-2 rounded-xl hover:bg-gray-100 w-full"
                    key={room?._id}
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
                          onClick={() => handleDeleteRequestedRoom(room?._id)}
                          className="text-gray-700 mr-2 bg-gray-200 hover:bg-gray-300 p-2 rounded-lg"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </li>
                ))
              ) : (
                <div className="flex justify-between items-start mb-2 bg-gray-50 p-2 rounded-xl hover:bg-gray-100 py-16 w-full">
                  <div className="flex mx-auto text-center w-full">
                    <span className="font-semibold text-gray-800 my-auto mx-auto text-center w-full">
                      No Waiting List
                    </span>
                  </div>
                </div>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
