import { useEffect, useState } from "react";
import TemplateDashboard from "../../layouts/TemplateDashboard";
import { getEquipos } from "../../api/equipos/equipoAPI";
import { Link } from "react-router-dom";
import { BiLoaderCircle } from "react-icons/bi";

export interface GroupType{
    id: number;
    Nombre: string;
}

export default function GrupoPage() {
    const [grupos, setGrupos] = useState<GroupType[]>([]);
    
    const GetEquipos = async () =>{
        const res = await getEquipos()
        setGrupos(res)
    }

    useEffect(()=>{
        GetEquipos()
    },[])

  return (
    <TemplateDashboard>
        <div className='text-white'>
            <h1 className='text-white text-xl mt-3 font-semibold'>
            Gestión de Grupos
            </h1>
            <p className="py-2 text-gray-400 font-semibold">
                Selecciona un grupo para ver los detalles
            </p>
            <div className="grid max-md:grid-cols-2 max-sm:grid-cols-1 grid-cols-3 gap-4">
                {
                    grupos && grupos.length > 0 ? grupos.map((grupo, index)=>{
                        return(
                            <Link to={`grupo/${grupo.id}/`} key={index} className='text-white min-h-40 flex justify-center items-center p-3 rounded-lg mt-3
                            bg-gray-800/30 group
                            '>
                                <p className="uppercase group-hover:scale-105 transition-all duration-300 text-xl font-semibold">{grupo.Nombre}</p>
                            </Link>
                        )
                    })
                    :
                    <div className="flex items-center gap-2 mt-5 text-lg">
                    <span>Loading</span>
                    <div role="status">
                        <BiLoaderCircle className="animate-spin" />
                        <span className="sr-only">Loading...</span>
                    </div>

                </div>
                }
            </div>
        </div>
    </TemplateDashboard>
  )
}
