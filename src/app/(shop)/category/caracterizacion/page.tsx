'use client'
import { titleFonts } from '@/config/fonts';
import { CheckboxList } from '@/components';
import Demografia from './form/demografia';
import Geografia from './form/geografia';
import Image from 'next/image'
import Link from 'next/link';
export default function CaracterizacionPage() {
    return (
        <>
            <h1 className={`${titleFonts.className} my-2.5 text-center mx-auto antialiased text-4xl mb-5 font-bold}`} >Misión la Comunidad Pijao de Ataco – Tolima - Colombia:</h1>
            {/*Inicio presentacion */}
            <div className="flex flex-wrap">
                <div className="w-full md:w-1/2">
                    {/* Aquí va el primer div grande */}
                    <div className="flex  items-center justify-center pb-8 ">
                        {/**Inicio seccion img */}
                        <div className="w-1/2 p-4">
                            <h1 className="text-2xl font-bold mb-4">Objetivo</h1>
                            <p className="flex  items-center justify-center pb-8">Identificar las necesidades de formación y empleo en las comunidades indígenas Pijao, ubicadas en Ataco, Tolima, Colombia</p>

                        </div>


                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    <div className="w-1/2 h-[500px] relative">
                        <Image src="/imgs/Fotos_Perfil/perfil1.webp" alt="Descripción de la imagen" layout="fill" objectFit="cover" />
                    </div>
                </div>
            </div>
            {/*Fin presentacion */}

            <div className="flex flex-col min-h-screen pt-32 sm:pt-52 items-center justify-center">
                <div className="flex flex-col w-full sm:w-3/4 lg:w-1/2">
                    <Demografia />
                    
                    <Geografia />
              
                    <Link href="/">
                        <button className="btn-primary">
                            Guardar Registro
                        </button>
                    </Link>            
                </div>

            </div>


        </>
    );
}