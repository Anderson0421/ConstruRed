import { IoHome } from "react-icons/io5";
import { GrProjects } from "react-icons/gr";
import { PiUsersThreeLight } from "react-icons/pi";
import { ListItems } from "../assets/LinksUL";
import { Link } from 'react-router-dom'

export default function SidebarDashboard() {
    return (
        <aside className="bg-black/30 w-56 font-semibold flex flex-col pt-5 items-center">
            <h1 className="text-xl text-white pt-3 mb-8 pb-4 font-thin border-b border-gray-400 flex items-center gap-2">
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="reactLogo" className="w-8" />
                ConstruRED
            </h1>
            <div className="flex flex-col gap-2 ">
                {
                    Object.keys(ListItems).map((key) => {
                        return (
                            <Link to={"#"} className="flex items-center gap-3  text-white px-8 py-2 rounded-xl">
                                <span className="bg-blue-600 rounded-2xl p-2.5">
                                    <IoHome className="w-4 h-4" />
                                </span>
                                <span>
                                    {key}
                                </span>
                            </Link>
                        )
                    })
                }
            </div>
            <h1 className="font-bold text-sm py-5 text-white pr-10">
                ACCOUNT PAGES
            </h1>
            <div className="flex flex-col gap-2 ">
                <a href="#" className="flex items-center gap-3  text-white px-8 py-2 rounded-xl">
                    <span className="bg-blue-600 rounded-2xl p-2.5">
                        <PiUsersThreeLight className="w-4 h-4" />
                    </span>
                    <span>
                        Miembros
                    </span>
                </a>
                <a href="#" className="flex items-center gap-3  text-white px-8 py-2 rounded-xl">
                    <span className="bg-blue-600 rounded-2xl p-2.5">
                        <GrProjects className="w-4 h-4" />
                    </span>
                    <span>
                        Proyectos
                    </span>
                </a>
            </div>

        </aside>
    )
}