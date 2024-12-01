import Carrousel from '../components/Carrousel';
import Maps from '../components/Maps';
import TeamSection from '../components/TeamSection';
export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center w-[90%] mx-auto">
      <div className="mt-0">
        <Carrousel />
      </div>
      <div className="mt-4">
        <TeamSection />
      </div>
      <div className="mt-4 w-[100%]">
        <Maps />
      </div>
    </div>
  );
}
