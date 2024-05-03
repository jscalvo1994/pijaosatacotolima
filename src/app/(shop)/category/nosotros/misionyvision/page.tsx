import Image from 'next/image'
import { titleFonts } from '@/config/fonts'
export default function Mision_VisionPage() {
    return (

        <>
            <div>
            <h1 className={`${titleFonts.className} my-2.5 text-center mx-auto antialiased font-bold}`} >Misión la Comunidad Pijao de Ataco – Tolima - Colombia:</h1>

                <div className="flex flex-wrap">
                    <div className="w-full md:w-1/2">
                        {/* Aquí va el primer div grande */}
                        <div className="flex  items-center justify-center pb-8 ">
                            <div className="w-1/2 h-[500px] relative">
                                <Image src="/imgs/Fotos_Perfil/perfil10.webp" alt="Descripción de la imagen" layout="fill" objectFit="cover"  className='rounded' />
                            </div>

                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        {/* Aquí va el segundo div grande */}
                        <div className="w-1/2 p-4">
                            <h1 className="text-2xl font-bold mb-4">Misión la Comunidad Pijao de Ataco – Tolima - Colombia:</h1>

                            <p>La misión de nuestra comunidad Pijao de Ataco - Tolima - Colombia es revivir y fortalecer nuestra <span className="underline font-bold">identidad cultural</span>,
                                promoviendo prácticas sostenibles en el tiempo con el respeto por la diversidad y la <span className="underline font-bold">armonía con la naturaleza</span>. Nuestro
                                propósito central es salvaguardar tradiciones, idioma y costumbres, actuando como <span className="underline font-bold"> guardianes de un legado atemporal.</span>
                                Queremos trascender y transferir nuestra cosmovisión a las generaciones futuras, fomentando el <span>desarrollo sostenible</span> y
                                el <span className="underline font-bold"> bienestar de nuestro pueblo</span> para un futuro próspero y equilibrado con el entorno, por tanto, buscamos <span className="underline font-bold"> proteger la
                                    tierra</span>, buscando el desarrollo integral de nuestras comunidades y abogando por una educación inclusiva que abarque
                                conocimientos ancestrales y modernos.</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap">
                    <div className="w-full md:w-1/2">
                        {/* Aquí va el primer div grande */}
                        <div className="flex  items-center justify-center pb-8 ">
                            {/**Inicio seccion img */}
                            <div className="w-1/2 p-4">
                                <h1 className="text-2xl font-bold mb-4">Vision la Comunidad Pijao de Ataco – Tolima - Colombia:</h1>

                                <p>La visión de nuestra comunidad Pijao de Ataco - Tolima - Colombia para el 2050, es ser reconocido en el tiempo a nivel nacional e internacional por:</p>
                                <br />
                                <p>
                                    a) ser una comunidad vibrante e inspiradora que ha forjado una <span className="underline font-bold">identidad colectiva </span>como <span className="underline font-bold">herencia histórica</span> y un <span className="underline font-bold">legado sólido </span> caracterizado por la armonía, la preservación cultural y el desarrollo sostenible, que refleje con dignidad nuestra historia y tradiciones.
                                </p>
                                <br />
                                <p>
                                    b) tener una invaluable herencia cultural preservada, consolidando el sentido de orgullo y de <span className="underline font-bold"> pertenencia territorial</span>, arraigada en la preservación consciente de nuestras<span className="underline font-bold"> raíces culturales</span>, y guiados por el <span className="underline font-bold">respeto por nuestra tierra ancestral</span>.
                                </p>
                                <br />
                                <p>
                                    c) promover la <span className="underline font-bold">justicia social </span> como pilar fundamental para garantizar equidad, prosperidad y bienestar. </p>
                                <p />
                            </div>


                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <div className="w-1/2 h-[500px] relative">
                            <Image src="/imgs/Fotos_Perfil/perfil11.webp" alt="Descripción de la imagen" layout="fill" objectFit="cover" className='rounded' />
                        </div>
                    </div>
                </div>
            </div>

            {/*Segunda seccion responsive */}
            <div className="font-sans min-h-screen mt-1 p-0">
                <div className="max-w-2xl mx-auto p-5 rounded-xl shadow-md">
                    <h1 className="text-xl mb-5 text-black-700 text-center p-2 rounded">Nuestros Principios Fundamentales</h1>
                </div>
                <div className="flex flex-wrap justify-between">
                    <div className="mb-5 p-5 bg-gray-100 rounded shadow-sm md:w-1/5">

                        <h2 className="text-lg mb-5 text-white bg-naturaleza p-2 rounded">1. Respeto a la Naturaleza</h2>
                        <div className="p-2 mb-5 bg-gray-200 rounded">
                            <p className="text-sm leading-relaxed text-black-500">Valorar y respetar la tierra y sus recursos como sagrados.</p>
                        </div>
                        <div className="p-2 mb-5 bg-gray-200 rounded">
                            <p className="text-sm leading-relaxed text-black-500">Compromiso de vivir en armonía con la naturaleza.</p>
                        </div>
                        <div className="p-2 mb-5 bg-gray-200 rounded">
                            <p className="text-sm leading-relaxed text-black-500">Proteger la biodiversidad y promover prácticas sostenibles.</p>
                        </div>
                    </div>
                    <div className="mb-5 p-5 bg-gray-100 rounded shadow-sm md:w-1/5">
                        <h2 className="text-lg mb-5 text-white bg-cultural p-2 rounded">2. Preservación Cultural</h2>
                        <div className="p-2 mb-5 bg-gray-200 rounded">
                            <p className="text-sm leading-relaxed text-black-500">Mantener y preservar la identidad cultural.</p>
                        </div>
                        <div className="p-2 mb-5 bg-gray-200 rounded">
                            <p className="text-sm leading-relaxed text-black-500">Practicar y transmitir tradiciones, danzas, música, artesanía y lenguaje.</p>
                        </div>
                        <div className="p-2 bg-gray-200 rounded">
                            <p className="text-sm leading-relaxed text-black-500">Enriquecer la diversidad cultural de la región.</p>
                        </div>
                    </div>
                    <div className="mb-5 p-5 bg-gray-100 rounded shadow-sm md:w-1/5">
                        <h2 className="text-lg mb-5 text-white bg-social p-2 rounded">3. Justicia Social</h2>
                        <div className="p-2 mb-5 bg-gray-200 rounded">
                            <p className="text-sm leading-relaxed text-black-500">Defender la equidad y la justicia social</p>

                        </div>
                        <div className="p-2 mb-5 bg-gray-200 rounded">
                            <p className="text-sm leading-relaxed text-black-500">Esforzarse por eliminar la discriminación</p>
                        </div>
                        <div className="p-2 mb-5 bg-gray-200 rounded">
                            <p className="text-sm leading-relaxed text-black-500">Promover igualdad de oportunidades y respeto a los derechos humanos</p>
                        </div>
                    </div>
                    <div className="mb-5 p-5 bg-gray-100 rounded shadow-sm md:w-1/5">

                        <h2 className="text-lg mb-5 text-white bg-comunitaria p-2 rounded">4. Participación Comunitaria</h2>
                        <div className="p-2 mb-5 bg-gray-200 rounded">
                            <p className="text-sm leading-relaxed text-black-500">Fomentar la participación activa y democrática en la toma de decisiones</p>
                        </div>
                        <div className="p-2 mb-5 bg-gray-300 rounded">
                            <p className="text-sm leading-relaxed text-black-500">Promover la transparencia y la inclusión</p>
                        </div>
                    </div>
                    <div className="mb-5 p-5 bg-gray-100 rounded shadow-sm md:w-1/5">
                        <h2 className="text-lg mb-5 text-white bg-autonomia p-2 rounded">5. Autonomía y Autodeterminación</h2>
                        <div className="p-2 mb-5 bg-gray-200 rounded">
                            <p className="text-sm leading-relaxed text-black-500">MBuscar la autonomía y autodeterminación del pueblo </p>
                        </div>
                        <div className="p-2 mb-5 bg-gray-200 rounded">
                            <p className="text-sm leading-relaxed text-black-500">Tomar decisiones que beneficien a la comunidad según tradiciones y valores propios</p>
                        </div>
                    </div>

                </div>
            </div>
            {/*tercera division responsive  */}

            <div className="flex  items-center justify-center p-0">
                <div className="w-[1980px] h-[1162px] relative">
                    <Image src="/imgs/Logos/graficoredportatil.png" alt="Descripción de la imagen" layout="fill" objectFit="cover" />
                </div>

            </div>


        </>



    )
}