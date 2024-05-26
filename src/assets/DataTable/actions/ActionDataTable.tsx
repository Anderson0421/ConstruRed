import { Link } from "react-router-dom";
import { VscEye } from "react-icons/vsc";
import { FiEdit3 } from "react-icons/fi";
import { MdOutlineDeleteSweep } from "react-icons/md";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, } from "../../../components/ui/dropdown-menu"
import { SlOptionsVertical } from "react-icons/sl";
import { Button } from "@nextui-org/react";


// eslint-disable-next-line @typescript-eslint/ban-types
export default function ActionsDB({ LinkV, LinkE, LinkD, Detalle }: { LinkV?: string, LinkE?: string, LinkD: string, Detalle?: Function }) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <SlOptionsVertical />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-black p-2 text-white border-none rounded-lg">
                {
                    LinkV &&
                    <DropdownMenuItem>
                        <Link className="min-w-full w-full flex justify-between items-center gap-3" to={LinkV}>
                            <span>Visualizar</span> <VscEye className="w-5 h-5" />
                        </Link>
                    </DropdownMenuItem>
                }
                {
                    LinkE &&
                    <DropdownMenuItem>
                        <Link className="min-w-full w-full flex justify-between items-center gap-3" to={LinkE}>
                            <span>Editar</span> <FiEdit3 className="w-5 h-5" />
                        </Link>
                    </DropdownMenuItem>
                }
                {
                    Detalle &&
                    <DropdownMenuItem>
                        <Button onClick={() => Detalle()} className="min-w-full h-full w-full flex justify-between items-center gap-3" >
                            <span>Detalles</span> <VscEye className="w-5 h-5" />
                        </Button>
                    </DropdownMenuItem>
                }
                <DropdownMenuItem>
                    <Link className="min-w-full w-full flex justify-between items-center gap-3" to={LinkD}>
                        <span>Eliminar</span> <MdOutlineDeleteSweep className="w-5 h-5" />
                    </Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}