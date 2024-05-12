import { LuWallet } from "react-icons/lu";
import { CardDash } from './components/CardDash';
import { PiUsersThree } from "react-icons/pi";
import { PiUsersDuotone } from "react-icons/pi";
import TemplateDashboard from '../../layouts/TemplateDashboard';

export default function Dashboard() {
    return (
        <TemplateDashboard>
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
        </TemplateDashboard>
    )
}