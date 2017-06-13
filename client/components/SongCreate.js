import React, { Component } from 'react';

class SongCreate extends Component {
    constructor(props) {
        super(props);
    }
    songTitle

    handelSubmit(e) {
        e.preventDefault();

        console.log(this.songTitle.value);
    }

    // test =()=>{
    //     console.log('test');
    // }

    render() {
        console.log(this.songTitle);
        return (
            <div>
                <h3>Create a New Song</h3>
                <form onSubmit={this.handelSubmit.bind(this)}>
                    <label>Song Title:</label>
                    <input ref={input => this.songTitle = input } />
                </form>
            </div>
        );
    }
}

export default SongCreate;
