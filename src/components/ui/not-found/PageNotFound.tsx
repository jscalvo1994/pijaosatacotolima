import { titleFonts } from "@/config/fonts"
import Link from "next/link"
import Image from "next/image"
export const PageNotFound = () => {
 
    return (
        <div className="flex flex-col-reverse md:flex-row h-[800px] w-full justify-center items-center align-middle">
           <div className="text-center px-5 mx-5">
            <h2 className= {`${titleFonts.className} antialiased text-9xl`}>404</h2>
            <p className="font-semibold text-xl">Whoooops Lo sentimos, la pagina que estas buscando no se encuentra disponible</p>
            <p className="font-light">
                <span>Puedes Regresar al</span>
                <Link 
                href="/"
                className="font-normal hover:underline transition-all text-blue-700">
                inicio
                </Link>
            </p>
           </div>



           
           <div className="px-5 mx-5">
            <Image 
            src="/imgs/next.svg"
            alt="404 Not Found Image"
            className="p-5 sm:p-0"
            width={550}
            height={550}
            /> 
           </div>


        </div>
    )
}
