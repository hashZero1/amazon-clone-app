import React,{useContext} from "react";
import DirectoryComponent from "./DirectoryComponent";
import uuid from "react-uuid";
import { ProductContext } from "../Context/ProductsContext";
function Home() {
    const products =useContext(ProductContext)
  return (
    <>
    <DirectoryComponent key={uuid()} products={products}/>
    </>

  )
}

export default Home;
