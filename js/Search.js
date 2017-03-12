import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ShowCard from './ShowCard';
import Header from './Header';
const { arrayOf, shape, string } = PropTypes;
class Search extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="search">
                <Header showSearch />
                <div>
                    {
                        this.props.shows
                            .filter((show) => {
                                return `${show.title} ${show.description}`.
                                    toUpperCase().
                                    indexOf(this.props.searchTerm.toUpperCase()) >= 0
                            })
                            .map((show) => {
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

Search.propTypes = {
    shows: arrayOf(shape({
        title: string,
        description: string
    })),
    searchTerm: string
}

const mapStateToProps = (state) => {
    return {
        searchTerm: state.searchTerm
    }
}
export default connect(mapStateToProps)(Search);