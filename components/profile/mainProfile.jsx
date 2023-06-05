import { Modal } from "flowbite";
import { ModalOptions, ModalInterface } from "flowbite";


export default function MainProfile({userDetails}) {
  


  return (
    <div className="w-full min-h-screen rounded-2xl backdrop-blur-md bg-white/50 p-4">
      

      
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
