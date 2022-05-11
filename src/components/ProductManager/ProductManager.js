import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "service/DataProvider";
import "./addPro.scss";

function ProductManager() {
  const value = useContext(DataContext);
  const [products] = value.products;
  return (
    <Fragment>
      <div>
        <button
          type="button"
          className="btn btn-success"
          style={{ marginTop: "20px", textDecoration: "none" }}
        >
          <Link to="/admin/products/add">Thêm Sản Phẩm</Link>
        </button>
      </div>

      <table className="table">
        <thead className="thead-darkstriped">
          <tr>
            <th scope="col">Mã sản phẩm</th>
            <th scope="col">Tên Sản Phẩm</th>
            <th scope="col">Chi tiết sản phẩm</th>
            <th scope="col">Giá</th>
            <th scope="col">Mã danh mục</th>
            <th scope="col">Hình ảnh</th>
            <th scope="col">Thao Tác</th>
          </tr>
        </thead>
        {products.map((item, index) => {
          return (
            <tbody key={index}>
              <tr>
                <th scope="row">{item.id_product}</th>
                <td>{item.name_product}</td>
                <td>{item.description}</td>
                <td>{item.price}</td>
                <td>{item.id_category}</td>
                <td>
                  <img src={item.url_product} alt="" width={50} />
                </td>
                <td>
                  <div
                    className="btn-group"
                    role="group"
                    aria-label="Basic example"
                  >
                    <button
                      type="button"
                      className="btn btn-warning"
                      data-toggle="modal"
                      data-target="#exampleModal"
                    >
                      Sửa
                    </button>
                    <button type="button" className="btn btn-danger">
                      Xóa
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </Fragment>
  );
}

export default ProductManager;
