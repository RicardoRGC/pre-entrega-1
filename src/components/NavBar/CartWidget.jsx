import { Avatar, AvatarBadge, Stack } from "@chakra-ui/react";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const CartWidget = ({ btnRef, onOpen }) => {
  return (
    <>
     
      <button style={{ position: "relative" }} ref={btnRef} onClick={onOpen}>
      <Stack direction="row" spacing={4} >
        <Avatar bgColor='white' 
          icon={
            <AiOutlineShoppingCart
              color="blueviolet"
              // style={{ color: "blueviolet" }}
              size={"2em"}
            />
          }
        >
          
          <AvatarBadge
            borderColor="papayawhip"

            bg="blueviolet"
            boxSize="1.3em"
            fontSize='1em'
            >
              1
            </AvatarBadge>
        </Avatar>
      </Stack>
      </button>
    </>
  );
};

export default CartWidget;
