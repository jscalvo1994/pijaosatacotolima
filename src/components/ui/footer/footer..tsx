import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai'
import Image from 'next/image'
import { MdLocationOn } from 'react-icons/md'
import { FaFlag } from 'react-icons/fa'
export const Footer = () => {
    return (
        <footer className=" bg-gray-500 text-white px-6 py-4">
            <div className="container mx-auto md:flex justify-between items-center">
                <div className="w-full md:w-1/3 mb-4 md:mb-0 md:order-1">

                    <h5 className="uppercase mb-2 font-bold text-2xl">Universidad Cooperativa de Colombia</h5>
                    <p className="text-sm">Johanna Trujillo Díaz  <span className="underline"> Pos-doc. PhD. MSc. Ing.</span></p>
                    <p className="text-sm font-bold"><AiOutlineMail size={20} className="inline" /> johanna.trujillo@campusucc.edu.co​​​​​</p>
                    <p className="text-sm font-bold">Facultad de Ciencias Económicas y Administrativas</p>
                    <p className="text-sm"><AiOutlinePhone  size={20}className="inline" /> Tel. (601) 7455655 Ext.</p>
                    <p className="text-sm"><MdLocationOn size={20} className="inline" /> Avenida Caracas 37-63 Bloque 4</p>
                    <p className="text-sm"><a href="http://www.ucc.edu.co" className="text-blue-500 hover:text-blue-700">www.ucc.edu.co</a></p>
                    <p className="text-sm"><MdLocationOn size={20} className="inline" /><a href="https://goo.gl/maps/..." className="text-blue-500 hover:text-blue-700">Bogotá</a> - <FaFlag className="inline rounded-full" /> Colombia</p>

                </div>
                <div className="w-full md:w-1/3 mb-4 md:mb-0 md:order-2">
                    <h5 className="uppercase mb-2 font-bold text-2xl">Reconocimiento: </h5>
                    <p className="text-sm"><span className="underline">MINCIENCIAS </span></p>
                    <p className="text-sm font-bold"><AiOutlineMail size={20} className="inline" /> Programa Orquídeas​​​​​</p>
                    <p className="text-sm font-bold">Desarrollo de plataforma</p>
                    <p className="text-sm"><AiOutlinePhone  size={20} className="inline" />digital para la construcción de paz - INV3513.</p>
                </div>
                <div className="w-full md:w-1/3 md:order-3">
                    <h5 className="uppercase mb-2 font-bold text-2xl">Comunidad Indígena Pijao</h5>
                    <p className="text-sm"><span className="underline">Gobernador Brisas de Ata</span></p>
                    <p className="text-sm font-bold"><MdLocationOn size={20}  className="inline" /> Ataco – Tolima – Colombia</p>
                    <p className="text-sm font-bold">Contactanos a travez de</p>
                    <p className="text-sm font-bold"><AiOutlineMail size={20} className="inline" /> johanna.trujillo@campusucc.edu.co​​​​​</p>
                </div>
            </div>
<div className="mt-4 border-t border-gray-400 pt-4 md:flex justify-center items-center">
    <div className="w-full md:w-1/2 lg:w-1/3 h-[500px] md:h-[250px] lg:h-[150px] relative flex justify-center items-center">
        <Image src="/imgs/Logos/footer.png" alt="Descripción de la imagen" layout="fill" objectFit="contain" />
    </div>
</div>
        </footer>
    )

}