import React, { Component } from 'react';
const { shape, string, bool } = React.PropTypes;
import { Link } from 'react-router';
class ShowCard extends Component {
    constructor() {
        super();
        this.state = {
            allTime: [],
            thirtyDays: [],
            sortBy: 'recent'
        }
    }
   
    render() {
        const { poster, title, year, description } = this.props;
        return (
            <Link to={`/details/${this.props.imdbID}`}>
                <div className="show-card">
                    <img src={`/public/img/posters/${poster}`} />
                    <div>
                        <h3>{title}</h3>
                        <h4>({year})</h4>
                        <p>{description}</p>
                    </div>
                </div>
            </Link>
        )
    }
}

ShowCard.propTypes = {
    poster: string,
    title: string,
    year: string,
    description: string
}
export default ShowCard;