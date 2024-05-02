import axios from 'axios';


import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import './movieshow.css'
export default function MovieShow() {

  let prams=useParams()
  const [movieDitailes,setMovieDitailes]=useState({});


async function getMovie(id){
    let {data}= await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=5619854e07c5b3e3b1c82525ec699dfb&language=en-US`);
   setMovieDitailes(data);
    
    
 }
useEffect(()=>{
    getMovie(prams.id);
},[])
  
  return (
    <div>
       

        {movieDitailes ? <div className="row">
        <div className="col-md-3">
            <img className='w-100' src={'Https://image.tmdb.org/t/p/w500'+movieDitailes.poster_path} alt="" />
        </div>
        <div className="col-md-9">
        <h1>{movieDitailes.title}</h1>
        <p className='py-2'>{movieDitailes.overview}</p>
        <ul className='icon'>
        
          <li className='py-1'>Vote: <span className='text-info'>{movieDitailes.vote_average} V</span></li>
          <li className='py-1'>Popularity: <span className='text-info'>{movieDitailes.popularity}</span>  <i class="fa-solid fa-eye text-danger"></i></li>
          <li className='py-1'>Vote_count: <span className='text-info'> {movieDitailes.vote_count}</span> </li>
          <li className='py-1'>Release_date: <span className='text-info'>{movieDitailes.release_date}</span> </li>
          <li className='py-1'>Vote_average: <span className='text-info'>{movieDitailes.vote_average}</span> </li>
          <li className='py-1'>Vote_count: <span className='text-info'>{movieDitailes.vote_count}</span> </li>
        </ul>
        <ul className='stars'>
         
        <i className="fa-solid fa-star text-info"></i>
        <i className="fa-solid fa-star text-info"></i>
        <i className="fa-solid fa-star text-info"></i>
        <i className="fa-solid fa-star text-info"></i>
        <i className="fa-solid fa-star-half-stroke text-info"></i>
        </ul>

        </div>
        </div> :<div className='vh-100 d-flex align-items-center justify-content-center'>
            <i className='fas fa-spiner fa-spin'>

            </i>

        </div> }
     
    </div>
  )
}
