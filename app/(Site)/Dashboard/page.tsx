'use client';
import react from "react"
import Cards from "../../../components/Cards";
import LineChart from "../../../components/Charts/LineChart";
import Pie from "../../../components/Charts/Pie";
import Dow from "../../../data/Dow.svg";
import SandP from "../../../data/SandP.svg";
import USD from "../../../data/USD.svg";
import sample1 from "../../../data/sample1.svg";
import sample2 from "../../../data/sample2.svg";
import sample3 from "../../../data/sample3.svg";
const Dashboard = () => {
    return(
                 
        <div className={`grid`}>
            <div className="w-full mt-4 h-16 grid gap-10 grid-cols-3">
                <Cards title="S&P" bg={SandP.src} num="5100000" chg="12.5" smp={sample1.src}/>
                <Cards title="Dow and jones" bg={Dow.src} num="20350"chg="20" smp={sample2.src}/>
                <Cards title="US Dolor" bg={USD.src} num="123.5" chg="-3.5" smp={sample3.src}/>
            </div>
            <div className="w-full  mt-10 relative top-28 grid grid-cols-3 gap-10">
                <div className="col-span-2 relative ">
                    <LineChart />
                </div>
                <div className="relative rounded">
                    <Pie />
                </div>
            </div>
        </div>
        
    );
}
export default Dashboard