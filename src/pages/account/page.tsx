import { useEffect, useState } from 'react';
import TemplateDashboard from '../../layouts/TemplateDashboard';
import { DataUserType } from '../dashboard/type';
import { PanelTabComponent } from './components/PanelTab';
import { TicketIcon } from 'lucide-react';



export default function AccountPage() {
    const [DatosUsuarios, setDatos] = useState<DataUserType>()

    useEffect(() => {
        const DataUser = JSON.parse(localStorage.getItem('DataUser') as string)
        setDatos(DataUser)
    }, [])

    return (
        <TemplateDashboard>
            <div className='p-4 max-sm:px-1'>
                <div className='flex justify-between items-center max-sm:flex-wrap'>
                    <div className='flex items-start gap-3 max-sm:justify-center max-sm:flex-wrap'>
                        <img src={`${DatosUsuarios?.Foto}?sp=racwdli&st=2024-04-14T00:13:42Z&se=2026-10-13T08:13:42Z&sv=2022-11-02&sr=c&sig=q9N9P9sev2O8erCIkIq5KN6CBT9FVoKXrWqxIyqM5HQ%3D`} alt="reactIcon"
                            className='w-28 rounded-xl h-28 max-sm:w-40 max-sm:h-40' />
                        <div className='mt-2'>
                            <h1 className='font-semibold text-lg text-white'>
                                {DatosUsuarios?.Nombres} {DatosUsuarios?.Apellidos}
                            </h1>
                            <p className='text-gray-200 text-sm py-1'>
                                <span className='font-semibold'>Email: </span>
                                {DatosUsuarios?.Correo}
                            </p>
                            <div className='text-gray-100 mt-1 flex text-sm items-center gap-2'>
                                <span className='font-semibold bg-gray-950/50 p-1.5 rounded-sm shadow-xl'>DNI: <span className='font-normal'>73238321</span></span>
                                <span className='font-semibold bg-gray-950/50 p-1.5 rounded-sm shadow-xl'>ROL: <span className='font-normal'>Gerente General</span></span>
                            </div>
                        </div>
                    </div>
                    <button className='
                    max-sm:w-full max-sm:mt-5 flex items-center gap-3
                    rounded-sm mt-5 max-md:mt-0 px-4 py-2 bg-gray-900/90 hover:bg-gray-900 duration-300 transition-all text-white h-full'>
                        <TicketIcon className='w-5 h-5' />
                        Solicitar Ticket
                    </button>
                </div>
                <hr className='mt-5 border-gray-300/30 pb-6' />
                <PanelTabComponent />
            </div>
        </TemplateDashboard>
    )
}
