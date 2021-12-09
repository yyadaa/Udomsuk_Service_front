import React, { useState, useEffect } from 'react'
import axios from 'axios'
// eslint-disable-next-line
// import Button from '@mui/material/Button';
const API_Product = 'https://udomsukservice.herokuapp.com/product'

export default function MotorSecondHand() {
    // กำหนดตัวแปรมารับค่าที่ดึงจาก api (ตัวหน้าไว้เรียกใช้ , ตัวหลังไว้ set ค่า) , useState = ค่า default
    const [productData, setProductData] = useState([])

    // ใช้เพื่อเมื่อแสดงหน้านั้นก็ให้ทำงานทันที
    useEffect(() => {
        // ตัวแปร fetch api
        const fetchApiProduct = async () => {
            try {
                // เรียก api ใช้ axios เก็ํบไว้ตัวแปร res
                const res = await axios.get(API_Product)
                // set ตัวแปรของ productData
                setProductData(res.data)
            }
            catch (err) {
                console.error(err)
            }
        };
        // เรียกใช้ตัวแปรด้านบน
        fetchApiProduct()
    }, [])
    const [showModal, setShowModal] = useState(false);
    const [dataForPopup, setDataForPopup] = useState([])
    const keepTemp = []

    // เมื่อกด
    const handleClickPopup = async (name, price, img, des, status) => {
        setShowModal(true)
        // push ข้อมูลเข้าไปใน array ก่อนที่จะเอาเข้า state
        keepTemp.push(name)
        keepTemp.push(price)
        keepTemp.push(img)
        keepTemp.push(des)
        keepTemp.push(status)
        // set ค่า state เป็น array ของ keepTemp
        setDataForPopup(keepTemp)
    }

    //เมื่อปิด
    const handleClosePopup = async () => {
        setShowModal(false)
        // clear ค่า keepTemp เป็น array ว่าง เพื่อที่จะเอาไปใช้ใหม่
        keepTemp.length = 0
        // clear ค่า state
        setDataForPopup([])
    }

    return (
        <>
            {/* ถ้าหากมีข้อมูลในตัวแปร producData ให้ map array ออกมา
                หลักการเดียวกับ if else ( ? = if / : = else )
                ในที่นี้จะเขียได้ว่า
                if (productData.length > 0) {
                    ....
                } else {
                    null
                }
                เป็นต้น
             */}

            {productData.length > 0 ? productData.map((data) => {
                return <>

                    <div className={data.status === true ?
                        "bg-center bg-green h-2/5 rounded-lg px-4 flex justify-center items-center flex-col shadow-md flex-shrink lg:w-max w-full my-4 sm:mx-4"
                        :
                        "bg-center bg-red text-white h-2/5 rounded-lg px-4 flex justify-center items-center flex-col shadow-md flex-shrink lg:w-max w-full my-4 sm:mx-4"}>

                        <img src={data.img} alt={data.products_name} className="rounded-lg h-2/5 w-4/5"></img>
                        <span className="text-xl font-bold my-2">{data.products_name}</span>
                        <span className="text-l">{data.price}</span>
                        {data.status === false ?
                            <span classNmae="text-l ">จองแล้ว</span>
                            :
                            null
                        }
                        <button
                            variant="outlined"
                            className=" text-blue bg-gray active:bg-pink-600 text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            // ส่งค่าแต่ละอันที่ถูก loop array ไปใน parameter
                            onClick={() => handleClickPopup(data.products_name, data.price, data.img, data.description, data.status)}
                        >
                            รายละเอียด
                        </button>
                        {/* ปุ่มว่าถูกจองแล้วหรือยัง */}
                        {showModal ? (() => {
                            if (dataForPopup.length > 0)
                                return <>
                                    <div
                                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                                    >
                                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                            {/*content*/}
                                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                                {/*header*/}
                                                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                                    <h3 className="text-3xl font-semibold">
                                                        {dataForPopup[0]}
                                                    </h3>
                                                    <button
                                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                                        onClick={() => handleClosePopup()}
                                                    >
                                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                                            ×
                                                        </span>
                                                    </button>
                                                </div>
                                                {/*body*/}
                                                <div className="relative p-6 flex-auto">
                                                    <span className="text-l">
                                                        {dataForPopup[3]}
                                                    </span>
                                                </div>
                                                {/*footer*/}
                                                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                                    <button
                                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                        type="button"
                                                        onClick={() => handleClosePopup()}
                                                    >
                                                        Close
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                                </>
                            else
                                return null
                        })()
                            : null
                        }
                    </div>
                </>
            }) :
                // ถ้าไม่มีเป็น null
                null
            }
        </>
    )
}