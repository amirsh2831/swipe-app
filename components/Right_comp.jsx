import React from 'react'
import Banner from '../public/Banner.jpg'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import {BsPeopleFill} from "react-icons/bs"
import Link from 'next/link';
const Right_comp = () => {
  return (
    <div className="w-full h-full bg-cover bg-center bg-no-repeat block" style={{backgroundImage: `url("${Banner.src}")` }} >
        <div className=' flex justify-end gap-5 relative right-5 top-3'>
          <Link href='/SignIn'><Button className='bg-transparent hover:bg-transparent'>Sign Up</Button></Link>
          <Link href='/LogIn'><Button className='bg-transparent hover:text-gray-600 hover:bg-white border-2 border-gray-300 rounded-3xl w-24'>Log in</Button></Link>
        </div>
        <div className='relative top-8 left-10 flex gap-2 w-full'>
          <div className='w-14 h-14 rounded-full bg-white center text-center pt-3 text-2xl'>
            <BsPeopleFill className='m-auto center text-black'/>
          </div>
          <div>
            <h2 className='text-lg'>Largest Community</h2>
            <h3 className='text-sm'>Made by amir</h3>
          </div>
        </div>
        <div className='w-3/4 relative min-h-3/4 mt-60 left-4'>
          <h1 className='font-sans text-8xl text-white'>،،</h1>
          <h1 className='text-2xl text-gray-100 font-sans mr-10'>Go anywhere around the database with the blink of an eye!</h1>
        </div>
    </div>
  )
}

export default Right_comp