import React, { Component } from 'react';
import './TodoList.css';
import classNames from 'classnames';

class TodoList extends Component {
    onChange = (event) => {
        console.log(event.target.checked);
        
    }
    render() {
        const { title, isComplete} = this.props.item;
        const { onClick } = this.props
        return (
            <div 
                className={classNames('TodoItem')}
            >
                <input 
                    type="checkbox" 
                    className="checkmark"   
                    onClick = {onClick} 
                    checked={isComplete} 
                    onChange = {(event)=>this.onChange(event)}
                    />
                <label >{title}</label>
            </div>
        );
    }
}

export default TodoList;