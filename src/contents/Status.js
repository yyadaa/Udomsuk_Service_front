import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { savePDF } from '@progress/kendo-react-pdf';
import Footer from '../components/Footer'
const API_URL = 'https://udomsukservice.herokuapp.com/report'

function Status() {
    const table = React.useRef(null);
    const [report, setReport] = useState([])
    const [track, setTrack] = useState("")

    const exportPDF = () => {
        let element = table.current;
        if (element !== null) {
            savePDF(element, {
                paperSize: 'A4',
                margin: '2cm',
                fileName: `List-${track}`,
            });
        }
    };

    const handleChange = event => {
        setTrack(event.target.value)
    }
    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const res = await axios.get(`${API_URL}/${track}`)
            setReport(res.data)
        }
        catch (err) {
            console.error(err)
        }
    }

    return (
        <>
            <Navbar />
            {/* ถ้ามีข้อมูลในตัวแปร report ให้เป็น h-full ถ้าไม่มี h-screen เพื่อ responsive */}
            <div className={
                report.length > 0 ?
                    "bg-cream bg-opacity-50 flex h-full justify-center items-center w-full py-10 flex-col"
                    :
                    "bg-cream bg-opacity-50 flex h-screen justify-center items-center w-full py-10 flex-col"
            }>
                <icon className=" md:flex justify-center text-8xl md:text-9xl text-green">
                    <BsFillCalendarCheckFill />
                </icon>
                <div className=" md:flex justify-center text-center h-1/12 flex-row">
                    <form onSubmit={handleSubmit}>
                        <lable className=" text-xl md:text-2xl font-bold">
                            Track ID : &nbsp;
                            <input type="text" name="track_id" className=" border-2 rounded-md" onChange={handleChange} required />
                        </lable>
                        <button type="submit" className="bg-yellow-500 m-5 rounded-xl p-2 text-2xl font-bold"> &nbsp;Go!! </button>
                    </form>
                </div>
                <div className="flex justify-center text-center text-lg mt-5">
                    {report.length > 0 ?
                        <>
                            <span className="text-2xl font-bold ">Tracking Number :&nbsp;<span className="text-bluebg">{report[0].track_id}</span></span>
                        </>
                        : <span></span>
                    }
                </div>
                {/* data => () เหมือนกับ data => {return()} */}
                <div className="flex text-center justify-center items-center flex-col" ref={table}>
                    {report.length > 0 ?
                        <>
                            <span className=" flex justify-center text-center text-3xl font logo text-bluebg" rowspan="2">Udomsuk Services</span>
                            <span className=" flex justify-center text-center text-xl" colspan="2">59/83 ซอย อุดมสุข 15 แขวง บางนา เขตบางนา กรุงเทพมหานคร 10260</span>

                            <table class=" justify-center text-center border-2 m-4 p-5 table-auto w-5/6">
                                {/* อย่าลืมใส่หัวกระดาษ */}
                                <tbody className=" p-8 ">

                                    <tr className=" border-2 text-center ">
                                        <td colspan="3" >ชื่อ - นามสกุล</td>
                                        <td colspan="5">{report[0].name} {report[0].surname}</td>
                                    </tr>
                                    <tr className=" border-2 ">

                                        <td colspan="3" >เบอร์โทร</td>
                                        <td colspan="5">{report[0].tel} </td>
                                    </tr>
                                    <tr className=" border-2">

                                        <td colspan="3" >เลขบัตรประชาชน</td>
                                        <td colspan="5">{report[0].card_id}</td>
                                    </tr>
                                    <tr className=" border-2 ">

                                        <td colspan="3">ทะเบียนรถ</td>
                                        <td colspan="5">{report[0].car_no}</td>
                                    </tr>
                                    <tr className=" border-2">

                                        <td colspan="3">ยี่ห้อ</td>
                                        <td colspan="5">{report[0].car_brand}</td>
                                    </tr>
                                    <tr className=" border-2">

                                        <td colspan="3" >เลขประกัน</td>
                                        <td colspan="5">{report[0].claim_id}</td>
                                    </tr>
                                    <tr className=" border-2">

                                        <td colspan="3">รายการซ่อม</td>
                                        <td colspan="5">{report[0].repair.map((data) => (
                                            <>
                                                <span>{data}</span>
                                                <br />
                                            </>
                                        ))}</td>
                                    </tr>
                                    <tr className=" border-2">

                                        <td colspan="3"><br />รายการซ่อม</td>
                                        <td colspan="5">{report[0].change.map((data) => (
                                            <>
                                                <span>{data}</span>
                                                <br />
                                            </>
                                        ))}</td>
                                    </tr>
                                </tbody>
                            </table>

                        </>
                        : <span className="text-xl font-bold">No Tracking ID</span>
                    }
                </div>
                {report.length > 0 ?
                    <div className=" flex text-center justify-center items-center flex-col m-10">
                        <button className=" bg-gray rounded-lg flex justify-center p-5 text-2xl item-center mb-3 border-2" onClick={exportPDF}>
                            Export PDF
                        </button>
                    </div>
                    : null
                }
            </div>
            <Footer />
        </>

    )
}

export default Status
