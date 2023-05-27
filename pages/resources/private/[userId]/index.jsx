
import React from 'react';
import {useSession} from 'next-auth/react';
import clientPromise from "@/database/connectDB";
const { ObjectId } = require('mongodb');



export default function PrivateDrive({userDetails}){

    const {data: session} = useSession();

    console.log (userDetails);



    return (
        <div className="w-full pl-[87px] h-screen pb-24 overflow-auto text-gray-700 bg-gradient-to-r from-indigo-300 from-10% via-sky-300 via-30% to-emerald-300 to-90%">
            <div className='w-full bg-gray-900'>
    <div class="px-10 py-3">
        <h1 class="text-xl font-bold text-white">Welcome, {userDetails[0]?.name}</h1>
    </div></div>
        </div>
    )
}



export async function getStaticProps(context) {
    const client = await clientPromise;
    const db = client.db("database");
  
    const searchRoute = context.params.userId;
    // console.log(searchRoute)
  
    const userData = await db
      .collection("users")
      .find({ _id: new ObjectId(searchRoute) })
      .sort({ metacritic: -1 })
      .toArray();
  
    const userDetails = JSON.parse(JSON.stringify(userData));
    // const session = await getSession(context);
  
    // console.log(userDetails[0]?._id + "Cats are cute")
  
    // const clientProject = await clientPromise;
    // const dbProject = clientProject.db("projects-db");
  
    // const searchProjects = await dbProject
    //     .collection("projects")
    //     // .find({ "adminUser.id": `${userDetails[0]?.id}`})
    //     .find({ "contributors": {$elemMatch: {login: `${searchRoute}`}} })
    //     // .find({ "adminUser.id": `642208e7d8a516f45afc5148`})
    //     .sort({ metacritic: -1 })
    //     .limit(20)
    //     .toArray();
  
    return {
      props: { userDetails },
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
      params: { userId: userPath._id.toString() },
    }));
  
    return { paths, fallback: "blocking" };
  }
  