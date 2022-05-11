import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "service/DataProvider";
import { Link } from "react-router-dom";
import close from "../Cart/close.svg";

export default function Cart() {
  const value = useContext(DataContext);
  const [cart, setCart] = value.cart;
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const getTotal = () => {
      const res = cart.reduce((prev, item) => {
        return prev + item.price * item.quantity;
      }, 0);
      setTotal(res);
    };
    getTotal();
  }, [cart]);

  const reduction = (id) => {
    cart.forEach((item) => {
      if (item.id_product == id) {
        item.quantity == 1 ? (item.quantity = 1) : (item.quantity -= 1);
      }
    });
    setCart([...cart]);
  };

  const increase = (id) => {
    cart.forEach((item) => {
      if (item.id_product === id) {
        item.quantity += 1;
      }
    });
    setCart([...cart]);
  };

  const removeProduct = (id) => {
    if (window.confirm("Bạn có muốn xóa sản phẩm này không?")) {
      cart.forEach((item, index) => {
        if (item.id_product == id) {
          cart.splice(index, 1);
        }
      });
      setCart([...cart]);
    }
  };
  console.log(cart.length);
  if (cart.length == 0)
    return (
      <div>
        <h4
          style={{ textAlign: "center", fontSize: "3rem", marginTop: "100px" }}
        >
          Không có sản phẩm nào trong giỏ hàng, vui lòng quay lại
        </h4>
        <div
          style={{
            textAlign: "center",
            fontSize: "2rem",
            marginTop: "100px",
            textDecoration: "none",
          }}
        >
          <Link to="/products">Quay lại trang chủ</Link>
        </div>
      </div>
    );
  return (
    <div className="Container">
      {cart.map((product) => (
        <div className="details cart" key={product.id_product}>
          <div
            className="img-container"
            style={{ backgroundImage: `url(${product.url_product})` }}
          />
          <div className="box-details">
            <h2 title={product.name_product}>{product.name_product}</h2>
            <h3>{product.price}&nbsp;đ</h3>
            <p>{product.description}</p>

            <div className="amount">
              <span
                style={{
                  textAlign: "center",
                  fontSize: "1.2rem",
                  marginTop: "100px",
                  color: "black",
                }}
              >
                Chọn số lượng:
              </span>
              <button
                className="count"
                onClick={() => reduction(product.id_product)}
              >
                {" "}
                -{" "}
              </button>
              <span>{product.quantity}</span>
              <button
                className="count"
                onClick={() => increase(product.id_product)}
              >
                {" "}
                +{" "}
              </button>
            </div>
          </div>
          <div
            className="delete"
            onClick={() => removeProduct(product.id_product)}
          >
            <img src={close} width="30" />
          </div>
        </div>
      ))}

      <div className="total">
        <Link to="/payment">Payment</Link>
        <h3>Total: $ {total}</h3>
      </div>
    </div>
  );
}
