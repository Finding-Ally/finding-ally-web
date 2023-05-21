import { useState } from 'react';
import {toast } from 'react-toastify';

export default function FeedBack(){
    
    var [userEmail,setEmail]=useState()
    var [Subject,setSubject]=useState()
    var [Message,setMessage]=useState()
    
    const emailUpdate=(event)=>{ // Dealing with name field changes to update our state
        setEmail(event.target.value)
        
    }
    const subjectUpdate=(event)=>{ // Dealing with name field changes to update our state
        
        setSubject(event.target.value)
       
    }
    const messageUpdate=(event)=>{ // Dealing with name field changes to update our state
        
        setMessage(event.target.value)
    }

    const handleSubmit=()=> { // Once the form has been submitted, this function will post to the backend
        document.getElementById("email").value = "";
        document.getElementById("subject").value = "";
        document.getElementById("message").value = "";
        const postURL = '/api/forms/feedback' //Our previously set up route in the backend
        fetch(postURL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ // We should keep the fields consistent for managing this data later
                submittedAt: Date.now(),
                email: userEmail,
                subject: Subject,
                message: Message,
            })
        })
        .then(()=>{
            toast.success('🔮 Feedback submitted', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark"
              });
        })
    }
      
    return (
        <section>
        <div className="py-8 lg:py-16 md:px-4 px-2 mx-auto max-w-screen-md">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white">FeedBack Us</h2>
            <p className="mb-8 lg:mb-8 text-gray-500 dark:text-gray-400 ">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
            <form method='POST' className="md:space-y-8 space-y-4" >
                <div>
                    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                    <input onChange={emailUpdate} type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-navbar dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@gatiki.club" required/>
                </div>
                <div>
                    <label for="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                    <input onChange={subjectUpdate} type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-navbar dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required/>
                </div>
                <div className="sm:col-span-2">
                    <label onChange={messageUpdate} for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                    <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-navbar dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..." required></textarea>
                </div>
            
                <div className="flex items-center justify-center md:justify-start mt-2">

                <button onClick={handleSubmit} className="py-3 px-5 text-sm font-medium text-center text-white rounded bg-blue-600 sm:w-fit hover:bg-blue-700 dark:bg-primary-600 dark:hover:bg-primary-700 ">Send message</button>
                </div>
                </form>
        </div>
        </section>
    )
}