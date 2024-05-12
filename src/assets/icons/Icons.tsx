import { IoHome } from 'react-icons/io5';
import { GrProjects } from "react-icons/gr";
import { PiUsersThreeLight } from "react-icons/pi";
import { GoTasklist } from "react-icons/go";
import { BsTicketPerforated } from "react-icons/bs";
import { TbReport } from "react-icons/tb";



export function IconHome() {
    return <IoHome className="w-4 h-4" />
}

export function IconProjects() {
    return <GrProjects className="w-4 h-4" />
}

export function IconMembers() {
    return <PiUsersThreeLight className="w-4 h-4" />
}

export function IconTasks() {
    return <GoTasklist className="w-4 h-4" />
}

export function IconTickets() {
    return <BsTicketPerforated className="w-4 h-4" />
}

export function IconReports() {
    return <TbReport className="w-4 h-4" />
}