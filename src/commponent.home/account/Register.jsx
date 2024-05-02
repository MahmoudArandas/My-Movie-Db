import React, { useEffect, useState } from "react";
import "./account.css";

import Joi from "joi";

export default function Register() {
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    age: "",
    email: "",
    password: "",
  });

  function getUser(e) {
    //eشيلة معلومات الايفنت
    let myUser = { ...user }; //copy user
    myUser[e.target.name] = e.target.value;
    setUser(myUser);
  }
  function submitRegister(e) {
    e.preventDefault();

    //   if(localStorage.getItem('my')!=null){
    //    addUser=JSON.parse(localStorage.getItem('my'));

    //   }else{
    //    addUser=[]
    //   }
  }

  return (
    <>
      <h2>Regiser Now</h2>
      <form className="w-75 m-auto bg-transpaernt" onSubmit={submitRegister}>
        <label htmlFor="first_name">First Name:</label>
        <input
          onChange={getUser}
          type="text"
          name="first_name"
          className="form-control"
          id="first_name"
        />

        <label htmlFor="last_name">Last Name:</label>
        <input
          onChange={getUser}
          type="text"
          name="last_name"
          className="form-control"
          id="last_name"
        />

        <label htmlFor="age">Age:</label>
        <input
          onChange={getUser}
          type="number"
          name="age"
          className="form-control"
          id="age"
        />

        <label htmlFor="email">E-mail:</label>
        <input
          onChange={getUser}
          type="email"
          name="email"
          className="form-control"
          id="email"
        />

        <label htmlFor="password">Password:</label>
        <input
          onChange={getUser}
          type="password"
          name="password"
          className="form-control"
          id="password"
        />
        <button type="submit" className="btn btn-outline-info my-2">
          Register
        </button>
      </form>
    </>
  );
}
