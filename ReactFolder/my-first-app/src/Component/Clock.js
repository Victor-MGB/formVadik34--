import React, { useState } from 'react';

// class Clock extends Component {
//     constructor(props) {
//       super(props)
    
//       this.state = {
//          date: new Date()
//       };
//       setInterval(()=>this.setTimeout(),1000)
//     };
//     setTimeout(){
//         console.log(this.state.date);
//         this.setState((state,props)=>({
//             date: new Date()
//         }))
// }
//   render() {
//     return (
//       <div style={{backgroundColor: 'green', padding: '20px',textAlign: 'center',fontSize: '70px'}}>
//         {this.state.date.toString()}
//       </div>
//     );
//   }
// }
// using statelesscomponent
function Clock(){
    const[curentTime,setCurrentTime] = useState(new Date())
    setInterval(()=>setCurrentTime(new Date(),1000))
    return(
        <div>{curentTime.toString()}</div>
    )
}
export default Clock;
