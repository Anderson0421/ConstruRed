import { ListItems } from "../assets/LinksUL";
import { Link } from 'react-router-dom'
import { OpenMenuStore } from "../../../store/openMenu";
import { useEffect, useState } from 'react';
import { DataUserType } from '../type';
import { MdManageAccounts } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import { IoHelp } from "react-icons/io5";


export default function SidebarDashboard() {
    const [dataUser, setDataUser] = useState<DataUserType>()
    const token = localStorage.getItem('DNIToken')
    useEffect(() => {
        const DataUser = JSON.parse(localStorage.getItem('DataUser') as string)
        setDataUser(DataUser)
        if (!token) {
            window.location.href = '/login'
        }
    }, [setDataUser, token])

    const RolUser = dataUser?.Rol.id
    const IsOpen = OpenMenuStore((state => state.isOpen))

    const LogoutHandleBtn = () => {
        localStorage.removeItem('DNIToken')
        localStorage.removeItem('DataUser')
        window.location.href = '/login'
    }


    return (
        <aside className={`${IsOpen ? 'ml-0' : '-ml-96'} lg:ml-0  w-60 max-md:w-52 transition-all duration-300 z-30 bg-blue-950/25 max-lg:bg-gray-950 px-3 rounded-2xl absolute overflow-y-auto  h-screen font-semibold flex flex-col items-start`}>
            <div className="text-xl  ml-10 text-white max-md:ml-4 pt-10 mb-8 pb-4 font-thin border-b border-gray-400 flex items-center gap-2">
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="reactLogo" className="w-8" />
                ConstruRED
            </div>
            <div className="flex flex-col gap-2 max-sm:gap-1 w-full z-30">
                {
                    ListItems.map((item, index) => {
                        if (item.permission === RolUser) {
                            return (
                                <Link to={item.valor} key={index} className="flex items-center gap-2 text-white font-semibold py-3 px-4 rounded-xl hover:bg-blue-950/40">
                                    <item.Icon className="w-6 h-6" />
                                    <span className="text-sm">
                                        {item.clave}
                                    </span>
                                </Link>
                            )
                        }
                    })
                }
            </div>
            <h1 className="font-bold text-sm py-5 text-white ml-3">
                Configuración
            </h1>
            <div className="flex flex-col gap-2 max-sm:gap-1 w-full z-30">
                <Link to={"#"} className="flex items-center gap-2 text-white font-semibold py-3 px-4 rounded-xl hover:bg-blue-950/40">
                    <MdManageAccounts className="w-5 h-5" />
                    <span className="text-sm">
                        Account
                    </span>
                </Link>
                <Link to={"#"} className="flex items-center gap-2 text-white font-semibold py-3 px-4 rounded-xl hover:bg-blue-950/40">
                    <IoHelp className="w-5 h-5" />
                    <span className="text-sm">
                        Help
                    </span>
                </Link>
                <button onClick={LogoutHandleBtn} className="flex items-center bg-gray-900 gap-2 text-white font-semibold py-3 px-4 rounded-md">
                    <CiLogout className="w-5 h-5" />
                    <span className="text-sm">
                        Logout
                    </span>
                </button>
            </div>

        </aside >
    )
}