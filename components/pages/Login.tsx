'use client'
import { Button, Card, CardBody, CardHeader, Divider, Input } from "@heroui/react";
import EyeSlashFilledIcon from "../EyeSlasFilledIcon";
import EyeFilledIcon from "../EyeFilledIcon";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [visible, setVisible] = useState(false);
    const router = useRouter();
    const submit = async (e: any) => {
        e.preventDefault();
        const data = {
            username,
            password,
        }
        try{
            const response = await axios.post('/api/auth/admins', data);
            if (response.status == 200){
                toast.success('Inicio de sesión exitoso', { onClose : () => location.reload() })
            }else if (response.status == 401){
                toast.error('Credenciales incorrectas')
            }
        }catch(error: any) {
            console.log(error);
            toast.error('Error al iniciar sesión')
        }
    }
    const toggleVisibility = () => setVisible(!visible);

    return (
        <>
            <div className="mb-10 rounded-sm border border-stroke dark:bg-slate-800 bg-slate-200 shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="flex justify-center items-center m-10">
                <form onSubmit={submit}>
                    <Card className='m-4'>
                        <CardHeader>
                            <h1 className="font-bold text-xl">Inicia Sesión</h1>
                        </CardHeader>
                        <Divider/>
                        <CardBody className='p-5 gap-4'>
                            <Input value={username} onChange={(e) => setUsername(e.target.value)} name="username" isRequired required type='text' label='nombre de usuario' />
                                <Input value={password} onChange={(e) => setPassword(e.target.value)} name="password" isRequired required type={visible ? "text" : "password"} endContent={<button className="focus:outline-none" type="button" onClick={toggleVisibility} aria-label="toggle password visibility">
                                    {visible ? (
                                        <EyeSlashFilledIcon className="max-w-[10px]" />
                                    ) : (
                                        <EyeFilledIcon className="max-w-[10px]" />
                                    )}
                                </button> } label='contraseña'>
                            </Input>
                        </CardBody>    
                            <Button type='submit' className='m-4 bg-green-600 text-slate-100'>
                                Iniciar Sesión
                            </Button>
                    </Card>
                   
                </form>
            </div>
        </div>
        </>
    )
}