import React, {Component} from 'react';
import PostsTable from '../components/postsTable';
import DetailTable from '../components/detailTable';
import PrettyScroll from 'pretty-scroll'; //with browserify or webpack

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        posts: [],
        id: '',
        active: false
      },
      post: {
        comments: [],
        id: '',
        active: false
      }
    }
  }

  setUser = (posts, id) => {
    this.setState({
      user: {
        posts: posts,
        id: id,
        active: true
      },
      post: {
        active: false
      }
    })
  }

  setPost = (comments, id) => {
    this.setState({
      post: {
        comments: comments,
        id: id,
        active: true
      },
      user: {
        active: false
      }
    })
  }

  componentDidMount() {
    new PrettyScroll('.sidebar', {
      container: '.sidebar-container',
      breakpoint: 575, // stop running the js when the window size is smaller than 575px
      offsetTop: 80, // space between the sticky element and the top of the window
      offsetBottom: 20, // space between the sticky element and the bottom of the window
      condition: () => true // you can disable the sticky behavior by returning false, it will be executed when you scroll.
    });
  }

  render() {
    return (
      <div>
        <div className="hero is-fullheight is-primary">
          <div className="hero-body">
            <div className="container">
              <h1 className="title is-1">This is a posts list</h1>
              <p>This post list is fetched from https://jsonplaceholder.typicode.com</p>
              <br/>
              <div className="columns">
                <div className="column">
                  <PostsTable setPost={this.setPost} setUser={this.setUser}/>
                </div>
                <div className="column sidebar-container">
                  <div className="sidebar">
                    <DetailTable user={this.state.user} post={this.state.post}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;