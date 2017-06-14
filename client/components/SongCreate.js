import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link, hashHistory } from 'react-router';

import query from '../queries/fetchSongs';

class SongCreate extends Component {
    constructor(props) {
        super(props);
    }
    songTitle

    handelSubmit(e) {
        e.preventDefault();

        this.props.mutate({
            variables: {
                title: this.songTitle.value
            },
            refetchQueries: [{ query }],
        })
            .then(()=> hashHistory.push('/'))
            .catch((error)=> console.log('Smth happened', error));
    }

    render() {
        return (
            <div>
                <h3>Create a New Song</h3>
                <form onSubmit={this.handelSubmit.bind(this)}>
                    <label>Song Title:</label>
                    <input ref={input => this.songTitle = input } />
                </form>
                <Link 
                    to='/'
                     className="btn-floating btn-large red right">
                Back </Link>
            </div>
        );
    }
}

const mutation = gql`
mutation AddSong ($title: String){
    addSong(title: $title){
        id,
        title
    }
}
`;

export default graphql(mutation)(SongCreate);
