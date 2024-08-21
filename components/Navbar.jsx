'use client';
import React from 'react';
import { Links } from '../data/Data';
import  Site_Logo from "../public/Site_Logo.png";
import Site_Logo_purple from "../public/Site_Logo_purple.png"
import { useTheme } from 'next-themes';
import Link from 'next/link'
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const {theme} = useTheme();
    const router = usePathname();
  return (
    <div className={`w-[250px] dark:bg-sec-dark min-h-screen bg-white shadow-sm fixed z-0`}>
        <div className=' flex gap-3 items-center text-xl font-extrabold text-[#162638] font-rubik mt-5 ml-5'>
            <img className=" h-10" src={`${theme === 'Light' ? Site_Logo.src : Site_Logo_purple.src}`}/>
            <h1 className='text-primary'>AMCO</h1>
        </div>
        <div className='w-full relative mt-16 font-rubik font-medium'>
            {Links.map((item) => (
                <div key={item.title}>
                    <p className='text-[16px] m-5 uppercase mb-2 border-b-2 border-secondary text-accent dark:border-white dark:text-white dark:text-text-dark font-semibold font-rubik'>{item.title}</p>

                    {item.links.map((Linky) =>(
                        <div key={Linky.name} className={`cursor-pointer tracking-wide h-12 pl-3 text-text hover:text-white text-lg rounded-lg m-8 mt-10 dark:hover:bg-accent hover:bg-primary transition-colors dark:hover:shadow-2xl dark:hover:shadow-accent ${router === Linky.path ? 'bg-accent dark:shadow-2xl dark:bg-accent dark:shadow-accent text-white' : 'bg-secondary dark:bg-dark-accent'} `}>
                            <Link href={Linky.path} className='pt-3 flex justify-start gap-3 items-center text-center center align-middle'>
                                <div className='text-xl'>{Linky.icon}</div>
                                <span className='capitalize '>{Linky.name}</span>
                            </Link>
                        </div>
                    ))}
                </div>
            ))}
        </div>

    </div>
  )
}
// ${router.pathname === Linky.path ? 'text-white dark:bg-primary bg-accent dark:shadow-2xl dark:shadow-accent' : 'bg-secondary '}

export default Navbar