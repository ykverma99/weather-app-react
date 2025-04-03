import React from "react";
import Tic_Tac_Toe from "./pages/Tic_Tac_Toe";
import Home from "./pages/Home";
import { ContextProvider } from "./context/CartContext";
import { Route, Routes } from "react-router-dom";
import Product from "./pages/Product";

function App() {
  return (
    <>
      <ContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<Product />} />
        </Routes>
        <Home />
      </ContextProvider>
    </>
  );
}

export default App;
