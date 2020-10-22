import React, { Component } from 'react';
import Joi from 'joi'
import Form from './common/form';
import { getGenres } from '../services/fakeGenreService';
import { getMovie, saveMovie } from '../services/fakeMovieService';

class MovieForm extends Form {
    state = {
        data: { title: '', genreId: '', numberInStock: '', dailyRentalRate: '' },
        genres: [],
        errors: {}
    }

    schema = Joi.object({
        _id: Joi.string(),
        title: Joi.string().required().label("Title"),
        genreId: Joi.string().required().label("Genre"),
        numberInStock: Joi.number().required().min(0).max(100).label("Number in Stock"),
        dailyRentalRate: Joi.number().required().min(0).max(10).label("Daily Rental Rate"),
    })

    componentDidMount() {
        const genres = getGenres();
        this.setState({ genres })

        const movieId = this.props.match.params.id
        if (movieId === "new") return

        const movie = getMovie(movieId)
        if (!movie) return this.props.history.replace("/404")

        this.setState({ data: this.mapToViewModel(movie) })
    }

    mapToViewModel(movie) {
        return {
            _id: movie._id,
            title: movie.title,
            genreId: movie.genre._id,
            numberInStock: movie.numberInStock,
            dailyRentalRate: movie.dailyRentalRate,
        }
    }

    doSubmit = () => {
        saveMovie(this.state.data)

        this.props.history.push("/movies")
    }

    render() {

        return (
            <React.Fragment>
                <h1>MovieForm</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("title", "Title")}
                    {this.renderSelect("genreId", "Genre", this.state.genres)}
                    {this.renderInput("numberInStock", "Number in Stock", false, "number")}
                    {this.renderInput("dailyRentalRate", "Rate", false)}
                    {this.renderButton('Save')}
                </form>
            </React.Fragment>
        );
    }
}

export default MovieForm;