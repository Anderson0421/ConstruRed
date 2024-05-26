
import DataTableTMPLT from '../../assets/DataTable/DataTableTemplate';
import ActionsDB from '../../assets/DataTable/actions/ActionDataTable';
import TemplateDashboard from '../../layouts/TemplateDashboard';
import { getProyectos } from '../../api/proyectos/CRUDProyectos';
import { useQuery } from '@tanstack/react-query';
import { BiLoaderCircle } from 'react-icons/bi';
import { IoWarningOutline } from 'react-icons/io5';

export default function ProyectosPage() {

    const { data, isError } = useQuery({
        queryFn: getProyectos,
        queryKey: ['proyectos'],
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
            name: 'Fecha Fin',
            selector: (row: { FechaFinal: string; }) => row.FechaFinal,
            sortable: true,
        },
        {
            name: 'Descripcion',
            selector: (row: { Descripcion: string; }) => row.Descripcion,
            sortable: true,
        },
        {
            name: 'Empleado',
            selector: (row: { Empleado: string; }) => row.Empleado,
            sortable: true,
        },
        {
            name: 'Acciones',
            cell: (row: { id: number }) => <>
                <ActionsDB LinkV={`/proyectos/${row.id}/`} LinkE={`/proyectos/${row.id}/editar/`} LinkD="delete /predict" />
            </>,
        }
    ];
    return (
        <TemplateDashboard>
            <div className='text-white'>
                <h1 className='text-white text-xl mt-3 font-semibold'>
                    Gestión de Proyectos
                </h1>
                {
                    data ? data.length > 0 && <DataTableTMPLT columns={columns} data={data} /> : <div>
                        <h1>
                            {isError ? <div className="bg-red-600/70 mt-5 px-4 py-2 rounded-lg justify-between flex items-center w-max gap-5">
                                <span> Error al obtener los datos</span> <IoWarningOutline />
                            </div> :
                                <div className="flex items-center gap-2 mt-5 text-lg">
                                    <span>Loading</span>
                                    <div role="status">
                                        <BiLoaderCircle className="animate-spin" />
                                        <span className="sr-only">Loading...</span>
                                    </div>

                                </div>
                            }
                        </h1>
                    </div>
                }
            </div>
        </TemplateDashboard>
    )
}