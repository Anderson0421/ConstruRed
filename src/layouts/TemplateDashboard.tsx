import backgroundImage from '../assets/images/wback.webp';
import NavbarDashboard from '../pages/dashboard/components/Navbar';
import SidebarDashboard from '../pages/dashboard/components/Sidebar';

export default function TemplateDashboard({ children }: { children: React.ReactNode }) {
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
            <section className="ml-64 max-lg:ml-0 max-lg:px-5 z-10 flex-col  overflow-y-auto  mt-5 flex h-max justify-between w-full">
                <NavbarDashboard />
                {children}
            </section>
            <SidebarDashboard />
        </section>
    )
}