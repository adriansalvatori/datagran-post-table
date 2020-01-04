import React, {Component} from 'react'

class DetailTable extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidUpdate(){
    console.log(this.props)
  }

  render() {
    if (this.props.user.active === false && this.props.post.active === false) { //Empty State
      return (
        <div
          className="image is-3by2 has-tooltip-white has-tooltip-multiline has-tooltip-active is-large"
          data-tooltip="Why dont you choose a 'post-id' or 'user-id', are u shy? come on!">
          <img src="https://media.flaticon.com/img/search/empty-search.svg" alt=""/>
        </div>
      )
    } else if (this.props.user.active === true && this.props.post.active === false) { //Posts by User
      return (
        <table
        className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth is-scrollable">
        <thead>
          <tr>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {this
            .props
            .user
            .posts
            .map((post, i) => {
              return (
                <tr key={i}>
                  <td className="has-tooltip-multiline" data-tooltip={'Post ID: ' + post.id + ' | Post Title: ' + post.title}>{post.title.slice(0, 25) + '...'}</td>
                  <td
                    className="has-tooltip-multiline has-tooltip-info"
                    data-tooltip="this is a test text" data-tooltip={post.body}>{post
                      .body
                      .slice(0, 25) + '...'}</td>
                </tr>
              )
            })
}
        </tbody>
      </table>
      );
    } else if (this.props.post.active === true && this.props.user.active === false) { //Comments in Post
      return (
        <table
          className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth is-scrollable">
          <thead>
            <tr>
              <th>Name</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {this
              .props
              .post
              .comments
              .map((comment, i) => {
                return (
                  <tr key={i}>
                    <td className="has-tooltip-multiline" data-tooltip={'e-mail: ' + comment.email + ' | Comment Name: ' + comment.body}>{comment.name.slice(0,25) + '...'}</td>
                    <td
                      className="has-tooltip-multiline has-tooltip-info"
                      data-tooltip="this is a test text" data-tooltip={comment.body}>{comment
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
  }
}

export default DetailTable;