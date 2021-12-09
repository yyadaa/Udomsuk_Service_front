import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom';

export default function Navbar() {

    const nav_item = [
        { name: 'หน้าแรก', path: '/home' },
        { name: 'รถมือสอง', path: '/secondhand' },
        { name: 'สถานะการซ่อม', path: '/status' },
    ];
    const nav_register = [
        { name: 'ลงชื่อเข้าใช้', path: '/login' },
        { name: 'สมัครสมาชิก', path: '/signup', }
    ];
    // สร้างตัวแปรเก็บค่า true false (boolean) เพื่อดูว่ากดปุ่ม nav หรือยัง
    const [click, setClick] = useState(false);
    // ข้างล่างจะเป็นฟังก์ชั่นถ้ากดปุ่ม จะ set ค่าตัวแปรด้านบนเป็นค่าตรงข้าม
    const handleClick = () => setClick(!click);

    return (
        <>
            <div class="w-full bg-blue h-20 text-white flex flex-row space-between items-center">
                {/* logo */}
                <a href="../contents/Home.js"><h3 class=" flex item-center m-5 bold logo text-2xl " >Udomsuk Services</h3></a>
                {/* itemnav */}
                <div className="w-4/5 hidden md:flex flex-row items-center pl-4">
                    {nav_item.map((data) => {
                        return <NavLink exact activeClassName="active" to={data.path} >
                            <div className="mx-4">
                                <span>{data.name}</span>
                            </div>
                        </NavLink>
                    })}
                </div>
                {/* login/register */}
                <div className="hidden md:flex w-4/5 justify-end items-center space-x-4 flex-row pr-3 static">
                {nav_register.map((data) => {
                        return <NavLink exact activeClassName="active" to={data.path} >
                            <div className="mx-4">
                                <span>{data.name}</span>
                            </div>
                        </NavLink>
                    })}
                </div>
                {/* responsive */}
                <div className="md:hidden flex items-center w-3/5 justify-end pr-4">
                    <button
                        onClick={handleClick}
                    >
                        <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
            {/* ใน className ถ้า click = true จะให้แสดงตัว nav bar ของ mobile แต่ถ้าไม่ใช่ ให้ hidden (หลักการเดียวกับ if else (เครื่องหมาย ? กับ :)) */}
            <div className={click ? "w-full bg-blue h-full text-white mobile-menu md:hidden text-col py-3" : "hidden"}>
                {nav_item.map((data) => {
                    return <Link to={data.path} >
                        <span className=" block py-2 px-4 text-l">{data.name}</span>
                    </Link>
                })}
                <div className="border-t-2 border-white pt-2">
                <Link to="/login" >
                    <span className=" block py-2 px-4 text-l">ลงชื่อเข้าใช้</span>
                </Link>
                <Link to="/signup" >
                    <span className=" block py-2 px-4 text-l">สมัครสมาชิก</span>
                </Link>
                </div>
            </div>
        </>
    )
}
