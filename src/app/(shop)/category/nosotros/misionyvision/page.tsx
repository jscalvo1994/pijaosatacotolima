import Image from 'next/image'

export default function Mision_VisionPage() {
    return (

        <>
            <div className="flex flex-wrap">
                <div className="w-full md:w-1/2">
                    {/* Aquí va el primer div grande */}
                    <div className="flex  items-center justify-center pb-8 ">
                        <div className="w-1/2 h-[500px] relative">
                            <Image src="/imgs/Fotos_Perfil/perfil1.webp" alt="Descripción de la imagen" layout="fill" objectFit="cover" />
                        </div>

                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    {/* Aquí va el segundo div grande */}
                    <div className="w-1/2 p-4">
                        <h1 className="text-2xl font-bold mb-4">Título</h1>
                        <p>Texto descriptivo...</p>
                    </div>
                </div>
            </div>


            <div className="flex flex-wrap">
            <div className="w-full md:w-1/2">
                    {/* Aquí va el segundo div grande */}
                    <div className="w-1/2 p-4">
                        <h1 className="text-2xl font-bold mb-4">Título</h1>
                        <p>Texto descriptivo...</p>
                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    {/* Aquí va el primer div grande */}
                    <div className="flex  items-center justify-center pb-8">
                        <div className="w-1/2 h-[500px] relative">
                            <Image src="/imgs/Fotos_Perfil/perfil1.webp" alt="Descripción de la imagen" layout="fill" objectFit="cover" />
                        </div>

                    </div>
                </div>
             
            </div>







            <div className="flex flex-wrap pb-8">
                <div className="w-full md:w-1/2">
                    <div className="bg-green-500 border-3 border-black rounded-lg">
                        <h1 className="text-2xl font-bold mb-2 text-center">Principios Fundamentales:</h1>
                        <div className="flex flex-col items-center justify-center h-full p-4">
                            <h2 className="text-xl mb-4 text-center">1. Respeto a la Naturaleza:</h2>
                            <p className="text-justify">Valorar y respetar la tierra y sus recursos como sagrados.</p>
                            <p className="text-justify">Compromiso de vivir en armonía con la naturaleza.</p>
                            <p className="text-justify">Proteger la biodiversidad y promover prácticas sostenibles.</p>
                        </div>

                        <div className="flex flex-col items-center justify-center h-full p-4">
                            <h2 className="text-xl mb-4 text-center  "> 2. Preservación Cultural:</h2>
                            <p className="text-justify">Mantener y preservar la identidad cultural.</p>
                            <p className="text-justify">Practicar y transmitir tradiciones, danzas, música, artesanía y lenguaje. </p>
                            <p>Enriquecer la diversidad cultural de la región..</p>
                        </div>
                        <div className="flex flex-col items-center justify-center h-full p-4">
                            <h2 className="text-xl mb-4 text-center  "> 3.Justicia Social:</h2>
                            <p className="text-justify">Defender la equidad y la justicia social.</p>
                            <p className="text-justify">Esforzarse por eliminar la discriminación.</p>
                            <p className=' text-justify'>Promover igualdad de oportunidades y respeto a los derechos humanos.</p>
                        </div>
                        <div className="flex flex-col items-center justify-center h-full p-4">
                            <h2 className="text-xl mb-4 text-center  "> 4.Participación Comunitaria:</h2>
                            <p className="text-justify">Fomentar la participación activa y democrática en la toma de decisiones.</p>
                            <p className="text-justify">Promover la transparencia y la inclusión.</p>
                        </div>
                        <div className="flex flex-col items-center justify-center h-full p-4">
                            <h2 className="text-xl mb-4 text-center  "> 5.Autonomía y Autodeterminación</h2>
                            <p className="text-justify">Buscar la autonomía y autodeterminación del pueblo.</p>
                            <p className="text-justify">Tomar decisiones que beneficien a la comunidad según tradiciones y valores propios</p>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    <div className="bg-red-200 border-3 border-black rounded-lg">
                        <h1 className="text-2xl font-bold mb-2 text-center">Valores:</h1>
                        <div className="flex flex-col items-center justify-center h-full p-4">
                            <h2 className="text-xl mb-4 text-center">1. Respeto y Solidaridad:</h2>
                            <p className="text-justify">Cultivar un ambiente de respeto mutuo y solidaridad.</p>
                            <p className="text-justify">Reconocer la diversidad de opiniones y experiencias dentro de la comunidad.</p>
                        </div>

                        <div className="flex flex-col items-center justify-center h-full p-4">
                            <h2 className="text-xl mb-4 text-center">2. Integridad:</h2>
                            <p className="text-justify">Actuar con honestidad y coherencia.</p>
                            <p className="text-justify">Ser responsables de acciones y comprometidos con la verdad y la transparencia.</p>
                        </div>

                        <div className="flex flex-col items-center justify-center h-full p-4">
                            <h2 className="text-xl mb-4 text-center">3. Reciprocidad:</h2>
                            <p className="text-justify">Practicar la reciprocidad como valor esencial.</p>
                            <p className="text-justify">Fomentar el intercambio y la colaboración en la comunidad para fortalecer lazos.</p>
                        </div>

                        <div className="flex flex-col items-center justify-center h-full p-4">
                            <h2 className="text-xl mb-4 text-center">4. Aprendizaje Continuo:</h2>
                            <p className="text-justify">Valorar el aprendizaje continuo.</p>
                            <p className="text-justify">Buscar el desarrollo personal y colectivo.</p>
                        </div>

                        <div className="flex flex-col items-center justify-center h-full p-4">
                            <h2 className="text-xl mb-4 text-center">5. Espiritualidad:</h2>
                            <p className="text-justify">Honrar y cultivar la espiritualidad.</p>
                            <p className="text-justify">Conectar con tradiciones ancestrales y reconocer su importancia en la vida diaria.</p>
                        </div>

                        <div className="flex flex-col items-center justify-center h-full p-4">
                            <h2 className="text-xl mb-4 text-center">6. Resiliencia:</h2>
                            <p className="text-justify">Desarrollar la resiliencia como comunidad.</p>
                            <p className="text-justify">Afrontar desafíos con fortaleza y adaptabilidad.</p>
                            <p className="text-justify">Aprender de adversidades para construir un futuro más fuerte.</p>
                        </div>

                        <div className="flex flex-col items-center justify-center h-full p-4">
                            <h2 className="text-xl mb-4 text-center">7. Amor y Cuidado:</h2>
                            <p className="text-justify">Promover el amor y el cuidado hacia la comunidad y entorno.</p>
                            <p className="text-justify">Reconocer la importancia de estos valores para construir relaciones saludables y sostenibles.</p>
                        </div>
                    </div>
                </div>
            </div>





        </>




    )
}