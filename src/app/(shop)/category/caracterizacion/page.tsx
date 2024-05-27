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
            <div className="flex flex-wrap mt-14">
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
                        <Image src="/imgs/Fotos_Perfil/nature1.webp" alt="Descripción de la imagen" layout="fill" objectFit="cover" className='rounded'/>
                    </div>
                </div>
            </div>
            {/*Fin presentacion */}


    <div className='h-720px'>
        <iframe 
        className='w-full h-720px'
        src="https://lookerstudio.google.com/embed/reporting/1f3f04cd-ecff-4bd4-9c70-b23e7fc69592/page/p_m3i7xki8dd"
        title="Caracterización de la comunidad Pijao de Ataco - Tolima - Colombia">
        </iframe>
    </div>


        </>
    );
}