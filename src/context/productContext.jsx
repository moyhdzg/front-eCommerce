import React, { createContext, useState } from 'react'


export const productContext = createContext({});

const ProductProvider = ({children}) => {
    const [productData, setProductData] = useState({})
        
    return (
        <div>
            <productContext.Provider value={{productData,setProductData}}>
                {children}
            </productContext.Provider>
        </div>
    )
}

export default ProductProvider