import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import { BsFillCalendarCheckFill } from "react-icons/bs";
const API_URL = 'https://udomsukservice.herokuapp.com/report'

function Status() {
    const [report, setReport] = useState([])
    const [track, setTrack] = useState("")

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
    // เปิดปุ๊ปทำงานเลย//
    useEffect(() => {
    }, [])

    return (

        <>
            <Navbar />
            <div className="bg-white-100 h-screen">
                <icon className=" flex justify-center m-6 text-9xl text-green-800">
                    <BsFillCalendarCheckFill />
                </icon>
                <div className=" flex justify-center text-center h-16 ">
                    <form onSubmit={handleSubmit}>
                        <lable className=" text-2xl">
                            Track ID : &nbsp;
                            <input type="text" name="track_id" className=" border-2 rounded-md" onChange={handleChange} required />
                        </lable>
                        <button type="submit" className=" bg-yellow-500 rounded-l p-2 text-2xl rounded-sm"> &nbsp;Go!! </button>
                    </form>
                </div>
                <div className="flex justify-center text-center text-lg">
                    {report.length > 0 ?
                        <>
                            <span>Tracking Number :&nbsp;</span>{report[0].track_id}
                        </>
                        : <span></span>
                    }
                </div>
                {/* data => () เหมือนกับ data => {return()} */}
                <div className=" flex text-center justify-center items-center">
                    {report.length > 0 ?
                        <>

                            <table striped bordered hover className=" justify-center text-center border-2 m-4">
                                <tbody>

                                    <tr className=" border-2">
                                        <td class="tg-c3ow">ชื่อ - นามสกุล</td>
                                        <td class="tg-c3ow" colspan="3" >{report[0].name} {report[0].surname}</td>
                                    </tr>
                                    <tr>
                                        <td class="tg-c3ow">เบอร์โทร</td>
                                        <td class="tg-c3ow" colspan="3">{report[0].tel} </td>
                                    </tr>
                                    <tr className=" border-2">
                                        <td class="tg-c3ow">เลขบัตรประชาชน</td>
                                        <td class="tg-c3ow" colspan="3">{report[0].card_id}</td>
                                    </tr>
                                    <tr>
                                        <td class="tg-c3ow">ทะเบียนรถ</td>
                                        <td class="tg-c3ow" colspan="3">{report[0].car_no}</td>
                                    </tr>
                                    <tr className=" border-2">
                                        <td class="tg-c3ow">ยี่ห้อ</td>
                                        <td class="tg-c3ow" colspan="3">{report[0].car_brand}</td>
                                    </tr>
                                    <tr>
                                        <td class="tg-c3ow">เลขประกัน</td>
                                        <td class="tg-c3ow" colspan="3">{report[0].claim_id}</td>
                                    </tr>
                                    <tr className=" border-2">
                                        <td class="tg-c3ow">รายการซ่อม</td>
                                        <td class="tg-c3ow" colspan="3">{report[0].repair.map((data) => (
                                            <>
                                                <span>{data}</span>
                                                <br />
                                            </>
                                        ))}</td>
                                    </tr>
                                    <tr>
                                        <td class="tg-c3ow"><br />รายการซ่อม</td>
                                        <td class="tg-c3ow" colspan="3">{report[0].change.map((data) => (
                                            <>
                                                <span>{data}</span>
                                                <br />
                                            </>
                                        ))}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </>
                        : <span>No Tracking ID</span>
                    }
                </div>
            </div>
        </>

    )
}

export default Status