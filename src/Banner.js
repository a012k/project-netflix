import {React,useEffect,useState} from 'react'
import './Banner.css'
import instance from './instance'
import requests from './requests'

function Banner() {

    const base_url = "https://image.tmdb.org/t/p/original/";


    const [movie,setMovie]=useState({})

const fetchData=async ()=>{
    const response=await instance.get(requests.fetchTrending)
    
    setMovie(response.data.results[
       Math.floor(Math.random()*response.data.results.length)
    ]);
}

function truncate(str,n)
{
   return str?.length>n?str.substr(0,n-1)+'....':str //used for string length in the discription,check the length
}
    useEffect(()=>{
        fetchData()
    },[])


  return (
    <div className='banner'
       style={{backgroundImage:`url(${base_url}${movie.backdrop_path})`,
    backgroundSize:'cover'
    }}
       >
         <div className='bannerContent'>
        <h1 className='title'>{movie.title}</h1>
        <h2 className='overview'>
        {truncate(movie?.overview,200)}
        </h2>

        </div>
    </div>
  )
}

export default Banner