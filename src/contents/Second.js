// modules import
import React from 'react'
// components import
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MotorSecondHand from '../components/MotorSecondHand'


export default function Second() {
    
    return (
        <>
            <Navbar />
            <div className="bg-cream bg-opacity-50 flex h-screen justify-center items-center w-full py-10">
                <div className="flex w-4/5 justify-center self-center overflow-auto flex-wrap h-full">
                    <MotorSecondHand />
                </div>
            </div>
            <Footer />
        </>
    )
}


