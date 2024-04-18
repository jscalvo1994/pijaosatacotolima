'use client'
import { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Image from "next/image";
export const CarrouselGeneral = () => {
    const images = ['/imgs/CarouselImgs/Fot1.jpg', '/imgs/CarouselImgs/Fot2.jpg', '/imgs/CarouselImgs/Fot3.jpg', '/imgs/CarouselImgs/Fot4.jpg', '/imgs/CarouselImgs/Fot5.jpg'];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((currentImageIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="w-full ">
            <div className='h-2/4 flex flex-col items-center justify-center'>
                <div className="flex justify-center items-center">

                    <div className="rounded-lg overflow-hidden">
                        <Image src={images[currentImageIndex]} alt="imagenes" layout="responsive" objectFit="contain" width={500} height={500} />
                    </div>

                </div>
                <div className="flex mt-4">
                    <button type="button" onClick={prevImage} className="absolute left-0 m-4  text-black">
                        <FaArrowLeft size={32} />-
                    </button>
                    {images.map((image, index) => (
                        <div key={index} className={`h-4 w-4 mx-2 rounded-full ${index === currentImageIndex ? 'bg-white' : 'bg-gray-500'}`}></div>
                    ))}
                    <button type="button" onClick={nextImage} className="absolute right-0 m-4  text-black">
                        <FaArrowRight size={32} />-
                    </button>
                </div>
            </div>

            <div className="mt-10 p-10 text-center">
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl font-bold">Somos una comunidad indígena Pijao</h2>
                <p className="mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl">
                    ubicada en Ataco, Tolima, Colombia; que produce y comercializa
                    productos perecederos y de turismo ancestral.
                </p>
            </div>

        </div>
    );
};