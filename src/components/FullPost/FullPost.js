import React, { Component } from 'react';
import axios from 'axios';
import './FullPost.css';

class FullPost extends Component {

    state = {
        loadedComponent : null
    }
    componentDidUpdate(){
        if(this.props.id){
            axios.get('https://jsonplaceholder.typicode.com/posts' + this.props.id)
            .then(response => {
                this.setState({loadedComponent :response.data});
            });
        }
    }
    render () {
        let post = <p style ={{textAlign : 'center'}}>Please select a Post!</p>;
        if(this.props.id){
        post = (
            <div className="FullPost">
                <h1>{this.state.loaded.title}</h1>
                <h1>{this.props.author}</h1>
                <p>{this.props.content}</p>
                <div className="Edit">
                    <button onClick = {this.props.deleted} className="Delete">Delete</button>
                </div>
            </div>

        );
        }
        return post;
    }
}

export default FullPost;