
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from './companents/Header';
import Home from './pages/home';
import MovieList from './companents/movieList';
import Movie from './companents/movie';
function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route index element={<Home/>}></Route>
          <Route path="movie/:id" element={<Movie/>}></Route>
          <Route path="movies/:type" element={<MovieList/>}></Route>
          <Route path="/*" element={<h1>Error page</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
