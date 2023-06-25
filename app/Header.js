import Button from '@/components/icon/Button';
import Logo from '@/components/icon/Logo'
import Link from 'next/link'
import React from 'react'
const menu = ['Course', 'About us', 'Teachers', 'Pricing', 'Carrers', 'Blog'];
export default function Header() {

    return (
        <header className='w-full fixed px-3 mt-[71px] z-10'>
            <div className='container mx-auto flex items-center justify-between'>
                {/* Logo */}
                <Link href={'/'} className=' text-lg font-bold flex items-center'>
                    <Logo />
                </Link>
                {/* Menu */}
                <ul className='flex items-center py-2 gap-[10px]'>
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
            </div>
        </header>
    )
}
