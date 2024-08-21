'use client';
import React from 'react'
import { Input } from '@/components/ui/input'
import { BiSearch } from "react-icons/bi"
import { MdEmail } from "react-icons/md"
import { IoMdNotifications } from "react-icons/io"
import { Avatar, AvatarFallback, AvatarImage} from "@/components/ui/Avatar"
import { Switch } from "@/components/ui/Switch"
import { BsSun, BsMoonFill } from "react-icons/bs"
import { useTheme} from 'next-themes'
import { signOut, useSession } from 'next-auth/react'
import { Button } from '@/components/ui/button'
import { 
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/Popover'


const Searchbar = () => {
  const { data:session } = useSession()
  const { setTheme, theme } = useTheme()
  return (
    <div className={`w-full dark:bg-sec-dark text-text-dark h-16 bg-white rounded-sm flex justify-between font-rubik`} style={{zIndex: 9999}}>
        <div className='relative left-10 top-2'>
            <h1 className='text-xl font-rubik text-text dark:text-white'>Hi, <span className=' capitalize '>{session?.user?.name}</span></h1>
            <h3 className='text-sm text-accent dark:text-gray-500 font-semibold font-lora'>Welcome to your dashboard</h3>
        </div>
        <div className='w-80 h-10 bg-secondary dark:bg-bg-dark text-text rounded-md m-auto flex items-center'>
            <BiSearch className='text-xl ml-5  text-text dark:text-white'/>
            <Input className='w-3/4 text-text dark:text-text-dark dark:bg-bg-dark h-ful rounded-md outline-none border-0 bg-transparent focus-visible:outline-none focus-visible:border-0 focus-visible:shadow-none relative right-0 focus:stroke-none focus-visible:ring-transparent dark:placeholder:text-white z-0' placeholder='Search' type='search'/>
        </div>
        <div className='flex gap-2 relative right-36 items-center text-xl'>
          {theme === "dark" ? <BsMoonFill className='text-white'/> : <BsSun className='text-text'/>}
          <Switch
           onCheckedChange={() => theme === 'light' ? setTheme('dark') : setTheme('light') }
            />
        </div>
        <div className='flex gap-5 relative right-10 items-center group text-3xl text-accent dark:text-text-dark'>
            <MdEmail className='relative right-10'/>
            <IoMdNotifications/>
        </div>
          <div className='flex ml-8 mr-6'>
            <Popover>
              <PopoverTrigger className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className='text-text font-semibold dark:text-white capitalize'>{session?.user?.name}</h4>
                  <p className='text-sm text-accent font-lora font-semibold dark:text-gray-500'>Admin</p>
                </div>
              </PopoverTrigger>
              <PopoverContent className="bg-dark-accent w-[350px] h-[300px] mr-5 border-none shadow-lg">
                <div className=' block space-y-3'>
                  <Avatar className="w-20 h-20 m-auto">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className='text-lg text-white space-y-3'>
                    <div className='flex justify-between w-full'>
                    <h2>Name:</h2> <h2 className='text-gray-300'>{session?.user?.name}</h2>
                    </div>
                    <div className='flex justify-between w-full'>
                      <h2>Email:</h2> <h2 className='text-gray-300'>{session?.user?.email}</h2>
                    </div>
                    <div className='flex justify-between w-full'>
                      <h2>email verified:</h2> <h2></h2>
                    </div>
                    <div className='flex w-full pt-3'>
                      <Button className='m-auto bg-primary hover:bg-accent transition-colors' onClick={() => signOut()}>Sign Out</Button>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>

    </div>
  )
}

export default Searchbar