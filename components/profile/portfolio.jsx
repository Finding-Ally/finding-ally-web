import { Modal } from "flowbite";
import { ModalOptions, ModalInterface } from "flowbite";


export default function Portfolio({userDetails}) {
  


  return (
    <div className="w-full rounded-2xl p-4">

      {
        !userDetails[0]?.major && !userDetails[0]?.studyInterests && !userDetails[0]?.availibility && !userDetails[0]?.about && !userDetails[0]?.goals && !userDetails[0]?.studyHabits &&
        (
          <div className="grid rounded-2xl ">
          <div className="flex bg-gray-800 px-4 py-2 rounded-t-2xl text-start justify-center place-content-center place-items-center">
            <img
              src="https://i.pinimg.com/originals/17/67/2d/17672dbb9f37d2e3272297b9d1cdacb5.jpg"
              className="w-12 h-12 mr-4 rounded-full"
              alt=""
            />
            <h3 className="text-lg font-semibold leading-tight flex-1 text-gray-200">
              Create your Portfolio
            </h3>
          </div>
          <p className="bg-white p-4 rounded-b-2xl font-semibold text-center place-items-center">
          Portfolio not found
          </p>
        </div>
        )
         
      }
      

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">

        {
          userDetails[0]?.major && (
<div className="grid rounded-2xl ">
          <div className="flex bg-gray-800 px-4 py-2 rounded-t-2xl text-start justify-center place-content-center place-items-center">
            <img
              src="https://i.pinimg.com/originals/17/67/2d/17672dbb9f37d2e3272297b9d1cdacb5.jpg"
              className="w-12 h-12 mr-4 rounded-full"
              alt=""
            />
            <h3 className="text-lg font-semibold leading-tight flex-1 text-gray-200">
              Major
            </h3>
          </div>
          <p className="bg-white p-4 rounded-b-2xl font-semibold text-center place-items-center">
            {userDetails[0]?.major}
          </p>
        </div>
          )
        }
        

        {
          userDetails[0]?.studyInterests && (
            <div className="grid rounded-2xl ">
          <div className="flex bg-gray-800 px-4 py-2 rounded-t-2xl text-start justify-center place-content-center place-items-center">
            <img
              src="https://i.pinimg.com/originals/17/67/2d/17672dbb9f37d2e3272297b9d1cdacb5.jpg"
              className="w-12 h-12 mr-4 rounded-full"
              alt=""
            />
            <h3 className="text-lg font-semibold leading-tight flex-1 text-gray-200">
              Study Interests
            </h3>
          </div>
          <p className="bg-white p-4 rounded-b-2xl font-semibold text-center place-items-center">
            DevOps, Cloud Web Development Data Structures
          </p>
        </div>)
        }

        
        {
          userDetails[0]?.availibility.length>0 && (
            <div className="grid rounded-2xl ">
          <div className="flex bg-gray-800 px-4 py-2 rounded-t-2xl text-start justify-center place-content-center place-items-center">
            <img
              src="https://i.pinimg.com/originals/17/67/2d/17672dbb9f37d2e3272297b9d1cdacb5.jpg"
              className="w-12 h-12 mr-4 rounded-full"
              alt=""
            />
            <h3 className="text-lg font-semibold leading-tight flex-1 text-gray-200">
              Availability
            </h3>
          </div>
          <p className="bg-white p-4 rounded-b-2xl font-semibold text-center place-items-center">
          {userDetails[0]?.availibility}
          </p>
        </div>
          )
        }
        

{
  userDetails[0]?.age && (
    <div className="grid rounded-2xl ">
          <div className="flex bg-gray-800 px-4 py-2 rounded-t-2xl text-start justify-center place-content-center place-items-center">
            <img
              src="https://i.pinimg.com/originals/17/67/2d/17672dbb9f37d2e3272297b9d1cdacb5.jpg"
              className="w-12 h-12 mr-4 rounded-full"
              alt=""
            />
            <h3 className="text-lg font-semibold leading-tight flex-1 text-gray-200">
              Personal Information
            </h3>
          </div>
          <p className="bg-white p-4 rounded-b-2xl font-semibold text-center place-items-center">
            {" "}
            Age: {userDetails[0]?.age} {userDetails[0]?.gender || "Male"}
          </p>
        </div>
  )
}
        

{
  userDetails[0]?.about && (
    <div className="grid rounded-2xl ">
          <div className="flex bg-gray-800 px-4 py-2 rounded-t-2xl text-start justify-center place-content-center place-items-center">
            <img
              src="https://i.pinimg.com/originals/17/67/2d/17672dbb9f37d2e3272297b9d1cdacb5.jpg"
              className="w-12 h-12 mr-4 rounded-full"
              alt=""
            />
            <h3 className="text-lg font-semibold leading-tight flex-1 text-gray-200">
              About me
            </h3>
          </div>
          <p className="bg-white p-4 rounded-b-2xl font-semibold text-center place-items-center">
            {userDetails[0]?.about}
          </p>
        </div>
  )
}
        

{ userDetails[0]?.goals && (
        <div className="grid rounded-2xl ">
          <div className="flex bg-gray-800 px-4 py-2 rounded-t-2xl text-start justify-center place-content-center place-items-center">
            <img
              src="https://i.pinimg.com/originals/17/67/2d/17672dbb9f37d2e3272297b9d1cdacb5.jpg"
              className="w-12 h-12 mr-4 rounded-full"
              alt=""
            />
            <h3 className="text-lg font-semibold leading-tight flex-1 text-gray-200">
              Goals
            </h3>
          </div>
          <p className="bg-white p-4 rounded-b-2xl font-semibold text-center place-items-center">
          {userDetails[0]?.goals}

          </p>
        </div>
)
}

{
  userDetails[0]?.studyHabits && (
    <div className="grid rounded-2xl ">
          <div className="flex bg-gray-800 px-4 py-2 rounded-t-2xl text-start justify-center place-content-center place-items-center">
            <img
              src="https://i.pinimg.com/originals/17/67/2d/17672dbb9f37d2e3272297b9d1cdacb5.jpg"
              className="w-12 h-12 mr-4 rounded-full"
              alt=""
            />
            <h3 className="text-lg font-semibold leading-tight flex-1 text-gray-200">
              Study Habits
            </h3>
          </div>
          <p className="bg-white p-4 rounded-b-2xl font-semibold text-center place-items-center">
          {userDetails[0]?.studyHabits}
          </p>
        </div>
  )
}
        
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
