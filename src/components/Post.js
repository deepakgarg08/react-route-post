import React from 'react'
import axios from 'axios'
export default class Post extends React.Component {

    state = {
        post  : null
    }
    componentDidMount() {
        // console.log('this.props',this.props)
        const id = this.props.match.params.post_id
        axios.get('https://jsonplaceholder.typicode.com/posts/'+id)
        .then(res =>
            this.setState({
                post: res.data
            })
        )

    }
    render() {

        const postInfo = this.state.post ? (
            <div>
                <h4 className = "post">{this.state.post.title} </h4>
                    <p> {this.state.post.body}</p>
               
            </div>
        ) : (
            <div className="center"> Loading post... </div>
        )

        return (
            <div className="container">
               {postInfo}
            </div>
        )
    }

}