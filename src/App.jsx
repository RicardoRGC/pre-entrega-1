import NavBar from "./Routes/NavBar";
import "./index.css";
import ItemListContainer from "./Routes/ItemListContainer";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import ErrorPage from "./NotFound";
import Nosotros from "./Routes/Nosotros";

function App() {
  
  

  return (
    <>
      <BrowserRouter>
        <NavBar post="fixed" />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer  />}
          />
          <Route
            path="/:id"
            element={<ItemListContainer />}
          />
          <Route
            path="/nosotros"
            element={<Nosotros />}
          />
          <Route path="*" element={<ErrorPage />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
