import { CarrouselGeneral } from "@/components";
import GobernadoresPage from "./category/nosotros/gobernadores/page";
import TecnicosPage from "./category/nosotros/equipotecnico/page";
export default function Home() {
  return (
    <>
      <CarrouselGeneral />
      <GobernadoresPage />
      <TecnicosPage />
    </>
  );
}
