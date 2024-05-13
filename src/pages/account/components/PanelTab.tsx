import { Button } from "../../../components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "../../../components/ui/card"
import { Input } from "./../../../components/ui/input"
import { Label } from "./../../../components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger, } from "../../../components/ui/tabs"
import { DataUserType } from "../../dashboard/type"
import { useEffect, useState } from "react"

export function PanelTabComponent() {

    const [UsuarioDato, setDatos] = useState<DataUserType>()

    useEffect(() => {
        const DataUser = JSON.parse(localStorage.getItem('DataUser') as string)
        setDatos(DataUser)
    }, [])

    return (
        <Tabs defaultValue="account" >
            <TabsList className="grid w-full grid-cols-5 max-md:grid-cols-3 h-full pb-2 center gap-2 bg-gray-950 text-gray-400">
                <TabsTrigger value="account" >Account</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
                <TabsTrigger value="tareas">Tareas</TabsTrigger>
                <TabsTrigger value="proyectos">Proyectos</TabsTrigger>
                <TabsTrigger value="history">History</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
                <Card className="bg-black/80 text-white border-none">
                    <CardHeader>
                        <CardTitle>
                            Mi cuenta
                        </CardTitle>
                        <CardDescription className="text-gray-200">
                            Guarda los cambios de tu cuenta aquí. Haz clic en guardar cuando hayas terminado.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-3">
                            <div className="space-y-1 text-white">
                                <Label htmlFor="nombres">
                                    Nombres
                                </Label>
                                <Input id="nombres" className="text-black" value={`${UsuarioDato?.Nombres}`} />
                            </div>
                            <div className="space-y-1 text-white">
                                <Label htmlFor="apellidos">
                                    Apellidos
                                </Label>
                                <Input id="apellidos" className="text-black" value={`${UsuarioDato?.Apellidos}`} />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-3">
                            <div className="space-y-1 text-white">
                                <Label htmlFor="Telefono">
                                    Telefono
                                </Label>
                                <Input id="Telefono" className="text-black" value={`${UsuarioDato?.Telefono}`} />
                            </div>
                            <div className="space-y-1 text-white">
                                <Label htmlFor="Correo">
                                    Correo
                                </Label>
                                <Input id="Correo" className="text-black" value={`${UsuarioDato?.Correo}`} />
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button>Save changes</Button>
                    </CardFooter>
                </Card>
            </TabsContent>
            <TabsContent value="password">
                <Card className="bg-black/90 text-white border-none">
                    <CardHeader>
                        <CardTitle>Account</CardTitle>
                        <CardDescription>
                            Make changes to your account here. Click save when you're done.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="space-y-1 text-black">
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" />
                        </div>
                        <div className="space-y-1 text-black">
                            <Label htmlFor="username">Username</Label>
                            <Input id="username" />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button>Save changes</Button>
                    </CardFooter>
                </Card>
            </TabsContent>
        </Tabs>
    )
}
