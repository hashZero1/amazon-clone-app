import { createContext } from "react";
import { Products } from "../Products";

export const ProductContext = createContext();

export const ProductProvider = ({children}) => {
    return(
        <ProductContext.Provider value={Products}>
            {children}
        </ProductContext.Provider>
    )
}