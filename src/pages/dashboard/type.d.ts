export interface LinksItems {
    clave: string
    valor: string
    Icon?: unknown
    permission? : number
}

export interface DataUserType {
    id: number
    Nombres: string
    Apellidos: string
    Correo: string
    DNI: string
    FechaContratacion: string
    Telefono: string
    Correo: string
    Rol: {
        id: number
        Nombre: string
    }
    Contraseña: string
}