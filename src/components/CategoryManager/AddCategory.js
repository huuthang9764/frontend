import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "../ProductManager/addPro.scss";

const AddCategory = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <>
      <h1>Thêm Danh Mục Sản Phẩm</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="form-add">
        <label>Tên Sản Phẩm</label>
        <input
          type="text"
          placeholder="Tên danh mục"
          {...register("name_category", { required: true, maxLength: 80 })}
          size={50}
        />
        <label>Trạng thái</label>
        <select {...register("status", { required: true })}>
          <option value="1">Hiển thị danh mục</option>
          <option value="0">Tạm ẩn danh mục</option>
        </select>
        <label>Hình</label>
        <input
          type="text"
          placeholder="Link Hình ảnh"
          {...register("url_category", { required: true })}
          size={50}
        />
        <br />
        <button className="btn btn-success">
          <Link to="/categorys">Thêm danh mục</Link>
        </button>
      </form>
    </>
  );
};
export default AddCategory;
