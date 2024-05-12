import { IoMdHome } from "react-icons/io";
import { MdCampaign } from "react-icons/md";
import { BiSearch as SearchIcon } from "react-icons/bi";
import { Input } from '@nextui-org/react'
import { MdMenuOpen } from "react-icons/md";
import { OpenMenuStore } from "../../../store/openMenu";
import { MdMenu } from "react-icons/md";
import { DropdownMenuDemo } from "./DropDownUser";

export default function NavbarDashboard() {

    const SetIsOpenFN = OpenMenuStore((state => state.setIsOpen))
    const isOpen = OpenMenuStore((state => state.isOpen))


    const HandleOpenMenu = () => {
        SetIsOpenFN()
    }

    return (
        <nav className="flex max-sm:hidden h-max justify-between w-full pr-10">
            <div className={`flex gap-2  ${isOpen ? 'opacity-0 transition-all duration-300' : ''}`}>
                <div className="flex gap-2 text-white  items-center">
                    <IoMdHome className="text-gray-200 w-4 h-4" />
                    <span className="font-semibold text-xs">/</span>
                    <span className="font-thin text-sm">
                        Dashboard
                    </span>
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
                <div className="flex items-center gap-4 z-10">
                    <DropdownMenuDemo />
                </div>
            </div>
        </nav>
    )
}