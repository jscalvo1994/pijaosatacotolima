import Link from 'next/link'
import Image from 'next/image'

export default function TecnicosPage() {
    // Aquí puedes poner tus datos
    const gobernadores = [
        { nombre: 'Carlos Augusto Rodríguez Millán', cargo: 'Coordinador', imagen: '/imgs/Fotos_Perfil/perfil1.webp' },
        { nombre: 'Ana María Pascuas Lozano', cargo:' Profesional Jurídica', imagen: '/imgs/Fotos_Perfil/perfil1.webp' },
        { nombre: ' Daniela Calderón Rodríguez', cargo:' Profesional Social ', imagen: '/imgs/Fotos_Perfil/perfil1.webp' },
        { nombre: '  Anghy Carolina Céspedes Lozano', cargo:'Sistematizadora ', imagen: '/imgs/Fotos_Perfil/perfil1.webp' },
        { nombre: 'Sandra Patricia Cardozo Cataño', cargo:' Apoyo financiero', imagen: '/imgs/Fotos_Perfil/perfil1.webp' },
        { nombre: ' Efren Zambrano Jimenez', cargo:'Apoyo logístico', imagen: '/imgs/Fotos_Perfil/perfil1.webp' },
       
        // Agrega más gobernadores según sea necesario
    ]

    return (
        <div className="flex flex-wrap justify-center p-10 mt-30">
        <h1 className="w-full text-center mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl font-bold">Equipo Tecnico</h1>
        {gobernadores.map((gobernador, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
                <Link href="/">
                    <div className="text-center">
                        <div className="w-64 h-64 relative mx-auto">
                            <Image src={gobernador.imagen} alt={gobernador.nombre} layout="fill" objectFit="cover" className="rounded-full" />
                        </div>
                        <h2 className="font-bold mt-4">{gobernador.nombre}</h2>
                        <p>{gobernador.cargo}</p>
                    </div>
                </Link>
            </div>
        ))}
    </div>
    )
}
