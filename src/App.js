import React from 'react';
import './App.css';
import Row from './Row';
import Banner from './Banner';
import Nav from './Nav';
import request from './request';

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row title="NETFLIX ORIGINAL" fetchUrl={request.fetchNetflixOriginals} isLargeRow/>
      <Row title="Trending Now" fetchUrl={request.fetchTrending} isLargeRow={false}/>
      <Row title="Top Rated" fetchUrl={request.fetchTopRated} isLargeRow={false}/>
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies} isLargeRow={false}/>
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} isLargeRow={false}/>
      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} isLargeRow={false}/>
      <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} isLargeRow={false}/>
      <Row title="Documentaries" fetchUrl={request.fetchDocumentaries} isLargeRow={false}/>

    </div>
  );
}

export default App;
