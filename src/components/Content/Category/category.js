import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "service/DataProvider";

export default function Category() {
  const value = useContext(DataContext);
  const [categorys] = value.categorys;
  return (
    <div className="Container">
      <section>
        <div className="box-products">
          <div className="list-products">
            {categorys.map((item, i) => (
              <div className="item-product" key={i}>
                <div className="item-product__box-img">
                  <Link
                    to={`/products/${item.id_product}`}
                    style={{ marginLeft: "50px" }}
                  >
                    <img src={item.url_category} alt="" width={150} />
                  </Link>
                </div>
                <div className="item-product__box-name">
                  <h5
                    title={item.name_category}
                    style={{ textAlign: "center" }}
                  >
                    <Link to={`/categorys/${item.id_category}`}>
                      {item.name_category}
                    </Link>
                  </h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
