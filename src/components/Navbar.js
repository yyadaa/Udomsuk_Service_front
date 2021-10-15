import React from 'react'
import { NavLink } from 'react-router-dom';

function Navbar() {

    const nav_item = [
        { name: 'หน้าแรก', path: '/home' },
        { name: 'ประกันในเครือ', path: '/ensurance' },
        { name: 'รถมือสอง', path: '/secondhand' },
        { name: 'สถานะการซ่อม', path: '/status' },
    ];

    return (
        <>
            <div class="w-full bg-blue h-20 text-white flex flex-row space-around items-center">
                {/* logo */}
                <a href="../contents/Home.js"><h3 class="m-5 bold logo text-2xl" >Udomsuk Services</h3></a>
                {/* itemnav */}
                {nav_item.map((data) => {
                    return <NavLink exact activeClassName="active" to={data.path} >
                        <div className="mx-4">
                            <span>{data.name}</span>
                        </div>
                    </NavLink>
                })}
                {/* login/register */}
            </div>
        </>
    )
}

export default Navbar