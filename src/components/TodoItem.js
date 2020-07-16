import React, { Component } from 'react'
import './todo.css';

//!!  class must be upper case for first letter!!!!
//this class will deal with indivdual todo item and fomatting them
//functional compoent
export class TodoItem extends Component {

    //dynamic styling
    getStyle()
    {
        //instead of dashes in css
        // we use camelcases in jsx for styling
      
        if(this.props.todoItem_todos.done)
        {
            return {
                textDecoration:'line-through',
                color:'#2E8B57'
            }
        }
        else{
            return{
                textDecoration:'none',
                color:'#000000'
            }
        }

    }

  
    //we can use arrow function to avoid using .bind(this)
    /*
    completing=(e)=>{
        console.log(this.props);
    }
    */
    render() {
        //destructing
        const {id,topic,importance}=this.props.todoItem_todos;
       
        return (
            //set the style based on completeness
            <div className="TodoItem_default">
            
                <p>
                    {/* raise a event all the way up to the App compoent*/}
                    <input className='TodoItem_checkbox' type='checkbox' onChange={this.props.completing.bind(this,id)}/>
                    <span className="TodoItem_importance">
                        {importance}
                    </span>
                   

                    <span  style={this.getStyle()}>
                    { topic}
                    </span>
                    
                    <button className='TodoItem_deleteButton' onClick={this.props.handleDelete.bind(this,id)}> X</button>
                </p>
            </div>
        )
    }
}



export default TodoItem
