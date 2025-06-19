import { createContext, useContext, useState } from "react";
import { useQuery } from "@tanstack/react-query";
const ContextApi = createContext();
// Fetching functions
const getProducts = async () => {
  const res = await fetch("https://dummyjson.com/products");
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
};

const getCategories = async () => {
  const res = await fetch("https://dummyjson.com/products");
  if (!res.ok) throw new Error("Failed to fetch categories");
  return res.json();
};

const getWomenFashion = async () => {
  const res = await fetch(
    "https://dummyjson.com/products/category/womens-dresses"
  );
  if (!res.ok) throw new Error("Failed to fetch women's fashion");
  return res.json();
};

const getMenFashion = async () => {
  const res = await fetch(
    "https://dummyjson.com/products/category/mens-shirts"
  );
  if (!res.ok) throw new Error("Failed to fetch men's fashion");
  return res.json();
};

const getLaptops = async () => {
  const res = await fetch("https://dummyjson.com/products/category/laptops");
  if (!res.ok) throw new Error("Failed to fetch laptops");
  return res.json();
};

const getTablets = async () => {
  const res = await fetch("https://dummyjson.com/products/category/tablets");
  if (!res.ok) throw new Error("Failed to fetch tablets");
  return res.json();
};

const getGroceries = async () => {
  const res = await fetch("https://dummyjson.com/products/category/groceries");
  if (!res.ok) throw new Error("Failed to fetch groceries");
  return res.json();
};

const getWomensJewellery = async () => {
  const res = await fetch(
    "https://dummyjson.com/products/category/womens-jewellery"
  );
  if (!res.ok) throw new Error("Failed to fetch women's jewellery");
  return res.json();
};

const getFurniture = async () => {
  const res = await fetch("https://dummyjson.com/products/category/furniture");
  if (!res.ok) throw new Error("Failed to fetch furniture");
  return res.json();
};

const getFragrances = async () => {
  const res = await fetch("https://dummyjson.com/products/category/fragrances");
  if (!res.ok) throw new Error("Failed to fetch fragrances");
  return res.json();
};

const getSmartphones = async () => {
  const res = await fetch(
    "https://dummyjson.com/products/category/smartphones"
  );
  if (!res.ok) throw new Error("Failed to fetch smartphones");
  return res.json();
};

export const ContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prev) => {
      const alreadyInCart = prev.find((item) => item.id === product.id);
      if (alreadyInCart) return prev; // avoid duplicates
      return [...prev, product];
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };
  const updateQuantity = (id, quantity) => {
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const { data, error, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  const {
    data: laptopsData,
    error: laptopsError,
    isLoading: laptopsLoading,
  } = useQuery({
    queryKey: ["laptops"],
    queryFn: getLaptops,
  });

  const {
    data: tabletsData,
    error: tabletsError,
    isLoading: tabletsLoading,
  } = useQuery({
    queryKey: ["tablets"],
    queryFn: getTablets,
  });

  const {
    data: groceriesData,
    error: groceriesError,
    isLoading: groceriesLoading,
  } = useQuery({
    queryKey: ["groceries"],
    queryFn: getGroceries,
  });

  const {
    data: womensJewelleryData,
    error: womensJewelleryError,
    isLoading: womensJewelleryLoading,
  } = useQuery({
    queryKey: ["womens_jewellery"],
    queryFn: getWomensJewellery,
  });

  const {
    data: furnitureData,
    error: furnitureError,
    isLoading: furnitureLoading,
  } = useQuery({
    queryKey: ["furniture"],
    queryFn: getFurniture,
  });

  const {
    data: fragrancesData,
    error: fragrancesError,
    isLoading: fragrancesLoading,
  } = useQuery({
    queryKey: ["fragrances"],
    queryFn: getFragrances,
  });

  const {
    data: smartphonesData,
    error: smartphonesError,
    isLoading: smartphonesLoading,
  } = useQuery({
    queryKey: ["smartphones"],
    queryFn: getSmartphones,
  });

  const {
    data: categoriesData,
    error: categoriesError,
    isLoading: categoriesLoading,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  const {
    data: womenData,
    error: womenError,
    isLoading: womenLoading,
  } = useQuery({
    queryKey: ["women_fashion"],
    queryFn: getWomenFashion,
  });

  const {
    data: menData,
    error: menError,
    isLoading: menLoading,
  } = useQuery({
    queryKey: ["men_fashion"],
    queryFn: getMenFashion,
  });

  return (
    <ContextApi.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        data,
        error,
        isLoading,
        categoriesData,
        categoriesError,
        categoriesLoading,
        womenData: womenData?.products || [],
        womenError,
        womenLoading,
        menData: menData?.products || [],
        menError,
        menLoading,
        laptopsData: laptopsData?.products || [],
        laptopsError,
        laptopsLoading,
        tabletsData: tabletsData?.products || [],
        tabletsError,
        tabletsLoading,
        groceriesData: groceriesData?.products || [],
        groceriesError,
        groceriesLoading,
        womensJewelleryData: womensJewelleryData?.products || [],
        womensJewelleryError,
        womensJewelleryLoading,
        furnitureData: furnitureData?.products || [],
        furnitureError,
        furnitureLoading,
        fragrancesData: fragrancesData?.products || [],
        fragrancesError,
        fragrancesLoading,
        smartphonesData: smartphonesData?.products || [],
        smartphonesError,
        smartphonesLoading,

        // Expose fetch functions if needed
        getProducts,
        getCategories,
        getWomenFashion,
        getMenFashion,
        getLaptops,
        getTablets,
        getGroceries,
        getWomensJewellery,
        getFurniture,
        getFragrances,
        getSmartphones,
      }}
    >
      {children}
    </ContextApi.Provider>
  );
};

export const useContextApi = () => useContext(ContextApi);
export default ContextApi;
