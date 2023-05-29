
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      
      <Navbar></Navbar>

      <Banner></Banner>

      <Row isPoster={true} tittle= "Trending" fetchUrl={requests.fetchTrending}></Row>
      <Row tittle= "Originals" fetchUrl={requests.fetchNetflixOriginals}></Row>
      <Row tittle= "Top Rated" fetchUrl={requests. fetchTopRated}></Row>
      <Row tittle= "Action" fetchUrl={requests.fetchActionMovies}></Row>
      <Row tittle= "Comedy " fetchUrl={requests.fetchComedyMovies}></Row>
      <Row tittle= "Horror " fetchUrl={requests.fetchHorrorMovies}></Row>
      <Row tittle= "Romance" fetchUrl={requests. fetchRomanceMovies}></Row>
      <Row tittle= "Documentaries" fetchUrl={requests.fetchDocumentaries}></Row>
    </div>
  );
}

export default App;
