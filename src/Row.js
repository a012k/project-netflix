import React, { useState } from 'react'
import instance from './instance'
import { useEffect } from 'react'
import './Row.css'

function Row({tittle,fetchUrl,isPoster}) {

    const base_url = "https://image.tmdb.org/t/p/original/";

    const [movies,setMovies]=useState([])

//api call
const fetchData=async()=>{
 const responds = await instance.get(fetchUrl)
 setMovies(responds.data.results)

}

 //console.log(movies);

useEffect(()=>{
    fetchData()
},[])

  return (
    <div className='row'>
        <h1>{tittle}</h1>
       <div className='movie_row'>
       {
            movies.map(movie=>(
                <img
                className={`movie ${isPoster && 'posterMovie'}`}
                src={`${base_url}${isPoster?movie.poster_path:movie.backdrop_path}`}
                /> //isposter is added for extra another poster disply on Trending list, the condition added ? and if else next path added
            ))
        }
       </div>
    </div>
  )
}

export default Row