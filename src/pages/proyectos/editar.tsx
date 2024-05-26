import { useParams } from "react-router-dom";
import TemplateDashboard from "../../layouts/TemplateDashboard";
import { useEffect, useState } from "react";
import { getProyecto, EditProyect } from "../../api/proyectos/CRUDProyectos";
import { ProyectoType } from "../../api/type";
import { SubmitHandler, useForm } from 'react-hook-form';

export default function EditProyectComponent() {
    const { id } = useParams<{ id: string }>(); 

    const { register, handleSubmit, reset } = useForm<ProyectoType>();

    const [proyecto, setProyecto] = useState<ProyectoType | null>(null);
    const [isSubmitForm, setIsSubmitForm] = useState(false);

    useEffect(() => {
      async function fetchData() {
        const resProyecto = await getProyecto(parseInt(id ?? ""));
        setProyecto(resProyecto);
        reset(resProyecto); 
      }
      
      fetchData();
    }, [id, reset]);
    
    const onSubmit: SubmitHandler<ProyectoType> = async (data) => {
      setIsSubmitForm(true);
      try {
        const formData = new FormData();
        formData.append('id', id ?? "");
        formData.append('Nombre', data.Nombre);
        formData.append('FechaInicio', data.FechaInicio);
        formData.append('FechaFinal', data.FechaFinal);
        formData.append('Descripcion', data.Descripcion);

        if (data.Imagen?.[0]) {
          formData.append('Imagen', data.Imagen[0]);
        }

        await EditProyect(parseInt(id ?? ""), formData);
      } catch (error) {
        console.error('Error al actualizar el proyecto:', error);
      }
      setTimeout(() => {
        setIsSubmitForm(false);
      }, 1000);
    };
    

    return (
      <TemplateDashboard>
        <div className="text-white mt-5">
          <h1 className="font-semibold text-xl">Editar proyecto</h1>
        </div>
        <form className="mt-3" onSubmit={handleSubmit(onSubmit)}>
        <div className={`top-0 left-0 z-50 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50 ${isSubmitForm ? 'fixed' : 'hidden'}`}>
                <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-blue-500"></div>
            </div>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="text-white">Nombre</label>
              <input
                {...register("Nombre")} defaultValue={proyecto?.Nombre}
                type="text" 
                className="bg-gray-300/20 text-white w-full rounded-lg border-2 border-gray-200 p-2"
              />
            </div>
            <div>
              <label className="text-white">Fecha de inicio</label>
              <input
                {...register("FechaInicio")} defaultValue={proyecto?.FechaInicio}
                type="date"
                className="bg-gray-300/20 text-white w-full rounded-lg border-2 border-gray-200 p-2"
              />
            </div>
            <div>
              <label className="text-white">Fecha de fin</label>
              <input
                {...register("FechaFinal")} defaultValue={proyecto?.FechaFinal}
                type="date"
                className="bg-gray-300/20 text-white w-full rounded-lg border-2 border-gray-200 p-2"
              />
            </div>
            <div>
              <label className="text-white">Descripcion</label>
              <textarea
                {...register("Descripcion")} defaultValue={proyecto?.Descripcion}
                className="bg-gray-300/20 text-white w-full rounded-lg border-2 border-gray-200 p-2"
              ></textarea>
            </div>
            <div>
              <label className="text-white">Imagen</label>
              <input
                {...register("Imagen")} 
                type="file" defaultValue={proyecto?.Imagen}
                className="bg-gray-300/20 text-white w-full rounded-lg border-2 border-gray-200 p-2"
              />
            </div>
          </div>
          <div>
            <button className="bg-blue-500 w-full mt-3 text-white rounded-lg p-2">
              Guardar
            </button>
          </div>
        </form>
      </TemplateDashboard>
    );
}
