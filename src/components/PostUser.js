import React, { Component } from 'react';
import { connect } from 'react-redux';

class PostUser extends Component {
    render() {
        if(!this.props.user) {
            return null;
        }

        return <span>{this.props.user.name}</span>;
    }
}

const mapStateToProps = (state, ownProps) => {
    return { user: state.users.find( user => user.id === ownProps.userId) }
}

export default connect(mapStateToProps)(PostUser);