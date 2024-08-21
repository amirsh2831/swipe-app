"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { IoIosArrowDown } from "react-icons/io";
import { signIn, useSession } from "next-auth/react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";

const formschema = z.object({
  username: z.string().min(2).max(50),
  password: z.string().min(2).max(50),
});

const Login = () => {
  const { toast } = useToast();
  const state = useState();
  const session = useSession();
  const router = useRouter();
  useEffect(() => {
    if (session?.status === "authenticated") {
      router.replace("/Dashboard");
    }
  });
  const onSubmit = async (values: z.infer<typeof formschema>) => {
    console.log(values);
    const res = await signIn("credentials", {
      email: values.username,
      password: values.password,
      redirect: false,
      callbackUrl: "/Dashboard",
    }).then((res) => {
      if (
        res?.error === "Incorrect password" ||
        res?.error === "No user found"
      ) {
        toast({
          variant: "destructive",
          description: "Try again or sign in...",
          title: "UserName or password is wrong",
        });
      }
    });
  };
  const form = useForm<z.infer<typeof formschema>>({
    resolver: zodResolver(formschema),
    defaultValues: {
      username: "",
      password: "",
    },
  });
  return (
    <div className="w-full">
      <div className="flex justify-between m-5 mr-5">
        <div className="text-lg font-bold">AMCO.</div>
        <div className="w-16 h-8 border-2 border-gray-400 rounded-3xl text-center flex justify-center align-middle">
          <p className="center flex gap-1">
            <IoIosArrowDown className="m-auto" />
            EN
          </p>
        </div>
      </div>
      <div className="relative top-8 center text-center justify-center w-full">
        <div className="mb-10 font-sans">
          <h1 className=" text-6xl mb-3 font-bold">Hi there!</h1>
          <h3 className="text-md text-gray-500 font-bold">
            Wlecome to your own dashboard
          </h3>
        </div>
        <div className="block relative mb-4 gap-4 w-3/4 m-auto text-left">
          {/* -------------------------------------------------------- */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        className="bg-gray-100 border-2 border-gray-300"
                        placeholder="ig: ayowattap"
                        {...field}
                        type="email"
                      />
                    </FormControl>
                    <FormDescription>
                      This is your public Username
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        className="bg-gray-100 border-2 border-gray-300"
                        placeholder="your password"
                        {...field}
                        type="password"
                      />
                    </FormControl>
                    <FormDescription>Enter your password</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <span id="error" className="text-red-800 text-lg">
                {" "}
              </span>
              <Button className="w-full rounded-3xl" type="submit">
                Log in
              </Button>
            </form>
          </Form>

          {/* -------------------------------------------------------- */}
        </div>
      </div>
    </div>
  );

  // Do something with the form values
};

export default Login;
