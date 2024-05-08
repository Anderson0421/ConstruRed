import backgroundImage from '../../assets/images/wback.webp';
import SidebarDashboard from './components/Sidebar';

export default function Dashboard() {
    return (
        <section style={{ position: 'relative', height: '100vh' }} className='bg-black'>
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
            <SidebarDashboard />
        </section>
    )
}