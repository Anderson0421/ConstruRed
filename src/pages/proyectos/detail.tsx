import { Link, useParams } from "react-router-dom"
import TemplateDashboard from "../../layouts/TemplateDashboard"
import { useEffect, useState } from "react"
import { getArchivosProyect, getProyecto } from "../../api/proyectos/CRUDProyectos"
import { ArchivoType, ProyectoType } from "../../api/type";
import { useQuery } from "@tanstack/react-query";
import DataTableTMPLT from "../../assets/DataTable/DataTableTemplate";
import { IoMdDownload } from "react-icons/io";

export default function DetailProyect() {

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { id } = useParams<{ id: any }>();

    const [proyecto, setProyecto] = useState<ProyectoType | null>(null);
    const [archivos, setArchivos] = useState<ArchivoType[]>([]);

    const { data } = useQuery({
        queryFn: getArchivosProyect,
        queryKey: ['archivo_proyectos'],
        staleTime: 1000 * 60 * 5,
    });

    useEffect(() => {
        async function fetchData() {
            const resProyecto = await getProyecto(id);
            setProyecto(resProyecto);

            if (data) {
                const archivosProyecto = data.filter((archivo: ArchivoType) => archivo.Proyecto == id);
                setArchivos(archivosProyecto);
                console.log(archivosProyecto)
            }
        }

        fetchData();
    }, [id, data]);

    const columns = [
        {
            name: 'id',
            selector: (row: { id: number; }) => row.id,
            sortable: true,
        },
        {
            name: 'Nombre',
            selector: (row: { Nombre: string; }) => row.Nombre,
            sortable: true,
        },
        {
            name: 'Archivo',
            selector: (row: { Archivo: string; }) =>
                <Link target="_blank" to={`${row.Archivo}?sp=racwdli&st=2024-04-14T00:13:42Z&se=2026-10-13T08:13:42Z&sv=2022-11-02&sr=c&sig=q9N9P9sev2O8erCIkIq5KN6CBT9FVoKXrWqxIyqM5HQ%3D`}
                className="rounded-xl flex items-center gap-2">Descargar archivo
                    <IoMdDownload  className="w-4 h-4"/>
                </Link>
            ,
            sortable: true,
        },
    ]

    return (
        <TemplateDashboard>
            {proyecto ? (
                <div className="text-white flex items-center justify-between mx-5">
                    <div className="flex items-center gap-3">
                        <img
                            src={`${proyecto.Imagen}?sp=racwdli&st=2024-04-14T00:13:42Z&se=2026-10-13T08:13:42Z&sv=2022-11-02&sr=c&sig=q9N9P9sev2O8erCIkIq5KN6CBT9FVoKXrWqxIyqM5HQ%3D`}
                            alt={proyecto.Nombre}
                            className="w-32 rounded-2xl mt-3"
                        />
                        <p className="text-2xl font-semibold">{proyecto.Nombre}</p>
                    </div>
                    <div className="flex flex-col gap-2 text-md pr-5">
                        <p>
                            Inicio del proyecto: {proyecto.FechaInicio}
                        </p>
                        <p>
                            Fin del proyecto: {proyecto.FechaFinal}
                        </p>
                    </div>
                </div>
            ) : (
                <div className='top-0 left-0 z-50 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50 fixed'>
                    <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-blue-500"></div>
                </div>
            )}
            <div className="w-full rounded-sm p-3 mt-6">
                <h1 className="text-white font-semibold text-sm border-b-2 border-gray-300 pb-2">Archivos recientes...</h1>
                <DataTableTMPLT columns={columns}
                    data={archivos}
                />
            </div>
        </TemplateDashboard>
    )
}
