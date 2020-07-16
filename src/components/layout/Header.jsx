import React, { Component } from 'react'
import './header.css';
import{Link} from 'react-router-dom'
export class Header extends Component {
    render() {
        return (
            <div className='Header_style'>
                <header>
                    <h1>To Do List</h1>
                    <Link className="Header_link" to='/'>Home</Link> |
                    <Link className="Header_link" to='/about'>About</Link>
                    
                </header>
            </div>
        )
    }
}

export default Header
