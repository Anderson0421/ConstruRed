import TemplateDashboard from '../../layouts/TemplateDashboard';
import DataTableTMPLT from '../../assets/DataTable/DataTableTemplate';
import ActionsDB from '../../assets/DataTable/actions/ActionDataTable';


export default function PrediccionesPage() {
    // CAMBIAR LOS DATOS ESTOS SON DE PROYECTOS , SE DEBE CAMBIAR A DATOS DE HISTORIAL DE PREDICCIONES
    const DataPredicciones = [
        {
            id: 1,
            nombre: 'Proyecto 1',
            fechaInicio: '2021-01-01',
            fechaFin: '2021-12-31',
            estado: 'Activo',
            costo: 1000,
            ingresos: 2000,
            beneficio: 1000,
            predicciones: [
                {
                    id: 1,
                    fecha: '2021-01-01',
                    costo: 1000,
                    ingresos: 2000,
                    beneficio: 1000
                },
                {
                    id: 2,
                    fecha: '2021-02-01',
                    costo: 1000,
                    ingresos: 2000,
                    beneficio: 1000
                },
                {
                    id: 3,
                    fecha: '2021-03-01',
                    costo: 1000,
                    ingresos: 2000,
                    beneficio: 1000
                }
            ]
        },
        {
            id: 2,
            nombre: 'Proyecto 2',
            fechaInicio: '2021-01-01',
            fechaFin: '2021-12-31',
            estado: 'Activo',
            costo: 1000,
            ingresos: 2000,
            beneficio: 1000,
            predicciones: [
                {
                    id: 1,
                    fecha: '2021-01-01',
                    costo: 1000,
                    ingresos: 2000,
                    beneficio: 1000
                },
                {
                    id: 2,
                    fecha: '2021-02-01',
                    costo: 1000,
                    ingresos: 2000,
                    beneficio: 1000
                },
                {
                    id: 3,
                    fecha: '2021-03-01',
                    costo: 1000,
                    ingresos: 2000,
                    beneficio: 1000
                }
            ]
        }
    ];

    const columns = [
        {
            name: 'Proyecto',
            selector: (row: { nombre: string; }) => row.nombre,
            sortable: true,
        },
        {
            name: 'Fecha Inicio',
            selector: (row: { fechaInicio: string; }) => row.fechaInicio,
            sortable: true,
        },
        {
            name: 'Fecha Fin',
            selector: (row: { fechaFin: string; }) => row.fechaFin,
            sortable: true,
        },
        {
            name: 'Estado',
            selector: (row: { estado: string; }) => row.estado,
            sortable: true,
        },
        {
            name: 'Costo',
            selector: (row: { costo: number; }) => row.costo,
            sortable: true,
        },
        {
            name: 'Ingresos',
            selector: (row: { ingresos: number; }) => row.ingresos,
            sortable: true,
        },
        {
            name: 'Beneficio',
            selector: (row: { beneficio: number; }) => row.beneficio,
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
                        data={DataPredicciones} columns={columns}
                    />
                    <button className='bg-slate-950/95 hover:bg-slate-950 text-white font-bold py-2 px-4 rounded mt-2'>
                        Nueva Predicción
                    </button>
                </div>
            </div>
        </TemplateDashboard>
    )
}