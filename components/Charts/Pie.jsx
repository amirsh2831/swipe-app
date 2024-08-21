import React from 'react'
import Chart from 'chart.js';
import { useEffect } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';





const Pie = () => {
  useEffect(() => {
    
    const data = [
      { label: 'Expenses', Amount: 10 },
      { label: 'Revenue', Amount: 20 },
      { label: 'Income', Amount: 15 },
    ];
    var ctx  = document.getElementById('Pie_chart').getContext('2d');
    var myChart = new Chart(
        ctx,
        {
            type: 'doughnut',
            data: {
                labels: data.map(row => row.label),
                datasets: [
                    {
                        label: 'Prices by day',
                        data: data.map(row => row.Amount),
                        backgroundColor: [
                            'rgb(255, 99, 132)',
                            '#211cb3',
                            '#be25c1'
                          ],
                        radius: 1000,
                        borderWidth: 0,
                    }
                ]
            },
            options: {
              legend: {
                position: "bottom",
                margin: 5,
                // display: false,
                labels: {
                  boxWidth: 10,
    
                }
              }
            }
        }
    );
  })
  return (
    <div className={`w-full h-full font-rubik relative bg-white dark:bg-sec-dark dark:text-text-dark`}>
      <div className='w-full flex justify-between items-center p-5 dark:text-white'>
        <h1 className='text-xl font-[500] antialiased'>Sales Report</h1>
        <div className=' z-100'>
          <Select className="border-none">
            <SelectTrigger className="w-[100px] border-none shadow-none">
              <SelectValue placeholder="Month" />
            </SelectTrigger>
            <SelectContent className='bg-white dark:bg-primary'>
              <SelectItem value="light">Month</SelectItem>
              <SelectItem value="dark">Day</SelectItem>
              <SelectItem value="system">Year</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className='relative w-[500]'>
        <canvas id="Pie_chart" className='w-full h-3/4 mt-5'>

        </canvas>
      </div>
      <div className='mt-10 w-full flex'>
        <Button className='m-auto justify-self-center w-44 h-12 bg-primary dark:bg-primary dark:text-text-dark dark:hover:bg-accent dark:hover:shadow-2xl dark:hover:shadow-accent hover:bg-accent tracking-wide text-white transition-all duration-200 hover:-translate-y-0.5 focus-visible:border-none relative focus-visible:outline-none text-[16px] leading-tight'>Deposit Now</Button>
      </div>
    </div>
  )
}

export default Pie