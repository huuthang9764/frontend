import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "service/DataProvider";

function CategoryManager() {
  const value = useContext(DataContext);
  const [categorys] = value.categorys;
  return (
    <Fragment>
      <div>
        <button className="btn btn-success">
          <Link to="/admin/categorys/add">Thêm Danh Mục</Link>
        </button>
      </div>

      <table className="table">
        <thead className="thead-darkstriped">
          <tr>
            <th scope="col">Mã Danh Mục</th>
            <th scope="col">Tên Danh Mục</th>
            <th scope="col">Hình ảnh</th>
            <th scope="col">Thao Tác</th>
          </tr>
        </thead>
        {categorys.map((item, index) => {
          return (
            <tbody key={index}>
              <tr>
                <th scope="row">{item.id_category}</th>
                <td>{item.name_category}</td>
                <td>
                  <img src={item.url_category} alt="" width={70} />
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

export default CategoryManager;
