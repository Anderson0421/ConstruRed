import { LinksItems } from "../type";
import { IconHome, IconMembers, IconProjects, IconTickets, IconsPredict, IconGroup } from "../../../assets/icons/Icons";

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
        clave: 'Grupos',
        valor: '/grupos',
        Icon: IconGroup,
        permission: 1
    },
    {
        clave: 'Proyectos',
        valor: '/proyectos',
        Icon: IconProjects,
        permission: 1 || 2
    },
    {
        clave: 'Analytics',
        valor: '/analytics',
        Icon: IconsPredict,
        permission: 1
    },
    {
        clave: 'Dashboard AA',
        valor: '/dashboard-aa',
        Icon: IconMembers,
        permission: 2
    },
    {
        clave: 'Tickets',
        valor: '/tickets',
        Icon: IconTickets,
        permission: 2
    },
    {
        clave: 'Proyectos S.P',
        valor: '/proyectos',
        Icon: IconProjects,
        permission: 3
    }

]