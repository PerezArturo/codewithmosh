import React, { Component } from 'react';

class MovieForm extends Component {
    render() {

        return (
            <React.Fragment>
                <h1>MovieForm {this.props.match.params.id}</h1>
                <button
                    className="btn btn-primary"
                    onClick={() => this.props.history.replace("/movies")}>Save</button>
            </React.Fragment>
        );
    }
}

export default MovieForm;