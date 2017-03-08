import React from 'react';
import ReactDOM from 'react-dom';
import MyTitle from './MyTitle';

var MyTitleFactory = React.createFactory(MyTitle);

var MyFirstComponent = React.createClass({
    render: function () {
        return (
            React.DOM.div(null,
                MyTitleFactory({ title: 'props are the best', color: 'peru' }),
                MyTitleFactory({ title: 'props are the best!!!', color: 'mediumaquamarine' }),
                MyTitleFactory({ title: 'props are the best!!!!', color: 'rebeccapurple' }),
                MyTitleFactory({ title: 'props are the best!!!!', color: 'darkvioletred' })
            )
        );
    }
});

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'))