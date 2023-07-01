"use client";
import Button from '@/components/icon/Button';
import Logo from '@/components/icon/Logo'
import Link from 'next/link'
import React, { useState } from 'react'
import { GrClose } from 'react-icons/gr'
import { GiHamburgerMenu } from 'react-icons/gi'
import SideBar from '@/components/SideBar';


const menu = ['Course', 'About us', 'Teachers', 'Pricing', 'Carrers', 'Blog'];

export default function Header() {
    const [isOpen, setIsopen] = useState(false)

    return (
        <header className='w-full fixed px-3 mt-[71px] z-10'>
            <div className='container p-5 mx-auto xl:px-20 flex justify-around'>
                {/* Logo */}
                <Link href={'/'} className=' text-lg font-bold flex items-center'>
                    <Logo />
                </Link>
                {/* Menu */}
                <ul className='hidden md:flex items-center py-2 gap-[10px]'>
                    {
                        menu.map((el, key) => {
                            return (
                                <li key={key} className='px-[10px] py-1.5 font-light text-sm leading-6'>
                                    <Link href={`/${el.toLowerCase()}`}>{el}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
                {/* Button */}
                <Button type='secondary' size='small' >Get Started</Button>
                {/*Hamburger Button */}

                <div className='flex items-center p-5 text-2xl md:hidden rounded-full cursor-pointer hover:bg-white '>
                    <SideBar open={isOpen} listMenu={menu} />
                </div>

            </div>

        </header>
    )
}
