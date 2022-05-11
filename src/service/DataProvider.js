import React, { createContext, useEffect, useState } from "react";
import CategoryApi from "./Category";
import ProductApi from "./Product";

export const DataContext = createContext();
export const DataProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const res = await CategoryApi.getAll();
        setCategory(res.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  useEffect(() => {
    (async () => {
      try {
        const res = await ProductApi.getAll();
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const [cart, setCart] = useState([]);

  const addCart = (id) => {
    const check = cart.every((item) => {
      return item.id_product !== id;
    });

    if (check) {
      const data = products.filter((product) => {
        return product.id_product === id;
      });
      setCart([...cart, ...data]);
    } else {
      alert("Sản phẩm đã được thêm vào giỏ hàng.");
    }
  };

  useEffect(() => {
    const dataCart = JSON.parse(localStorage.getItem("dataCart"));
    if (dataCart) setCart(dataCart);
  }, []);

  useEffect(() => {
    localStorage.setItem("dataCart", JSON.stringify(cart));
  }, [cart]);

  const value = {
    products: [products, setProducts],
    categorys: [category, setCategory],
    cart: [cart, setCart],
    addCart: addCart,
  };

  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
};
