import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Todos from './components/Todos'
import './App.css';
import Header from './components/layout/Header';
import AddToDo from'./components/AddToDo'
import About from'./components/pages/About'
//import uuid from'uuid'
import axios from 'axios';

class App extends React.Component{
  state={
    todos:
    []
  }
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res=> this.setState({todos:res.data}))
  }
//Mark Todo as a complete i.e Toggle
  markComplete= (id)=>{
    this.setState({todos:this.state.todos.map(todo=>{
      if(todo.id===id){
        todo.completed=!todo.completed
      }
      return todo;
    }
      )})
  }

  //Delete Todo
  delTodo=(id)=>
  {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res=> this.setState({todos:[...this.state.todos.filter(todo=>
        todo.id!== id)]}));
    
  }
  
  addToDo=(title)=>
  {
    axios.post('https://jsonplaceholder.typicode.com/todos',{
      title,
      completed:false
    }).then(res=> this.setState({todos:[...this.state.todos,res.data]}));
  }
  //In above we posted a request that we want to addToDO->It became successful->then we used 'setState' to update the component i.e we added the new Todo after saving it to database
  render ()
  {
   return (
     <Router>
    <div className="App">
      <div className='container'>
      <Header/>
      <Route exact path="/" render={props=>(
         <React.Fragment>
            <AddToDo addToDo={this.addToDo}/> 
            <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}></Todos>
         </React.Fragment>
      )}/>
      <Route path="/about" component={About}/>
      </div>
      </div>
    </Router>//passing state todos as a prop to Todos using above statement
  );// 'markComplete' came from Todos.js as a prop 
}
}

export default App;
