import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class LyricList extends Component {
	constructor(props) {
		super(props);
	}

	onLike(id, likes) {
		console.log(id);
		this.props.mutate({
			variables: { id },
			optimisticResponce: {
				__typename: 'Mutation',
				likeLyric: {
					id,
					__typename: '"LyricType',
					likes: likes + 1
				}
			}
		});
	}

	render() {
		const lyrics = this.props.lyrics;
		return (
			<ul className="collection">
				<h5> Lyrics content</h5>
				{lyrics.map(({ content, id, likes }) =>
					<li className="collection-item" key={id}>{content}
						<div className="vote-box">
							{likes}
							<i
								className="material-icons"
								onClick={() => this.onLike(id, likes)}
							>
								thumb_up
            </i>
						</div>
					</li>
				)}
			</ul>
		);
	}
}

const mutation = gql`
mutation addLike($id: ID) {
	likeLyric(id: $id) {
		id,
		likes
	}
}
`;

export default graphql(mutation)(LyricList);
