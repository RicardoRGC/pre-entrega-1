import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const CartWidget = ({ btnRef, onOpen }) => {
  return (
    <>
      <button ref={btnRef} onClick={onOpen}>
        <h3
          style={{
            fontSize: "9px",
            border: "solid 2px",
            borderColor: "blueviolet",
            borderRadius: "100%",
            width: "16px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "bold",
          }}
        >
          {5}
        </h3>
        <AiOutlineShoppingCart
          color="blueviolet"
          // style={{ color: "blueviolet" }}
          size={"2em"}
        />
      </button>
    </>
  );
};

export default CartWidget;
