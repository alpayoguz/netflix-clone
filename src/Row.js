import requests from "./requests"
import axios from "axios"
import { useEffect, useState } from "react";
import instance from "./axios";
import "./css/Row.css"

function Row({title, fetchUrl}) {
  const [movies, setMovie] = useState([])
  const base_url = "https://image.tmdb.org/t/p/original/";

  function scrollWheel(event){
   
    const element = document.querySelector(".row-posters");

    element.addEventListener('wheel', (event) => {
      event.preventDefault();
      element.scrollLeft += event.deltaY;
    });
  }

    //Birinci şekilde yapımı
    // useEffect(()=>{
    //     const fetchMovieFromAPI = async () =>{
    //         const data = await fetch("https://api.themoviedb.org/3/discover/tv?api_key=65b40a9c567576f19103f6e379603b1e&with_networks=213")
    //         const data2 = await data.json()
    //         setMovie(data2)
    //         console.log(data2);
    //     }

    //     fetchMovieFromAPI();
    // },[])

    //ikinci şekilde yapımı
    // useEffect(()=>{
    //     axios.get("https://api.themoviedb.org/3/discover/tv?api_key=65b40a9c567576f19103f6e379603b1e&with_networks=213")
    //     .then(data=>setMovie(data.data))
    // })

    //üçüncü şekilde yapımı
    useEffect(()=>{
        const FetchData = async () =>{
            const data = await instance.get(fetchUrl)
            
            setMovie(data.data.results)
        }
        FetchData();
    },[fetchUrl])

    const mappedMovies = movies.map(movie=>(
        <>
        <img key={movie.id} className="row__poster" src={`${base_url}${movie.backdrop_path}`} alt={movie.name}/>
        </>
    ))



    
    console.log(movies)
  return (
    <>
    <div onWheel={(event)=>{scrollWheel(event)}} className="row">
        <h2>{title}</h2>
       <div onWheel={(event)=>{scrollWheel(event)}} className="row-posters">
            {mappedMovies}
       </div>

    </div>
    </>
  )
}

export default Row