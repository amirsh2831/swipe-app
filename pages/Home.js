import react from 'react'
import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import hero_image from '../public/hero_image.jpg'
import logo_white from '../public/logo-white.png'
import { Button } from '@/components/ui/button'
import { AiOutlineYoutube, AiOutlineMessage } from 'react-icons/ai'
import { HiOutlineMail } from 'react-icons/hi'
import { LiaTelegramPlane } from 'react-icons/lia'
import big_greenie from '../public/big-greenie-2.png'
import left_green from '../public/left_green.png'
import right_green from '../public/right_green.png'
import iPhone from '../public/iPhone.png'
import Products from '../public/Products.png'
import Services from '../public/Services.png'
import Effeciency from '../public/Effeciency.png'
import variety from '../public/variety.png'
import chart from '../public/chart.png'
import Line from '../public/Line.png'
import Link from 'next/link'
export default function Home(){

    return (
        <>
            <main className='overflow-x-hidden'>
                <div className='bg-[#EEE] font-rubik'> 
                    {/* Hero section */}
                    
                    <div className='w-screen min-h-screen bg-cover bg-no-repeat bg-center' 
                     style={{backgroundImage: `url("${hero_image.src}")`}}>
                        {/* top bar */}
                        <div className='w-full flex justify-between pt-5 items-center pr-10 pl-10'>
                            <div className='flex gap-3 items-center'>
                                <div style={{backgroundImage: `url("${logo_white.src}")`}}
                                 className='w-[57px] h-[60px]'>

                                </div>
                                <h1 className='text-white text-3xl font-semibold tracking-tighter-'>AMCO</h1>
                            </div>
                            <div className='flex gap-20'>
                                <h3 className='text-white text-lg font-semibold capitalize tracking-tight'>Contact Us</h3>
                                <h3 className='text-white text-lg font-semibold capitalize tracking-tight'>Services</h3>
                                <h3 className='text-white text-lg font-semibold capitalize tracking-tight'>Creators</h3>
                            </div>
                            <div className='w-[50px] h-[50px] bg-[#2C6637] rounded-full'>
                            <svg className='m-auto relative top-1/4' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                              <path d="M21 10H3M21 18H3M21 6H3M21 14H3" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            </div>

                        </div>
                        {/* hero text */}
                        <div className='flex flex-col justify-center mt-36'>
                            <h1 className='text-8xl text-white text-center font-extrabold tracking-tighter capitalize' >
                            The Next Level Trading<br/>In the easiest Manner
                            </h1>
                        </div>
                        <div className='flex flex-col justify-center mt-32'>
                            <Button className='rounded-3xl shadow-md bg-[#429851] w-56 text-lg font-bold capitalize m-auto'>
                                Join Us
                                <svg className='ml-3' xmlns="http://www.w3.org/2000/svg" width="16" height="8" viewBox="0 0 16 8" fill="none">
                                  <path d="M15.3536 4.35355C15.5488 4.15829 15.5488 3.84171 15.3536 3.64645L12.1716 0.464466C11.9763 0.269204 11.6597 0.269204 11.4645 0.464466C11.2692 0.659728 11.2692 0.976311 11.4645 1.17157L14.2929 4L11.4645 6.82843C11.2692 7.02369 11.2692 7.34027 11.4645 7.53553C11.6597 7.7308 11.9763 7.7308 12.1716 7.53553L15.3536 4.35355ZM0 4.5H15V3.5H0L0 4.5Z" fill="white"/>
                                </svg>
                            </Button>
                        </div>
                        {/* right side icons */}
                        <div className='absolute align-text-bottom right-5 w-[50px] h-[580px] border-l-2 border-gray-700 top-24 '>
                            <div className='relative bottom-2 top-3/4 space-y-4 ml-3'>
                                <AiOutlineYoutube className='text-2xl text-gray-400' />
                                <HiOutlineMail className='text-2xl text-gray-400 ' />
                                <AiOutlineMessage className='text-2xl text-gray-400 ' />
                                <LiaTelegramPlane className='text-2xl text-gray-400 ' />
                            </div>
                        </div>
                    </div>
                    {/* section 2 */}
                    <div className='w-screen p-10 flex'>
                        <div className='w-1/2 pt-36 pl-24'>
                            <h1 className='text-black text-5xl font-semibold tracking-tight capitalize'>
                            Trading has <span className=' bg-clip-text text-transparent bg-gradient-to-r from-[#0DA437] to-[#03B49E]'>never been</span><br/>this easy
                            </h1>
                            <p className='mt-20 text-[#4A4A4ACC] capitalize text-xl font-[400] tracking-tight'>
                            AMCO Provides a new experience in trading. something<br/>never done before in the most excelent manner<br/>possible.
                            </p>

                        </div>
                        <div className='w-1/2'>
                            <div className=' relative left-20 w-full h-[700px] bg-contain bg-no-repeat ' style={{backgroundImage: `url("${big_greenie.src}")`}}>
                                <div style={{zIndex: 10}} className='relative top-48 w-full left-28'>
                                    <h1 className='text-white text-4xl font-semibold capitalize tracking-tighter'>experience the future<br/>with us</h1>
                                    <h3 className='text-white text-lg font-medium tracking-tight capitalize relative top-10'>you wll get to see and enjoy our services<br/>right now</h3>
                                    <div className='flex gap-5 pt-20 w-1/2'>
                                        <Link href='#'>
                                            <Button className='rounded-3xl  shadow-md bg-[#0A1818] w-48 text-lg font-semibold capitalize m-auto'>Get started</Button>
                                        </Link>
                                        <Link href='/LogIn'>
                                            <Button className='rounded-3xl w-48 text-black shadow-md bg-[#FFF] text-lg font-semibold capitalize m-auto'>Log in</Button>
                                        </Link>
                                    </div>

                                </div>

                            </div>
                            
                            
                        </div>

                    </div>
                    {/* Sectiopn 3 */}
                    <div className='w-full h-[2000px] pr-10 pl-10 relative'>
                        <div className='rounded-3xl bg-[#0A1818] h-full'>
                            <div className='w-full flex flex-col justify-center relative'>
                                <h1 className='mt-52 text-white text-center text-6xl tracking-tighter capitalize'>
                                We have changed the world of trading
                                </h1>
                                <h3 className='mt-16 text-[#C5C5C5CC] text-center text-xl font-[400] tracking-wide capitalize'>
                                by combining it with the power of social media we have created something that wil<br/>change trading forever and will help the traders by making thier lives easier
                                </h3>
                                <div className="shadow-xl mt-20 text-center pt-10 pb-10 text-white rounded-2xl bg-gradient-to-tr from-[#FFFFFF00] to-[#FFFFFF3b] backdrop:blur-3xl capitalize w-3/4 m-auto space-y-10">
                                    <h1 className='text-2xl font-medium tracking-tighter'>
                                    tired of all those full screens crowded with complex charts and numbers?
                                    </h1>
                                    <h1 className='text-xl font-medium tracking-wider font-lora'>
                                    you are in the perfect place
                                    </h1>
                                    <h1 className='text-2xl font-bold tracking-tighter mb-10'>
                                    we have simplified trading to a <span className=' underline'>reveloutionary extent</span>
                                    </h1>
                                </div>
                            </div>
                            <div className='w-full relative top-20 grid grid-cols-2 pr-20 pl-20 mt-20'>
                                <div className=' col-span-1 space-y-16'>
                                    <div className='flex'>
                                        <div className='w-5 relative top-3 bg-contain bg-no-repeat bg-center' style={{backgroundImage: `url("${Line.src}")`}}>

                                        </div>
                                        <div className='space-y-5'>
                                            <h1 className='text-white text-4xl capitalize tracking-tighter font-bold'>What is AMCO</h1>
                                            <div className='space-y-8'>
                                                <p className='text-xl font-light text-[#EBEBEBB2] tracking-wide'>AMCO is the new way of trading<br/> 
                                                    a service that gives you need for trading in<br/>a simplified and proper manner
                                                </p>
                                                <p className='text-xl font-light text-[#EBEBEBB2] tracking-wide'>
                                                Using our services you would be able to<br/>trade in the most Productive and fastest way<br/>possible because that is precisely what we<br/>aim at in AMCO 
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=''>
                                        <img className='w-3/4 h-[500px]' src={left_green.src}/>
                                    </div>
                                </div>
                                <div className='col-span-1 space-y-10'>
                                    <div className='relative'>
                                        <img className='relative -right-10 h-[400px]' src={right_green.src}/>
                                    </div>
                                    <div className='relative left-1/4 top-20 space-y-10 '>
                                        <h1 className='text-white text-4xl capitalize tracking-tighter font-bold'>What do we<br/>provide</h1>
                                        <div className='space-y-16 relative'>
                                            <p className='text-xl font-light text-[#EBEBEBB2] tracking-normal'>
                                            We Provide you with all of the information you<br/>need from basic to expert level both with the<br/>finest user experience
                                            </p>
                                            <p className='text-xl font-light text-[#EBEBEBB2] tracking-normal'>
                                            We Provide you with all of the information you<br/>need from basic to expert level both with<br/>the finest user experience
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* section 4 */}
                    <div className='w-full pt-16 pr-32 pl-32'>
                        <div className='grid w-full grid-cols-2'>
                            <div className='col-span-1 space-y-16 mb-36 relative top-14'>
                                <h1 className='font-lora text-3xl font-medium tracking-tight capitalize text-black'>Introducing  
                                    <span className='ml-3 text-transparent bg-gradient-to-r from-[#FF008A] to-[#FF9900] bg-clip-text uppercase'>SWIPE</span>
                                </h1>
                                <p className='text-xl font-medium text-[#2A2A2ACC] tracking-normal leading-relaxed'>
                                SWIPE is our main Product Created here at AMCO in order to<br/>revelutionize trading by simplifying it and also making it user<br/>freindly
                                </p>
                                <p className='text-xl font-medium text-[#2A2A2ACC] tracking-normal leading-relaxed'>
                                With SWIPE you will have the best trading experience by just<br/>swiping with your fingers across your devices or scrolling. We<br/>will provide you all you need to enter trading markets.
                                </p>
                                <Button className='rounded-3xl shadow-md bg-[#2C6637] w-56 text-lg  capitalize m-auto'>see how it works</Button>
                            </div>
                            <div className='w-full h-[700px] relative bottom-20 left-10 col-span-1 bg-cover bg-no-repeat bg-center ' style={{backgroundImage: `url("${iPhone.src}")`}}>

                            </div>

                        </div>
                    </div>
                    {/* section 5 */}
                    <div className='flex justify-center gap-10 w-full mt-24'>
                        <div className='w-[600px] h-[530px] bg-white rounded-md p-8'>
                            <div className='bg-[#D9D9D9] w-full h-3/5 pb-5'><img className='m-auto h-[250px]' src={Products.src}/></div>
                            <div className='w-full h-1/2 space-y-6 mt-5'>
                                <h1 className='text-black text-4xl capitalize tracking-tighter font-semibold'>
                                    Our Products
                                </h1>
                                <p className='text-[#2A2A2ACC] text-lg font-medium tracking-wide capitalize'>
                                get to know our products and what we are contributing<br/>to the online markets
                                </p>
                                <Button className='rounded-3xl shadow-md bg-[#2C6637] w-56 text-lg  capitalize m-auto'>see our products</Button>
                                
                            </div>
                        </div>
                        <div className='w-[600px] h-[530px] bg-white rounded-md p-8'>
                            <div className='bg-[#D9D9D9] w-full h-3/5'><img className='m-auto h-[250px]' src={Services.src}/></div>
                            <div className='w-full h-1/2 space-y-6 mt-5'>
                                <h1 className='text-black text-4xl capitalize tracking-tighter font-semibold'>
                                    Our Services
                                </h1>
                                <p className='text-[#2A2A2ACC] text-lg font-medium tracking-wide capitalize'>
                                get to know our products and what we are contributing<br/>to the online markets
                                </p>
                                <Button className='rounded-3xl shadow-md bg-[#2C6637] w-56 text-lg  capitalize m-auto'>see our services</Button>
                                
                            </div>
                        </div>
                    </div>
                    {/* Section 6 */}
                    <div className='w-full mt-64 flex justify-center gap-10'>
                        <div className='w-[400px] h-[400px] bg-white relative rounded-md shadow-lg'>
                            <div className='w-40 h-40 shadow-lg rounded-full bg-white absolute -top-20 left-[120px] ' style={{zIndex: 999}}>
                                <img className='m-auto relative top-8' src={Effeciency.src} />
                            </div>
                            <div className='relative top-1/3 space-y-10 m-auto ml-16'>
                                <h1 className='text-black text-2xl font-bold tracking-normal'>
                                    Efficiency
                                </h1>
                                <p className='leading-loose text-sm font-medium tracking-wide text-[#676767CC]'>
                                Fast and effecient, It only takes swiping to<br/>find what you want and our algorythim will<br/>priorituze what you want to see
                                </p>

                            </div>
                        </div>
                        <div className='w-[400px] h-[400px] bg-white relative rounded-md shadow-lg'>
                            <div className='w-40 h-40 shadow-lg rounded-full bg-white absolute -top-20 left-[120px] ' style={{zIndex: 999}}>
                                <img className='m-auto relative top-5' src={variety.src} />
                            </div>
                            <div className='w-full relative top-1/3 space-y-10 m-auto ml-16'>
                                <h1 className='text-black text-2xl font-bold tracking-normal'>
                                    Wide Range Of Tools
                                </h1>
                                <p className='leading-loose text-sm font-medium tracking-wide text-[#676767CC]'>
                                We have a vraiety of tools for you from<br/>very basic to the tools only the Pros use.<br/>With swipe you have the easiest user<br/>experince and then with a click you will<br/>have all the  tools at hand
                                </p>
                            </div>
                        </div>
                        <div className='w-[400px] h-[400px] bg-white relative rounded-md shadow-lg'>
                            <div className='w-40 h-40 shadow-lg rounded-full bg-white absolute -top-20 left-[120px] ' style={{zIndex: 999}}>
                                <img className='m-auto relative top-8' src={chart.src} />
                            </div>
                            <div className='relative top-1/3 space-y-10 m-auto ml-16'>
                                <h1 className='text-black text-2xl font-bold tracking-normal'>
                                    Every Thing You Need
                                </h1>
                                <p className='leading-loose text-sm font-medium tracking-wide text-[#676767CC]'>
                                With our service you will have acces to<br/>every thing you need about trading. News,<br/>Prices, High level data, important stuff,<br/>Tecnicals, charts and so on ..... 
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Section 7 */}
                    <div className='pt-16 relative top-36 w-2/3 m-auto h-[450px] bg-[#39964A] rounded-xl mt-24 psace space-y-10' style={{zIndex: 999}}>
                        <h1 className='leading-relaxed text-center m-auto text-white text-4xl capitalize font-semibold tracking-tighter'>
                        join our membership subscription and<br/>unleash the ultimate power of Swipe 
                        </h1>
                        <p className='text-white text-2xl font-semibold capitalize tracking-wider text-center'>get our 3 month plan for only: <span className='text-3xl ml-5'>$99</span></p>
                        <div className='w-full flex justify-center gap-5'>
                            <Button className='text-black rounded-3xl shadow-md bg-white w-36 text-lg  capitalize'>Log In</Button>
                            <Button className='rounded-3xl shadow-md bg-transparent border-black border-2 w-36 text-lg capitalize text-black'>Sign In</Button>
                        </div>
                    </div>
                    <footer className='w-full h-[300px] bg-[#0B1919]'>

                    </footer>
                    
                    
                </div>

            </main>
        </>         

    );
}