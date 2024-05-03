import { titleFonts } from '@/config/fonts';
import Link from 'next/link';
export default function Geografia() {

  return (
    <>
    <h1 className={`${titleFonts.className} text-2xl mb-5`}>Geografia</h1>
    <div className="flex items-center my-5">
                        <div className="flex-1 border-t border-gray-500"></div>
                        <div className="px-2 text-gray-800">Geográfica</div>
                        <div className="flex-1 border-t border-gray-500"></div>
                    </div>


                    <label htmlFor="cabildo">Cabildo </label>
                    <select
                        id='cabildo'
                        className="px-5 py-2 border bg-gray-200 rounded mb-5"
                        defaultValue="">
                        <option value="" disabled>Selecciona una opción</option>
                        <option value="01">Ancestral Pijao Buenavista</option>
                        <option value="02">Brizas de Ata</option>
                        <option value="03">Caciques de Agua Dulce</option>
                        <option value="04">Casa de zinc</option>
                        <option value="05">Ico Valle de Anape</option>
                        <option value="06">Kalapica Ambulu Territorio Sagrado</option>
                        <option value="07">Resguardo Pijao Beltran</option>
                        <option value="08">Respaldo Pueblo Viejo</option>
                        <option value="09">Santarita La Mina</option>
                        <option value="10">Ninguna</option>

                    </select>


                    <label htmlFor="predio">Nombre del predio o Finca donde vive</label>
                    <input
                        id='predio'
                        pattern="\d*"
                        placeholder='Ej: ejemplo@mail.com'
                        className="px-5 py-2 border bg-gray-200 rounded mb-5 form-input"
                        type="text" />


                    <label htmlFor="tipovivienda">Que tipo de relacion tiene con la propiedad donde vive </label>
                    <select
                        id='tipovivienda'
                        className="px-5 py-2 border bg-gray-200 rounded mb-5"
                        defaultValue="">
                        <option value="" disabled>Selecciona una opción</option>
                        <option value="01">Dueño (Propietario)</option>
                        <option value="02">Arrendado </option>
                        {/*Revisar estas dos ultimas opciones para saber si no significan lo mismo que las de arriba */}
                        <option value="03">Tenedor</option>
                        <option value="04">Poseedor</option>
                        <option value="05">Otro</option>
                        <option value="10">Ninguna</option>

                    </select>
                    {/**Fin segunda seccion */}
    </>
  )
}