import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom"; // ✅ CORRECTED: use "react-router-dom"

import App from "./App.jsx";
import Home from "./components/Home.jsx";
import SaleItem from "./components/SaleItems.jsx";
import ExploreProducts from "./components/Exploreproducts.jsx";
import Women_fashion from "./components/women_fashion.jsx";
import Men_fashion from "./components/men_fashion.jsx";
import Laptops from "./components/Laptops.jsx";
import Groceries from "./components/Groceries.jsx";
import Womens_jewellery from "./components/Womens_jewellery.jsx";
import Furniture from "./components/Furniture.jsx";
import Fragrances from "./components/Fragrances.jsx";
import Smartphones from "./components/Smartphones.jsx";
import Tablets from "./components/Tablets.jsx";
import Details from "./components/Details.jsx";
import Cart from "./components/Cart.jsx";
import Search from "./components/Search.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import SignUp from "./components/SignUp.jsx";
import Login from "./components/Login.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      {/* Index route with combined components */}
      <Route
        index
        path="/"
        element={
          <>
            <Home />
            <SaleItem />
            <ExploreProducts />
          </>
        }
      />
      {/* Other individual routes */}
      <Route path="wfashion" element={<Women_fashion />} />
      <Route path="mfashion" element={<Men_fashion />} />
      <Route path="laptops" element={<Laptops />} />
      <Route path="groceries" element={<Groceries />} />
      <Route path="womens-jewellery" element={<Womens_jewellery />} />
      <Route path="furniture" element={<Furniture />} />
      <Route path="fragrances" element={<Fragrances />} />
      <Route path="smartphones" element={<Smartphones />} />
      <Route path="tablets" element={<Tablets />} />
      <Route path="details" element={<Details />} />
      <Route path="cart" element={<Cart />} />
      <Route path="search" element={<Search />} />
      <Route path="about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />

      {/* Fallback route for 404 */}
      <Route
        path="*"
        element={
          <div className="flex items-center justify-center h-screen">
            <h1 className="text-4xl font-bold text-gray-700">Page Not Found</h1>
          </div>
        }
      />
    </Route>
  )
);

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
);
