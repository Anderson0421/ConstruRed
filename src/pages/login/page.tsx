import { Input } from '../../components/ui/input';
import { LoginUsers } from '../../api/FetchAPI';
import { useMutation } from "@tanstack/react-query";
import { UserType } from '../../api/type';
import { useNavigate } from 'react-router-dom';


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
            <form onSubmit={(e) => HandleClickOnSumit(e)} className='z-10  flex h-max w-1/4 max-lg:w-1/3 max-md:w-1/2 max-sm:w-3/4 flex-col gap-3 bg-white p-10 rounded-xl justify-center items-center '>
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="reactLogo" className="w-12" />
                <h1 className='text-gray-800 text-2xl mb-2 font-bold'>
                    Inicie sesion
                </h1>
                <Input type='email' required className='bg-white text-black ' placeholder='Ingrese su email' name='Correo'
                />
                <Input type='password' required className='bg-white text-black ' placeholder='Ingrese su password' name='Contraseña'
                />
                <button className='bg-black mt-2 text-white w-full h-10 rounded-lg'>
                    Iniciar sesion
                </button>
            </form>
        </section>
    )
}