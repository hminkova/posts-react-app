import _ from 'lodash';

import jsonPlaceholder from '../api/jsonplaceholder';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts());

    const usersId = _.uniq(_.map(getState().posts, 'userId'));
    usersId.forEach(id => dispatch(fetchUser(id)));
}

export const fetchPosts = () => async (dispatch) => {
    const response = await jsonPlaceholder.get('/posts');

    dispatch({ type: 'FETCH_POSTS', payload: response.data })
}

export const fetchUser = id => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({type: 'FETCH_USER', payload: response.data});
};

// export const fetchUser = id => dispatch => _fetchUser(dispatch, id);

// const _fetchUser = _.memoize(async (dispatch, id) => {
//     const response = await jsonPlaceholder.get(`/users/${id}`);

//     dispatch({type: 'FETCH_USER', payload: response.data});
// });