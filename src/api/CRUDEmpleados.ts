/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { API_URL } from "./FetchAPI";
import { ColaboradorType } from "./type";

axios.defaults.withCredentials = true;

export const GetEmpleados = async () => {
    try {
        const res = await API_URL.get('/empleado/')
        const ROL = await API_URL.get('/rol/')
        const data = res.data
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        data.forEach((e: any) => {
            e.Rol = ROL.data.find((r: any) => r.id === e.Rol).Nombre
        })

        return res.data
    }
    catch (err) {
        console.log(err)
    }
}

export const GetOnlyEmpleado = async (id: number) => {
    try {
        const res = await API_URL.get(`/empleado/${id}`)
        return res.data
    }
    catch (err) {
        console.log(err)
    }
}

export const EditEmpleado = async (id: number, data: ColaboradorType) => {
    try {
        const res = await API_URL.put(`/empleado/${id}/`, data, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
        return res.data;
    }
    catch (error) {
        return error;
    }
}

