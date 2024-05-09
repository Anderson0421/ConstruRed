import { useQuery } from '@tanstack/react-query';
import backgroundImage from '../../assets/images/wback.webp';
import NavbarDashboard from './components/Navbar';
import SidebarDashboard from './components/Sidebar';
import { AutoLogin } from '../../api/FetchAPI';
import { SetDataUser } from '../../store/setUserData';
import { useNavigate } from 'react-router-dom';
import LoginPage from '../login/page';

export default function Dashboard() {
    const navigate = useNavigate()
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