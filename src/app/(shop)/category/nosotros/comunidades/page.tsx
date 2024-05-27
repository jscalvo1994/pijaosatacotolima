'use client'
import { useState } from 'react';
type ComunidadType = {
    comunidad: string;
    Titulo: string;
    Imagen: string;
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
import Image from 'next/image';
export default function Comunidades() {
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [selectedComunidad, setSelectedComunidad] = useState<ComunidadType | null>(null);
    const comunidades = [
        {
            "comunidad": 'comunidad-indigena indigena ico valle de anape',
            "Imagen": "/imgs/comunidades/comunidad01.jpg",
            "Titulo": "Origenes", "Descripcion": "En 1778, Alonso Fuenmayor, guerrero italiano, fundó Ataico a orillas del Río Saldaña en territorio de Anape. El cacique Ico, líder de la tribu anaca, vigilaba el río contra avalanchas. Las aldeas, ubicadas en la mesa de los hornitos, se dedicaban a minería, agricultura, caza y pesca. Sin embargo, la llegada de conquistadores trajo consigo la obligación de trabajar y la imposición de la evangelización católica, evidenciada en el primer bautizo en la parroquia San José de Ataico.",
            "Titulo1": "Organizacion", "Descripcion1": "Organizada por una asamblea general, la comunidad tiene un cabildo de ocho integrantes y una guardia indígena con cinco miembros. Diversos comités, como el de paz, reconciliación y gobierno juvenil, fortalecen el cabildo en derechos humanos y reglamento interno. El reglamento interno propio, creado en asambleas generales, se aprobó en 2017.",
            "Titulo2": "Desafios", "Descripcion2": "A pesar de no contar con tierras tituladas, la comunidad persiste en un lote de 2 Ha llamado Unidad Agrícola Comunitaria Indígena (UACIS). Aquí, desarrollan actividades como piscicultura y cría de cerdos. La comunidad lucha por pervivir a través de su cultura ancestral Pijao, manteniendo música, danza, y gastronomía tradicional ",
            "Titulo3": "Educacion y Salud:", "Descripcion3": "Los niños y jóvenes asisten a la Institución Educativa Técnica Martín Pomala, pero buscan fortalecer un sistema educativo propio. En salud, sabedores practican medicina tradicional cultivando plantas medicinales.",
            "Titulo4": "Vivienda", "Descripcion4": " La comunidad conserva viviendas tradicionales y modernas. El suministro de agua se realiza mediante aljibes, pero no es apta para consumo humano. Aunque cuentan con líneas eléctricas, los altos costos afectan las actividades agropecuarias. Se busca avanzar en energías alternativas como paneles solares",
            "Titulo5": "Territorio y Poblacion", "Descripcion5": "El territorio sagrado de Ico Valle de Anape abarca 6500 Ha al sur de Ataco, limitando con diversas zonas. La mayoría de los indígenas son arrendatarios en la parte suburbana, cerca del río. La comunidad consta de 67 familias y 588 personas, con un área rural de clima cálido"
        },
        {
            "comunidad": 'Comunidad Indígena Kalapicá Ambulú Territorio Sagrado',
            "Imagen": "/imgs/comunidades/comunidad02.jpg",
            "Titulo": "Origenes", "Descripcion": "La comunidad se llama Kalapicá Ambulú Territorio Sagrado, derivado de los caciques Cala y Pica. Está al sur de Ataco, limitando con diversas zonas: al oriente con Apone y Salado Negro, al occidente con Chaparral y el río Saldaña, al norte con Paipa y el sector urbano, y al sur con El Viso. El clima es cálido, con un máximo de 38°C.",
            "Titulo1": "Desafios", "Descripcion1": "El suministro de agua se realiza mediante aljibes y un acueducto en la quebrada Paipa. Sin embargo, hay deficiencias en construcción y mejoramiento de unidades sanitarias. La comunidad busca acceso a electricidad. Tambien se tiene en cuenta la Poblacion y vivienda. la comunidad tiene 324 personas, distribuidas sin tierras tituladas. Alrededor de 10 familias tienen viviendas de bahareque, algunas de material, y aproximadamente 20 carecen de vivienda propia.   ",
            "Titulo2": "Educacion", "Descripcion2": "Niños y jóvenes asisten a escuelas y colegios, pero la falta de un currículo propio y etnoeducadores afecta la preservación de enseñanzas ancestrales.. ",
            "Titulo3": "Economia:", "Descripcion3": "La comunidad practica la agricultura cultivando plátano, yuca, maíz, cachaco, arroz, café, cacao, entre otros. Además, crían animales como cerdos, pollos, gallinas, pavos y realizan actividades económicas como barequeo y minería artesanal. El 70% se dedica a la agricultura y el 30% a la minería artesanal.",
            "Titulo4": "Guardia Indigena", "Descripcion4": " La guardia indígena, compuesta por seis integrantes, busca aumentar y fortalecerse para proteger la cultura y el territorio. Comités activos incluyen trabajo y reconciliación, cumpliendo un mandato mayor reglamentado en 2017 con principios de autodeterminación, derechos, gobierno propio, entre otros",
            "Titulo5": "Salud", "Descripcion5": "En salud, se impulsa la medicina ancestral con médicos espirituales y plantas medicinales"
        },
        {
            "comunidad": 'Comunidad Indígena Mesa de Pole',
            "Imagen": "/imgs/comunidades/comunidad03.jpg",
            "Titulo": "Viviendas y Tierras", "Descripcion": "El 60% de las familias tiene viviendas de bahareque, mientras que el 20% cuenta con casas de material. Gestionan la titulación de tierras y buscan mejorar las condiciones de vida, incluyendo acceso a agua y electricidad. En educación, algunos niños asisten a instituciones locales y otros a la Institución Educativa Técnica Martín Pomala sede Mesa de Pole.",
            "Titulo1": "Tradiciones", "Descripcion1": "Las tradiciones y costumbres de Mesa de Pole, aunque no detalladas en la búsqueda, probablemente incluyan celebraciones, rituales y prácticas que fortalecen su identidad y cohesión social, vinculadas a su rica herencia cultural.",
            "Titulo2": "Eventos y Celebraciones", "Descripcion2": "La información específica sobre eventos y celebraciones no está disponible en los resultados de búsqueda. Se recomienda contactar a fuentes locales para obtener detalles sobre las festividades y prácticas específicas de la comunidad. ",
            "Titulo3": "Vestuario Tradicional y Colores:", "Descripcion3": "No se encuentra información sobre el vestuario típico o los colores tradicionales utilizados en celebraciones. Se sugiere consultar directamente a miembros de la comunidad para obtener una comprensión más completa de estos aspectos.",
            "Titulo4": "Características de la Comunidad:", "Descripcion4": " La comunidad, conformada por 22 familias y 119 personas, se distribuye en varias veredas. Su sistema productivo incluye agricultura, ganadería y minería artesanal, con énfasis en el cuidado de la madre tierra y la protección de la fauna y flora. Además, practican la pesca y la cacería para obtener alimentos del ecosistema circundante.",
            "Titulo5": "Demografía y Fortalezas", "Descripcion5": "La comunidad registra 60 hombres y 59 mujeres, con dos personas con discapacidades físicas y dos auditivas. Cuentan con recursos como sobanderos, parteras, médicos ancestrales y yerbateros, fortaleciendo la medicina ancestral. La organización comunitaria se basa en la asamblea general y el cabildo, con un reglamento interno propio."
        },
        {
            "comunidad": 'Comunidad Indígena Brisas del Atá',
            "Imagen": "/imgs/comunidades/comunidad01.jpg",
            "Titulo": "Origenes", "Descripcion": "La comunidad indígena Brisas del Atá se asienta en el territorio ancestral del cañón del Río Atá, distribuyéndose en diez veredas del corregimiento de Santiago Pérez, a unos 50 kilómetros del municipio de Ataco.",
            "Titulo1": "Origen Historico", "Descripcion1": "Denominada así por el cacique Ata que lideró el asentamiento indígena en la región, Brisas del Atá está compuesta por familias provenientes de los municipios de Natagaima, Coyaima y Ataco. El censo interno de 2019 registra 59 familias, con un total de 164 hombres y 166 mujeres.",
            "Titulo2": "Estructura", "Descripcion2": "Siguiendo la estructura común de las comunidades indígenas, Brisas del Atá cuenta con un Cabildo, Asamblea Mayor, guardias indígenas y comités. El Cabildo, conformado por ocho miembros, incluye representantes como el Gobernador(a), Gobernador suplente, alcalde(a), Comisario, Aguacil, secretario(a), Tesorero(a), y Fiscal. ",
            "Titulo3": " Caracterización de la Comunidad", "Descripcion3": "Rango de Edad: 0-14 (80 personas), 15-18 (34 personas), 19-59 (183 personas), 60+ (33 personas) Personas con Capacidades Diversas: 3 Total de Familias: 59",
            "Titulo4": "Cultura", "Descripcion4": " Las prácticas productivas incluyen el cultivo de pancoger, cría de animales, caza, pesca y minería artesanal. A nivel cultural, destacan la orfebrería, danzas, tejido de objetos tradicionales y la fabricación de utensilios de cocina. Prácticas medicinales tradicionales, como la labor de parteras y sobanderos, también forman parte de su herencia cultural.",
            "Titulo5": "Vivienda y Educación", "Descripcion5": "La mayoría de las viviendas se construyen en bahareque, palma y palmicha. En el ámbito educativo, los niños y jóvenes se desplazan a las escuelas locales, como La Fortaleza y la I.E.T Martín Pomala.   Proyecciones:La comunidad busca fortalecer la guardia indígena, capacitar a sus miembros y actualizar el reglamento interno. Además, se enfrentan a desafíos en el acceso a la educación universitaria. "
        },

        {
            "comunidad": 'Comunidad Indígena Ancestral Pijao Buenavista',
            "Imagen": "/imgs/comunidades/comunidad05.jpg",
            "Titulo": "Población", "Descripcion": "La Comunidad Indígena Pijao Ancestral Buenavista, descendiente del Cacique Nátaga de Natagaima, está compuesta por 88 parciales distribuidos en 26 familias, según el auto censo del Plan de Vida. Su cabildo se sitúa en el territorio ancestral de las quebradas de Monte Frio, Miraflores, Zamundo y Choncho, albergando sitios espirituales como el Cerro Filo Cadena, Mora y el Cementerio Canchimbo.",
            "Titulo1": "Caracterización Demográfica:", "Descripcion1": "Rango de Edad: 0-14 (31 personas), 15-18 (7 personas), 19-59 (40 personas), 60+ (10 personas) Personas con Capacidades Diversas: 2 Total de Familias: 26",
            "Titulo2": "Cultura", "Descripcion2": "Las dinámicas de vida que fortalecen la cultura ancestral Pijao incluyen danzas, música y el cultivo de semillas nativas. Las prácticas productivas se centran en el cultivo de pancoger, criadero de animales, minería artesanal y trueques entre comuneros. Prácticas culturales colectivas abarcan orfebrería, danzas, tejido de objetos tradicionales y la elaboración de bebidas tradicionales. ",
            "Titulo3": "Vivienda:", "Descripcion3": "Se reconocen prácticas medicinales como el trabajo de parteras, sobanderos y yerbateros tradicionales. Las viviendas son construidas en bahareque y palma. La comunidad reconoce la necesidad de preservar el territorio para conservar cosechas y lugares sagrados, lo cual implica potenciar los ingresos comunitarios y avanzar en la producción agrícola",
            "Titulo4": "Metas", "Descripcion4": " La comunidad enfrenta el desafío de reducir el deterioro del territorio y busca potenciar los ingresos comunitarios. Además, aspira a avanzar en la producción agrícola y a mantener vivas las prácticas culturales y medicinales tradicionales",
            "Titulo5": "Conclusiones", "Descripcion5": "La Comunidad Indígena Pijao Ancestral Buenavista demuestra un compromiso integral con la preservación cultural y ambiental. Su enfoque en actividades tradicionales, diversificación productiva y medicina ancestral refleja una adaptación consciente. Para alcanzar sus metas, requieren apoyo para fortalecer capacidades, acceso a recursos y reconocimiento legal. La colaboración interinstitucional será clave para salvaguardar su patrimonio y asegurar su autonomía y bienestar"
        },
        {
            "comunidad": 'Resguardo Indígena Pueblo Viejo Santa Rita La Mina',
            "Imagen": "/imgs/comunidades/comunidad06.jpg",
            "Titulo": "Origenes", "Descripcion": "El resguardo toma su nombre del asentamiento ancestral del Pueblo Pijao en el cerro de Santa Rita y su conexión con la extracción de Baritina en el territorio. Cultura: La comunidad se destaca en danzas, música y representación cultural, buscando proyección a niveles más amplios. Además, cuentan con fuentes hídricas y lugares sagrados que desean recuperar mediante mingas de intercambio para fortalecer la identidad indígena",
            "Titulo1": "Ubicación", "Descripcion1": "Situado al oriente del municipio de Ataco en un área montañosa, la población mayoritaria reside en Santa Rita La Mina, mientras que algunas familias están en La Vaga y el casco urbano. La comunidad cuenta con 122 hombres, 112 mujeres y 51 familias.",
            "Titulo2": "Recursos", "Descripcion2": "El resguardo posee 90 hectáreas gestionadas colectivamente para el cuidado del ganado, lagos con 4,000 alevinos y gallinas ponedoras. Se busca ampliar el resguardo para asegurar la soberanía alimentaria y preservar el territorio ancestral. ",
            "Titulo3": "Actividades Económicas::", "Descripcion3": "Las principales actividades incluyen el cultivo de café y plátano, tanto en áreas rurales como la minería artesanal en el casco urbano. La dieta se basa en plátano, yuca, maíz, y cría de animales. También practican la pesca de cuchas y sardinas en la quebrada Anchique.",
            "Titulo4": "Organización", "Descripcion4": " La asamblea general, con sus ocho miembros del cabildo, incluido el gobernador(a), lidera la estructura del resguardo. La guardia indígena, comités de paz y reconciliación, justicia, trabajo y gobierno juvenil complementan la organización. La comunidad cuenta con un reglamento interno construido en asambleas generales, que incluye derechos, deberes y funciones. Sin embargo, se reconoce la necesidad de actualizarlo y socializarlo para una mejor comprensión y aplicación.",
            "Titulo5": "Educación y Vivienda", "Descripcion5": "Los niños(as) y jóvenes asisten a la escuela I.E.T Martín Pomala, enfrentando desafíos de acceso en épocas de lluvia y sequía. Falta un enfoque diferencial en la educación, y se busca fortalecer el Programa de Alimentación Escolar (PAE) y gestionar transporte. Vivienda:Las casas de bahareque (barro, guadua y paja) se construyen en minga. Aunque 30 familias ya tienen casas de bahareque, 11 tienen casas en material, y 11 aún no cuentan con vivienda propia. La captación de agua se realiza mediante mangueras, pero la calidad no es apta para el consumo humano. "
        },
        {
            "comunidad": 'Comunidad Indígena Casa de Zinc',
            "Imagen": "/imgs/comunidades/comunidad07.jpg",
            "Titulo": "Orígenes", "Descripcion": "La comunidad Casa de Zinc se considera descendiente de los caciques Atá e Ico del Tolima grande, así como de los Natagaima y Coyaimas. Sus usos y costumbres han sido transmitidos a través de generaciones siguiendo la ley de origen del Pueblo Pijao.",
            "Titulo1": "Ubicación y Costumbres", "Descripcion1": "Situada en el sureste de Ataco, Tolima, y limítrofe con Aipe, Huila, y Gaitania en Planadas, Tolima. Se puede llegar por vía carreteable y caminos de herradura, aproximadamente a 144 km de Ibagué. La comunidad se ha reconocido con autonomía propia, defendiendo sus territorios, ritos y ceremonias en sitios sagrados. Tienen autonomía para fortalecer la producción de semillas orgánicas, medicina propia, usos y costumbres, y la recuperación de la lengua Pijao. ",
            "Titulo2": "Crecimiento", "Descripcion2": "Tras desplazamientos forzados por el conflicto armado, varias familias han retornado al territorio desde 2010. Actualmente, cuentan con 50 familias y 134 personas, buscando el restablecimiento cultural, organizativo y ancestral. ",
            "Titulo3": "Caracterización de la Comunidad::", "Descripcion3": "Rango de Edad: 0-14 (12 personas), 15-18 (12 personas), 19-59 (108 personas), 60+ (12 personas)Personas con Capacidades Diversas: 3 Total de Familias: 64",
            "Titulo4": "Organización", "Descripcion4": "  La guardia indígena busca expandirse y fortalecerse para proteger el territorio y cuidar a los líderes. Comités activos incluyen el comité de mujeres enfocado en género y actividades para mujeres, niñas y jóvenes, y el comité social reconstruyendo el tejido social comunitario. La asamblea general y el cabildo son la máxima autoridad con un reglamento interno establecido.",
            "Titulo5": "Economía", "Descripcion5": "La principal fuente económica es el cultivo, producción y comercialización del café. Además, cuentan con cachaco, árboles frutales, cerdos, gallinas, y buscan impulsar la apicultura. También buscan fortalecer las danzas y la música, transmitiendo saberes de los mayores y mayoras  Plan de vida: Participan activamente en la construcción del Plan de Vida, enfocándose en el desarrollo sostenible que equilibre su pervivencia física, cultural y política. La apicultura, la preservación de tradiciones y la transmisión de conocimientos son parte integral de su visión de futuro "
        },
        {
            "comunidad": 'Resguardo Pijao de Beltrán',
            "Imagen": "/imgs/comunidades/comunidad08.jpg",
            "Titulo": " Ubicación ", "Descripcion": "El Resguardo Pijao de Beltrán se encuentra en el nororiente del municipio de Ataco, limitando con Natacoi Pijao al oriente, Balsillas al occidente, Guadualito al norte y Pueblo Viejo Santa Rita La Mina al sur.",
            "Titulo1": "Población", "Descripcion1": "Tierra Titulada: 200 Há (Finca San Antonio) Uso de la Tierra: Ganadería y cultivos de pan coger (plátano, yuca, cacao, entre otros) Población Actual: 303 personas en 37 familias",
            "Titulo2": "Organización", "Descripcion2": "Estructura Organizativa: Asamblea general y Cabildo (8 miembros) Guardia Indígena: Compuesta por mayores, requiere fortalecimiento y dotación Comités Activos: Paz y reconciliación, justicia para el buen vivir de las familias",
            "Titulo3": "Vivienda:", "Descripcion3": "Tipo de Viviendas: 50% en bahareque, 30% casas construidas, 20% en tabla y plástico Suministro de Agua: Nacederos conducidos por mangueras, necesidad de agua potabilizada",
            "Titulo4": "Educacion", "Descripcion4": " Instituciones Educativas: Asisten a la Institución Educativa Técnica Martín Pomala (sedes Beltrán y Balsillas) Desafíos Educativos: Fortalecer el enfoque diferencial, mejorar el PAE y garantizar acceso y transporte escolar",
            "Titulo5": "Tradicion", "Descripcion5": "Prácticas Culturales y Productivas: Danzas, música, cultivo de semillas nativas, minería artesanal, trueques Prácticas Medicinales: Uso de plantas medicinales, parteras, sobanderos, y yerbateros tradicionales Desafío Cultural: Transmitir saberes de médicos ancestrales y participar en eventos culturales"
        },
        {
            "comunidad": 'Comunidad Indígena Cacique de Agua Dulce',
            "Imagen": "/imgs/comunidades/comunidad09.jpg",
            "Titulo": "Origenes", "Descripcion": "Los ancestros indígenas Pijaos, asentados cerca del río Atá desde el año 400, dieron origen a la comunidad Cacique de Agua Dulce. La denominación proviene de un yacimiento de agua agridulce descubierto durante sus movilizaciones milenarias para trueques con los indígenas Nasa.",
            "Titulo1": "Tradiciones Ancestrale", "Descripcion1": "La comunidad preserva tradiciones culturales y ancestrales Pijaos, destacándose en el cultivo del maíz para procesar la chicha, bebida ancestral protagonista de mingas e intercambios de saberes. Aunque no tienen tierras tituladas, luchan por sostener sus prácticas.",
            "Titulo2": "Organización y Gobierno", "Descripcion2": "El gobierno está a cargo del cabildo, elegido por la asamblea general, con respaldo de comités y un reglamento interno. A nivel nacional, cuentan con el respaldo de Autoridades Tradicionales Gobierno Mayor y regionalmente de la Asociación de Resguardos Indígenas del Tolima (ARIT)",
            "Titulo3": "Caracterización Demográfica:", "Descripcion3": "La comunidad, organizada en 50 familias, cuenta con una población diversa, distribuida en diferentes rangos de edad. La actualización y promulgación del reglamento interno es una necesidad pendiente.",
            "Titulo4": "Actividades Económicas", "Descripcion4": " Además de la agricultura, la comunidad se involucra en escultura, diseño de artesanías, tejidos, bisutería y procesamiento de chicha. Estas actividades no solo generan ingresos, sino que también mantienen vivas las tradiciones culturales.",
            "Titulo5": "Educación y Vivienda", "Descripcion5": "Aunque los niños y jóvenes asisten a la escuela veredal, la falta de enfoque diferencial y etnoeducadores debilita la preservación de la identidad cultural. En salud, cuentan con una EPS propia y conocimientos de sabedores sobre el uso medicinal de hierbas, Vivienda: La comunidad construye en minga viviendas tradicionales, algunas de las cuales necesitan mantenimiento. El suministro de agua se realiza mediante chorros, quebradas y nacederos, pero se enfrentan a desafíos en el saneamiento básico. "
        },
    ];
    return (
        <div className="flex flex-wrap justify-center">
            <h1 className="w-full text-center font-bold">Comunidades</h1>
            {selectedComunidad === null ? (
                comunidades.map((comunidad, index) => (
                    <div key={index} className="w-full sm:w-1/3 m-1 text-center">
                        <h2 onClick={() => setSelectedComunidad(comunidad)}>{comunidad.comunidad}</h2>
                        <div className="flex items-center justify-center pb-8">
                        
                        <Image onClick={() => setSelectedComunidad(comunidad)} src={`${comunidad.Imagen}`} alt="Descripción de la imagen" objectFit="cover" className='rounded' height={200} width={200}/>
                        </div>
                    </div>
                ))
            ) :
                (

                    <>

                        <div>
                            <h1 className='my-2.5 text-center mx-auto antialiased font-bold text-xl'>{selectedComunidad.comunidad}</h1>
                            <h2 className="font-bold"></h2>
                            <div className="flex flex-wrap">
                                <div className="w-full md:w-1/2">
                                    <div className="flex items-center justify-center pb-8">
                                        <div className="w-1/2 h-[500px] relative" onClick={() => setIsFullscreen(true)}>
                                            <Image src={`${selectedComunidad.Imagen}`} alt="Descripción de la imagen" layout="fill" objectFit="cover" className='rounded' />
                                        </div>
                                    </div>

                                    {isFullscreen && (
                                     <div className="fixed top-0 left-0 w-screen h-screen z-50 flex items-center justify-center" onClick={() => setIsFullscreen(false)}>
                                     <Image src={`${selectedComunidad.Imagen}`} alt="Descripción de la imagen" layout="fill" objectFit="contain" className='rounded' />
                                   </div>
                                    )}
                                </div>
                                <div className="w-full md:w-1/2">

                                    <div className="w-1/2 p-4">

                                        <div>
                                            <h3 className="font-bold">{selectedComunidad.Titulo}:</h3>
                                            <p className="my-1">{selectedComunidad.Descripcion}</p>

                                            <h3 className="font-bold">{selectedComunidad.Titulo2}:</h3>
                                            <p className="my-1">{selectedComunidad.Descripcion2}</p>

                                            <h3 className="font-bold">{selectedComunidad.Titulo3}:</h3>
                                            <p className="my-1">{selectedComunidad.Descripcion3}</p>

                                            <h3 className="font-bold">{selectedComunidad.Titulo4}:</h3>
                                            <p className="my-1">{selectedComunidad.Descripcion4}</p>

                                            <h3 className="font-bold">{selectedComunidad.Titulo5}:</h3>
                                            <p className="my-1">{selectedComunidad.Descripcion5}</p>
                                        </div>
                                        <button onClick={() => setSelectedComunidad(null)} className="bg-blue-500 rounded-full px-4 py-2 text-white">Volver</button>
                                    </div>
                                </div>
                            </div>


                        </div>

                    </>
                )}
        </div>
    );
}