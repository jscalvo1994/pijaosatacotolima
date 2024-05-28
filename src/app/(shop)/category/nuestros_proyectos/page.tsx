import Image from 'next/image'
export default function NuestrosProyectosPage() {
    return (
        <div>
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
                            <h1 className="text-2xl font-bold mb-4">Proyectos predecederos</h1>

                            <p>Aqui el listado general de cada proyecto con su respectivo boton <strong>VER MAS</strong> que redirecciona a los proyectos relacionados con los productos predeceros y su respectiva informacion</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap">
                    <div className="w-full md:w-1/2">
                        {/* Aquí va el primer div grande */}
                        <div className="flex  items-center justify-center pb-8 ">
                            {/**Inicio seccion img */}
                            <div className="w-1/2 p-4">
                                <h1 className="text-2xl font-bold mb-4">Proyectos No-Predeceros </h1>

                                <p>Aqui el listado general de cada proyecto con su respectivo boton <strong>VER MAS</strong> que redirecciona a los proyectos relacionados con los productos no predeceros y su respectiva informacion</p>
                                <p />
                            </div>


                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <div className="w-1/2 h-[500px] relative">
                            <Image src="/imgs/Fotos_Perfil/.webp" alt="Descripción de la imagen" layout="fill" objectFit="cover" className='rounded' />
                        </div>
                    </div>
                </div>

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
                            <h1 className="text-2xl font-bold mb-4">Servicios:</h1>

                            <p>Aqui el listado general de cada proyecto con su respectivo boton <strong>VER MAS</strong> que redirecciona a los proyectos relacionados con los  Servicios y su respectiva informacion</p>
                        </div>
                    </div>
                </div>







            </div>
    )
}