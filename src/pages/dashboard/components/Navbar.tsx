import { IoMdHome } from "react-icons/io";
import { MdCampaign } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import { Input } from '@nextui-org/react';
import { BiSearch as SearchIcon } from "react-icons/bi";
import { MdMenuOpen } from "react-icons/md";
import { OpenMenuStore } from "../../../store/openMenu";
import { MdMenu } from "react-icons/md";
import { LuLogOut } from "react-icons/lu";
import { useMutation } from "@tanstack/react-query";
import { LogOut } from "../../../api/FetchAPI";
import { useNavigate } from "react-router-dom";

export default function NavbarDashboard() {

    const SetIsOpenFN = OpenMenuStore((state => state.setIsOpen))
    const isOpen = OpenMenuStore((state => state.isOpen))

    const navigate = useNavigate()

    const LogoutMutation = useMutation({
        mutationFn: LogOut,
        onSuccess: () => {
            console.log('Logout')
            navigate('/login')
        },
    })



    const HandleOpenMenu = () => {
        SetIsOpenFN()
    }

    return (
        <nav className="ml-80 max-sm:hidden max-lg:ml-10 max-sm:mx-5 max-sm:pr-0 mt-5 flex h-max justify-between w-full pr-10">
            <div className={`flex gap-2 flex-col ${isOpen ? 'opacity-0 transition-all duration-300' : ''}`}>
                <div className="flex gap-2 text-white  items-center">
                    <IoMdHome className="text-gray-200 w-4 h-4" />
                    <span className="font-semibold text-xs">/</span>
                    <span className="font-thin text-sm">
                        Dashboard
                    </span>
                </div>
                <div className="text-white font-semibold mt-1">
                    <h1>
                        Dashboard
                    </h1>
                </div>
            </div>
            <div className="flex gap-5 items-center">
                <Input
                    className={`text-gray-300 z-0 ${isOpen ? 'opacity-20' : ''}`}
                    variant="bordered"
                    placeholder="Type to search..."
                    size="md"
                    startContent={<SearchIcon size={18} />}
                    type="search"
                />
                <button
                    className="z-10 transition-all duration-700 lg:hidden"
                    onClick={() => { HandleOpenMenu() }}
                >
                    {
                        isOpen ?
                            <MdMenu className="text-gray-200 w-5  h-5" />
                            :
                            <MdMenuOpen className="text-gray-200 w-5  h-5" />
                    }
                </button>
                <button>
                    <MdCampaign className="text-gray-200 w-5  h-5" />
                </button>
                <button>
                    <IoSettingsSharp className="text-gray-200 w-5  h-5" />
                </button>
                <button className="text-gray-100 z-10" onClick={()=>LogoutMutation.mutate()}>
                    <LuLogOut className="text-gray-200 w-5  h-5" />
                </button>
            </div>
        </nav>
    )
}