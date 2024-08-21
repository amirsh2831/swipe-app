import { BiSolidDashboard } from "react-icons/bi"
import  { MdTouchApp } from "react-icons/md"
import { MdSettings } from "react-icons/md"
import { AiFillProfile }from 'react-icons/ai'

export const Links = [
    {
        title: 'Overview',
        links: [
            {
                name: 'Dashboard',
                icon: <BiSolidDashboard/>,
                path: "/Dashboard"
            },
            {
                name: "Swap",
                icon: <MdTouchApp/>,
                path: "/Swap"
            },
            {
                name: "Settings",
                icon: <MdSettings/>, 
                path: "/Settings"
            },
            {
                name: "Profile",
                icon: <AiFillProfile/>,
                path: "/Profile"
            },
        ],
    },
]