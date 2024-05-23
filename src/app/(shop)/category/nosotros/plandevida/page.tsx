"use client"
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

export default function PlanDeVidaPage() {
    const [transcriptVisible, setTranscriptVisible] = useState(false);

    return (
        <div className="flex flex-wrap justify-center p-10 mt-30">
            <h1 className="w-full text-center mb-6 font-bold">Plan De Vida</h1>
            
            <div className="w-full flex justify-center">
                <Link href="/path/to/pdf" className="btn">
                    Descargar PLAN DE VIDA
                </Link>
            </div>

            <h2 className="w-full text-center mt-6 l font-bold">Podcast</h2>
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
<h2 className="w-full text-center mt-6  font-bold">Nuestros Videos</h2>
<div className="flex flex-wrap justify-center">
    {/* Reemplaza esto con tus videos */}
    {[
        { id: "uhSD96w1nrg", title: "Título 1", description: "Descripción" },
        { id: "iQWAiFBw2J4", title: "Título 2", description: "Descripción" },
        { id: "oX-4A2NYgl8", title: "Título 3", description: "Descripción" },
        { id: "qyFqdsFWyNk", title: "Título 4", description: "Descripción" },
        { id: "fT7rsuC5Kpo", title: "Título 5", description: "Descripción" },
        { id: "4ZMCP9vZfQE", title: "Título 6", description: "Descripción" },
        { id: "WFAR954xieA", title: "Título 7", description: "Descripción" },
        { id: "e_HJv8DqCbQ", title: "Título 8", description: "Descripción" },
        { id: "U4_r5JASbgs", title: "Título 9", description: "Descripción" },
        { id: "uzIXx4NOe9c", title: "Título 10", description: "Descripción" },
        { id: "ucR-pkJYDLA", title: "Título 11", description: "Descripción" },
        { id: "d_Fv5E81rPs", title: "Título 12", description: "Descripción" },
        { id: "ItEMf7jrYes", title: "Título 13", description: "Descripción" },
        { id: "mYkscJSJeLU", title: "Título 14", description: "Descripción" },
        { id: "SFgxHYOtbDI", title: "Título 15", description: "Descripción" },
        { id: "Jl7Z56YymkQ", title: "Título 16", description: "Descripción" },
        { id: "Cc0m-fApw6A", title: "Título 17", description: "Descripción" },

        // Agrega más videos aquí...
    ].map((video, i) => (
        <div key={i} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2 m-24" >
            <h2>{video.title}</h2>
            <iframe 
                width="450" 
                height="300" 
                src={`https://www.youtube.com/embed/${video.id}`} 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
            </iframe>
            <p>{video.description}</p>
        </div>
    ))}
</div>





</div>
     
    )
}