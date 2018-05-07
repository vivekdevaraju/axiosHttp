import React, { Component } from 'react';
import axios from 'axios';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
state = {
    posts :[],
    selectedPostId :null
}


    postClickedHandler = (id) => {
        const post = this.state.posts[this.state.posts.findIndex(p=>{return p.id===id;})];
        this.setState({selectedPost : post});
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
            <div>
                <section className="Posts">
                   {posts}
                </section>
                <section>
                    <FullPost id ={this.state.selectedPostId}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;