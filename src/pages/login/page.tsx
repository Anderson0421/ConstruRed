import backgroundImage from '../../assets/images/wback2.webp';

export default function LoginPage() {
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
                    filter: 'blur(72px) brightness(140%)',
                }}
            />
        </section>
    )
}