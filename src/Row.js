
import { useEffect, useState } from "react";
import instance from "./axios";
import "./css/Row.css"



function Row({title, fetchUrl, isLargeRow}) {
  const [movies, setMovie] = useState([])
  const base_url = "https://image.tmdb.org/t/p/original/";
  const opts = {
    height: '390',
    width: '100%',
    autoplay:1
  }
  function scrollWheel(event){
   
    const element = document.querySelector(".row-posters");

    element.addEventListener('wheel', (event) => {
      event.preventDefault();
      element.scrollLeft += event.deltaY;
    });
  }

    useEffect(()=>{
        const FetchData = async () =>{
            const data = await instance.get(fetchUrl)
            setMovie(data.data.results)
        }
        FetchData();
    },[fetchUrl])

  

    const mappedMovies = movies.map(movie=>(
        <>
        <img key={movie.id} className={ `row__poster ${ isLargeRow && "row__posterLarge"} `} src={`${base_url}${ isLargeRow ? movie.poster_path :  movie.backdrop_path}`} alt={movie.name}/>
        </>
    ))



    

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