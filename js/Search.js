import React, { Component, PropTypes } from 'react';
import preload from '../public/data.json';
import ShowCard from './ShowCard';

class Search extends Component {
    constructor() {
        super();
        this.state = {
            searchTerm: "A random search term for you"
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
                    <h1>{this.state.searchTerm}</h1>
                    <input onChange={this.handleSearchTermChange} value={this.state.searchTerm} type='text' placeholder='Search' />
                </header>
                <div>
                    {
                        preload.shows.map((show) => {
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