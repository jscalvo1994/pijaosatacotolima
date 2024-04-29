"use client"
import { titleFonts } from "@/config/fonts"
import { useState } from 'react';
import { IoChatboxEllipsesSharp, IoMenuOutline, IoCloseOutline, IoMenu } from "react-icons/io5";
import { useUIStore } from '@/store';
import Image from "next/image";
import Link from "next/link";

export const TopMenu = () => {
    const [showSubMenuNosotros, setShowSubMenuNosotros] = useState(false);
    const [showSubMenuProyectos, setShowSubMenuProyectos] = useState(false);
    const openSideMenu = useUIStore(state => state.openSideMenu);
    return (
        <>
            <nav className="flex flex-col sm:flex-row px-5 justify-between items-center w-full">
                <div className="left-0 top-0 px-2 mx-5 flex-shrink-0">
                    <Link href="/">
                        <Image
                            src="/imgs/Logos/Comunidad_Pijao2.jpg"
                            alt="logo_comunidad_pijao"
                            className="p-5 sm:p-0 transition-all"
                            width={350}
                            height={350} />
                    </Link>
                </div>
<div className="flex-col md:flex-row items-center hidden lg:block">
    <div className="flex flex-col sm:flex-row md:grid md:grid-cols-2 lg:grid-cols-4 md:items-center md:justify-center">
{/*Menu Navbar Large */}
<div onMouseEnter={() => setShowSubMenuNosotros(true)} onMouseLeave={() => setShowSubMenuNosotros(false)}> 
    <Link className="m-5 p-2 rounded-md transition-all hover:bg-gray-400 text-[1.5rem]" href="/category/nosotros">Nosotros</Link>
    {showSubMenuNosotros && (
        <div className="absolute bg-white rounded-md shadow-lg py-2 mt-2">
            <Link className="block px-4 py-2 hover:bg-gray-200" href="/category/nosotros/misionyvision">Mision y Vision</Link>
            <Link className="block px-4 py-2 hover:bg-gray-200" href="/category/nosotros/plandevida">Plan de Vida</Link>
            <Link className="block px-4 py-2 hover:bg-gray-200" href="/category/nosotros/comunidades">Comunidades</Link>
        </div>
    )}
</div>

<div onMouseEnter={() => setShowSubMenuProyectos(true)} onMouseLeave={() => setShowSubMenuProyectos(false)}>
    <Link className="m-5 p-2 rounded-md transition-all hover:bg-gray-400 text-[1.5rem]" href="/category/nuestros_proyectos">Proyectos</Link>
    {showSubMenuProyectos && (
        <div className="absolute bg-white rounded-md shadow-lg py-2 mt-2">
            <Link className="block px-4 py-2 hover:bg-gray-200" href="/category/nuestros_proyectos/predecederos">Perecederos</Link>
            <Link className="block px-4 py-2 hover:bg-gray-200" href="/category/nuestros_proyectos/no-predecederos">No Perecederos</Link>
            <Link className="block px-4 py-2 hover:bg-gray-200" href="/category/nuestros_proyectos/servicios">Servicios</Link>
        </div>
    )}
</div>
<div>
    <Link className=" m-5 p-2 rounded-md transition-all hover:bg-gray-400 text-[1.5rem]" href="/category/caracterizacion">Caracterizacion</Link>
</div>
<div>
    <Link className=" m-5 p-2 rounded-md transition-all hover:bg-gray-400 text-[1.5rem]" href="/category/contactenos">Contactenos</Link>
</div>
</div>
{/*End menu navbar */}
</div>
                <div className="flex items-center">
                    <Link href="/search" className="mx-2 flex items-center">
                        <p className="m-5">ChatIA</p>
                        <IoChatboxEllipsesSharp className="w-[45px] h-[45px]" />
                    </Link>
                </div>
                <button
                    onClick={openSideMenu}
                    title="Abrir menú lateral"
                    className="lg:hidden md:block m-2 p-2 rounded-md transition-all hover:bg-green-700 h-12 w-12">
                    <IoMenu className="w-full h-full" />
                </button>
            </nav>
        </>
    ) /*End return */
} /**close function */