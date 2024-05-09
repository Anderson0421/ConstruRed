import backgroundImage from '../../assets/images/wback.webp';
import NavbarDashboard from './components/Navbar';
import SidebarDashboard from './components/Sidebar';
import { useQuery } from '@tanstack/react-query';
import { AutoLogin } from '../../api/FetchAPI';

export default function Dashboard() {
    
    const { data } = useQuery({
        queryKey: ['autoLogin'],
        queryFn: AutoLogin,
    })
    console.log(data)

    return (
        <section style={{ position: 'relative', height: '100vh' }}
            className='relative flex bg-black overflow-hidden'>
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
                    filter: 'blur(72px) brightness(170%)',
                }}
            />
            <NavbarDashboard />
            <SidebarDashboard />
        </section>
    )
}