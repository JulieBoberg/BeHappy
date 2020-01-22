import React, { useState } from "react";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const { email, password } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    console.log("Login submit");
  };

  return (
    <form class='col s10' onSubmit={onSubmit}>
      <div className='container'>
        <h1 style={{ fontSize: "35px", textAlign: "center" }}>Login</h1>

        {/* email */}
        <div class='row'>
          <div class='input-field col s12'>
            <input
              id='email'
              type='email'
              value={email}
              name='email'
              onChange={onChange}
            />
            <label htmlFor='email'>Email</label>
          </div>
        </div>
        {/* password */}
        <div class='row'>
          <div class='input-field col s12'>
            <input
              id='password'
              type='password'
              value={password}
              name='password'
              onChange={onChange}
            />
            <label htmlFor='password'>Password</label>
          </div>
        </div>

        <input
          type='submit'
          value='login'
          className='btn waves-effect waves-light'
        />
      </div>
    </form>
  );
};

export default Login;
