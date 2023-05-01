import React, { useState } from "react";
import { useRouter } from "next/router";
import { useSession, signIn, signOut } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { BsGithub, BsTwitter, BsGoogle } from "react-icons/bs";

const Signin = () => {
  const { data: session, status } = useSession();
  const { push } = useRouter();
  const [email, setEmail] = useState("");

  console.log(session);
  if (status === "loading")
    return (
      <div className="flex flex-col place-content-center justify-center place-items-center w-full h-screen pb-24 overflow-auto text-gray-700 bg-gradient-to-tr from-blue-200 via-indigo-200 to-pink-200">
        <h1>Checking Authentication</h1>
      </div>
    );

  if (session) {
    setTimeout(() => {
      push("/");
    }, 5000);

    return (
      <div className="flex flex-col place-content-center justify-center place-items-center w-full h-screen pb-24 overflow-auto text-gray-700 bg-gradient-to-tr from-blue-200 via-indigo-200 to-pink-200">
        <button type="button" class="bg-indigo-500 rounded-2xl p-2" disabled>
          <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>
          Redirecting to Dashboard...
        </button>
      </div>
    );
  }

  const handleOAuthSignIn = (provider) => () => signIn(provider);

  // const handleSubmit = (e) => {
  // 	e.preventDefault()

  // 	if (!email) return false

  // 	signIn('email', { email, redirect: false })
  // }

  return (
    <div className="flex flex-col place-content-center justify-center place-items-center w-full h-screen pb-24 overflow-auto text-gray-700 bg-gradient-to-tr from-blue-200 via-indigo-200 to-pink-200">
      {/* <form onSubmit={handleSubmit}>
				<label>Email Address</label>
				<input
					value={email}
					type='email'
					onChange={(e) => setEmail(e.target.value)}
				/>

				<button type='submit' w='100%' my={5}>
					Login
				</button>
			</form> */}

      <div>
        <button
          className="bg-white hover:bg-gray-200 border-2 border-gray-300 rounded-md shadow-md p-2 m-2"
          onClick={handleOAuthSignIn("google")}
          textTransform="uppercase"
          w="100%"
        >
          <FcGoogle className="inline-block mr-2 text-4xl" />
          Continue with google
        </button>
      </div>
    </div>
  );
};

export default Signin;
