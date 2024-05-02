import axios from 'axios';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react'



export default function Movies() {

  const [trandingMovies, setTrandingMovies]= useState([]);


  let num =new Array(15).fill(1).map((elem ,index)=>index+1)
  console.log(num)
  async function getTrandingMovies(pageNumTv){
    
    let {data}= await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=5619854e07c5b3e3b1c82525ec699dfb&include_adult=false&include_video=false&language=en-US&page=${pageNumTv}&sort_by=popularity.desc`);
    setTrandingMovies(data.results);
    
  }
  useEffect(()=>{
   
    getTrandingMovies(1)
  },[])
  
  return (
    <div>
      {trandingMovies?<div className="row justify-content-center">
   
       
  
   {trandingMovies.map((movie,i)=>(  <div key={i} className="col-md-2">
        <div className="movie my-2">
         <Link to={`/movieshow/${movie.id}`} >
         <img className='w-100 my-3' src={'Https://image.tmdb.org/t/p/w500'+movie.poster_path} alt="" />
         <h2 className='h6'>{movie.title}</h2>
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
