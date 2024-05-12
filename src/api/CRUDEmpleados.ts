import axios from "axios";
import { API_URL } from "./FetchAPI";

axios.defaults.withCredentials = true;

export const GetEmpleados = async () => {
    try {
        const res = await API_URL.get('/empleado/')
        const ROL = await API_URL.get('/rol/')
        const data = res.data
        data.forEach((e: any) => {
            e.Rol = ROL.data.find((r: any) => r.id === e.Rol).Nombre
        })
        
        return res.data
    }
    catch (err) {
        console.log(err)
    }
}