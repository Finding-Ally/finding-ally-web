import { Modal } from "flowbite";
import { ModalOptions, ModalInterface } from "flowbite";


export default function Portfolio() {
  


  return (
    <div className="w-full min-h-screen rounded-2xl backdrop-blur-md bg-white/50 p-4">
      

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="grid rounded-2xl ">
          <div className="flex bg-gray-800 p-4 rounded-t-2xl text-start justify-center place-content-center place-items-center">
            <img
              src="https://i.pinimg.com/originals/17/67/2d/17672dbb9f37d2e3272297b9d1cdacb5.jpg"
              className="w-16 h-16 mr-4 rounded-full"
              alt=""
            />
            <h3 className="text-lg font-semibold leading-tight flex-1 text-gray-200">
              Major
            </h3>
          </div>
          <p className="bg-white p-4 rounded-b-2xl font-semibold text-center place-items-center">
            Computer Science
          </p>
        </div>

        <div className="grid rounded-2xl ">
          <div className="flex bg-gray-800 p-4 rounded-t-2xl text-start justify-center place-content-center place-items-center">
            <img
              src="https://i.pinimg.com/originals/17/67/2d/17672dbb9f37d2e3272297b9d1cdacb5.jpg"
              className="w-16 h-16 mr-4 rounded-full"
              alt=""
            />
            <h3 className="text-lg font-semibold leading-tight flex-1 text-gray-200">
              Study Interests
            </h3>
          </div>
          <p className="bg-white p-4 rounded-b-2xl font-semibold text-center place-items-center">
            DevOps, Cloud Web Development Data Structures
          </p>
        </div>

        <div className="grid rounded-2xl ">
          <div className="flex bg-gray-800 p-4 rounded-t-2xl text-start justify-center place-content-center place-items-center">
            <img
              src="https://i.pinimg.com/originals/17/67/2d/17672dbb9f37d2e3272297b9d1cdacb5.jpg"
              className="w-16 h-16 mr-4 rounded-full"
              alt=""
            />
            <h3 className="text-lg font-semibold leading-tight flex-1 text-gray-200">
              Availability
            </h3>
          </div>
          <p className="bg-white p-4 rounded-b-2xl font-semibold text-center place-items-center">
            {" "}
            Weekdays: 4pm-8pm Weekends: 10am-2pm
          </p>
        </div>

        {/* <div className="grid rounded-2xl ">
          <div className="flex bg-gray-800 p-4 rounded-t-2xl text-start justify-center place-content-center place-items-center">
            <img
              src="https://i.pinimg.com/originals/17/67/2d/17672dbb9f37d2e3272297b9d1cdacb5.jpg"
              className="w-16 h-16 mr-4 rounded-full"
              alt=""
            />
            <h3 className="text-lg font-semibold leading-tight flex-1 text-gray-200">
              Personal Information
            </h3>
          </div>
          <p className="bg-white p-4 rounded-b-2xl font-semibold text-center place-items-center">
            {" "}
            Age: 22 Female
          </p>
        </div> */}

        <div className="grid rounded-2xl ">
          <div className="flex bg-gray-800 p-4 rounded-t-2xl text-start justify-center place-content-center place-items-center">
            <img
              src="https://i.pinimg.com/originals/17/67/2d/17672dbb9f37d2e3272297b9d1cdacb5.jpg"
              className="w-16 h-16 mr-4 rounded-full"
              alt=""
            />
            <h3 className="text-lg font-semibold leading-tight flex-1 text-gray-200">
              About me
            </h3>
          </div>
          <p className="bg-white p-4 rounded-b-2xl font-semibold text-center place-items-center">
            I am a senior computer science student. I am hardworking and
            efficient in my studies and would love to collaborate with someone
            who shares the same study habits and interests as me.
          </p>
        </div>

        <div className="grid rounded-2xl ">
          <div className="flex bg-gray-800 p-4 rounded-t-2xl text-start justify-center place-content-center place-items-center">
            <img
              src="https://i.pinimg.com/originals/17/67/2d/17672dbb9f37d2e3272297b9d1cdacb5.jpg"
              className="w-16 h-16 mr-4 rounded-full"
              alt=""
            />
            <h3 className="text-lg font-semibold leading-tight flex-1 text-gray-200">
              Goals
            </h3>
          </div>
          <p className="bg-white p-4 rounded-b-2xl font-semibold text-center place-items-center">
            Find a study partner who is also preparing for placement exams, stay
            motivated and focused while practicing data structures and Leetcode
            problems, improve coding skills and prepare for technical
            interviews.
          </p>
        </div>

        <div className="grid rounded-2xl ">
          <div className="flex bg-gray-800 p-4 rounded-t-2xl text-start justify-center place-content-center place-items-center">
            <img
              src="https://i.pinimg.com/originals/17/67/2d/17672dbb9f37d2e3272297b9d1cdacb5.jpg"
              className="w-16 h-16 mr-4 rounded-full"
              alt=""
            />
            <h3 className="text-lg font-semibold leading-tight flex-1 text-gray-200">
              Study Habits
            </h3>
          </div>
          <p className="bg-white p-4 rounded-b-2xl font-semibold text-center place-items-center">
            Likes to study in a quiet environment, prefers studying with a
            partner or group,uses online resources to practice coding problems.
          </p>
        </div>
      </div>
    </div>
  );
}

function converToBase64(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      resolve(fileReader.result);
    };

    fileReader.onerror = (error) => {
      reject(error);
    };
  });
}
