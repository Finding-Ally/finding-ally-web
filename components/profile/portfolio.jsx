import { Modal } from "flowbite";
import { ModalOptions, ModalInterface } from "flowbite";
import { useEffect } from "react";


export default function Portfolio() {


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


  return (
    <div className="w-full min-h-screen rounded-2xl bg-blue-300 p-4">

<div class="bg-white  rounded-lg shadow-xl border border-black p-8 w-full my-4">
          <button
            data-modal-target="authentication-modal"
            data-modal-toggle="authentication-modal"
            type="button"
            class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
          >
            <span class="relative px-5 py-2.5 transition-all duration-75  bg-green-400 font-bold rounded-md group-hover:bg-opacity-0">
              Add Portfolio
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
                    Let&apos;s create your Portfolio
                  </h3>
                  <form class="space-y-6" action="#">
                    <div>
                    <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Major</label>
                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <option selected>Choose one field</option>
                      <option value="US">Computer Science</option>
                      <option value="CA">IIT-JEE</option>
                      <option value="FR">GATE</option>
                      <option value="DE">UPSC-MPSC</option>
                    </select>
                  </div>

                  <div>
                  <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Study Interests</label>
                  <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="add topics here" required/>
              </div>
                    
              <div>
                  <label for="numberinput" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Age</label>
                  <input type="number" id="numberinput" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="add topics here" required/>
              </div>

                    {/* <div>
                      <label
                        for="password"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        What is your availability?
                      </label>
                      <div class="flex items-center mb-4">
                          <input checked id="default-radio-2" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
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
                      
                    </div> */}

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
                          value=""
                          name="bordered-radio"
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
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
                          name="bordered-radio"
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
                    <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">About Me</label>
                    <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
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
                          value=""
                          name="bordered-radio"
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
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
                          value=""
                          name="bordered-radio"
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
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
                          value=""
                          name="bordered-radio"
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
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
                      type="submit"
                      class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Create My Portfolio
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


      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">



      <div className="grid rounded-2xl ">
            <div className="flex bg-black p-4 rounded-t-2xl text-start justify-center place-content-center place-items-center">
            <img src="https://i.pinimg.com/originals/17/67/2d/17672dbb9f37d2e3272297b9d1cdacb5.jpg" className="w-16 h-16 mr-4 rounded-full" alt="" />
            <h3 className="text-lg font-semibold leading-tight flex-1 text-gray-200">Major</h3>
            </div>
            <p className="bg-white p-4 rounded-b-2xl font-semibold text-center place-items-center">Computer Science</p>
          </div>



          <div className="grid rounded-2xl ">
            <div className="flex bg-black p-4 rounded-t-2xl text-start justify-center place-content-center place-items-center">
            <img src="https://i.pinimg.com/originals/17/67/2d/17672dbb9f37d2e3272297b9d1cdacb5.jpg" className="w-16 h-16 mr-4 rounded-full" alt="" />
            <h3 className="text-lg font-semibold leading-tight flex-1 text-gray-200">Study 
Interests</h3>
            </div>
            <p className="bg-white p-4 rounded-b-2xl font-semibold text-center place-items-center">DevOps, Cloud
Web Development
Data Structures</p>
          </div>


          


          <div className="grid rounded-2xl ">
            <div className="flex bg-black p-4 rounded-t-2xl text-start justify-center place-content-center place-items-center">
            <img src="https://i.pinimg.com/originals/17/67/2d/17672dbb9f37d2e3272297b9d1cdacb5.jpg" className="w-16 h-16 mr-4 rounded-full" alt="" />
            <h3 className="text-lg font-semibold leading-tight flex-1 text-gray-200">Availability</h3>
            </div>
            <p className="bg-white p-4 rounded-b-2xl font-semibold text-center place-items-center"> Weekdays: 4pm-8pm 
 Weekends: 10am-2pm</p>
          </div>


          <div className="grid rounded-2xl ">
            <div className="flex bg-black p-4 rounded-t-2xl text-start justify-center place-content-center place-items-center">
            <img src="https://i.pinimg.com/originals/17/67/2d/17672dbb9f37d2e3272297b9d1cdacb5.jpg" className="w-16 h-16 mr-4 rounded-full" alt="" />
            <h3 className="text-lg font-semibold leading-tight flex-1 text-gray-200">Personal Information</h3>
            </div>
            <p className="bg-white p-4 rounded-b-2xl font-semibold text-center place-items-center"> Age: 22
 Female</p>
          </div>

          <div className="grid rounded-2xl ">
            <div className="flex bg-black p-4 rounded-t-2xl text-start justify-center place-content-center place-items-center">
            <img src="https://i.pinimg.com/originals/17/67/2d/17672dbb9f37d2e3272297b9d1cdacb5.jpg" className="w-16 h-16 mr-4 rounded-full" alt="" />
            <h3 className="text-lg font-semibold leading-tight flex-1 text-gray-200">About me</h3>
            </div>
            <p className="bg-white p-4 rounded-b-2xl font-semibold text-center place-items-center">I am a senior computer science student. I am hardworking and efficient in my studies and would love to collaborate with someone who shares the same study habits and interests as me.</p>
          </div>

          <div className="grid rounded-2xl ">
            <div className="flex bg-black p-4 rounded-t-2xl text-start justify-center place-content-center place-items-center">
            <img src="https://i.pinimg.com/originals/17/67/2d/17672dbb9f37d2e3272297b9d1cdacb5.jpg" className="w-16 h-16 mr-4 rounded-full" alt="" />
            <h3 className="text-lg font-semibold leading-tight flex-1 text-gray-200">Goals</h3>
            </div>
            <p className="bg-white p-4 rounded-b-2xl font-semibold text-center place-items-center">Find a study partner who is 
also preparing for placement 
exams, stay motivated 
and focused while practicing
 data structures and Leetcode
 problems, improve coding 
skills and prepare for 
technical interviews.</p>
          </div>


          <div className="grid rounded-2xl ">
            <div className="flex bg-black p-4 rounded-t-2xl text-start justify-center place-content-center place-items-center">
            <img src="https://i.pinimg.com/originals/17/67/2d/17672dbb9f37d2e3272297b9d1cdacb5.jpg" className="w-16 h-16 mr-4 rounded-full" alt="" />
            <h3 className="text-lg font-semibold leading-tight flex-1 text-gray-200">Study Habits</h3>
            </div>
            <p className="bg-white p-4 rounded-b-2xl font-semibold text-center place-items-center">Likes to study in a quiet environment, prefers studying with a partner or group,uses online resources to practice coding problems.</p>
          </div>

      </div>
      
    </div>
  );
}
