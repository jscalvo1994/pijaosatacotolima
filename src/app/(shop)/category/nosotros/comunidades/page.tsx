'use client'
import { useState } from 'react';
type ComunidadType = {
    comunidad: string;
    Titulo: string;
    Descripcion: string;
    Titulo1: string;
    Descripcion1: string;
    Titulo2: string;
    Descripcion2: string;
    Titulo3: string;
    Descripcion3: string;
    Titulo4: string;
    Descripcion4: string;
    Titulo5: string;
    Descripcion5: string;
  };
export default function Comunidades() {
    const [selectedComunidad, setSelectedComunidad] = useState<ComunidadType | null>(null);
    const comunidades = [
        {
            "comunidad": 'comunidad-indigena-ico-valle-de-anape',
            "Titulo": "Origenes", "Descripcion": "Origen y ubicacion xxxxxx",
            "Titulo1": "Tradiciones", "Descripcion1": "descripcion de la tradicion",
            "Titulo2": "Educacion", "Descripcion2": "Descripcion de la eduacacion y salud ",
            "Titulo3": "Economia:", "Descripcion3": "Descripcion economica",
            "Titulo4": "Vivienda", "Descripcion4": " Desctripcion de la vivienda",
            "Titulo5": "Recursos", "Descripcion5": "Descripcion de los recursos"
        },
        {
            "comunidad": 'Comunidad Indígena Kalapicá Ambulú Territorio Sagrado',
            "Titulo": "Origenes", "Descripcion": "Origen y ubicacion xxxxxx",
            "Titulo1": "Tradiciones", "Descripcion1": "descripcion de la tradicion",
            "Titulo2": "Educacion", "Descripcion2": "Descripcion de la eduacacion y salud ",
            "Titulo3": "Economia:", "Descripcion3": "Descripcion economica",
            "Titulo4": "Vivienda", "Descripcion4": " Desctripcion de la vivienda",
            "Titulo5": "Recursos", "Descripcion5": "Descripcion de los recursos"
        },
        {
            "comunidad": 'Comunidad Indígena Mesa de Pole',
            "Titulo": "Origenes", "Descripcion": "Origen y ubicacion xxxxxx",
            "Titulo1": "Tradiciones", "Descripcion1": "descripcion de la tradicion",
            "Titulo2": "Educacion", "Descripcion2": "Descripcion de la eduacacion y salud ",
            "Titulo3": "Economia:", "Descripcion3": "Descripcion economica",
            "Titulo4": "Vivienda", "Descripcion4": " Desctripcion de la vivienda",
            "Titulo5": "Recursos", "Descripcion5": "Descripcion de los recursos"
        },
        {
            "comunidad": 'Comunidad Indígena Brisas del Atá',
            "Titulo": "Origenes", "Descripcion": "Origen y ubicacion xxxxxx",
            "Titulo1": "Tradiciones", "Descripcion1": "descripcion de la tradicion",
            "Titulo2": "Educacion", "Descripcion2": "Descripcion de la eduacacion y salud ",
            "Titulo3": "Economia:", "Descripcion3": "Descripcion economica",
            "Titulo4": "Vivienda", "Descripcion4": " Desctripcion de la vivienda",
            "Titulo5": "Recursos", "Descripcion5": "Descripcion de los recursos"
        },
        {
            "comunidad": 'Comunidad Indígena Ancestral Pijao Buenavista',
            "Titulo": "Origenes", "Descripcion": "Origen y ubicacion xxxxxx",
            "Titulo1": "Tradiciones", "Descripcion1": "descripcion de la tradicion",
            "Titulo2": "Educacion", "Descripcion2": "Descripcion de la eduacacion y salud ",
            "Titulo3": "Economia:", "Descripcion3": "Descripcion economica",
            "Titulo4": "Vivienda", "Descripcion4": " Desctripcion de la vivienda",
            "Titulo5": "Recursos", "Descripcion5": "Descripcion de los recursos"
        },
        {
            "comunidad": 'Resguardo Indígena Pueblo Viejo Santa Rita La Mina',
            "Titulo": "Origenes", "Descripcion": "Origen y ubicacion xxxxxx",
            "Titulo1": "Tradiciones", "Descripcion1": "descripcion de la tradicion",
            "Titulo2": "Educacion", "Descripcion2": "Descripcion de la eduacacion y salud ",
            "Titulo3": "Economia:", "Descripcion3": "Descripcion economica",
            "Titulo4": "Vivienda", "Descripcion4": " Desctripcion de la vivienda",
            "Titulo5": "Recursos", "Descripcion5": "Descripcion de los recursos"
        },
        {
            "comunidad": 'Comunidad Indígena Casa de Zinc',
            "Titulo": "Origenes", "Descripcion": "Origen y ubicacion xxxxxx",
            "Titulo1": "Tradiciones", "Descripcion1": "descripcion de la tradicion",
            "Titulo2": "Educacion", "Descripcion2": "Descripcion de la eduacacion y salud ",
            "Titulo3": "Economia:", "Descripcion3": "Descripcion economica",
            "Titulo4": "Vivienda", "Descripcion4": " Desctripcion de la vivienda",
            "Titulo5": "Recursos", "Descripcion5": "Descripcion de los recursos"
        },
        {
            "comunidad":  'Resguardo Pijao de Beltrán',
            "Titulo": "Origenes", "Descripcion": "Origen y ubicacion xxxxxx",
            "Titulo1": "Tradiciones", "Descripcion1": "descripcion de la tradicion",
            "Titulo2": "Educacion", "Descripcion2": "Descripcion de la eduacacion y salud ",
            "Titulo3": "Economia:", "Descripcion3": "Descripcion economica",
            "Titulo4": "Vivienda", "Descripcion4": " Desctripcion de la vivienda",
            "Titulo5": "Recursos", "Descripcion5": "Descripcion de los recursos"
        },
        {
            "comunidad":   'Comunidad Indígena Cacique de Agua Dulce',
            "Titulo": "Origenes", "Descripcion": "Origen y ubicacion xxxxxx",
            "Titulo1": "Tradiciones", "Descripcion1": "descripcion de la tradicion",
            "Titulo2": "Educacion", "Descripcion2": "Descripcion de la eduacacion y salud ",
            "Titulo3": "Economia:", "Descripcion3": "Descripcion economica",
            "Titulo4": "Vivienda", "Descripcion4": " Desctripcion de la vivienda",
            "Titulo5": "Recursos", "Descripcion5": "Descripcion de los recursos"
        },





        
    
       
       
    ];

    return (
        <div >
            <h1>Comunidades</h1>
            {selectedComunidad === null ? (
                comunidades.map((comunidad, index) => (
                    <div key={index} className="bg-red-500" >
                        <h2 onClick={() => setSelectedComunidad(comunidad)}>{comunidad.comunidad}</h2>
                    </div>
                ))
            ) : (
                <div className="bg-red-500">
                    <h2>{selectedComunidad.comunidad}</h2>
                    <p>{selectedComunidad.Titulo}: {selectedComunidad.Descripcion}</p>
                    <p>{selectedComunidad.Titulo1}: {selectedComunidad.Descripcion1}</p>
                    <p>{selectedComunidad.Titulo2}: {selectedComunidad.Descripcion2}</p>
                    <p>{selectedComunidad.Titulo3}: {selectedComunidad.Descripcion3}</p>
                    <p>{selectedComunidad.Titulo4}: {selectedComunidad.Descripcion4}</p>
                    <p>{selectedComunidad.Titulo5}: {selectedComunidad.Descripcion5}</p>
                    <button onClick={() => setSelectedComunidad(null)}>Volver</button>
                </div>
            )}
        </div>
    );
}