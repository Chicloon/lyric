import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';

import query from '../queries/fetchSongs';

class SongList extends Component {
    deleteSong(id) {
        console.log(id);
        this.props.mutate({
            variables: {
                id,
            },
            // refetchQueries: [{ query }],
        })
            .then(()=>this.props.data.refetch());
    }

    renderSongs() {
        return this.props.data.songs.map(({id, title}) =>
            <li key={id} className="collection-item">
                <Link to ={`/songs/${id}`}> {title} </Link>
                <i
                    onClick={()=>this.deleteSong(id)}
                    className="material-icons"
                    >
                
                </i>                
            </li>
        );
    }

    render() {
        if(this.props.data.loading) {
            return <div> Loading.... </div>
        }
        
        return (
            <div>
            <ul className="collection">
                {this.renderSongs()}               
            </ul>
            <Link 
                to="/songs/new"
                className="btn-floating btn-large red right" >
                <i className="material-icons">add</i> 
                </Link>
            </div>
        );
    }
}

const mutation = gql`
    mutation deleteSong($id: ID) {
        deleteSong(id: $id){
            id
        }
    }
`;

export default graphql(mutation)(
    graphql(query)(SongList)
);
