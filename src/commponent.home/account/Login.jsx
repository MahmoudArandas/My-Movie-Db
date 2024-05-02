import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div>
      <h1>Mahmoud haussen</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
        doloribus <span className="text-primary">mahmoud mohamed hussien </span>{" "}
        beatae iusto aut culpa commodi id ea et est!
      </p>
      <button className="btn btn-info ">
        <Link to="/movies " className="">Go to movie </Link>
      </button>
    </div>
  );
}
