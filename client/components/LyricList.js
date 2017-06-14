import React, { Component } from 'react';

class LyricList extends Component {
    constructor(props){
        super(props);        
    }

    render() {        
        const lyrics = this.props.lyrics;
        return (
            <ul className="collection">                                
                <h5> Lyrics content</h5>
                {lyrics.map(({content, id})=>
                    <li className="collection-item" key={id}>{content}</li>
                )}
            </ul>
        );
    }
}

export default LyricList;
