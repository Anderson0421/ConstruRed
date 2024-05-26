import TemplateDashboard from '../../layouts/TemplateDashboard';
import DataTableTMPLT from '../../assets/DataTable/DataTableTemplate';
import ActionsDB from '../../assets/DataTable/actions/ActionDataTable';
import { useQuery } from '@tanstack/react-query';
import { getProyectos } from '../../api/proyectos/CRUDProyectos';


export default function PrediccionesPage() {
    const { data } = useQuery({
        queryFn: getProyectos,
        queryKey:['proyectosPredict'],
        staleTime: 1000 * 60 * 5,
    })
 
    const columns = [
        {
            name: 'ID',
            selector: (row: { id: string; }) => row.id,
            sortable: true,
        },
        {
            name: 'Nombre',
            selector: (row: { Nombre: string; }) => row.Nombre,
            sortable: true,
        },
        {
            name: 'Fecha Inicio',
            selector: (row: { FechaInicio: string; }) => row.FechaInicio,
            sortable: true,
        },
        {
            name: 'Fecha Final',
            selector: (row: { FechaFinal: string; }) => row.FechaFinal,
            sortable: true,
        },
        {
            name: 'Acciones',
            cell: () => <>
                <ActionsDB Detalle={() => { console.log('Detalle') }} LinkD="delete /predict" />
            </>,
        }
    ];

    return (
        <TemplateDashboard>
            <div className='text-white'>
                <div>
                    <h1 className='font-bold text-xl mt-2'>
                        Sistema de Predicciones
                    </h1>
                    <p className='mt-2 text-sm'>
                        Con este sistema podras predecir el comportamiento de tus proyectos y tomar decisiones en base a ello.
                    </p>
                    <hr className='mt-5 text-gray-500 mr-10' />
                </div>
                <div>
                    <h1 className='mt-5 font-bold text-lg'>
                        Historial de Predicciones
                    </h1>
                    <DataTableTMPLT
                        data={data} columns={columns}
                    />
                    <button className='bg-slate-950/95 hover:bg-slate-950 text-white font-bold py-2 px-4 rounded mt-2'>
                        Nueva Predicción
                    </button>
                </div>
            </div>
        </TemplateDashboard>
    )
}