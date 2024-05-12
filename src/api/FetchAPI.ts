import axios from "axios";
import { UserType } from "./type";


axios.defaults.withCredentials = true;

export const API_URL = axios.create({
    baseURL: 'https://apiconstrured.onrender.com'
})

export const LoginUsers = async (userData: UserType) => {
    try {
        const res = await API_URL.post('/empleado/login/', userData, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return res.data
    }
    catch (err) {
        console.log(err)
    }
}

export const AutoLogin = async () => {
    try {
        const res = await API_URL.post('/empleado/auto_login/')
        return res.data
    }
    catch (err) {
        window.location.href = '/login'
    }
}

export const LogOut = async () => {
    try {
        await API_URL.post('/empleado/logout/')
    }
    catch (err) {
        console.log(err)
    }
}