import React from 'react'
import Gold from '/data/Gold.png'
const page = () => {
  return (
    <div className='w-full pt-5 text-white'>
        <div className='lg:w-4/5 lg:h-[600px] bg-white m-auto grid grid-cols-2 gap-10'>
            <div className='col-span-1 h-full bg-green-700 pr-10 pl-10'>
                <div className='w-full h-full bg-gradient-to-tr from-[#FF6B00] to-[#FFC700] rounded-2xl p-5'>
                  <div className='flex w-full justify-between items-center'>
                    <div className=''>
                      <div className='flex items-center gap-3'>
                        <img src={Gold.src}/> 
                        <h1 className='uppercase text-4xl font-bold'>GOLD</h1>
                      </div>
                      <h1 className='text-4xl font-bold uppercase'>1954.88 $</h1>
                    </div>
                    <div className='bg-[#EC683E] w-32 flex items-center rounded-3xl gap-6 space-y-5'>
                      <div>
                        <h1 className='uppercase text-lg font-semibold'>chg %</h1>
                        <p className='text-red-600'>0.8</p>
                      </div>
                      <div>
                        <h1 className='uppercase text-lg font-semibold'>chg $</h1>
                        <p className='text-red-600'>8.0</p>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            <div className='col-span-1 h-full bg-red-700'>
                s
            </div>
        </div>
    </div>
  )
}

export default page