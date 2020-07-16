import React, { Component } from 'react';
import './App.css';
import{BrowserRouter as Router,Route }from 'react-router-dom'
import Todo from './components/Todo';
import Header from'./components/layout/Header'
import AddTodo from './components/AddTodo';
import About from './components/pages/about'
import { v4 as uuidv4 } from 'uuid';
class App extends Component {
  
  //js object
  state = {
    //todos is an array of object
    // the object contains id,topic,done
    todos:[
      {
        id:uuidv4(),
        topic:'take a shower',
        done:false,
        importance:'★★'
      },
      {
        id:uuidv4(),
        topic:'do a leetcode problem',
        done:false,
        importance:'★★★★'
      },
      {
        id:uuidv4(),
        topic:'eat you brunch',
        done:false,
        importance:'★★★'
      },
      {
        id:uuidv4(),
        topic:'start learning',
        done:false,
        importance:'★★★★'
      }
    ]
  };

  //map with function have more than two parameters
  completing(id)
  {
    const newTodo = this.state.todos.map(todo => this.updatingDone(todo,id));
    this.setState({todos:newTodo});
  }
  updatingDone(todo,id)
  {
    if(todo.id===id)
    {
      todo.done = !todo.done;
    }
    return todo;
  }

  handleDelete(id)
  {
    const newTodo =[...this.state.todos.filter(todo => todo.id!==id)];
    this.setState({todos:newTodo});
  }

  addtodo(topic,importance)
  {
    let stars='';
   for (let index = 0; index <importance; index++) {
      stars+='★';
     
   }
    const newitem={
      id:uuidv4(),
      topic:topic,
      done:false,
      importance:stars
    };
    //cannot use newtodos=this.state.todos
    //it will copy the reference of right side
    let newtodos=[...this.state.todos];
    newtodos.push(newitem);
    this.setState({todos:newtodos});

  }


  render(){
    return (
      <Router>
        <div className="App">
          <Header/>
          <Route exact path='/' render={props=>(
            <React.Fragment>
                 <AddTodo addTodo={this.addtodo.bind(this)}/>
                {/*pass state as parameter into Todo class*/}
                {/*Todo_todos can be used this.props in Todo class */}
                {<Todo Todo_todos={this.state.todos} completing={this.completing.bind(this)} handleDelete={this.handleDelete.bind(this)}/>}
                {/*this.renderTag()*/}
            </React.Fragment>
          )}/>
          <Route path='/about' component={About}/>
         
        </div>
      </Router>
      
    );
  }

  
}

export default App;
