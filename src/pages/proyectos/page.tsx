
import DataTableTMPLT from '../../assets/DataTable/DataTableTemplate';
import ActionsDB from '../../assets/DataTable/actions/ActionDataTable';
import TemplateDashboard from '../../layouts/TemplateDashboard';

export default function ProyectosPage() {

    const DataProyectos = [
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
            <div>
                <h1 className='text-white text-xl mt-3 font-semibold'>
                    Gestión de Proyectos
                </h1>
                <DataTableTMPLT data={DataProyectos} columns={columns}>
                </DataTableTMPLT>
            </div>
        </TemplateDashboard>
    )
}