import TemplateDashboard from '../../layouts/TemplateDashboard';
import DataTableTMPLT from '../../assets/DataTable/DataTableTemplate';
import { getProyectos } from '../../api/proyectos/CRUDProyectos';
import { Bar } from 'react-chartjs-2';
import { useEffect, useState } from 'react';
import { ProyectoType } from '../../api/type';

export default function PrediccionesPage() {
    const [proyectos, setProyectos] = useState<ProyectoType[]>([]);

    const GetData = async () => {
        const res = await getProyectos();
        setProyectos(res);
    };

    useEffect(() => {
        GetData();
    }, []);

    const columns = [
        {
            name: 'ID',
            selector: (row:{id:number}) => row.id,
            sortable: true,
        },
        {
            name: 'Nombre',
            selector: (row:{Nombre:string}) => row.Nombre,
            sortable: true,
        },
        {
            name: 'Fecha Inicio',
            selector: (row:{FechaInicio:string}) => row.FechaInicio,
            sortable: true,
        },
        {
            name: 'Fecha Final',
            selector: (row:{FechaFinal:string}) => row.FechaFinal,
            sortable: true,
        },
        {
            name: 'Porcentaje de Tareas',
            selector: (row:{PctTareas:number}) => `${row.PctTareas.toFixed(2)}%`,
            sortable: true,
        },
    ];

    const barData = {
        labels: proyectos.map((proyecto) => proyecto.Nombre),
        datasets: [
            {
                label: 'Porcentaje de Tareas Completadas',
                data: proyectos.map((proyecto) => proyecto.PctTareas),
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    return (
        <TemplateDashboard>
            <div className='text-white h-screen overflow-y-auto'>
                <div>
                    <h1 className='font-bold text-xl mt-2'>
                        Sistema de Análisis de Proyectos
                    </h1>
                    <p className='mt-2 text-sm'>
                        Bienvenido a la sección de análisis de Proyectos.
                    </p>
                    <hr className='mt-5 text-gray-500 mr-10' />
                </div>
                <div>
                    <h1 className='mt-5 font-bold text-lg'>
                        Proyectos
                    </h1>
                    <DataTableTMPLT
                        data={proyectos}
                        columns={columns}
                    />
                    <button className='bg-slate-950/95 hover:bg-slate-950 text-white font-bold py-2 px-4 rounded mt-2'>
                        Generar PDF
                    </button>
                </div>
                <div className='mt-6 pb-32'>
                    <h2 className="text-white text-2xl mb-4">Analytics</h2>
                    <div className='grid gap-4'>
                        <div className='bg-gray-900 w-11/12 p-4 rounded-lg'>
                            <h3 className="text-white text-lg mb-2">Porcentaje de Tareas Completadas</h3>
                            <Bar data={barData} />
                        </div>
                    </div>
                </div>
            </div>
        </TemplateDashboard>
    );
}