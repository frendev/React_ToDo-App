import React, { Component } from 'react'
import PropTypes from 'prop-types';
export class TodoItem extends Component {
    
    getstyle=()=>{
        return {
            background:'#f4f4f4',
            padding:'10px',
            borderBottom:'1px #ccc dotted',
            textDecoration:this.props.todo.completed?
            'line-through':'none'
        }
    }

    

  render() {
        //Destructring-pulling out values from todo
        const {id,title}=this.props.todo;  
        return (
            <div style={this.getstyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this,id)}/>
                    { title }
                    <button onClick={this.props.delTodo.bind(this,id)} style={btnStyle}>X</button>
                </p>
            </div>
        )
    }
}

const btnStyle={
    background:'#ff0000',
    color:'#fff',
    padding:'5px 9px',
    borderRadius:'50%',
    float:'right',
    cursor:'pointer',


}

//prop todo is object here thats why
TodoItem.propTypes={
    todo:PropTypes.object.isRequired
}


export default TodoItem;
