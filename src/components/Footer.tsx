import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaGlobe } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Columna 1 */}
        <div>
          <h3 className="text-lg font-bold mb-4">
            Universidad Cooperativa de Colombia
          </h3>
          <ul className="space-y-2">
            <li>Johanna Trujillo Díaz Pos-doc. PhD. MSc. Ing.</li>
            <li className="flex items-center">
              <FaEnvelope className="mr-2" />
              johanna.trujillo@campusucc.edu.co​​​​​
            </li>
            <li>Facultad de Ciencias Económicas y Administrativas</li>
            <li className="flex items-center">
              <FaPhone className="mr-2" />
              Tel. (601) 7455655 Ext.
            </li>
            <li className="flex items-center">
              <FaMapMarkerAlt className="mr-2" />
              Avenida Caracas 37-63 Bloque 4
            </li>
            <li className="flex items-center">
              <FaGlobe className="mr-2" />
              <a
                href="https://www.ucc.edu.co"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                www.ucc.edu.co
              </a>
            </li>
            <li>Bogotá - Colombia</li>
          </ul>
        </div>

        {/* Columna 2 */}
        <div>
          <h3 className="text-lg font-bold mb-4">Reconocimiento</h3>
          <ul className="space-y-2">
            <li>
              <strong>MINCIENCIAS</strong>
            </li>
            <li>Programa Orquídeas​​​​​</li>
            <li>
              Desarrollo de plataforma digital para la construcción de paz -
              INV3513.
            </li>
          </ul>
        </div>

        {/* Columna 3 */}
        <div>
          <h3 className="text-lg font-bold mb-4">Comunidad Indígena Pijao</h3>
          <ul className="space-y-2">
            <li>Gobernador Brisas de Ata</li>
            <li>Ataco – Tolima – Colombia</li>
            <li>Contáctanos a través de</li>
            <li className="flex items-center">
              <FaEnvelope className="mr-2" />
              johanna.trujillo@campusucc.edu.co​​​​​
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
