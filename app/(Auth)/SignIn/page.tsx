'use client'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {IoIosArrowDown} from "react-icons/io"
import { useSession } from 'next-auth/react';
import * as z from "zod"
import {zodResolver} from "@hookform/resolvers/zod"
import { useForm } from 'react-hook-form'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { useToast } from "@/components/ui/use-toast"
import { ToastAction } from "@/components/ui/toast"
import Link from 'next/link';
const formschema = z.object({
  email: z.string().min(2).max(50),
  username: z.string().min(2).max(50),
  password: z.string().min(2).max(50),
  confirmPassword: z.string().min(2).max(50)
})


const SignIn = () => {
  const { toast } = useToast()
  const state = useState();
  const session = useSession()
  const router = useRouter();
  useEffect(() => {
    if (session?.status === 'authenticated') {
       router.push('/Dashboard') 
    }
})


  async function onSubmit (values: z.infer<typeof formschema>) {
    const {email, username, password, confirmPassword} = values
    if(password === confirmPassword){
      const response = await fetch('../../api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, username, password})
      }).then((response) => {
        if (response.statusText=== "User Exists"){
          toast({
            title: "Email is already used",
            description: "Please try Loging in or using a different email",
            action: <ToastAction altText="Login"><Link href="/LogIn">Login</Link></ToastAction>,
          })
        }
        else {
          
          toast({
            title: "Account Created",
            description: "You can Log into the website now..",
            action: <ToastAction altText="Login"><Link href="/LogIn">Login</Link></ToastAction>,
          })
          router.replace("./LogIn");
        }
  
      })
    }
    else {
      toast({
        title: "Password confirmation is wrong..",
        description: "Passwords dont match"
      })
    }
  }
  const form = useForm<z.infer<typeof formschema>>({
    resolver: zodResolver(formschema),
    defaultValues: {
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
  })
  return (
    
    <div className='w-full'>
      <div className='flex justify-between m-5 mr-5'>
      <div className="text-lg font-bold">AMCO.</div>
      < div className='w-16 h-8 border-2 border-gray-400 rounded-3xl text-center flex justify-center align-middle'><p className='center flex gap-1'><IoIosArrowDown className='m-auto'/>EN</p></div>
      </div>
      <div className='relative center text-center justify-center w-full'>
        <div className=' font-sans'>
          <h1 className=' text-5xl mb-3 font-bold'>Welcome!</h1>
          <h3 className='text-md text-gray-500 font-bold'>Let's get started with a new account</h3>
        </div>
        <div className='block relative w-3/4 m-auto text-left'>
          {/* -------------------------------------------------------- */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-3'>
            <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input className="bg-gray-100 border-2 border-gray-300" placeholder='Your Email address' {...field} type='email' autoComplete="none" />
                    </FormControl>
                    {/* <FormDescription>Enter Your Email Address</FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )
              } 
              />
              <FormField
                control={form.control}
                name='username'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input className="bg-gray-100 border-2 border-gray-300" placeholder='ig: ayowattap' {...field} />
                    </FormControl>
                    {/* <FormDescription>This is your public Username</FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )
              } 
              />
              
              <FormField
                control={form.control}
                name='password'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input className="bg-gray-100 border-2 border-gray-300" placeholder='your password' {...field} type='password' />
                    </FormControl>
                    {/* <FormDescription>Enter your password</FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )
              } 
              />
              <FormField
                control={form.control}
                name='confirmPassword'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <Input className="bg-gray-100 border-2 border-gray-300" placeholder='confirm your password' {...field} type='password' />
                    </FormControl>
                    {/* <FormDescription>Re Enter Your Password</FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )
              } 
              />

              <span id='error' className='text-red-800 text-lg'> </span>
              <Button className='w-full rounded-3xl' type='submit'>Sign Up</Button>
            </form>
          </Form>



          {/* -------------------------------------------------------- */}
        </div>
      </div>
    </div>
  )
  
    // Do something with the form values
  
  
}


export default SignIn