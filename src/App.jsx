import NavBar from "./components/NavBar";
import "./index.css";
import { Flex, Spacer } from "@chakra-ui/react";
import ItemListContainer from "./components/ItemListContainer";
function App() {
  return (
    <>
      <NavBar post="fixed" />
      <Flex wrap="wrap" alignItems="center" justifyContent="center" pt="80px">
        <ItemListContainer greeting={"Producto a vender"} />
        <ItemListContainer greeting={"Producto a vender"} />
        <ItemListContainer greeting={"Producto a vender"} />
        <ItemListContainer greeting={"Producto a vender"} />
        <ItemListContainer greeting={"Producto a vender"} />
        <ItemListContainer greeting={"Producto a vender"} />
      </Flex>
    </>
  );
}

export default App;
