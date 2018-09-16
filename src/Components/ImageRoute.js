import React from 'react';
import axios from 'axios';
import '../App.css';

class ImageRoute extends React.Component{
    constructor(props){
        super(props);
        this.state = ({posts: []});
    }

    componentDidMount(){
        axios.get('https://reactworkshop.herokuapp.com/data')
            .then(response => {
                const posts = response.data.data;
                this.setState({posts});
                console.log(posts[0].imageTitle);
                console.log(this.state.posts[0]);
            })
    }

    render(){
        return(
            <div>
                {this.state.posts.map(post => (
                    <div key="{post.imageId}">
                        <h2 style={{marginBottom: '0px'}}>{post.imageTitle}</h2>
                        <img src={post.imageUrl} atl="Url" className="App-image"/>
                    </div>
                ))}
            </div>
        )
    }
}

export default ImageRoute;
