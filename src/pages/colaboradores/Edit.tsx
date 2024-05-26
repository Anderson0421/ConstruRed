import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import TemplateDashboard from "../../layouts/TemplateDashboard";
import { useQuery } from "@tanstack/react-query";
import { GetOnlyEmpleado, EditEmpleado } from "../../api/CRUDEmpleados";
import { ColaboradorType } from "../../api/type";
import { useForm, SubmitHandler } from "react-hook-form";
import { Edit2Icon } from "lucide-react";

export default function EditarEmpleado() {
    const [userDataAct, setUserDataAct] = useState<ColaboradorType | null>(null);
    const { id } = useParams<{ id: string }>();
    const history = useNavigate();
    const { register, handleSubmit, reset } = useForm<ColaboradorType>();

    const { data, isLoading } = useQuery({
        queryFn: () => GetOnlyEmpleado(Number(id)),
        queryKey: ['colaboradores', id],
        staleTime: 1000 * 60 * 5,
    });

    useEffect(() => {
        if (data) {
            setUserDataAct(data);
            reset(data);  // Poblar el formulario con los datos existentes
        }
    }, [data, reset]);

    const onSubmit: SubmitHandler<ColaboradorType> = async (data) => {
        try {
            const updatedColaborador = await EditEmpleado(Number(id), data);
            console.log('Colaborador actualizado:', updatedColaborador);
            history(`/colaboradores`);  
        } catch (error) {
            console.error('Error al actualizar el colaborador:', error);
            alert('Hubo un error al actualizar el colaborador. Por favor, inténtalo de nuevo.');
        }
    };

    return (
        <TemplateDashboard>
            <div>
                <h1 className="text-white flex items-center gap-2 font-semibold text-xl mt-2">
                    <Edit2Icon className="w-4 h-4 mt-1" />
                    <span>Editar Empleado</span>
                </h1>
                {
                    isLoading ? (
                        <div role="status" className="flex justify-center items-center h-full w-full">
                            <svg aria-hidden="true" className="w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                            </svg>
                            <span className="sr-only">Loading...</span>
                        </div>
                    ) : (
                        userDataAct && (
                            <form onSubmit={handleSubmit(onSubmit)} className="mt-3">
                                <div className="grid grid-cols-1 gap-4">
                                    <div>
                                        <label className="text-white">Nombres</label>
                                        <input
                                            {...register("Nombres", { required: true })}
                                            type="text"
                                            className="bg-gray-300/20 text-white w-full rounded-lg border-2 border-gray-200 p-2"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-white">Apellidos</label>
                                        <input
                                            {...register("Apellidos", { required: true })}
                                            type="text"
                                            className="bg-gray-300/20 text-white w-full rounded-lg border-2 border-gray-200 p-2"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-white">Fecha de Contratación</label>
                                        <input
                                            {...register("FechaContratacion", { required: true })}
                                            type="date"
                                            className="bg-gray-300/20 text-white w-full rounded-lg border-2 border-gray-200 p-2"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-white">Teléfono</label>
                                        <input
                                            {...register("Telefono", { required: true })}
                                            type="tel"
                                            className="bg-gray-300/20 text-white w-full rounded-lg border-2 border-gray-200 p-2"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-white">Correo</label>
                                        <input
                                            {...register("Correo", { required: true })}
                                            type="email"
                                            className="bg-gray-300/20 text-white w-full rounded-lg border-2 border-gray-200 p-2"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-white">Rol</label>
                                        <input
                                            {...register("Rol", { required: true })}
                                            type="text"
                                            className="bg-gray-300/20 text-white w-full rounded-lg border-2 border-gray-200 p-2"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <button className="bg-blue-500 w-full mt-3 text-white rounded-lg p-2" type="submit">
                                        Guardar
                                    </button>
                                </div>
                            </form>
                        )
                    )
                }
            </div>
        </TemplateDashboard>
    );
}
