import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Input } from '../../components/ui/input';
import { UserType } from '../../api/type';
import backgroundImage from '../../assets/images/wback3.webp';
import { LoginUsers } from '../../api/FetchAPI';
import { useForm, FieldValues } from "react-hook-form";
import { useState } from 'react';
import { ListItems } from '../dashboard/assets/LinksUL';


export default function LoginPage() {

    const { register, handleSubmit } = useForm();
    const [isSubmitForm, setIsSubmitForm] = useState(false)


    function AlertSignInStatus(status: string) {
        const promise = new Promise((resolve, reject) => {
            if (status === 'Success!') {
                resolve(status);
            } else {
                reject(status);
            }
        });

        toast.promise(
            promise,
            {
                pending: 'Verificando datos.. 🕐',
                success: 'Inicio de sesión exitoso! 🎉',
                error: 'Fallo en las credenciales 😢'
            },
            {
                autoClose: 2000,
            }
        )
    }

    const HandleClickOnSumit = async (data: FieldValues) => {
        const User: UserType = {
            Correo: data.Correo as string,
            Contraseña: data.Contraseña as string
        }
        setIsSubmitForm(true)
        const res = await LoginUsers(User)
        if (res) {
            setIsSubmitForm(false)
            localStorage.setItem('DNIToken', res.user_profile.DNI)
            localStorage.setItem('DataUser', JSON.stringify(res.user_profile))
            const ROL_USER = res.user_profile.Rol.id
            const item = ListItems.find(item => item.permission === ROL_USER)
            if (item) {
                window.location.href = item.valor
            }
        }
        else {
            setIsSubmitForm(false)
            AlertSignInStatus('Error!')
        }
    }

    return (
        <section className='bg-black h-screen flex justify-center items-center'>
            <div className={`top-0 left-0 z-50 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50 ${isSubmitForm ? 'fixed' : 'hidden'}`}>
                <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-blue-500"></div>
            </div>
            <ToastContainer />
            <div className='w-3/5 flex justify-center items-center max-lg:hidden'>
                <img src={backgroundImage} alt="reactLogo" className="min-h-screen  w-full
                object-cover object-center
                " />
            </div>
            <form onSubmit={handleSubmit(HandleClickOnSumit)} className='z-10 max-lg:w-full  flex h-full w-1/2 flex-col gap-3 bg-slate-950 p-10 justify-center max-lg:items-center items-start '>
                <h1 className='text-white text-3xl  font-bold max-sm:text-center'>
                    Encantado de verte de nuevo!
                </h1>
                <p className='mb-8  text-gray-200 max-sm:text-center'>
                    Ingresa tus datos para iniciar sesion
                </p>
                <div className='w-3/4  max-lg:w-1/2 max-sm:w-full max-md:w-3/4 flex flex-col gap-5 text-gray-50'>
                    <Input {...register("Correo", { required: true })} type='email' autoComplete='Introduce your email' required className='bg-gray-900 rounded-xl text-white ' placeholder='Ingrese su email' name='Correo'
                    />
                    <Input {...register("Contraseña", { required: true })} type='password' required autoComplete='Introduce your password' className='bg-gray-900 rounded-xl text-white ' placeholder='Ingrese su password' name='Contraseña'
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
        </section >
    )
}