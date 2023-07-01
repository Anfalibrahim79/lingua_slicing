import React, { useState } from 'react'
import { GrClose } from 'react-icons/gr'
import { GiHamburgerMenu } from 'react-icons/gi'
import Link from 'next/link'

export default function SideBar({ open, listMenu }) {
    const [isOpen, setIsopen] = useState(open)
    return (
        <>
            <div className="drawer">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">

                    <label className='flex md:hidden' htmlFor='my-drawer'>
                        {/* <button className='text-text-body' onClick={() => setIsopen(!isOpen)} >
                            {isOpen ? <GrClose /> : <GiHamburgerMenu />}
                        </button> */}
                        <GiHamburgerMenu />
                    </label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        {
                            listMenu.map((el, key) => {
                                return (
                                    <li key={key}><Link href={`/${el.toLowerCase()}`}>{el}</Link></li>
                                )
                            })
                        }

                    </ul>
                </div>
            </div>
        </>
    )
}
