import React, {Component} from 'react';

class Posts extends Component {
    render() {
        const posts = this.state.posts.map(post => {
            return<Post 
            key = {post.id}
             title = {post.title}
              author = {post.author}
               clicked = {() =>{this.postClickedHandler(post.id)}} />
        });
        return();
    }
}

export default Posts;