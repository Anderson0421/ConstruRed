import { useEffect, useState } from "react";
import { EquipoxProyecto, GetOnlyEquipo } from "../../../api/equipos/equipoAPI";
import TemplateDashboard from "../../../layouts/TemplateDashboard";
import { useParams } from "react-router-dom";
import { GroupType } from "../page";
import { BiLoaderCircle } from "react-icons/bi";
import { getProyecto } from "../../../api/proyectos/CRUDProyectos";
import { ColaboradorType, ProyectoType } from "../../../api/type";
import { GetOnlyEmpleado } from "../../../api/CRUDEmpleados";

export default function DetailGrupo() {
    const { id } = useParams<{ id: string }>();
    const [grupo, setGrupos] = useState<GroupType>();

    const [proyectGroup, setProyectoGrupo] = useState<equipoEmpleado>();
    const [proyect, setProyect] = useState<ProyectoType>();

    const [EmpleadosXgroup, setEmpleadosXgroup] = useState<ColaboradorType[]>([]);

    interface equipoEmpleado {
        id: number;
        Equipo: number;
        Empleado: number;
    }

    const GetEquipos = async () => {
        const res = await GetOnlyEquipo(parseInt(id ?? ""));
        setGrupos(res);
    };

    const GetProyectoxEquipo = async () => {
        const res = await EquipoxProyecto(parseInt(id ?? ""));
        setProyectoGrupo(res);
    };

    const GetProyect = async () => {
        const res = await getProyecto(parseInt(id ?? ""));
        setProyect(res);
    };

    const GetOnlyEmpleadoAsync = async (empleadoId: number) => {
        if (empleadoId !== 0) {
            const res = await GetOnlyEmpleado(empleadoId);
            setEmpleadosXgroup([res]);
        }
    };

    useEffect(() => {
        GetEquipos();
        GetProyectoxEquipo();
        GetProyect();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (proyectGroup && proyectGroup.Empleado) {
            GetOnlyEmpleadoAsync(proyectGroup.Empleado);
        }
    }, [proyectGroup]);

    return (
        <TemplateDashboard>
            <div className="text-white overflow-y-auto h-screen pb-32">
                <div className="text-4xl font-bold mb-4">
                    {grupo ? (
                        <h1 className="text-gray-400">{grupo.Nombre}</h1>
                    ) : (
                        <div className="flex items-center gap-2">
                            <span>Loading</span>
                            <BiLoaderCircle className="animate-spin text-gray-500" size={24} />
                        </div>
                    )}
                </div>

                {proyect && (
                    <div className="bg-gray-800/30 w-full p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold text-gray-300 mb-2">Proyecto Asociado:</h2>
                        <p className="text-xl text-gray-400">{proyect.Nombre}</p>
                        <div className="mt-3">
                            <span className="font-semibold">Descripción: </span>
                            {proyect.Descripcion}
                        </div>
                        <div className="mt-3">
                            <span className="font-semibold">Participantes: </span>
                            {proyectGroup ? (
                                <div>
                                    {EmpleadosXgroup && EmpleadosXgroup.length > 0 && EmpleadosXgroup.map((empleado, index) => (
                                        <p key={index}>{empleado.Nombres} {empleado.Apellidos}</p>
                                    ))}
                                </div>
                            ) : (
                                <p>No hay participantes en este proyecto</p>
                            )}
                        </div>
                        <p className="flex mt-5 text-sm">
                            <span className="font-semibold">Fecha Inicio: {proyect.FechaInicio}</span>
                            <span className="font-semibold ml-4">Fecha Fin: {proyect.FechaFinal}</span>
                        </p>
                        <img
                            className="mt-5 w-2/5 max-md:w-full"
                            src={`${proyect.Imagen}??sp=racwdli&st=2024-04-14T00:13:42Z&se=2026-10-13T08:13:42Z&sv=2022-11-02&sr=c&sig=q9N9P9sev2O8erCIkIq5KN6CBT9FVoKXrWqxIyqM5HQ%3D`}
                            alt={proyect.Nombre}
                        />
                    </div>
                )}
            </div>
        </TemplateDashboard>
    );
}
