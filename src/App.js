import MovieList from "./MovieList";
import React from "react";
import Navbar from "./Navbar";
import { moviesdta } from "./moviesdata";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: moviesdta,
      cartCount: 0,
    };
    // this.addStars = this.addStars.bind(this);
  }

  // handleIncStar = (movie) => {
  //   const { movies } = this.state;

  //   const mid = movies.indexOf(movie);

  //   if (movies[mid].stars >= 5) {
  //     return;
  //   }

  //   movies[mid].stars += 0.5;

  //   this.setState({
  //     movies: movies,
  //   });
  // };

  handleIncStar = (movie) => {
    const { movies } = this.state;

    const mid = movies.indexOf(movie);

    if (movies[mid].stars >= 5) {
      return;
    }

    movies[mid].stars += 0.5;

    this.setState({
      movies: movies,
    });
  };

  handleDecStar = (movie) => {
    const { movies } = this.state;

    const mid = movies.indexOf(movie);

    if (movies[mid].stars <= 0) {
      return;
    }

    movies[mid].stars -= 0.5;

    this.setState({
      movies: movies,
    });
  };

  handleToggleFav = (movie) => {
    const { movies } = this.state;
    const mid = movies.indexOf(movie);
    movies[mid].fav = !movies[mid].fav;

    this.setState({
      movies,
    });
  };

  handleToggleCart = (movie) => {
    let { movies,cartCount } = this.state;
    const mid = movies.indexOf(movie);
    movies[mid].cart = !movies[mid].cart;
    console.log(movies[mid].cart)

    if(movies[mid].cart){
      cartCount = cartCount+1
    }
    else{
      cartCount -=1;
    }

    this.setState({
      movies: movies,
      cartCount:cartCount
    });
    
  };

  render() {

    const {movies,cartCount} =this.state
    return (
      <>
        <Navbar cartCount = {cartCount}/>
        <MovieList
          movies={movies}
          addStars={this.handleIncStar}
          decStars={this.handleDecStar}
          toggleFav={this.handleToggleFav}
          toggleCart={this.handleToggleCart}
        />
      </>
    );
  }
}

export default App;
