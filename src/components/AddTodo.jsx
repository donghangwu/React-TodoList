import React, { Component } from 'react'

export class AddTodo extends Component {

    //compoent state
    constructor(props)
    {
        super(props);
        this.state={
            topic: '',
            done: false,
            importance:'none'
        }
        this.storeItemInfo=this.storeItemInfo.bind(this);
        this.onSubmit=this.onSubmit.bind(this);

    }
    
    //store what the user typed
    storeItemInfo(e)
    {
        //if we have multiple field to store
        this.setState({[e.target.name]:e.target.value})
        this.setState({[e.target.importance]:e.target.value})
        console.log('importance:',this.state.importance)
    }

    onSubmit(e)
    {
        e.preventDefault();
        this.props.addTodo(this.state.topic,this.state.importance);
        this.setState({topic:''})
        this.setState({importance:'none'})
    }

    render() {
        return (
        <div>
            <form onSubmit={this.onSubmit} className='add_todo'>
                <input 
                    type='text' 
                    name='topic'
                    placeholder='Add To Do Item ...'
                    value={this.state.topic}
                    onChange={this.storeItemInfo}/>
                <input 
                    className='addtodo_importanceInput'
                    type='number' 
                    name='importance'
                    placeholder='importance'
                    value={this.state.importance}
                    onChange={this.storeItemInfo}/>
                <input type='submit' value='Submit'className='submitbtn'/> 
                </form>

        </div>
        )
        }
}

export default AddTodo
