import React from 'react'
import * as BsIcon from "react-icons/bs";

function Footer() {
    const SocialLink = [
        { name: "อุดมสุข เซอร์วิส", icon: <BsIcon.BsFacebook />, link: "https://www.facebook.com/%E0%B8%AD%E0%B8%B8%E0%B8%94%E0%B8%A1%E0%B8%AA%E0%B8%B8%E0%B8%82-%E0%B9%80%E0%B8%8B%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B8%A7%E0%B8%B4%E0%B8%AA-980645615289689/" },
        { name: "Line : @lbi4812e", icon: <BsIcon.BsLine />, },
        { name: "Tel : 02-0479421 หรือ 081-8166032 และ 087-0667767", icon: <BsIcon.BsTelephone />,  },
    ]
    return (
        <div className="md:flex bottom-0 w-full bg-blue h-100 text-white items-center justify-around flex-row p-4 sm:p-0">
            <div className="flex item-start flex-col">
                <div className=" text-3xl my-3">
                    Udomsuk Service
                </div>
                <div className="mb-3 text-l">
                    ทีมช่างอุดมสุข เซอร์วิส พร้อมบริการ ทางร้านรับซ่อมงานประกันมอเตอร์ไซค์และบิ๊กไบท์ <br />
                    เป็นอู่ในเครือ คุ้มภัย อาคเนย์ เอเชีย เมืองไทย นวกิจ ทิพย ไทยประกัน AXA <br /> มิตชุย มิตรแท้
                    และอีกหลายบริษัท <br />เปิดบริการวันจันทร์ - เสาร์ 8:00 - 18:00 สนใจติดต่อสอบถาม
                </div>
                {SocialLink.map((data) => {
                    return <a href={data.link}>
                        <div className="flex flex-row items-center my-1">
                            {data.icon}
                            <span className="ml-4">{data.name}</span>
                        </div>
                    </a>
                })}
            </div>
        </div>
    )
}

export default Footer
