import React from 'react';
import {getServiceAmount, getMoneyRound, getTaxAmount} from '../helpers/pricing';
import PriceBreakdownRow from './PriceBreakdownRow';

const data = [
    {
        price: 400,
        name: 'Test Name',
        description: 'This is a test description of the item which is optional',
        isTaxable: true
    }, {
        price: 500,
        name: 'Test Name 2',
        description: 'This is a test description of the item which is optional',
        isTaxable: false
    }
];

class PriceBreakdown extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let pricing = data || [];
        // pricing.forEach(item => {     total += parseInt(item.price); });
        let total = pricing.reduce((sum, priceItem) => {
            return sum + parseFloat(priceItem.price);
        }, 0);
        let serviceFee = getServiceAmount(pricing);
        let taxAmount = null;
        if (true) {
            taxAmount = getMoneyRound(parseFloat(getTaxAmount(pricing, 'AB')) + parseFloat(getTaxAmount([
                {
                    price: serviceFee,
                    isTaxable: true
                }
            ], 'AB')));
        }

        let canEdit = false;
        if (this.props.editItem && this.props.deleteItem) {
            canEdit = true;
        }

        //calculate total
        let finalTotal = 0;
        if (taxAmount) {
            finalTotal = getMoneyRound(parseFloat(total) + parseFloat(serviceFee) + parseFloat(taxAmount));
        } else {
            finalTotal = getMoneyRound(parseFloat(total) + parseFloat(serviceFee));
        }

        return (
            <div className="container-fluid price-breakdown-container">
                {pricing.map((item, key) => {
                    return (<PriceBreakdownRow
                        key={item._id}
                        item={item}
                        edit={this.editItem}
                        delete={this.deleteItem}
                        canEdit={canEdit}/>);
                })}
                <div className="goodlawyer-divider price-breakdown-divider"></div>
                <div className="row align-items-center price-breakdown-row">
                    <div className="col-7 price-breakdown-total price-breakdown-column left">Subtotal</div>
                    <div className="col-5 price-breakdown-total price-breakdown-column right">${getMoneyRound(total)}</div>
                </div>
                <div className="row align-items-center price-breakdown-row">
                    <div className="col-7 price-breakdown-column left">Service Fee</div>
                    <div className="col-5 price-breakdown-column right">${serviceFee}</div>
                </div>
                {taxAmount && (
                    <div className="row align-items-center price-breakdown-row">
                        <div className="col-7 price-breakdown-column left">Taxes</div>
                        <div className="col-5 price-breakdown-column right">${taxAmount}</div>
                    </div>
                )}
                <div className="goodlawyer-divider price-breakdown-divider"></div>
                <div className="row align-items-center price-breakdown-row">
                    <div className="col-7 price-breakdown-total price-breakdown-column left">Total</div>
                    <div className="col-5 price-breakdown-total price-breakdown-column right">${finalTotal}
                        <span className="price-breakdown-notax">{!taxAmount && ("+Tax")}</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default PriceBreakdown;
