import { ListItems } from "../assets/LinksUL";
import { Link } from 'react-router-dom'
import { OpenMenuStore } from "../../../store/openMenu";

export default function SidebarDashboard() {

    const IsOpen = OpenMenuStore((state => state.isOpen))

    return (
        <aside className={`${IsOpen ? 'ml-0' : '-ml-96'} lg:ml-5  w-64 max-sm:w-60 transition-all duration-300 z-30 bg-blue-950/25 max-md:bg-gray-950/45 px-3 rounded-2xl absolute overflow-y-auto  h-screen font-semibold flex flex-col items-start`}>
            <h1 className="text-xl  ml-10 text-white pt-10 mb-8 pb-4 font-thin border-b border-gray-400 flex items-center gap-2">
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="reactLogo" className="w-8" />
                ConstruRED
            </h1>
            <div className="flex flex-col gap-2 max-sm:gap-1 w-full z-30">
                {
                    ListItems.map((item, index) => {
                        const IconComponent = item.Icon;
                        return (
                            <Link key={index} to={item.valor} className="flex max-sm:text-sm hover:bg-gray-900/80 duration-300 transition-colors z-10 items-center gap-3  text-white px-8 py-2.5 rounded-xl">
                                <span className="bg-blue-600 rounded-2xl p-2.5"                                >
                                    <IconComponent />
                                </span>
                                <span>
                                    {item.clave}
                                </span>
                            </Link>
                        )
                    })
                }
            </div>
            <h1 className="font-bold text-sm py-5 text-white ml-6">
                ACCOUNT PAGES
            </h1>
            <div className="flex flex-col gap-2 ">

            </div>

        </aside >
    )
}