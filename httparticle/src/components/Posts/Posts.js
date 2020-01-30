import React,{Component} from "react";
import axios from "axios";
import "./Posts.css";

import Post from "../Post/Post";

class Posts extends Component{
    state={
        posts:[]
    }

    componentDidMount(){
        axios.get("YOUR_FIREBASE_URL.json").then(response =>{
            const myposts = Object.values(response.data);
            // console.log(myposts);

            const updatedPosts = myposts.map(post=>{
                return{
                    ...post,
                }
            })
            this.setState({posts:updatedPosts});
        }).catch(error=>{
            console.log(error);
        });
    }


    render(){

        //BuradaMap yapamıyorum

        let posts = this.state.posts.map(post=>{
            return <Post key={post.id} title = {post.title} author = {post.author} content={post.content}/>
        })
        return(
            <section className="Posts">
                {posts}
            </section>
        );
    }
}

export default Posts;