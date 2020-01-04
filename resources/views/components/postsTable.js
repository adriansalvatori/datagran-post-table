import React, {Component} from 'react';
class PostsTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      table: false,
      notification: ''
    }
  }

  componentDidMount() {
    let component = this
    fetch('https://jsonplaceholder.typicode.com/posts').then(function (response) {
      return response.json();
    })
      .then(function (data) {
        component.setState({data: data, table: true})
      })
      .catch(error => {
        this.setState({
          notification: "We're having some trouble, try to update. Error: " + error,
          table: false
        })
      })
  }

  user = (id) => {
    let component = this
    fetch('https://jsonplaceholder.typicode.com/posts?userId=' + id)
      .then(function (response) {
        return response.json()
      })
      .then(function (data) {
        component.props.setUser(data, id)
      })
      .catch(error => {
        this.setState({
          notification: "We're having some trouble, try to update. Error: " + error,
          table: false
        })
      })
  }

  post = (id) => {
    let component = this
    fetch('https://jsonplaceholder.typicode.com/comments?postId=' + id)
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      component.props.setPost(data, id)
    })
    .catch(error => {
      this.setState({
        notification: "We're having some trouble, try to update. Error: " + error,
        table: false
      })
    })
  }

  render() {
    if (this.state.table === true) {
      return (
        <table
          className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth is-scrollable">
          <thead>
            <tr>
              <th>User ID</th>
              <th>Post ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tfoot>
            <tr>
              <th>User ID</th>
              <th>Post ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </tfoot>
          <tbody>
            {this
              .state
              .data
              .map((post, i) => {
                return (
                  <tr key={i}>
                    <td>
                      <a
                        onClick={() => {
                        this.user(post.userId)
                      }}
                        className="button is-narrow is-small is-primary">{post.userId}</a>
                    </td>
                    <td>
                      <a
                        onClick={() => {
                        this.post(post.id)
                      }}
                        className="button is-narrow is-small is-primary">{post.id}</a>
                    </td>
                    <td className="has-tooltip-multiline" data-tooltip={post.title}>{post
                        .title
                        .slice(0, 25) + '...'}</td>
                    <td className="has-tooltip-multiline has-tooltip-info" data-tooltip={post.body}>{post
                        .body
                        .slice(0, 25) + '...'}</td>
                  </tr>
                )
              })
}
          </tbody>
        </table>
      );
    }
    return (
      <div>
        <div className="notification has-text-dark">
          {this.state.notification}
        </div>
      </div>
    )
  }
}

export default PostsTable;