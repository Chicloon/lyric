import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import query from '../queries/fetchSong';

class SongDetail extends Component {
    details() {
        console.log(this.props.params)
      
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <h3> SongDetail </h3>
                {this.details()}
            </div>
        );
    }
}

export default graphql(query, {
    options: (props) => {return {variables: {id: props.params.id}}}
})(SongDetail);

