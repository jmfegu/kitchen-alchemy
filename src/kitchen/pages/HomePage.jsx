import { MainLayout } from "../../ui/layout/MainLayout";
import { LastRecipes, HeroSection, BestRating } from "../components";

export const HomePage = () => {
  return (
    <MainLayout>
      <HeroSection
        title="Bienvenidos a Kitchen Chemestriy"
        description="Empieza a buscar recetas ahora mismo"
      />
      <LastRecipes
        title="Añadidas recientemente"
        description="Descubre las últimas recetas añadidas por la comunidad"
        limitedBy="4"
      />
      <BestRating
        title="Las más aclamadas"
        description="Nuestras recetas más populares hasta la fecha"

      />
    </MainLayout>
  )
}

