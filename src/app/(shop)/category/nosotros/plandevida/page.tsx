"use client"
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

export default function PlanDeVidaPage() {
    const [transcriptVisible, setTranscriptVisible] = useState(false);

    return (
        <div className="flex flex-wrap justify-center p-10 mt-30">
            
<h2 className="w-full text-center mt-6  font-bold">Nuestros Videos</h2>
<div className="container mx-auto md:flex items-center,flex flex-wrap justify-center">
    {/* Reemplaza esto con tus videos */}
    {[
        { id: "Jl7Z56YymkQ", title: "Clase 1 MGA", description: " Esta es la descripcion breve " },
        { id: "iQWAiFBw2J4", title: "Clase 2 MGA", description: "Descripción" },
        { id: "oX-4A2NYgl8", title: "Clase 3", description: "Descripción" },
        { id: "qyFqdsFWyNk", title: "Clase 4", description: "Descripción" },
        { id: "fT7rsuC5Kpo", title: "Clase 5", description: "Descripción" },
        { id: "4ZMCP9vZfQE", title: "Clase 6", description: "Descripción" },
        { id: "WFAR954xieA", title: "Clase 7", description: "Descripción" },
        { id: "e_HJv8DqCbQ", title: "Clase 8", description: "Descripción" },
        { id: "U4_r5JASbgs", title: "Clase 9", description: "Descripción" },
        { id: "uzIXx4NOe9c", title: "Clase 10", description: "Descripción" },
        { id: "ucR-pkJYDLA", title: "Clase 11", description: "Descripción" },
        { id: "d_Fv5E81rPs", title: "Clase 12", description: "Descripción" },
        { id: "ItEMf7jrYes", title: "Clase 13", description: "Descripción" },
        { id: "mYkscJSJeLU", title: "Clase 14", description: "Descripción" },
        { id: "SFgxHYOtbDI", title: "Clase 15", description: "Descripción" },
        { id: "uhSD96w1nrg", title: "MGA presentacion", description: "Descripción" },  
        { id: "Cc0m-fApw6A", title: "Título 17", description: "Descripción" },

        // Agrega más videos aquí...
    ].map((video, i) => (
        <div key={i} className="w-75% sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2 m-12" >
            <h2>{video.title}</h2>
            <iframe 
                width="300" 
                height="300" 
                src={`https://www.youtube.com/embed/${video.id}`} 
                title="YouTube video player" 
                allowFullScreen>
            </iframe>
            <p>{video.description}</p>
        </div>
    ))}
</div>





</div>
     
    )
}