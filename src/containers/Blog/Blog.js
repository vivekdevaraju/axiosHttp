import React, { Component } from 'react';
import axios from 'axios';
import './Blog.css';

class Blog extends Component {
state = {
    posts :[],
    selectedPostId :null
}


    postClickedHandler = (id) => {
        const post = this.state.posts[this.state.posts.findIndex(p=>{return p.id===id;})];
        this.setState({selectedPostId : id});
    }


    deleteClickedHandler = (id) => {
        const posts = [...this.state.posts];
        console.log(id);
        posts.splice([this.state.posts.findIndex(p=>{return p.id===id;})],1);
        this.setState({posts : posts});
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            const post = response.data.splice(0,4).map(resp => {
                return {...resp,
                    author : 'Vivek'
                }          
            });
            this.setState({posts : post});
            console.log(response.data);
        });
    }
    render () {
        const posts = this.state.posts.map(post => {
            return<Post 
            key = {post.id}
             title = {post.title}
              author = {post.author}
               clicked = {() =>{this.postClickedHandler(post.id)}} />
        });
        return (
            <div className = "Blog">
                <header>
                    <nav>
                        <ul>
                            <li><a href = "/">Home</a></li>
                            <li><a href = "/new-post">New Post</a></li>

                        </ul>
                    </nav>    
                </header>
                <section className="Posts">
                   {posts}
                </section>
            </div>
        );
    }
}

export default Blog;