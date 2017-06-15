import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import LyricCreate from './LyricCreate';
import LyricList from './LyricList';

import query from '../queries/fetchSong';

class SongDetail extends Component {
    render() {
        console.log(this.props);
        const { song } = this.props.data;

        if (!song) { return <div> ...loading </div>; }

                // {this.renderLyrics()}
        return (
            <div>
              <Link 
                    to='/'
                     className="btn-floating btn-large red right">
                Back </Link>
                <h2> SongDetail </h2>
                <h3> {song.title} </h3>
                <LyricList lyrics={song.lyrics}/>

                <LyricCreate songId = {this.props.params.id} />
            </div>
        );
    }
}

export default graphql(query, {
    options: (props) => {return {variables: {id: props.params.id}}}
})(SongDetail);

