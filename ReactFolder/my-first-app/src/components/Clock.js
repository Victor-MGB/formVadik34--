import React from "react";
import './Clock.css';
// function Clock(props){
//     return(
//         <div>
//             <h1>
//                 hello world
//             </h1>
//             <h2>
//                 it is {props.date.toLocaleTimeString()}
//             </h2>
//         </div>
//     )
// }


// it can also be used or defined using class.
class Clock extends React.Component{
    constructor(props){
        super(props)
        this.state={date:new Date()}
    }
    // add the lifecycle
    componentDidMount(){
        this.timerID = setInterval(()=>this.tick(),1000)
    }
    componentWillUnmount(){
        clearInterval(this.timerID)
    }
    tick(){
        this.setState({
            date: new Date()
        })
    }
    render(){
        return(
            <div className="container">
                <div className="point">
                <h1 className="bighead">
                   Victor's stop watch
                </h1>
                <h2 className="smallhead">
                     {this.state.date.toLocaleTimeString()}
                </h2>
                </div>
            </div>
        )
    }
}
export default Clock;