import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MotorSecondHand from '../components/MotorSecondHand'


export default function Second() {
    
    return (
        <>
            <Navbar />
            <div className="bg-cream bg-opacity-50 flex h-screen justify-center items-center w-full py-10">
                <div className="flex w-4/5 justify-center self-center overflow-auto flex-wrap h-full">
                    <span className="text-lg md:text-2xl md:flex justify-center h-20 w-full p-5 rounded-md bg-bluebg mt-5 mx-10 text-white item-center text-center shadow-md">รถมอเตอร์ไซต์มือสอง</span>
                    <MotorSecondHand />
                </div>
            </div>
            <Footer />
        </>
    )
}


