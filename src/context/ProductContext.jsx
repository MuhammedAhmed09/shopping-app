import axios from "axios";
import { createContext, useEffect, useState } from "react";

const ProductsContext = createContext(null);

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [sortOrder, setSortOrder] = useState('');
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState('all');
  const [loading, setLoading] = useState(true);

  const getProducts = async (selectedCategory = 'all') => {
    try {
      setLoading(true);
      const url =
        selectedCategory === 'all'
          ? 'https://dummyjson.com/products'
          : `https://dummyjson.com/products/category/${selectedCategory}`;

      const response = await axios.get(url);
      setProducts(response.data.products || []);
    } catch (error) {
      console.error('Error while fetching products:', error.message);
    } finally {
      setLoading(false);
    }
  };

  const getCategories = async () => {
    try {
      const res = await axios.get('https://dummyjson.com/products/categories');
      setCategories(res.data || []);
    } catch (error) {
      console.error('Error fetching categories:', error.message);
    }
  };

  const getProductById = async (id) => {
    try {
      const res = await axios.get(`https://dummyjson.com/products/${id}`);
      return res.data;
    } catch (error) {
      console.error("Error fetching product by ID:", error.message);
      return null;
    }
  };

  const getProductsByCategory = async (selectedCategory) => {
    try {
      const url =
      selectedCategory === 'all'
        ? 'https://dummyjson.com/products'
        : `https://dummyjson.com/products/category/${selectedCategory}`;

      const response = await axios.get(url);
      return response.data.products || [];
    } catch(error) {
      console.error('Some thing wrong at collection products', error.message);
      return [];
    }
  }

  useEffect(() => {
    getProducts(category);
    getCategories();
  }, [category]);

  const sortedProducts = [...products]
    .filter(product =>
      product.title?.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === 'asc') return a.title.localeCompare(b.title);
      if (sortOrder === 'desc') return b.title.localeCompare(a.title);
      if (sortOrder === 'priceLowHigh') return a.price - b.price;
      if (sortOrder === 'priceHighLow') return b.price - a.price;
      return 0;
    });

  return (
    <ProductsContext.Provider
      value={{
        sortedProducts,
        loading,
        setSortOrder,
        categories,
        setSearch,
        setCategory,
        getProductById,
        getProductsByCategory
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
export { ProductsContext };
