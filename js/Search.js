import React, { Component, PropTypes } from 'react';
import preload from '../public/data.json';

class Search extends Component {
    render() {
        return (
            <div className="search">
                {
                    preload.shows.map((show) => {
                        return (
                            <h3>{show.title}</h3>
                        )
                    })
                }
            </div>
        )
    }
}

export default Search;