import React, { useContext, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "service/DataProvider";
import { Link } from "react-router-dom";

export default function Product_detail() {
  const { id } = useParams();
  const value = useContext(DataContext);
  const [products] = value.products;
  const addCart = value.addCart;

  const details = products.filter((product, index) => {
    return product.id_product == id;
  });

  // const handleMouseMove = (e) => {
  //   const { left, top, width, height } = e.target.getBoundingClientRect();
  //   const x = ((e.pageX - left) / width) * 100;
  //   const y = ((e.pageY - top) / height) * 100;
  //   imgDiv.current.style.backgroundPosition = `${x}% ${y}%`;
  // };
  return (
    <div className="Container" style={{ marginTop: "20px" }}>
      {details.map((products) => (
        <div className="details" key={products.id_product}>
          <div
            className="img-container"
            // onMouseMove={handleMouseMove}
            style={{ backgroundImage: `url(${products.url_product})` }}
            // ref={imgDiv}
            // onMouseLeave={() =>
            //   (imgDiv.current.style.backgroundPosition = `center`)
            // }
          />
          <div className="box-details">
            <h2 title={products.name_product}>{products.name_product}</h2>
            <h3>$&nbsp;{products.price}</h3>
            <p>{products.description}</p>
            <button>
              <Link
                to="/cart"
                className="cart"
                onClick={() => addCart(products.id_product)}
              >
                Add to cart
              </Link>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
