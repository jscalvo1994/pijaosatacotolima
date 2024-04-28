"use client"
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

export default function PlanDeVidaPage() {
    const [transcriptVisible, setTranscriptVisible] = useState(false);

    return (
        <div className="flex flex-wrap justify-center p-10 mt-30">
            <h1 className="w-full text-center mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl font-bold">Plan De Vida</h1>
            
            <div className="w-full flex justify-center">
                <Link href="/path/to/pdf" className="btn">
                    Descargar PLAN DE VIDA
                </Link>
            </div>

            <h2 className="w-full text-center mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">Podcast</h2>
            <div className="flex flex-wrap justify-center">
                {/* Reemplaza esto con tus podcasts */}
                {Array(15).fill(null).map((_, i) => (
                    <div key={i} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2">
                        <Image 
                            src="/path/to/image" 
                            alt="Descripción de la imagen" 
                            width={500} // reemplaza esto con el ancho de la imagen
                            height={300} // reemplaza esto con la altura de la imagen
                        />
                        <audio controls>
                            <source src={`/audiosmp3/audio${i+1}.mp3`} type="audio/mpeg" />
                            Tu navegador no soporta el elemento de audio.
                        </audio>
                        <button onClick={() => setTranscriptVisible(!transcriptVisible)}>Podcast Transcrito</button>
                        {transcriptVisible && <p>Transcripción del podcast...</p>}
                    </div>
                ))}
            </div>

            <h2 className="w-full text-center mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">Nuestros Videos</h2>
            <div className="flex flex-wrap justify-center">
                {/* Reemplaza esto con tus videos */}
                {Array(15).fill(null).map((_, i) => (
                    <div key={i} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2">
                        <h2>Título del video</h2>
                        <video controls>
                            <source src={`/videosmp4/video${i+1}.mp4`} type="video/mp4" />
                            Tu navegador no soporta el elemento de video.
                        </video>
                        <p>Fecha y resumen del video...</p>
                    </div>
                ))}
            </div>
        </div>
    )
}