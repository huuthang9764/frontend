import React, { useContext } from "react";
import "./product.scss";
import { DataContext } from "../../../service/DataProvider";
import { Link } from "react-router-dom";
const Products = () => {
  const value = useContext(DataContext);
  const [products] = value.products;
  const addCart = value.addCart;
  return (
    <div className="Container">
      <section>
        <div className="title-product">
          <h2>Bàn phím</h2>
        </div>
        <div className="box-products">
          <div className="list-products">
            {products.map((item, i) => (
              <div className="item-product" key={i}>
                <div className="item-product__box-img">
                  <Link to={`/products/${item.id_product}`}>
                    <img src={item.url_product} alt="" />
                  </Link>
                </div>
                <div className="item-product__box-name">
                  <h5 title={item.name_product}>
                    <Link to={`/products/${item.id_product}`}>
                      {item.name_product}
                    </Link>
                  </h5>
                </div>
                <div className="item-product__box-price">
                  <p className="special-price">$&nbsp;{item.price}</p>
                </div>
                <div className="item-product__box-detail">
                  <button onClick={() => addCart(item.id_product)}>
                    <Link to={`/products/${item.id_product}`}>Add to cart</Link>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
export default Products;
