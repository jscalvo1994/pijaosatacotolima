import CardGroup from '../../components/components_about/CardGrup';
import CardGroup2 from '../../components/components_about/CardGrup2';
import MissionVision from '../../components/components_about/MisionVision';
export default function about() {
  return (
    <div className="flex flex-col items-center justify-center w-[90%] mx-auto">
      <div className="mt-0">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Comunidad Pijao de Ataco – Tolima - Colombia
        </h1>
        <MissionVision />
      </div>
      <div className="mt-4">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Principios Fundamentales
        </h1>
        <CardGroup />
      </div>
      <div className="mt-4">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Valores Fundamentales
        </h1>
        <CardGroup2 />
      </div>
    </div>
  );
}
