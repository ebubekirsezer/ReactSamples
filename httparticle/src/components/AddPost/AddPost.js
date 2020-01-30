import React,{Component} from "react";
import { Input, TextArea, Header, Button } from 'semantic-ui-react';
import axios from "axios";
import "./AddPost.css";


class addPost extends Component {
    state={
        title : "",
        content : "",
        author : "",
        id: 0
    }
    postDataHandler=()=>{
        const data = {
            title: this.state.title,
            content: this.state.content,
            author: this.state.author,
            id: Math.random()
        }

        axios.post("YOUR_FIREBASE_URL.json",data).then(response =>{
            console.log(response);
        })
    }

    render(){
        return(
            <div className="AddPost">
                <Header as="h1" style={{margin: "10px", textAlign:"center",color:"darkblue"}}>Add Post</Header>
                <Input placeholder="Title" style={{margin:"5px"}} type="text" value={this.state.title} onChange={(event)=>this.setState({title:event.target.value})}/>
                <TextArea placeholder="Content" style={{minHeight : 100, margin:"5px"}} value={this.state.content} onChange={(event)=>this.setState({content:event.target.value})}/>
                <Input placeholder="Author" style={{margin:"5px"}} type="text" value={this.state.author} onChange={(event)=>this.setState({author:event.target.value})}/>
                <Button className="Button" style={{backgroundColor : "yellow", margin:"5px", width:150,alignSelf:"center",color:"darkblue"}} onClick={this.postDataHandler}>Add Post</Button>
            </div>
        )
    }
}

export default addPost;