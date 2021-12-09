import React from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


export default function Profile() {
    console.log(localStorage)
    return (
        <>
            <Navbar />
            <div className="bg-cream bg-opacity-50 flex h-screen justify-center items-center w-full ">
                <div className="flex w-4/5 justify-center self-center overflow-auto flex-wrap ">
                    <span className="text-lg md:text-2xl md:flex justify-center h-20 w-full p-5 rounded-md bg-bluebg mx-10 text-white text-center shadow-md ">Profile</span>
                    <div className="mt-10 text-lg md:text-2xl flex flex-col w-full text-center justify-center text-blue">
                        <span>Username : {localStorage.username}</span>
                        <span>Email : {localStorage.email}</span>
                        <span>Firstname : {localStorage.firstname}</span>
                        <span>Surname : {localStorage.surname}</span>
                        <span>Address : {localStorage.address}</span>
                        <span>Phone Number : {localStorage.tel}</span>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}