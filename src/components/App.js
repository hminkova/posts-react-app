import React from 'react';

import PostsList from './PostsList';

const App = () => {
    return(
        <div class="ui container">
            <div class="ui masthead vertical segment" style={{marginBottom: "50px"}}>
                <h1 class="ui header centered">
                    Posts List
                </h1>
            </div>
            <PostsList />
        </div>
    );
}

export default App;