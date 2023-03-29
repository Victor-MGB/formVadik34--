import React,{Component} from "react";
import Movie from "./Movies";
class Container extends Component {
  render() {
    return(
        <div className="container">
            <Movie/>
        </div>
    )
  }
}

export default Container;
