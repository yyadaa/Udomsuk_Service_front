import React from 'react'
import Navbar from '../components/Navbar'
import Promote from '../components/Carousel'
import Map from '../components/Map'
import * as BsIcon from "react-icons/bs"
import Ensure from '../components/Ensure'
import Footer from '../components/Footer'


function Home() {
    const SocialLink = [
        { name: "อุดมสุข เซอร์วิส", icon: <BsIcon.BsFacebook />, link: "https://www.facebook.com/%E0%B8%AD%E0%B8%B8%E0%B8%94%E0%B8%A1%E0%B8%AA%E0%B8%B8%E0%B8%82-%E0%B9%80%E0%B8%8B%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B8%A7%E0%B8%B4%E0%B8%AA-980645615289689/" },
        { name: "Line : @lbi4812e", icon: <BsIcon.BsLine />, },
        { name: "Tel : 02-0479421 หรือ 081-8166032 และ 087-0667767", icon: <BsIcon.BsTelephone />, },
    ]

    return (
        <>
            <div class="md:flex h-full flex-col bg-cream bg-opacity-50">
                <Navbar />
                <div class="flex w-full flex-warp flex-col md:flex-row justify-center items-center pt-10">
                    <div class="w-4/5 md:w-3/5 flex flex-col justify-center pl-0 md:pl-36 self-center">
                        <Promote />
                        <span class="text-blue text-4xl my-2">Udomsuk Services</span>
                        <div className="text-blue text-xl">
                            ทีมช่างอุดมสุข เซอร์วิส พร้อมบริการ ทางร้านรับซ่อมงานประกันมอเตอร์ไซค์และบิ๊กไบท์ <br />
                            เป็นอู่ในเครือ คุ้มภัย อาคเนย์ เอเชีย เมืองไทย นวกิจ ทิพย ไทยประกัน AXA <br /> มิตชุย มิตรแท้
                            และอีกหลายบริษัท <br />เปิดบริการวันจันทร์ - เสาร์ 8:00 - 18:00 สนใจติดต่อสอบถาม
                        </div>
                        {SocialLink.map((data) => {
                            return <a href={data.link}>
                                <div className="flex md:flex-row items-center my-1 text-blue text-xl">
                                    {data.icon}
                                    <span className="ml-4">{data.name}</span>
                                </div>
                            </a>
                        })}
                    </div>
                    <div class="w-full md:flex justify-center items-center self-center flex">
                        <Map isMarkerShown />
                    </div>
                </div>
                <Ensure/>
            </div>
            <Footer/>
        </>
    )
}

export default Home
