import { LinksItems } from "../type";
import { IconHome, IconMembers, IconProjects, IconReports, IconTasks, IconTickets } from "../../../assets/icons/Icons";

export const ListItems: LinksItems[] = [
    {
        clave: 'Dashboard',
        valor: '/',
        Icon: IconHome,
        permission: 1
    },
    {
        clave: 'Miembros',
        valor: '/colaboradores',
        Icon: IconMembers,
        permission: 1
    },
    {
        clave: 'Proyectos',
        valor: '/proyectos',
        Icon: IconProjects,
        permission: 1
    },
    {
        clave: 'Agenda',
        valor: '/agenda',
        Icon: IconTasks,
        permission: 1
    },
    {
        clave: 'Tickets',
        valor: '/tickets',
        Icon: IconTickets,
        permission: 2
    },
    {
        clave: 'Informes',
        valor: '/informes',
        Icon: IconReports,
        permission: 1
    },

]