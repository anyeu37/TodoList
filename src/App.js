import React, { Component} from 'react';
import './App.css';
import TodoList from './components/TodoList';

import tick from './tick.svg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        totalItems: 0,
        newItem: '',
        todoLists: [
          { title: 'Iphone 6', isComplete: true },
          { title: 'Iphone 7', isComplete: false },
          { title: 'Iphone 8', isComplete: false },
          { title: 'Iphone 10', isComplete: false },
        ]
    }
  }
  onClick = (item) => {
    var isComplete = item.isComplete;
    var { todoLists } = this.state;    
    var index = todoLists.indexOf(item);
    this.setState({
      todoLists: [
        ...todoLists.slice(0,index),
        {
          ...item,
          isComplete: !isComplete
        },
        ...todoLists.slice(index+1)
      ]
    });
    
  }
  onKeyUp = (event) => {
    var text = event.target.value;
    if(event.keyCode === 13) {
      if(!text){
        return;
      }
      text = text.trim();
      this.setState({
        newItem: '',
        todoLists:[
          {
            title:text,
            isComplete: false
          },
          ...this.state.todoLists
        ]
      });
    }
  }
  onChange = (event) => {
    this.setState({
      newItem: event.target.value
    });
  }

  totalItems = () => {
    return this.state.todoLists.length;
  }
  onClickAll = () => {  
  }
  onClearComplete = () => {
    var todoListsComplete = this.state.todoLists.filter((item)=>{
      return item.isComplete===false
    })
    this.setState({
      todoLists: todoListsComplete
    });
  }
 render(){

  const { todoLists} = this.state;
  var todoItems = todoLists.map((item,index)=> <TodoList item={item} key = {index} onClick={()=>this.onClick(item)}/>);
  return (
    <div className="App">
        <div className="Header">
          <img src={tick} alt="check" width="20" height="20"/>
          <input 
            type="text" 
            value={this.state.newItem}
            onChange = {(event)=>this.onChange(event)}
            className="inputtext" 
            placeholder="What needs to be done?" 
            onKeyUp={(event)=>this.onKeyUp(event)}
            />
        </div>
        <div className="TodoList">
          {
            todoItems
          }
        </div>
        <div className="Footer">
            <span>
              {
                this.totalItems()
              }
              &nbsp;&nbsp;&nbsp;items
            </span>
            <ul>
              <li><a href="#" className="active" onClick={()=>this.onClickAll()}> all</a></li>
              <li><a href="#" >active</a></li>
              <li><a href="#">complete</a></li>
            </ul>
            <button className="btn-clear" onClick = {()=>this.onClearComplete()}>
              Clear complete
            </button>
        </div>
    </div>
  );
 }
}

export default App;
