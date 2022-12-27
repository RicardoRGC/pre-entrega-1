import React from "react";
import { useDisclosure } from "@chakra-ui/react";
import CartWidget from "./CartWidget";
import CartShop from "./CartShop";
const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <>
      <div className="nav">
        <div className="logo">NH BLANQUERIA</div>
        <nav className="nav-link">
          <a href="" className="links">
            Nosotros
          </a>
          <a href="" className="links">
            Productos
          </a>
          <a href="" className="links">
            Caracteristicas
          </a>
          <a href="" className="links">
            Locales
          </a>
        </nav>
        <div className="icon">
          <CartWidget btnRef={btnRef} onOpen={onOpen}></CartWidget>
        </div>
      </div>

      <CartShop isOpen={isOpen} onOpen={onOpen} onClose={onClose}></CartShop>
    </>
  );
};

export default NavBar;
