import { Navigate, Route, Routes } from "react-router-dom"
import { ContactPage, HomePage, SearcherPage } from "./kitchen/pages/"

export const KitchenApp = () => {
  return (
    <Routes>
      <Route path="/" element={ <HomePage /> } />
      <Route path="/buscador" element={ <SearcherPage /> } />
      <Route path="/contacto" element={ <ContactPage /> } />
      <Route path="/*" element={ <Navigate to="/" /> } />
    </Routes>
  )
}
