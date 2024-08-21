import React from 'react'
import { Button } from "@/components/ui/button"
import { getSession, signOut, useSession } from 'next-auth/react';


const Profile = () => {

  const { data: session, status } = useSession()
  return (
    <div className='absolute right-5 top-20 shadow-md w-80 align-middle items-center h-32 bg-secondary z-50 rounded-md'>
      <div>
        <h1>{session.user.name}</h1>
      </div>
        <Button className="flex justify-center m-auto w-16 h-10 bg-gray-300 text-black" onClick={() => {signOut()}} >Sign Out</Button>
    </div>
  )
}
export default Profile