import axios from "axios";
import { createContext, useEffect, useState } from "react";

const ProductsContext = createContext([]);

const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [loadingInProducts, setLoadingInProducts] = useState(true);
    const womenProducts = [
        "womens-dresses",
        "womens-jewellery",
        "womens-watches",
        'womens-shoes',
        "womens-bags",
    ];

    const getWomenProducts = async () => {
        try{
            const response = await Promise.all(
                womenProducts.map((product) => 
                    axios.get(`https://dummyjson.com/products/category/${product}`)
                )
            );
            const allProducts = response.flatMap((res) => res.data.products);
            console.log(allProducts);
            setProducts(allProducts)

        }catch (error) {
            console.error('Error while fetching:', error.message);
        } finally {
            setLoadingInProducts(false);
        }
    }

    useEffect(() => {
        getWomenProducts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <ProductsContext.Provider value={{ products, loadingInProducts }}>
            { children }
        </ProductsContext.Provider>
    )
}
export default ProductsProvider;
export { ProductsContext }