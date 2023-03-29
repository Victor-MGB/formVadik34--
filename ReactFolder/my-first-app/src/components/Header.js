import React,{Component} from "react";
import Card from "./Card";
class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: "",
      movies: []
    };

    this.searchMovie = this.searchMovie.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  searchMovie(e) {
    e.preventDefault();
  }

  handleInputChange(e) {
    this.setState({
      query: e.target.value,
    });
  }

  render() {
    const { query,movies } = this.state;

    return (
      <div className="Header">
        <h1 className="title">
          MGB_11 Movie App search and find your interesting movie
        </h1>

        <div className="search">
          <form className="search-form" onSubmit={this.searchMovie}>
            <label htmlFor="query" className="name"></label>

          </form>
        </div>
        <div className="lastMovie">
          <Card movies={movies} />
        </div>
      </div>
    );
  }
}
export default Header