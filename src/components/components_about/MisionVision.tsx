export default function MissionVision() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Título principal */}
        <h2 className="text-4xl font-bold text-center mb-8">
          Misión y Visión de la Comunidad Pijao
        </h2>

        {/* Contenedor de misión y visión */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Misión */}
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-indigo-600">
              Misión
            </h3>
            <p className="text-gray-700 leading-relaxed">
              La misión de nuestra comunidad Pijao de Ataco - Tolima - Colombia
              es revivir y fortalecer nuestra identidad cultural, promoviendo
              prácticas sostenibles en el tiempo con el respeto por la
              diversidad y la armonía con la naturaleza. Nuestro propósito
              central es salvaguardar tradiciones, idioma y costumbres, actuando
              como guardianes de un legado atemporal.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Queremos trascender y transferir nuestra cosmovisión a las
              generaciones futuras, fomentando el desarrollo sostenible y el
              bienestar de nuestro pueblo para un futuro próspero y equilibrado
              con el entorno, por tanto, buscamos proteger la tierra, buscando
              el desarrollo integral de nuestras comunidades y abogando por una
              educación inclusiva que abarque conocimientos ancestrales y
              modernos.
            </p>
          </div>

          {/* Visión */}
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-indigo-600">
              Visión
            </h3>
            <p className="text-gray-700 leading-relaxed">
              La visión de nuestra comunidad Pijao de Ataco - Tolima - Colombia
              para el 2050, es ser reconocido en el tiempo a nivel nacional e
              internacional por:
            </p>
            <ul className="text-gray-700 list-disc list-inside mt-4 space-y-2">
              <li>
                Ser una comunidad vibrante e inspiradora que ha forjado una
                identidad colectiva como herencia histórica y un legado sólido
                caracterizado por la armonía, la preservación cultural y el
                desarrollo sostenible, que refleje con dignidad nuestra historia
                y tradiciones.
              </li>
              <li>
                Tener una invaluable herencia cultural preservada, consolidando
                el sentido de orgullo y de pertenencia territorial, arraigada en
                la preservación consciente de nuestras raíces culturales, y
                guiados por el respeto por nuestra tierra ancestral.
              </li>
              <li>
                Promover la justicia social como pilar fundamental para
                garantizar equidad, prosperidad y bienestar.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
