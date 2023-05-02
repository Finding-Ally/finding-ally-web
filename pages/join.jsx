import React, { useState } from "react";
import { useRouter } from "next/router";
import { useSession, signIn, signOut } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

import Hero from "../components/hero";
import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
import Newsletter from '@/components/newsletter'
import Header from '@/components/ui/header'
import Footer from '@/components/ui/footer'

const Signin = () => {
  

  // const handleSubmit = (e) => {
  // 	e.preventDefault()

  // 	if (!email) return false

  // 	signIn('email', { email, redirect: false })
  // }
 

  
  return (
    <>
          <div className="flex flex-col place-content-center justify-center place-items-center w-full overflow-x-hidden text-gray-700 bg-gradient-to-tr from-blue-200 via-indigo-200 to-pink-200">
          <Header />
      <Hero />
      <Features />
      <FeaturesBlocks />
      <Testimonials />
      <Newsletter />
      {/* <div>
        <button
          className="bg-white hover:bg-gray-200 border-2 border-gray-300 rounded-md shadow-md p-2 m-2"
          onClick={handleOAuthSignIn("google")}
          textTransform="uppercase"
          w="100%"
        >
          <FcGoogle className="inline-block mr-2 text-4xl" />
          Continue with google
        </button>
      </div> */}
      <Footer />
    </div>
    </>
  );
};

export default Signin;