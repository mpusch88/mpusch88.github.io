import React from 'react';

class QuoteItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let quotes = Array.from(this.props.quotes);

        console.log(this.props.quotes);
        return quotes.map(quote => (
            <div key={quote._id}>
                <span>{quote.status}</span>
            </div>
        ));
    }
}

export default QuoteItem;
