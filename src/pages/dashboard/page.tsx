import { useQuery } from '@tanstack/react-query';
import backgroundImage from '../../assets/images/wback.webp';
import NavbarDashboard from './components/Navbar';
import SidebarDashboard from './components/Sidebar';
import { AutoLogin } from '../../api/FetchAPI';
import { SetDataUser } from '../../store/setUserData';
import { LuWallet } from "react-icons/lu";
import { CardDash } from './components/CardDash';
import { PiUsersThree } from "react-icons/pi";
import { PiUsersDuotone } from "react-icons/pi";
import GraficComponent from './assets/grafics/Grafic';


export default function Dashboard() {
    const { data } = useQuery({
        queryKey: ['autoLogin'],
        queryFn: AutoLogin,
        staleTime: Infinity,
    })
    const setDataUser = SetDataUser(state => state.setDataUser);
    setDataUser(data)


    if (!data) {
        return (
            <h1>
                Loading
            </h1>
        )
    }

    return (
        <section style={{ position: 'relative' }}
            className='relative flex bg-black min-h-screen w-full'>
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'blur(72px)  brightness(170%)',
                }}
            />
            <section className="ml-80 max-lg:ml-0 max-lg:px-5 z-10 flex-col   mt-5 flex h-max justify-between w-full">
                <NavbarDashboard />
                <div className='text-white mt-5 grid max-xl:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 grid-cols-4 gap-4'>
                    <CardDash priceWin={"$50,000"} textWin={"Today's Overview"}>
                        <LuWallet className='text-white w-10 h-10' />
                    </CardDash>
                    <CardDash priceWin={"120"} textWin={"Today's Users"}>
                        <PiUsersDuotone className='text-white w-10 h-10' />
                    </CardDash>
                    <CardDash priceWin={"3292"} textWin={"Today's Clients"}>
                        <PiUsersThree className='text-white w-10 h-10' />
                    </CardDash>
                    <CardDash priceWin={"$32,312"} textWin={"Today's Month"}>
                        <LuWallet className='text-white w-10 h-10' />
                    </CardDash>
                </div>
                <div className='mt-5'>
                    <GraficComponent data={undefined} />
                </div>
            </section>
            <SidebarDashboard />
        </section>
    )
}