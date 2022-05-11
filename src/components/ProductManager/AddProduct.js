import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./addPro.scss";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [product, setProduct] = useState({
    name_product: "",
    description: "",
    price: "",
    status: "",
    quantity: "",
    id_category: "",
    url_product: "",
  });

  const add = (data) => {
    axios
      .post("http://localhost:3000/api/product", data)
      .then((res) => {
        console.log(data);
      })
      .catch((error) => console.log(error));
  };
  const onSubmit = (data, e) => {
    console.log(data);
    e.preventDefault();
    add(data);
  };

  return (
    <>
      <h1>Thêm Sản Phẩm</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="form-add">
        <label>Tên Sản Phẩm</label>
        <input
          type="text"
          placeholder="Tên sản phẩm"
          {...register("name_product", { required: true, maxLength: 80 })}
          size={50}
        />
        <label>Mô tả sản phẩm</label>
        <input
          type="text"
          placeholder="Mô tả chi tiết"
          {...register("description", { required: true, maxLength: 100 })}
          size={50}
        />
        <label>Giá</label>
        <input
          type="text"
          placeholder="Giá"
          {...register("price", { required: true, maxLength: 10 })}
          size={50}
        />
        <label>Trạng thái</label>
        <select {...register("status", { required: true })}>
          <option value="1">Hiển thị sản phẩm</option>
          <option value="0">Tạm ẩn sảm phẩm</option>
        </select>
        <label>Số lượng</label>
        <input
          type="text"
          placeholder="số lượnge"
          {...register("quantity", { required: true, maxLength: 10 })}
          size={50}
        />
        <label>Mã Danh mục</label>
        <input
          type="text"
          placeholder="mã danh mục"
          {...register("id_category", { required: true, maxLength: 10 })}
          size={50}
        />
        <label>Hình</label>
        <input
          type="text"
          placeholder="Link hình ảnh"
          {...register("url_product", { required: true })}
          size={50}
        />
        <br />
        <button className="btn btn-success">
          líadfo;áh
          {/* <Link to="/admin/products">Thêm sản phẩm</Link> */}
        </button>
      </form>
    </>
  );
};
export default AddProduct;
