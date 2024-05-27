import Link from 'next/link'
import Image from 'next/image'

export default function GobernadoresPage() {
    // Aquí puedes poner tus datos
    const gobernadores = [
        { nombre: 'Rosmina Luna Castañeda', cargo: 'Gobernadora comunidad indígena Mesa de Pole', imagen: '/imgs/Fotos_Perfil/perfil1.webp' },
        { nombre: 'Fernando Capera Aroca', cargo:' Gobernador comunidad indígena Ico Valle de ANAPE', imagen: '/imgs/Fotos_Perfil/perfil2-6.webp' },
        { nombre: ' Diana Maritza Figueroa Ortiz', cargo:' Gobernadora comunidad indígena Kalapica Ambulu Territorio Sagrado ', imagen: '/imgs/Fotos_Perfil/perfil3.webp' },
        { nombre: ' Guillermo Martínez', cargo:'Gobernador comunidad indígena cacique Agua Dulce ', imagen: '/imgs/Fotos_Perfil/perfil4.webp' },
        { nombre: 'Inelda Bustos Acosta ', cargo:' Gobernadora comunidad resguardo indígena Santarita la Mina', imagen: '/imgs/Fotos_Perfil/perfil5.webp' },
        { nombre: ' Efren Zambrano Jimenez', cargo:'Gobernador comunidad indígena Casa de Zinc ', imagen: '/imgs/Fotos_Perfil/perfil2-6.webp' },
        { nombre: ' Jonathan Jiménez Tovar', cargo:'Gobernador comunidad indígena Brisas de Ata ', imagen: '/imgs/Fotos_Perfil/perfil7.webp' },
        { nombre: 'Jair González Muñoz ', cargo:'Gobernador comunidad indígena Ancestral Pijao Buenavista', imagen: '/imgs/Fotos_Perfil/perfil8.webp' },
        { nombre: ' Marcelino Murcia', cargo:'Gobernador comunidad resguardo indígena Beltrán ', imagen: '/imgs/Fotos_Perfil/perfil9.webp' },
        // Agrega más gobernadores según sea necesario
    ]

    return (
        <div className="container mx-auto md:flex items-center, flex flex-wrap justify-center p-10 mt-30">
        <h1 className="w-full text-center mb-6 font-bold">Gobernadores</h1>
        {gobernadores.map((gobernador, index) => (
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4" key={index} >
                <Link href="/">
                    <div className="text-center">
                    <div className="w-64 h-64 relative mx-auto border-3 border-black rounded-full overflow-hidden">
                            <Image src={gobernador.imagen} alt={gobernador.nombre} layout="fill" objectFit="cover" className="rounded-full" />
                        </div>
                        <h2 className="font-bold mt-4">{gobernador.nombre}</h2>
                        <p className="">{gobernador.cargo}</p>
                    </div>
                </Link>
            </div>
        ))}
    </div>
    )
}
