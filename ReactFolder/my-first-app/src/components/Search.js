import React, { Component } from "react";
import axios from "axios";

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      SearchItem: "",
      RespondedData: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handlesearch = this.handlesearch.bind(this);
  }

  handleInputChange = (event) => {
    this.setState({ SearchItem: event.target.value });
  };
  handlesearch = () => {
    axios
      .get(
        `http://www.omdbapi.com/?s=tt3896198&apikey=e53a634e=${this.state.SearchItem}`
      )
      .then((res) => {
        this.setState(
          { RespondedData: res.data },
          console.log("response passed to state")
        );
      })
      .Catch((err)=>{console.log('error message', err)})
  };

  render() {
    return (
      <div>
        <input
          type="text"
          name="query"
          placeholder="search for any movie"
          value={this.state.SearchItem}
          onChange={this.handleInputChange}
        />{" "}
        <button type="submit" onClick={this.handlesearch}>
          search
        </button>
        
      </div>
    );
  }
}
export default Search;
