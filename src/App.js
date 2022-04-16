import React from 'react'
import requests from './requests'
import Row from "./Row"
import "./css/App.css"
import Banner from './Banner'
import Navbar from './Navbar'



function App() {


  return (
    <>
    <div className='App'>
      <Navbar/>
      <Banner fetchUrl={requests.fetchPopularMovies} />
      {/* <Row  title="NETFLİX Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentary Movies" fetchUrl={requests.fetchDocumentariesMovies}/> */}
    </div>
     
    </>
  )
}

export default App