import React, { useState } from "react";
import Logo from "../../asset/logo.png";
import "./register.scss";

const Register = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    name: "",
  });
  const [isRegister, setIsRegister] = useState(false);
  const handleFormChange = (e) => {
    let data = e.target;
    setUser({ ...user, [data.name]: data.value });
  };
  const submitForm = (e) => {
    e.preventDefault();
    setIsRegister(true);
    console.log(e);
    if (user.email === "" || user.password === "") {
      return;
    }

    // register(user);
  };
  return (
    <div className="login__bg login__wrapper">
      <div className="login__content-wrapper">
        <img
          src={Logo}
          height={130}
          width={130}
          style={{ marginLeft: "150px" }}
        />
        <h1 className="login__title">Đăng Ký</h1>
        <form>
          <div className="form__input-wrap">
            <div className="form__lable">
              <span>Email</span>
            </div>
            <div className="form__input">
              <input
                type="email"
                name="email"
                placeholder="nhom2@gmail.com"
                onChange={(e) => handleFormChange(e)}
                required
              />
            </div>
          </div>
          <div className="input__err">
            <div></div>
            <div> Sai thông tin tài khoản{/* error content */}</div>
          </div>
          <div className="form__input-wrap" style={{ marginTop: 5 }}>
            <div className="form__lable">
              <span>Password</span>
            </div>
            <div className="form__input">
              <input
                type="password"
                min="5"
                name="password"
                placeholder="12345678"
                onChange={(e) => handleFormChange(e)}
                required
              />
            </div>
          </div>
          <div className="input__err">
            <div></div>
            <div> Sai mật khẩu{/* error content */}</div>
          </div>
          <div className="form__input-wrap" style={{ marginTop: 5 }}>
            <div className="form__lable">
              <span>Name</span>
            </div>
            <div className="form__input">
              <input
                type="name"
                name="name"
                placeholder="Nguyen Huu Thang"
                onChange={(e) => handleFormChange(e)}
                required
              />
            </div>
          </div>
          <div className="login__button-wrap" style={{ marginTop: 10 }}>
            <input
              value={"Đăng Ký"}
              type="submit"
              className="btn btn-primary"
              onClick={(e) => submitForm(e)}
            />
          </div>
          <div className="register-link">
            <span>Bạn đã có tài khoản ?</span> <a href="/login">Đăng Nhập</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
