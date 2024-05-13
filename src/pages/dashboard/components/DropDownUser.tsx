import { Cloud, CreditCard, Github, LifeBuoy, Plus, User, Users, } from "lucide-react"
import { IoSettingsSharp } from "react-icons/io5";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger, } from "../../../components/ui/dropdown-menu"
import { useEffect, useState } from "react";
import { DataUserType } from "../type";
import { Link } from "react-router-dom";


export function DropdownMenuDemo() {
    const [DataUser, setDataUser] = useState<DataUserType>()

    useEffect(() => {
        const DataUser = JSON.parse(localStorage.getItem('DataUser') as string)
        setDataUser(DataUser)
    }, [])

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button className="w-max">
                    <IoSettingsSharp className="text-gray-200 w-5 h-5" />
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-black border-gray-600 text-white">
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <Link to={'/account/'} className="flex w-full justify-start items-center">
                        <User className="mr-2 h-4 w-4" />
                        <span>Profile</span>
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem disabled>
                        <CreditCard className="mr-2 h-4 w-4" />
                        <span>
                            {DataUser?.Rol.Nombre}
                        </span>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuItem>
                    <Github className="mr-2 h-4 w-4" />
                    <span>GitHub</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <LifeBuoy className="mr-2 h-4 w-4" />
                    <span>Support</span>
                </DropdownMenuItem>
                <DropdownMenuItem >
                    <Link to={'https://apiconstrured.onrender.com/'} className="flex w-full justify-start items-center" target="_blank">
                        <Cloud className="mr-2 h-4 w-4" />
                        <span>API</span>
                    </Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
