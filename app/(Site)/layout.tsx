'use client';
import 'tailwindcss/tailwind.css'
import '../../styles/globals.css'
import Navbar from '../../components/Navbar';
import Searchbar from "../../components/Searchbar";
import { ThemeProvider } from "@/components/theme-provider"
import { NextAuthProvider } from "../providers";
import { useTheme } from "next-themes";
import { Toaster } from "@/components/ui/toaster"

export default function RootLayout({
        children,
    }: {
        children: React.ReactNode;
    }) {
    // const { currentMode, setCurrentMode } = useStateContext();
    const { theme } = useTheme();
    return (
        <>
            <html lang="en" suppressHydrationWarning>
                <head>

                </head>
                <body>
                    <NextAuthProvider>
                        <ThemeProvider attribute="class">
                            <div className={theme === "dark" ? 'dark' : ' '}>
                                <div className={`w-full min-h-screen bg-secondary dark:bg-bg-dark flex gap-2 overflow-x-hidden`} >
                                    <div className="w-80">
                                        <Navbar />
                                    </div>
                                    <div className="w-full m-5 mt-0 block">
                                        <div className='h-16 w-full'>
                                            <Searchbar/>
                                        </div>
                                        {children}
                                    </div>
                                </div>
                            </div>
                            <Toaster/>
                        </ThemeProvider>
                    </NextAuthProvider>
                </body>
            </html>
        </>
    )

}