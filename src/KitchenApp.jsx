import { Route, Routes } from "react-router-dom";
import { ContactPage, HomePage, SearcherPage } from "./kitchen/pages/"
import { Page404 } from "./kitchen/pages/Page404";

export const KitchenApp = () => {
  return (
    <Routes>
      <Route path="/" element={ <HomePage /> } />
      <Route path="/buscador" element={ <SearcherPage /> } />
      <Route path="/contacto" element={ <ContactPage /> } />
      <Route path="/*" element={ <Page404/> } />
    </Routes>
  )
}
