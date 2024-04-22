import { CarrouselGeneral } from "@/components";
import GobernadoresPage from "./category/nosotros/gobernadores/page";
import TecnicosPage from "./category/nosotros/equipotecnico/page";
import UbicacionPage from "./category/nosotros/ubicacion/page";
export default function Home() {
  return (
    <>
      <CarrouselGeneral />
      <GobernadoresPage />
      <TecnicosPage />
      <UbicacionPage />
    </>
  );
}
