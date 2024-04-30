import { CarrouselGeneral } from "@/components";
import GobernadoresPage from "./category/nosotros/gobernadores/page";
import UbicacionPage from "./category/nosotros/ubicacion/page";
export default function Home() {
  return (
    <>
      <CarrouselGeneral />
      <GobernadoresPage /> 
      <UbicacionPage />
    </>
  );
}
