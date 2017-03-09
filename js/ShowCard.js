import React, { Component } from 'react';
const { shape, string, bool } = React.PropTypes;

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
            <div className="show-card">
                <img src={`/public/img/posters/${poster}`} />
                <div>
                    <h3>{title}</h3>
                    <h4>({year})</h4>
                    <p>{description}</p>
                </div>
            </div>
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