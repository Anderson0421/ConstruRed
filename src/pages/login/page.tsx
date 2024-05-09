import { Input } from '../../components/ui/input';
import { LoginUsers } from '../../api/FetchAPI';
import { useMutation } from "@tanstack/react-query";
import { UserType } from '../../api/type';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../../assets/images/wback3.webp';

export default function LoginPage() {

    const history = useNavigate()

    const addUserMutation = useMutation({
        mutationFn: LoginUsers,
        onSuccess: () => {
            history('/')
        },
        onError: () => {
            console.log('XD error')
        }
    })

    const HandleClickOnSumit = async (e: React.FormEvent) => {
        e.preventDefault()
        const formData = new FormData(e.target as HTMLFormElement)
        const User: UserType = {
            Correo: formData.get('Correo') as string,
            Contraseña: formData.get('Contraseña') as string
        }
        await addUserMutation.mutate(User)
    }

    return (
        <section className='bg-black h-screen flex justify-center items-center'>
            <div className='w-3/5 flex justify-center items-center max-lg:hidden'>
                <img src={backgroundImage} alt="reactLogo" className="min-h-screen  w-full
                object-cover object-center
                " />
            </div>
            <form onSubmit={(e) => HandleClickOnSumit(e)} className='z-10 max-lg:w-full  flex h-full w-1/2 flex-col gap-3 bg-slate-950 p-10 justify-center max-lg:items-center items-start '>
                <h1 className='text-white text-3xl  font-bold max-sm:text-center'>
                    Encantado de verte de nuevo!
                </h1>
                <p className='mb-8  text-gray-200 max-sm:text-center'>
                    Ingresa tus datos para iniciar sesion
                </p>
                <div className='w-3/4  max-lg:w-1/2 max-sm:w-full max-md:w-3/4 flex flex-col gap-5 text-gray-50'>
                    <Input type='email' required className='bg-gray-900 rounded-xl text-black ' placeholder='Ingrese su email' name='Correo'
                    />
                    <Input type='password' required className='bg-gray-900 rounded-xl text-black ' placeholder='Ingrese su password' name='Contraseña'
                    />
                    <button className='bg-blue-700 mt-2 text-white w-full h-10 rounded-lg'>
                        Iniciar sesion
                    </button>
                    <p className='text-center'>
                        ¿No tienes una cuenta? | Contacta con el administrador
                    </p>
                </div>
                <div className='mt-12 text-gray-400 max-sm:text-center'>
                    <p>
                        @ 2024, Todos los derechos reservados - Desarrollado x DevCollab
                    </p>
                </div>
            </form>
        </section>
    )
}