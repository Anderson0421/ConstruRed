import TemplateDashboard from "../../layouts/TemplateDashboard";
import Datatable, { createTheme } from "react-data-table-component";
import { SlOptionsVertical } from "react-icons/sl";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, } from "../../components/ui/dropdown-menu"
import { Link } from "react-router-dom";
import { VscEye } from "react-icons/vsc";
import { FiEdit3 } from "react-icons/fi";
import { MdOutlineDeleteSweep } from "react-icons/md";
import { Button } from "../../components/ui/button";
import { LuUserPlus } from "react-icons/lu";
import { SiMicrosoftexcel } from "react-icons/si";
import { FaRegFilePdf } from "react-icons/fa";
import { BsFiletypeCsv } from "react-icons/bs";
import { FaDownload } from "react-icons/fa6";


export default function ColaboradoresPage() {

    const columns = [
        {
            name: 'Nombre',
            selector: (row: { name: string; }) => row.name,
            sortable: true,
        },
        {
            name: 'Apellido',
            selector: (row: { lastName: string; }) => row.lastName,
            sortable: true,
        },
        {
            name: 'DNI',
            selector: (row: { DNI: string; }) => row.DNI,
            sortable: true,
        },
        {
            name: 'Acciones',
            cell: () => <>
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <SlOptionsVertical />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-black p-2 text-white border-none rounded-lg">
                        <DropdownMenuItem>
                            <Link className="min-w-full w-full flex justify-between items-center gap-3" to={'xd'}>
                                <span>Visualizar</span> <VscEye className="w-5 h-5" />
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Link className="min-w-full w-full flex justify-between items-center gap-3" to={'xd'}>
                                <span>Editar</span> <FiEdit3 className="w-5 h-5" />
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Link className="min-w-full w-full flex justify-between items-center gap-3" to={'xd'}>
                                <span>Eliminar</span> <MdOutlineDeleteSweep className="w-5 h-5" />
                            </Link>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

            </>,
        }
    ];

    const data = [
        {
            name: 'Jhon',
            lastName: 'Doe',
            DNI: '12345678'
        },
        {
            name: 'Jane',
            lastName: 'Doe',
            DNI: '87654321'
        },
        {
            name: 'Jane',
            lastName: 'Doe',
            DNI: '87654321'
        }
    ];

    createTheme('solarized', {
        background: {
            default: 'transparent',
        },
        context: {
            background: '#cb4b16',
            text: '#FFFFFF',
        },
        divider: {
            default: '#CDCDCD',
        },
        action: {
            button: 'rgba(0,0,0,.54)',
            hover: 'rgba(0,0,0,.08)',
            disabled: 'rgba(0,0,0,.12)',
        },
    }, 'dark');

    return (
        <TemplateDashboard>
            <div className="text-white ">
                <div className="relative">
                    <h1 className="text-2xl mt-5 font-bold">Colaboradores</h1>
                    <div className="flex items-center w-full justify-end pr-2 absolute inset-0">
                        <DropdownMenu >
                            <DropdownMenuTrigger >
                                <Button className="bg-black flex items-center gap-4" variant={"default"}>
                                    <span>
                                        Exportar
                                    </span>
                                    <FaDownload className="w-5 h-5" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="bg-black p-2 text-white border-none rounded-lg">
                                <DropdownMenuItem className="items-center flex gap-2 justify-between">
                                    <span>Excel</span> <SiMicrosoftexcel className="w-4 h-4" />
                                </DropdownMenuItem>
                                <DropdownMenuItem className="items-center flex gap-2 justify-between">
                                    <span>PDF</span> <FaRegFilePdf className="w-4 h-4" />
                                </DropdownMenuItem>
                                <DropdownMenuItem className="items-center flex gap-2 justify-between">
                                    <span>CSV</span> <BsFiletypeCsv className="w-4 h-4" />
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
                <Datatable
                    className="mt-5"
                    columns={columns}
                    data={data}
                    selectableRows
                    paginationPerPage={10}
                    pagination
                    customStyles={{
                        rows: {
                            style: {
                                backgroundColor: "transparent",
                                color: '#FFF',
                            }
                        },
                        headRow: {
                            style: {
                                backgroundColor: '#050A22',
                                color: '#FFF',
                                fontSize: '14px',
                            }
                        },
                    }}
                    onSelectedRowsChange={(data => console.log(data))}
                    theme="solarized"
                >

                </Datatable>
                <div>
                    <div>
                        <Button className="bg-black flex items-center gap-3">
                            <LuUserPlus className="w-5 h-5" />
                            <span>
                                Agregar colaborador
                            </span>
                        </Button>
                    </div>
                </div>
            </div>
        </TemplateDashboard>
    )
}