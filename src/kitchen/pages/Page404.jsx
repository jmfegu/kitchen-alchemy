import { Link } from "react-router-dom";
import { MainLayout } from "../../theme/layout/MainLayout";

export const Page404 = () => {
  return (
    <MainLayout>
      <div>Página no encontrada</div>
      <Link to="/">Volver a la home</Link>
    </MainLayout>
  )
}
