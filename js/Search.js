import React, { Component, PropTypes } from 'react';
import preload from '../public/data.json';
import ShowCard from './ShowCard';

class Search extends Component {
    constructor() {
        super();
        this.state = {
            searchTerm: ""
        }
        this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
    }
    handleSearchTermChange(event) {
        this.setState({ searchTerm: event.target.value })
    }
    render() {
        return (
            <div className="search">
                <header>
                    <h1>svideo</h1>
                    <input onChange={this.handleSearchTermChange} value={this.state.searchTerm} type='text' placeholder='Search' />
                </header>
                <div>
                    {
                        preload.shows
                            .filter((show) => {
                                return `${show.title} ${show.description}`.
                                    toUpperCase().
                                    indexOf(this.state.searchTerm.toUpperCase()) >= 0
                            })
                            .map((show) => {
                                console.log(show)
                                return (
                                    <ShowCard key={show.imdbID} {...show} />
                                )
                            })
                    }
                </div>
            </div>
        )
    }
}

export default Search;