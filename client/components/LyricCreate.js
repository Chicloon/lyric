import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import fetchSong from '../queries/fetchSong';
import fetchSongs from '../queries/fetchSongs';

class LyricCreate extends Component {
    constructor(props) {
        super(props);
        this.content ='';
    }

    onSubmit(event){
        event.preventDefault();
        console.log(this.refs.input.value);

        this.props.mutate({
           variables: {
               songId: this.props.songId,
               content: this.refs.input.value
           },
        //    refetchQueries: [{ 
        //         query: fetchSong, 
        //         variables:{
        //             id: this.props.songId
        //         } 
        //     }]
        })
            .then(this.refs.input.value = '');
    }
// ref={input => this.content = input}
    render(){
        return(
            <form onSubmit={this.onSubmit.bind(this)}>
                <label> Add a Lyric </label>
                <input 
                    
                    ref='input'
                    />
            </form>
        );
    }
}

const mutation = gql`
    mutation addLyric($songId: ID!, $content: String){
        addLyricToSong(songId: $songId, content: $content){
            id,
            lyrics{
                id,
                content,
                likes
            }            
        }
    }
`;

export default graphql(mutation)(LyricCreate);
