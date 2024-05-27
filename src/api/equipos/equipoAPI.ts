import { API_URL } from "../FetchAPI";


export const getEquipos = async () =>{
    try{
        const res = await API_URL.get('/equipo/')
        return res.data
    }
    catch(error){
        console.log(error)
    }
}

export const GetOnlyEquipo = async (id:number)=>{
    try{
        const res = await API_URL.get('/equipo/'+id)
        return res.data
    }
    catch(error){
        console.log(error)
    }

}

export const EquipoxProyecto = async (id:number)=>{
    try{
        const res = await API_URL.get(`/equipoEmpleado/${id}/`)
        return res.data
    }
    catch(error){
        console.log(error)
    }
}