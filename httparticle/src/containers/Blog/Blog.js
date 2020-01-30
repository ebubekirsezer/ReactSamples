import React,{Component} from "react";
import AddPost from "../../components/AddPost/AddPost";
import Posts from "../../components/Posts/Posts";

class blog extends Component{
    render(){
        return(
            <div>
                <AddPost/>
                <Posts/>
            </div>
        )
    }
}

export default blog;