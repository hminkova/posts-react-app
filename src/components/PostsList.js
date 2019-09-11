import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPostsAndUsers } from '../actions';

import PostUser from './PostUser';


class PostsList extends Component {
    componentDidMount() {
        this.props.fetchPostsAndUsers();
    }

    renderList() {
        return this.props.posts.map(post => {
            return(
                <div class="card" key={post.id}>
                    <div class="content">
                        <strong class="header">
                            {post.title}
                        </strong>
                        <small class="meta">
                            <PostUser userId={post.userId}/>
                        </small>
                        <p class="description">
                            {post.body}
                        </p>
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
            <div class="ui cards centered">
                {this.renderList()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPostsAndUsers })(PostsList);