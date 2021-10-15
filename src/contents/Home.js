import React from 'react'
import Navbar from '../components/Navbar'
import Promote from '../components/Carousel'
import Map from '../components/Map'
import * as BsIcon from "react-icons/bs";




function Home() {
    const SocialLink = [
        { name: "อุดมสุข เซอร์วิส", icon: <BsIcon.BsFacebook />, link: "https://www.facebook.com/%E0%B8%AD%E0%B8%B8%E0%B8%94%E0%B8%A1%E0%B8%AA%E0%B8%B8%E0%B8%82-%E0%B9%80%E0%B8%8B%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B8%A7%E0%B8%B4%E0%B8%AA-980645615289689/" },
        { name: "Line : @lbi4812e", icon: <BsIcon.BsLine />, },
        { name: "Tel : 02-0479421 หรือ 081-8166032 และ 087-0667767", icon: <BsIcon.BsTelephone />, },
    ]
    return (
        <>
            <div class="flex h-full flex-col bg-bluebg">
                <Navbar />
                <div class="flex flex-col sm:flex-row h-full m-5">
                    <div class="w-3/5 flex flex-col justify-center pl-36 ">
                        <Promote />
                        <span class="text-white text-4xl my-2">Udomsuk Services</span>
                        <div className="text-white text-xl">
                            ทีมช่างอุดมสุข เซอร์วิส พร้อมบริการ ทางร้านรับซ่อมงานประกันมอเตอร์ไซค์และบิ๊กไบท์ <br />
                            เป็นอู่ในเครือ คุ้มภัย อาคเนย์ เอเชีย เมืองไทย นวกิจ ทิพย ไทยประกัน AXA <br /> มิตชุย มิตรแท้
                            และอีกหลายบริษัท <br />เปิดบริการวันจันทร์ - เสาร์ 8:00 - 18:00 สนใจติดต่อสอบถาม
                        </div>
                        {SocialLink.map((data) => {
                            return <a href={data.link}>
                                <div className="flex flex-row items-center my-1 text-gray text-xl">
                                    {data.icon}
                                    <span className="ml-4">{data.name}</span>
                                </div>
                            </a>
                        })}
                    </div>
                    <div class="w-2/5 flex justify-center items-center">
                        <Map isMarkerShown />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
