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
                        <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="reactIcon"
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
                                <span className='font-semibold bg-gray-950/50 p-1.5 rounded-sm shadow-xl'>ROL: <span className='font-normal'>Desarrollador</span></span>
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