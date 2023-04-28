import clientPromise from "../../database/connectDB";
// import useSWR from "swr";
import { Key } from "react";
import { useSession } from "next-auth/react";


export default function Profile({ userDetails }){

    // console.log(userDetails)
    return (
        <div className="mx-auto w-full px-40">
            <h1>This is MY Profile</h1>
            <h2>{userDetails[0]?.name}</h2>
            <h2>{userDetails[0]?.email}</h2>
            <img src={userDetails[0]?.image} alt="" />
        </div>
    )
}



export async function getStaticProps(context) {
    const client = await clientPromise;
    const db = client.db("database");
  
    const searchRoute = context.params.userName;
    // console.log(searchRoute)
  
    const userData = await db
      .collection("users")
      .find({ login: searchRoute })
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
      params: { userName: userPath.login },
    }));
  
    return { paths, fallback: 'blocking' };
  }
  

  