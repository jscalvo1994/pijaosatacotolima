"use client"
import { titleFonts } from "@/config/fonts"
import { useState } from 'react';
import { IoSearchOutline, IoCartOutline } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";

export const TopMenu = () => {
    const [showSubMenuNosotros, setShowSubMenuNosotros] = useState(false);
    const [showSubMenuProyectos, setShowSubMenuProyectos] = useState(false);

    return (
        <><nav className="flex px-5 justify-between items-center w-full">
            <div className="px-2 mx-5">
                <Link href="/">
                    <Image
                        src="/imgs/Comunidad_Pijao2.jpg"
                        alt="logo_comunidad_pijao"
                        className="p-5 sm:p-0 transition-all"
                        width={550}
                        height={550} />
                </Link>
            </div>
            <div className="hidden sm:block items-center">
                <div className="flex">
                   {/*Frist Menu endend */}
                    <div onMouseEnter={() => setShowSubMenuNosotros(true)} onMouseLeave={() => setShowSubMenuNosotros(false)}>
                        <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-400 text-2xl" href="/category/nosotros">Nosotros</Link>
                        {showSubMenuNosotros && (
                            <div className="absolute bg-white rounded-md shadow-lg py-2 mt-2">
                                <Link className="block px-4 py-2 hover:bg-gray-200" href="/category/nosotros/gobernadores">Gobernadores</Link>
                                <Link className="block px-4 py-2 hover:bg-gray-200" href="/category/nosotros/misionyvision">Mision y Vision</Link>
                                <Link className="block px-4 py-2 hover:bg-gray-200" href="/category/nosotros/plandevida">Plan de Vida</Link>
                                <Link className="block px-4 py-2 hover:bg-gray-200" href="/category/nosotros/comunidades">Comunidades</Link>
                            </div>
                        )}
                    </div>
                    {/*Second Menu endend */}
                    <div onMouseEnter={() => setShowSubMenuProyectos(true)} onMouseLeave={() => setShowSubMenuProyectos(false)}>
                        <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-400 text-2xl" href="/category/nosotros">Nuestros Proyectos</Link>
                        {showSubMenuProyectos && (
                            <div className="absolute bg-white rounded-md shadow-lg py-2 mt-2">
                                <Link className="block px-4 py-2 hover:bg-gray-200" href="/category/nosotros/gobernadores">Perecederos</Link>
                                <Link className="block px-4 py-2 hover:bg-gray-200" href="/category/nosotros/misionyvision">No Perecederos</Link>
                                <Link className="block px-4 py-2 hover:bg-gray-200" href="/category/nosotros/plandevida">Servicios</Link>
                            </div>
                        )}
                    </div>
                    {/*trid Menu endend */}
                    <div>
                    <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-400 text-2xl" href="/category/nosotros">Caracterizacion</Link>
                    </div>
                    {/*Four Menu endend */}
                    <div>
                    <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-400 text-2xl" href="/category/nosotros">Contactenos</Link>
                    </div>
                   


                </div>
            </div>






        <div className="flex items-center">
                <Link href="/search" className="mx-2">
                    <IoSearchOutline className="w-5 h-5" />
                </Link>
            </div>
        </nav>
        </>
    ) /*End return */

} /**close function */