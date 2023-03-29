// /* eslint-disable no-unreachable */
// import React, { Component } from "react";
// // import Header from "./Header";
// import axios from "axios";

// class Movie extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       movies: [],
//       query: "",
//     };
//     this.handleInput = this.handleInput.bind(this);
//   }

//   handleInput = (event) => {
//     return (this.setState = {
//       query: event.target.value,
//     });
//   };
//   handlesubmit = (event) => {
//     console.log('clicked')
//     event.preventDefault();
//     axios
//       .get(
//         ` http://www.omdbapi.com/?s=tt3896198&apikey=e53a634e=${this.state.query}`
//       )
//       .then((response) => {
//         this.setState(
//           { movies: response.data },
//           console.log("response data moved to state")
//         );
//         console.log(response);
//       })
//       .catch((error) => {
//         console.error("movie not found" + error);
//       });
//   };

//   //api call
//   componentDidMount = () => {};

//   render() {
//     const { query } = this.state;
//     console.log("this is query from render method", query);
//     return (
//       <div className="shop">
//         <input
//           type="text"
//           name="query"
//           placeholder="search for any movie"
//           value={query}
//           onChange={this.handleInput}
//         />
//         <button type="submit" onSubmit={this.handlesubmit}>
//           search
//         </button>
//       </div>
//     );
//   }
// }

// export default Movie;
