import React, { useEffect, useState } from "react";
import "./home.css";

import axios from "axios";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import animationMovie from "../../../src/Animation - 1707353462639.json";
import animationMovie_2 from "../../../src/Animation.json";

export default function Home() {
  const [trandingMovies, setTrandingMovies] = useState([]);
  const [trandingTv, setTrandingTv] = useState([]);
  const [trandingPeople, setTrandingPeople] = useState([]);

  async function getTrandingMovies(mediatyp, callback) {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/${mediatyp}?api_key=5619854e07c5b3e3b1c82525ec699dfb`
    );
    callback(data.results);
  }
  useEffect(() => {
    getTrandingMovies("movie", setTrandingMovies);
    getTrandingMovies("tv", setTrandingTv);
    getTrandingMovies("person", setTrandingPeople);
  }, []);
  return (
    <>
      <div className="row">
        <div className="col-md-4  d-flex align-items-center">
          <div className="p-3">
            <div className="brdr w-25 mb-3"></div>
            <div className="animationn w-50 m-auto">
              <Lottie animationData={animationMovie} />
            </div>
            <h2>
              Tranding <br />
              Movies <br /> To Watch Right now
            </h2>
            <p>Top Tranding Movies</p>
            <div className="brdr w-100 mb-3"></div>
          </div>
        </div>

        {trandingMovies.map((movie, i) => (
          <div key={i} className="col-md-2">
            <div className="movie my-2">
              <Link to={`/movieshow/${movie.id}`}>
                <img
                  className="w-100 my-3"
                  src={"Https://image.tmdb.org/t/p/w500" + movie.poster_path}
                  alt=""
                />
                <h2 className="h6">{movie.title}</h2>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <hr />
      <div className="row py-5">
        <div className="col-md-4  d-flex align-items-center">
          <div className="p-3">
            <div className="brdr w-25 mb-3"></div>
            <div className="animationn w-50 m-auto">
              <Lottie animationData={animationMovie_2} />
            </div>
            <h2>
              Tranding <br />
              TV <br /> To Watch Right now
            </h2>
            <p>Top Tranding TV</p>
            <div className="brdr w-100 mb-3"></div>
          </div>
        </div>

        {trandingTv.map((tv, i) => (
          <div key={i} className="col-md-2">
            <div className="movie my-2">
              <Link>
                <img
                  className="w-100 my-3"
                  src={"Https://image.tmdb.org/t/p/w500" + tv.poster_path}
                  alt=""
                />
                <h2 className="h6">{tv.name}</h2>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <hr />
      <div className="row py-5">
        <div className="col-md-4  d-flex align-items-center">
          <div className="p-3">
            <div className="brdr w-25 mb-3"></div>
            <h2>To Tranding</h2>
            <h4> The Most Famous Artists</h4>
            <div className="brdr w-100 mb-3"></div>
          </div>
        </div>

        {trandingPeople.map((person, i) => (
          <div key={i} className="col-md-2">
            <div className="movie my-2">
              <Link>
                <img
                  className="w-100 my-3"
                  src={"Https://image.tmdb.org/t/p/w500" + person.profile_path}
                  alt=""
                />
                <h2 className="h6">{person.name}</h2>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
