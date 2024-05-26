import { LuWallet } from "react-icons/lu";
import { CardDash } from './components/CardDash';
import { PiUsersThree, PiUsersDuotone } from "react-icons/pi";
import TemplateDashboard from '../../layouts/TemplateDashboard';
import { useEffect } from "react";
import { ListItems } from "./assets/LinksUL";
import { Bar, Line } from 'react-chartjs-2';
import 'chart.js/auto';

export default function Dashboard() {

    useEffect(() => {
        const User_Data = localStorage.getItem('DataUser')
        const ROL_USER = JSON.parse(User_Data as string).Rol.id
        const item = ListItems.find(item => item.permission === ROL_USER)
        if (ROL_USER !== 1) {
            window.location.href = item?.valor as string
        }
    }, [])

    const barData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
            {
                label: 'Monthly Sales',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    const lineData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
            {
                label: 'User Growth',
                data: [65, 59, 80, 81, 56, 55],
                fill: false,
                backgroundColor: 'rgba(153, 102, 255, 0.6)',
                borderColor: 'rgba(153, 102, 255, 1)',
            },
        ],
    };

    return (
        <TemplateDashboard>
            <section className="pr-10 overflow-y-auto h-screen pb-32">
                <div className='text-white mt-5 grid max-xl:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 grid-cols-4 gap-4'>
                    <CardDash priceWin={"$50,000"} textWin={"Today's Overview"}>
                        <LuWallet className='text-white w-8 h-8' />
                    </CardDash>
                    <CardDash priceWin={"120"} textWin={"Today's Users"}>
                        <PiUsersDuotone className='text-white w-8 h-8' />
                    </CardDash>
                    <CardDash priceWin={"3292"} textWin={"Today's Clients"}>
                        <PiUsersThree className='text-white w-8 h-8' />
                    </CardDash>
                    <CardDash priceWin={"$32,312"} textWin={"This Month"}>
                        <LuWallet className='text-white w-8 h-8' />
                    </CardDash>
                </div>
                <div className='mt-10'>
                    <h2 className="text-white text-2xl mb-4">Analytics</h2>
                    <div className='grid max-xl:grid-cols-1 grid-cols-2 gap-4'>
                        <div className='bg-gray-800 p-4 rounded-lg'>
                            <h3 className="text-white text-lg mb-2">Monthly Sales</h3>
                            <Bar data={barData} />
                        </div>
                        <div className='bg-gray-800 p-4 rounded-lg'>
                            <h3 className="text-white text-lg mb-2">User Growth</h3>
                            <Line data={lineData} />
                        </div>
                    </div>
                </div>
            </section>
        </TemplateDashboard>
    )
}
