import React, { Component } from 'react';
import  './Todo2.css'

class Todo2 extends Component {
    constructor(props) {
      super(props);
    
      this.state = {
         newItem: "",
         list:[]
      };
    }

    addItem = (todoValue) => {
        if(todoValue !== ""){
            const newItem = {
                id: Date.now(),
                value: todoValue,
                isDone:false
            };
            const list = [...this.state.list];
            list.push(newItem);
            this.setState({list, newItem: ""});
        }
    }

    deleteItem = (id) => {
        const list = [...this.state.list];
        const updateList =list.filter(item=>item.id !== id)
        this.setState({list: updateList})
    }

    updateInput = (input) => {
        this.setState({newItem:input})
    }
    
    render() {
        return (
            <div>
                <h1 className='app-title'>List App</h1>
                <center>
                    <div className='container'>
                        <input className='input-text' 
                        type="text" placeholder='put in call-code' 
                        required value={this.state.newItem} 
                        onChange={e=>this.updateInput(e.target.value)}/>

                        {/* adding button to the button */}

                        <button className='add-btn' 
                        onClick={()=>this.addItem(this.state.newItem)}>Add text-number</button>

                        {/* creating list space */}

                        <div className='list'>
                            <ul>
                                {this.state.list.map(item=>(
                                    <li key={item.id}>
                                        <input type="checkbox" name='idDone' defaultChecked = {item.isDone} 
                                        onChange={()=>this.updateInput}/>
                                        {item.value}

                                        <button className='btn' onClick={()=>this.deleteItem(item.id)}>
                                            delete
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </center>
            </div>
        );
    }
}

export default Todo2;
