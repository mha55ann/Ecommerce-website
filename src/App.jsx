import { Outlet } from "react-router";
import "./App.css";
import { ContextProvider } from "./components/ContextApi";
import ExploreProducts from "./components/Exploreproducts";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/navbar";
import SaleItem from "./components/SaleItems";

function App() {
  return (
    <ContextProvider>
      <Navbar />
  < Outlet />
      <Footer />
    </ContextProvider>
  );
}

export default App;
