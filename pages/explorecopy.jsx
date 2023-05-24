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

  const [userName, setuserName] = useState();
  const [userImage, setuserImage] = useState();
  const [course, setCourse] = useState();
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
  const roomId = "645111b866682caf52a4cca5";

  const queryClient = useQueryClient();
  const { isLoading, isError, data, error } = useQuery(["rooms", roomId], () =>
  postRoom(roomId)
  );
  const UpdateMutation = useMutation((newData) => postRoom(newData), {
    onSuccess: async (data) => {
      // queryClient.setQueryData('users', (old) => [data])
      queryClient.prefetchQuery("rooms", getRooms);
    },
  });



  // "user_id": "harshita_dsa"
  // "gender": "Female",
  // "matched": 0,
  // "matchId": "",
  // "age": 20,
  // "phase": 1 ,  //beginner:1 , mid:2, advanced:3
  // "group_or_duo": 1,
  // "course": "Computer Science",
  // "preparingFor": "CAT",
  // "studyHabits": {
  //   "groupOrSolo": "Group",
  //   "preferredStudyHours": 4,
  //   "preferredStudyEnvironment": "Coffee Shop"
  // },
  // "location": {
  //   "city": "Pune",
  //   "state": "Maharashtra",
  //   "pincode": "400101",
  //   "country": "India"
  // },
  // "interests": [
  //   "Photography",
  //   "Gardening"
  // ],
  // "availability": {
  //   "weekday": [{
  //     "days": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  //     "Morning": true,
  //     "Evening": false
  //   }
  //   ],
  //   "weekend": [{
  //     "days": ["Saturday", "Sunday"],
  //     "Morning": true,
  //     "Night": true
  //   }]
  // },
  // "language": "English",
  // "personalityTraits": [
  //   "Shy"
  // ],
  // "occupation": "Sophomore"



  if (data){
    let { name, email, admin, isMatched, gender, notifications, preparingFor, course, availibility, phase, group_or_duo, language } =
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
    const postData = {
      name: userName,
      bio: userBio,
      course: course,
      studyInterests: studyInterests,
      age: userAge,
      mydata: "mydata"
    };
    
    const url = '/api/rooms'; // Replace with your API endpoint
    
    axios.post(url, postData)
      .then(response => {
        // Handle success
        console.log(response.data);
      })
      .catch(error => {
        // Handle error
        console.error(error);
      });
    
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

  const updateCourse = (e) => {
    setCourse(e.target.value.trim());
    formData.target = e.target.value.trim();
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
    <div className="w-full pl-[91px] h-fit pb-10 overflow-auto text-gray-700 bg-gradient-to-r from-indigo-300 from-10% via-sky-300 via-30% to-emerald-300 to-90%">
      <div className="w-full bg-gray-900">
        <div class="px-10 py-3">
          <h1 class="text-2xl font-bold text-white">Find your Ally</h1>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-6">
        <div class="bg-white  rounded-lg shadow-xl border border-black p-8 w-full m-4">
          <button
            data-modal-target="authentication-modal"
            data-modal-toggle="authentication-modal"
            type="button"
            class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
          >
            <span class="relative px-5 py-2.5 transition-all duration-75  bg-green-400 font-bold rounded-md group-hover:bg-opacity-0">
              FIND ALLY
            </span>
          </button>

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
                    Tell us about your Goal
                  </h3>
                  <form class="space-y-6" action="#">
                    <div>
                    <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
                    <select onChange={updateCourse} id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <option selected>Choose a goal</option>
                      <option value="University-Studies">University Studies</option>
                      <option value="IIT-JEE">IIT-JEE</option>
                      <option value="GATE">GATE</option>
                      <option value="UPSC-MPSC">UPSC-MPSC</option>
                    </select>
                  </div>
                    <div>
                      <label
                        for="password"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        What level are you on for your Goal?
                      </label>
                      <div className="grid grid-cols-3 gap-4">
                      <div class="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
                        <input
                          id="bordered-radio-1"
                          type="radio"
                          value=""
                          name="bordered-radio"
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          for="bordered-radio-1"
                          class="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Beginner
                        </label>
                      </div>
                      <div class="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
                        <input
                          defaultChecked
                          id="bordered-radio-2"
                          type="radio"
                          value=""
                          name="bordered-radio"
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          for="bordered-radio-2"
                          class="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Intermediate
                        </label>
                      </div>
                      <div class="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
                        <input
                          id="bordered-radio-3"
                          type="radio"
                          value=""
                          name="bordered-radio"
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          for="bordered-radio-3"
                          class="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Advanced
                        </label>
                      </div>
                      </div>
                    </div>

                    <div>
                      <label
                        for="default-radio"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        What is your availability?
                      </label>
                      <div class="flex items-center mb-4">
                          <input defaultChecked id="default-radio-2" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                          <label for="default-radio-2" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I’m flexible / I’m available all the time</label>
                      </div>
                      <div class="flex items-center mb-4">
                          <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                          <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Weekdays</label>
                      </div>
                      <div class="flex items-center ">
                          <input id="default-radio-3" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                          <label for="default-radio-3" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Weekends</label>
                      </div>
                      
                    </div>

                    <div>
                      <label
                        for="password"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Duo or Group?
                      </label>
                      <div className="grid grid-cols-3 gap-4">
                      <div class="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
                        <input
                        defaultChecked
                          id="bordered-radio-4"
                          type="radio"
                          value=""
                          name="bordered-radio-1"
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          for="bordered-radio-4"
                          class="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Duo
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
                          Group
                        </label>
                      </div>
                      </div>
                      <label
                        class="block my-2 text-xs font-medium text-gray-900 dark:text-white"
                      >
                        *you can switch from duo to group later if required
                      </label>
                    </div>
                    {/* <div class="flex justify-between">
                      <div class="flex items-start">
                        <div class="flex items-center h-5">
                          <input
                            id="remember"
                            type="checkbox"
                            value=""
                            class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                            required
                          />
                        </div>
                        <label
                          for="remember"
                          class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Remember me
                        </label>
                      </div>
                      <a
                        href="#"
                        class="text-sm text-blue-700 hover:underline dark:text-blue-500"
                      >
                        Lost Password?
                      </a>
                    </div> */}
                    <button
                      onClick={handleSubmit}
                      id="save-btn"
                      type="submit"
                      class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Find Now
                    </button>
                    {/* <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                      Not registered?{" "}
                      <a
                        href="#"
                        class="text-blue-700 hover:underline dark:text-blue-500"
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
        <div class="grid grid-rows-2 gap-4">
          <div class="bg-white rounded-lg shadow-xl border border-black p-8 w-full mt-4">
            <div class="mb-4">
              <h1 class="font-semibold text-gray-800">Your Allies</h1>
            </div>
            <div class="flex justify-start items-start mb-2">
              <div class="w-1/5">
                <img
                  class="w-12 h-12 rounded-full border border-gray-100 shadow-sm"
                  src="https://randomuser.me/api/portraits/men/20.jpg"
                  alt=""
                />
              </div>
              <div class="w-4/5 flex justify-between">
                <span class="font-semibold text-gray-800">Ezio Dani</span>
                <div>
                  <a
                    href=""
                    class="text-gray-100 mr-2 bg-gray-600 hover:bg-gray-800 p-2 rounded-lg"
                  >
                    Unmatch
                  </a>
                  <a
                    href=""
                    class="text-gray-700 mr-2 bg-gray-200 hover:bg-gray-100 p-2 rounded-lg"
                  >
                    Report
                  </a>
                </div>
              </div>
            </div>
            <div class="flex justify-start items-start mb-2">
              <div class="w-1/5">
                <img
                  class="w-12 h-12 rounded-full border border-gray-100 shadow-sm"
                  src="https://randomuser.me/api/portraits/men/20.jpg"
                  alt=""
                />
              </div>
              <div class="w-4/5 flex justify-between">
                <span class="font-semibold text-gray-800">Ezio Dani</span>
                <div>
                  <a
                    href=""
                    class="text-gray-100 mr-2 bg-gray-600 hover:bg-gray-800 p-2 rounded-lg"
                  >
                    Unmatch
                  </a>
                  <a
                    href=""
                    class="text-gray-700 mr-2 bg-gray-200 hover:bg-gray-100 p-2 rounded-lg"
                  >
                    Report
                  </a>
                </div>
              </div>
            </div>
            <div class="flex justify-start items-start mb-2">
              <div class="w-1/5">
                <img
                  class="w-12 h-12 rounded-full border border-gray-100 shadow-sm"
                  src="https://randomuser.me/api/portraits/men/20.jpg"
                  alt=""
                />
              </div>
              <div class="w-4/5 flex justify-between">
                <span class="font-semibold text-gray-800">Ezio Dani</span>
                <div>
                  <a
                    href=""
                    class="text-gray-100 mr-2 bg-gray-600 hover:bg-gray-800 p-2 rounded-lg"
                  >
                    Unmatch
                  </a>
                  <a
                    href=""
                    class="text-gray-700 mr-2 bg-gray-200 hover:bg-gray-100 p-2 rounded-lg"
                  >
                    Report
                  </a>
                </div>
              </div>
            </div>
            <div class="flex justify-start items-start mb-2">
              <div class="w-1/5">
                <img
                  class="w-12 h-12 rounded-full border border-gray-100 shadow-sm"
                  src="https://randomuser.me/api/portraits/men/20.jpg"
                  alt=""
                />
              </div>
              <div class="w-4/5 flex justify-between">
                <span class="font-semibold text-gray-800">Ezio Dani</span>
                <div>
                  <a
                    href=""
                    class="text-gray-100 mr-2 bg-gray-600 hover:bg-gray-800 p-2 rounded-lg"
                  >
                    Unmatch
                  </a>
                  <a
                    href=""
                    class="text-gray-700 mr-2 bg-gray-200 hover:bg-gray-100 p-2 rounded-lg"
                  >
                    Report
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white  rounded-lg shadow-xl border border-black p-8 w-full">
            <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
              Waiting List:
            </h2>
            <ul class="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
              <li class="flex items-center">
                <svg
                  class="w-4 h-4 mr-1.5 text-blue-500 dark:text-green-400 flex-shrink-0"
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
                At least 10 characters
              </li>
              <li class="flex items-center">
                <svg
                  class="w-4 h-4 mr-1.5 text-blue-500 dark:text-green-400 flex-shrink-0"
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
                At least one lowercase character
              </li>
              <li class="flex items-center">
                <svg
                  class="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0"
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
                At least one lowercase character
              </li>
              <li class="flex items-center">
                <svg
                  class="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0"
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
                At least one lowercase character
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
