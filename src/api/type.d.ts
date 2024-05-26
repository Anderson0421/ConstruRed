export interface UserType {
    Correo: string
    Contraseña: string
}

export interface ColaboradorType{
    id: number
    Nombres: string
    Apellidos: string
    FechaContratacion: string
    Telefono: string
    Correo: string
    Rol: string
}

export interface ProyectoType{
    id: number
    Nombre:string
    Descripcion:string
    FechaInicio:string
    FechaFinal:string
    Empleado: number
    Imagen?:string
}

export interface ArchivoType{
    id:number
    Nombre:string
    Archivo:string
    Proyecto:number
}