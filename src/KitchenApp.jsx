import { Route, Routes } from "react-router-dom";
import { SignIn, SignUp } from "./auth/pages/";
import { Page404, ContactPage, HomePage, SearcherPage } from "./kitchen/pages/"

export const KitchenApp = () => {
  return (
    <Routes>
      <Route path="/" element={ <HomePage /> } />
      <Route path="/buscador" element={ <SearcherPage /> } />
      <Route path="/contacto" element={ <ContactPage /> } />
      <Route path="/login" element={< SignIn />} />
      <Route path="/registro" element={< SignUp />} />
      <Route path="/*" element={ <Page404/> } />
    </Routes>
  )
}
