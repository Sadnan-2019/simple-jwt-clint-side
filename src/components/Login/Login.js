import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate= useNavigate()
  const handleLogin = (event) => {
    // console.log("lkmsfos")
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    // console.log(email,password);
    fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.sucess) {
          localStorage.setItem('accessToken', data.accesToken);
          console.log(data.accesToken)
          // alert("token save");
          navigate("/orders")
        }
        console.log(data);
      });
  };

  return (
    <div className="justify-content-center align-items-center d-flex ">
      <form className="w-50  my-5 " onSubmit={handleLogin}>
        <h4 className="text-center">Login</h4>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input type="email" class="form-control" name="email" />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input type="password" class="form-control" name="password" />
        </div>

        <input type="submit" value="Login" class="btn btn-primary" />
      </form>
    </div>
  );
};

export default Login;
