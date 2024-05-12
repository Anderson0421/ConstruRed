import TemplateDashboard from "../../layouts/TemplateDashboard";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, } from "../../components/ui/dropdown-menu"
import { Button } from "../../components/ui/button";
import { LuUserPlus } from "react-icons/lu";
import { SiMicrosoftexcel } from "react-icons/si";
import { BsFiletypeCsv } from "react-icons/bs";
import { FaDownload } from "react-icons/fa6";
import DataTableTMPLT from "../../assets/DataTable/DataTableTemplate";
import { useQuery } from "@tanstack/react-query";
import { GetEmpleados } from "../../api/CRUDEmpleados";
import ActionsDB from "../../assets/DataTable/actions/ActionDataTable";
import * as XLSX from 'xlsx';
import { ColaboradorType } from "../../api/type";
import { CSVLink } from "react-csv";

export default function ColaboradoresPage() {

    const { data } = useQuery({
        queryFn: GetEmpleados,
        queryKey: ['colaboradores'],
        staleTime: 1000 * 60 * 5,
    })

    const columns = [
        {
            name: 'id',
            selector: (row: { id: number; }) => row.id,
            sortable: true,
        },
        {
            name: 'Nombres',
            selector: (row: { Nombres: string; }) => row.Nombres,
            sortable: true,
        },
        {
            name: 'Apellidos',
            selector: (row: { Apellidos: string; }) => row.Apellidos,
            sortable: true,
        },
        {
            name: 'FechaContratacion',
            selector: (row: { FechaContratacion: string; }) => row.FechaContratacion,
            sortable: true,
        },
        {
            name: 'Telefono',
            selector: (row: { Telefono: string; }) => row.Telefono,
            sortable: true,
        },
        {
            name: 'Correo',
            selector: (row: { Correo: string; }) => row.Correo,
            sortable: true,
        },
        {
            name: 'Rol',
            selector: (row: { Rol: string; }) => row.Rol,
            sortable: true,
        },
        {
            name: 'Acciones',
            cell: () => <>
                <ActionsDB LinkE="edit/employ" LinkD="delete/employ" />
            </>,
        }
    ];

    const ExportToExcelButton = ({ data }: { data: ColaboradorType[] }) => () => {
        const ws = XLSX.utils.json_to_sheet(data);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
        XLSX.writeFile(wb, "Colaboradores.xlsx");
    }



    return (
        <TemplateDashboard>
            <div className="text-white ">
                <div className="relative">
                    <h1 className="text-2xl mt-5 font-bold">Colaboradores</h1>
                    <div className="flex items-center w-full justify-end pr-2 max-sm:relative max-sm:mt-3 max-sm:justify-start absolute inset-0">
                        <DropdownMenu >
                            <DropdownMenuTrigger className="bg-black flex items-center gap-4 px-4 py-2 rounded-xl">
                                <span>
                                    Exportar
                                </span>
                                <FaDownload className="w-5 h-5" />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="bg-black p-2 text-white border-none rounded-lg">
                                <DropdownMenuItem onClick={ExportToExcelButton({ data })} className="items-center flex gap-2 justify-between">
                                    <span>Excel</span> <SiMicrosoftexcel className="w-4 h-4" />
                                </DropdownMenuItem>
                                <DropdownMenuItem className="items-center flex gap-2 justify-between">
                                    {
                                        data &&
                                        <CSVLink data={data} filename="Colaboradores.csv">
                                            <span>CSV</span>
                                        </CSVLink>
                                    }
                                    <BsFiletypeCsv className="w-4 h-4" />
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
                <DataTableTMPLT columns={columns} data={data} />
                <div>
                    <Button className="bg-black flex mt-5 items-center gap-3">
                        <LuUserPlus className="w-5 h-5" />
                        <span>
                            Agregar colaborador
                        </span>
                    </Button>
                </div>
            </div>
        </TemplateDashboard>
    )
}