import { LinksItems } from "../type";
import { IconHome, IconMembers, IconProjects, IconTasks, IconTickets } from "../../../assets/icons/Icons";

export const ListItems: LinksItems[] = [
    {
        clave: 'Dashboard',
        valor: '/',
        Icon: IconHome
    },
    {
        clave: 'Miembros',
        valor: '/members',
        Icon: IconMembers
    },
    {
        clave: 'Proyectos',
        valor: '/projects',
        Icon: IconProjects
    },
    {
        clave: 'Tareas',
        valor: '/tasks',
        Icon: IconTasks
    },
    {
        clave: 'Tickets',
        valor: '/tickets',
        Icon: IconTickets
    },

]