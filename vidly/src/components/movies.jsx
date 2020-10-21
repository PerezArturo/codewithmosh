import React, { Component } from 'react';
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import ListGroup from "./common/listGroup";
import Pagination from "./common/pagination"
import { paginate } from '../utils/paginate';
import MovieTable from './moviesTable';
import _ from 'lodash'

class Movies extends Component {
    state = {
        movies: [],
        genres: [],
        pageSize: 4,
        currentPage: 1,
        sortColumn: { path: 'title', order: 'asc' }
    };

    componentDidMount() {
        const genres = [{ _id: '', name: "All Genres" }, ...getGenres()]
        this.setState({ movies: getMovies(), genres })
    }

    handledelete = (movie) => {
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({ movies });
    };

    handleLike = (movie) => {
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = { ...movies[index] }
        movies[index].liked = !movies[index].liked
        this.setState({ movies })

        console.log("Like", movie.title)
    };

    handlePageChange = page => {
        this.setState({ currentPage: page })
    }

    handleGenreSelect = genre => {
        this.setState({ selectedGenre: genre, currentPage: 1 })
    }

    handleSort = sortColumn => {
        this.setState({ sortColumn })
    }

    getPagedData = () => {

        const { movies: allMovies, pageSize, currentPage, selectedGenre, sortColumn } = this.state;

        const filtered = selectedGenre && selectedGenre._id
            ? allMovies.filter(m => m.genre._id === selectedGenre._id)
            : allMovies

        const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order])

        const movies = paginate(sorted, currentPage, pageSize);

        return { totalCount: filtered.length, data: movies }
    }

    render() {
        const { length: count } = this.state.movies;
        const { pageSize, currentPage, selectedGenre, sortColumn, genres } = this.state;
        if (count === 0)
            return <p>There are no movies in the DB.</p>;

        const { totalCount, data: movies } = this.getPagedData()

        return (
            <React.Fragment>
                <h1 className="title">Movies <span role="img" aria-label="">🎥</span> </h1>
                <div className="row">
                    <div className="col-md-2">
                        <ListGroup
                            items={genres}
                            selectedItem={selectedGenre}
                            onItemSelect={this.handleGenreSelect} />
                    </div>
                    <div className="col-md">
                        <p>Showing {totalCount} movies </p>
                        <MovieTable
                            movies={movies}
                            sortColumn={sortColumn}
                            onLike={this.handleLike}
                            onDelete={this.handledelete}
                            onSort={this.handleSort} />
                        <Pagination
                            itemsCount={totalCount}
                            pageSize={pageSize}
                            currentPage={currentPage}
                            onPageChange={this.handlePageChange} />
                    </div>
                </div>
            </React.Fragment>
        );
    }

}

export default Movies;