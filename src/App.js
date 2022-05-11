// import { Link, Route, Router, Routes } from "react-router-dom";
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Category,
  CategoryManager,
  Header,
  HeaderAdmin,
  Product,
  ProductDetail,
  ProductManager,
  RecriptManager,
} from "./components";
import { DataProvider } from "service/DataProvider";
import Cart from "components/Content/Cart/Cart";
import { Register } from "page";
import { Login } from "page";
import { AddProductMain } from "page";
import AddCategoryMain from "page/AddCategoryMain";

function App() {
  return (
    <DataProvider>
      <div className="App">
        <Router>
          <section>
            <Routes>
              <Route
                path="admin"
                element={
                  <>
                    <HeaderAdmin />
                  </>
                }
              />
              <Route
                path="admin/products"
                element={
                  <>
                    <HeaderAdmin />
                    <ProductManager />
                  </>
                }
              />
              <Route path="admin/products/add" element={<AddProductMain />} />
              <Route
                path="admin/categorys"
                element={
                  <>
                    <HeaderAdmin />
                    <CategoryManager />
                  </>
                }
              />
              <Route path="admin/categorys/add" element={<AddCategoryMain />} />
              <Route
                path="admin/receipts"
                element={
                  <>
                    <HeaderAdmin />
                    <RecriptManager />
                  </>
                }
              />
              <Route
                path="/"
                element={
                  <>
                    <Header />
                  </>
                }
              />
              <Route
                path="products"
                element={
                  <>
                    <Header />
                    <Product />
                  </>
                }
              />
              <Route
                path="products/:id"
                element={
                  <>
                    <Header />
                    <ProductDetail />
                  </>
                }
              />
              <Route
                path="categorys"
                element={
                  <>
                    <Header />
                    <Category />
                  </>
                }
              />
              <Route
                path="cart"
                element={
                  <>
                    <Header />
                    <Cart />
                  </>
                }
              />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
            </Routes>
          </section>
        </Router>
      </div>
    </DataProvider>
  );
}

export default App;
