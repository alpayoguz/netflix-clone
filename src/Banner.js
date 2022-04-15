import React, {useState, useEffect} from 'react'
import instance from './axios'
import "./css/Row.css"



function Banner({fetchUrl}) {
    const base_url = "https://image.tmdb.org/t/p/original/";
    const [movie, SetMovie] = useState([])


    useEffect(() => {
    
            const fecthDataFromAPI = async () => {
                const requests = await instance.get(fetchUrl)
                SetMovie(()=>{
                    return requests.data.results[Math.floor(Math.random() * requests.data.results.length)]
                })
              }
            fecthDataFromAPI();
    }, [fetchUrl])
   

    console.log(movie)

  return (
    <>
    <header className='banner'
        style={{
            backgroundSize:"cover",
            backgroundImage:`url(${base_url}${movie?.backdrop_path || movie?.poster_path})`,
            backgroundPosition:"center center",
            padding:"1rem"
        }}


    >
    <div className='banner__container'>
            <h1 className=' banner__title'>{movie?.title || movie?.name || movie?.original_name}</h1>
            <div className='banner__buttons'>
                <button className='banner__button'>Play</button>
                <button className='banner__button'>My List</button>
            </div>
           <div className='banner__description'>
               <p className='description__content' >{movie.overview}</p>
           </div>
            {/* movie summary */}
        </div>
        <div className='banner__fade__bottom'></div>
    </header>
       

    </>
  )
}

export default Banner