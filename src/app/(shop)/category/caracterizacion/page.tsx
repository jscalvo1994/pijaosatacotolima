'use client'
import { titleFonts } from '@/config/fonts';
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

                <h1 className={`${titleFonts.className} text-2xl mb-5`}>Demográfia</h1>

                <div className="flex flex-col w-full sm:w-3/4 lg:w-1/2">
                    {/** Primera seccion */}
                    <label htmlFor="name">Nombre completo</label>
                    <input
                        id='name'
                        placeholder='Ej: Edgar Alan Poe'
                        className="px-5 py-2 border bg-gray-200 rounded mb-5"
                        type="text" />
                    <label htmlFor="documentType">Tipo de documento</label>
                    <select
                        id='documentType'
                        className="px-5 py-2 border bg-gray-200 rounded mb-5"
                        defaultValue="">
                        <option value="" disabled>Selecciona una opción</option>
                        <option value="TI">TI: Tarjeta de identidad</option>
                        <option value="CC">CC: Cedula de ciudadania</option>
                        <option value="Pasaporte">Pasaporte</option>
                        <option value="Registro Civil">Registro Civil</option>
                    </select>

                    <label htmlFor="documentNumber">Número de Documento de Identificación</label>
                    <input
                        id='documentNumber'
                        pattern="\d*"
                        placeholder='Ej: 123456789'
                        className="px-5 py-2 border bg-gray-200 rounded mb-5 form-input"
                        type="text" />




                    <label htmlFor="Departamento">Departamento </label>
                    <select
                        id='Departamento'
                        className="px-5 py-2 border bg-gray-200 rounded mb-5"
                        defaultValue="">
                        <option value="" disabled>Selecciona una opción</option>
                        <option value="01">Tolima</option>
                    </select>
                    
                    <label htmlFor="Municipio">Lugar de Nacimiento Municipio </label>
                    <select
                        id='Municipio'
                        className="px-5 py-2 border bg-gray-200 rounded mb-5"
                        defaultValue="">
                        <option value="" disabled>Selecciona una opción</option>
                        <option value="01">Alpujarra</option>
                        <option value="02">Ambalema</option>
                        <option value="03">Anzoátegui</option>
                        <option value="04">Armero</option>
                        <option value="05">Ataco</option>
                        <option value="06">Cajamarca</option>
                        <option value="07">Carmen de Apicalá</option>
                        <option value="08">Casabianca</option>
                        <option value="09">Chaparral</option>
                        <option value="10">Coello</option>
                        <option value="11">Coyaima</option>
                        <option value="12">Cunday</option>
                        <option value="13">Dolores</option>
                        <option value="14">Espinal</option>
                        <option value="15">Falan</option>
                        <option value="16">Flandes</option>
                        <option value="17">Fresno</option>
                        <option value="18">Guamo</option>
                        <option value="19">Herveo</option>
                        <option value="20">Honda</option>
                        <option value="21">Ibagué</option>
                        <option value="22">Icononzo</option>
                        <option value="23">Lérida</option>
                        <option value="24">Líbano</option>
                        <option value="25">Mariquita</option>
                        <option value="26">Melgar</option>
                        <option value="27">Murillo</option>
                        <option value="28">Natagaima</option>
                        <option value="29">Ortega</option>
                        <option value="30">Palocabildo</option>
                        <option value="31">Piedras</option>
                        <option value="32">Planadas</option>
                        <option value="33">Prado</option>
                        <option value="34">Purificación</option>
                        <option value="35">Rioblanco</option>
                        <option value="36">Roncesvalles</option>
                        <option value="37">Rovira</option>
                        <option value="38">Saldaña</option>
                        <option value="39">San Antonio</option>
                        <option value="40">San Luis</option>
                        <option value="41">Santa Isabel</option>
                        <option value="42">Suárez</option>
                        <option value="43">Valle de San Juan</option>
                        <option value="44">Venadillo</option>
                        <option value="45">Villahermosa</option>
                        <option value="46">Villarrica</option>
                    </select>

                    {/**Fin primera seccion */}
                    <button className="btn-primary">
                        Crear Registro
                    </button>

                    {/* divisor line */}
                    <div className="flex items-center my-5">
                        <div className="flex-1 border-t border-gray-500"></div>
                        <div className="px-2 text-gray-800">O</div>
                        <div className="flex-1 border-t border-gray-500"></div>
                    </div>

                </div>
            </div>


        </>
    );
}