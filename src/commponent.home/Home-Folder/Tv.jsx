
import axios from 'axios';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react'

export default function Tv() {
  const [trandingTv, setTrandingTv]=useState([]);

  let num =new Array(15).fill(1).map((elem ,index)=>index+1)
  async function getTrandingMovies(pageNum){
    
    let {data}= await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=5619854e07c5b3e3b1c82525ec699dfb&include_adult=false&include_null_first_air_dates=false&language=en-US&page=${pageNum}&sort_by=popularity.desc`);
    setTrandingTv(data.results);
    
  }
  useEffect(()=>{
   
    getTrandingMovies(1)
  },[])
  
  return (
    <div>
           
      {trandingTv?<div className="row justify-content-center">
   
       
  
   {trandingTv.map((movie,i)=>(  <div key={i} className="col-md-2">
        <div className="movie my-2">
         <Link to={`/tv/${movie.id}`} >
         <img className='w-100 my-3' src={'Https://image.tmdb.org/t/p/w500'+movie.poster_path} alt="" />
         <h2 className='h6'>{movie.original_name}</h2>
         </Link>
      
        </div>
    </div>))}
   </div>:<div className='vh-100 d-flex align-items-center justify-content-center'>
            <i className='fas fa-spiner fa-spin'>

            </i>

        </div>}
      
        <nav aria-label="..." className='py-5'>
  <ul className="pagination pagination-lg justify-content-center">
    {num.map((pageNumm)=><li onClick={()=>getTrandingMovies(pageNumm)} key={pageNumm} className="page-item"><a className="page-link bg-transparent text-white" >{pageNumm}</a></li>)}
    
  </ul>
</nav>
    </div>
  )
}
