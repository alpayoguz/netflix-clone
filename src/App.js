import React from 'react'
import instance from "./axios"
import requests from './requests'
import Row from "./Row"



function App() {


  return (
    <>
    <div className='App'>
      <Row title="NETFLİX Originals" fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
     

    </div>
     
    </>
  )
}

export default App