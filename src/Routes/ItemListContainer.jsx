import { Flex } from "@chakra-ui/react";
import React from "react";
import ItemCard from "../components/ItemCard";
import TostadaItems from "../components/TostadaItems";
import { useEffect } from "react";
import { useState } from "react";
import { useParams} from "react-router-dom";


const ItemListContainer = () => {
  const params = useParams();
  const [datos, setDatos] = useState([]);
  console.log(JSON.stringify(params) === '{}')
  console.log(params)



  function handleFetch() {
    fetch(`https://fakestoreapi.com/products${JSON.stringify(params) === '{}'?'':`/category/${params.id}`}` )
    // fetch(`https://fakestoreapi.com/products` )
    .then((response) => response.json())
    .then((e) => setDatos(e))
    .catch(e=>console.error('ERROR',e))
  }
  
  
  useEffect(() => {
    handleFetch();
  }, [params]);
// console.log(datos)
  return (
    <>
    <Flex alignItems="center" justifyContent="center">

    <TostadaItems/>
    </Flex>
      <Flex wrap='wrap'  alignItems="center" justifyContent="center" pt="10px">

        {datos.map((greetingItem, index) => (
          <ItemCard key={greetingItem.id} producto={greetingItem}></ItemCard>
        ))}
      </Flex>
    </>
  );
};

export default ItemListContainer;
