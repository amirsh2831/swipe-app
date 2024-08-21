'use client'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage} from "@/components/ui/Avatar"
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { Label } from '@/components/ui/label'
import { signOut, useSession } from 'next-auth/react'
import { useState } from 'react'
import { useToast } from "@/components/ui/use-toast"

const page = () => {
    const { toast } = useToast();
    const {data:session} = useSession();
    const [pass, setPass] = useState({
        password: '',
    });

      const deleteAcc = async (e) => {
        e.preventDefault();
        const email = session?.user?.email
        const password = pass.password
        if(email){
            const response = await fetch('../../api/deleteAccount', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email, password})
            }).then((response) => {
                console.log(response.statusText);
                if(response.statusText === "password is wrong"){
                    console.log("toast")
                    toast({
                        title: "Password does not match..",
                        description: "Please try again",
                      })
                }
                else if (response.status === 400){
                    toast({
                        title: "Something went wrong",
                        description: "PLease try again",
                      });
                }
                else if(response.statusText === "Account Deleted") {
                    toast({
                        title: "Account Deleted",
                      });
                      signOut();
                }
            });
        }
      }


  return (
    <div className='w-full mt-4 bg-white dark:bg-sec-dark font-rubik rounded-md block gap-5 pt-5 mb-3'>
        <div className='gap-y-5 pb-4 border-b-2 2 border-secondary pr-2 pl-2 mr-5 ml-5 mb-3'>
            <h1 className='text-xl mb-3 dark:text-white tracking-tight'>Profile</h1>
            <p className="text-sm text-gray-500 tracking-normal">Customize your ptofile from here</p>
        </div>
        <div className='gap-y-5 pb-4 border-b-2 border-secondary pr-2 pl-2 mr-5 ml-5 mb-3'>
            <h1 className='text-xl mb-3 dark:text-white tracking-tight'>Username</h1>
            <p className="text-sm text-gray-500 tracking-normal">The name that is diplayed as your accout name</p>
            <div className='flex justify-between items-center mt-3 w-80'>
                <span>{session?.user?.name}</span>
                <Button variant="outline">Change</Button>
            </div>
                
        </div>
        <div className="gap-y-5 pb-4 border-b-2 border-secondary pr-2 pl-2 mr-5 ml-5 mb-3">
            <h1 className='text-xl mb-3 dark:text-white tracking-tight'>Email</h1>
            <p className="text-sm text-gray-500 tracking-normal">Your Email wich is used on your account</p>
            <p className="text-sm text-gray-500 tracking-normal">This is how we adress you and send you notifications</p>
            <div className='flex justify-between items-center mt-3 w-80'>
                <span>{session?.user?.email}</span>
                <Button variant="outline">Change</Button>
            </div>

        </div>
        <div className="gap-y-5 pb-4 border-b-2 border-secondary pr-2 pl-2 mr-5 ml-5 mb-3">
            <h1 className='text-xl mb-3 dark:text-white tracking-tight'>Passowrd</h1>
            <p className="text-sm text-gray-500 tracking-normal">The password wich is used to secure your account</p>
            <Button variant="outline" className='mt-5'>Change</Button>

        </div>
        <div className='gap-y-5 pb-4 pr-2 pl-2 mr-5 ml-5 mb-3 m-auto'>
            <h2 className='text-xl mb-3 dark:text-white tracking-tight'>Profile Picture</h2>
            <div className='flex gap-5 items-center mb-5'>
            <Avatar className="w-16 h-16">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar className="w-16 h-16">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar className="w-16 h-16">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            </div>
            {/* <Button className='bg-primary dark:hover:shadow-2xl dark:shadow-md shadow-md dark:hover:shadow-primary w-36 dark:bg-primary transition-colors text-white dark:text-white dark:hover:bg-primary'>Change</Button> */}
        </div>

        <div className='w-full h-36 m-auto flex justify-around'>
            {/* <Button className='m-auto h-12 text-xl bg-primary dark:hover:shadow-2xl dark:shadow-md shadow-md dark:hover:shadow-primary w-36 dark:bg-primary transition-colors text-white dark:text-white dark:hover:bg-primary'>Save</Button> */}
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="destructive">Delete Account</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] dark:bg-sec-dark dark:text-white">
                    <DialogHeader>
                        <DialogTitle>Delete Account</DialogTitle>
                        <DialogDescription>
                            Are you sure You want to delete your account? Click save when you're done.
                        </DialogDescription>
                    </DialogHeader>
                        <form onSubmit={deleteAcc}>
                            <div className="grid gap-4 py-4">
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="password" className="text-right">
                                    Password
                                    </Label>
                                    <Input required id="password" placeholder='Password' type="password" className="col-span-3 bg-transparent dark:placeholder:text-white" autoComplete="none" onChange={e => setPass({ ...pass, password: e.target.value })}/>
                                </div>
                            </div>
                            <DialogFooter>
                                <DialogPrimitive.Close>
                                <Button type="submit">Save changes</Button>
                                </DialogPrimitive.Close>
                            </DialogFooter>
                        </form>
                </DialogContent>
            </Dialog>
        </div>

    </div>
  )
  
}

export default page