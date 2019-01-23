import React from 'react';
import {getMoneyRound} from '../helpers/pricing';

class PriceBreakdownRow extends React.Component {
    constructor(props) {
        super(props);

        this.handleEdit = this
            .handleEdit
            .bind(this);
        this.handleDelete = this
            .handleDelete
            .bind(this);
        this.toggleDropdown = this
            .toggleDropdown
            .bind(this);

        this.state = {
            dropdownIsOpen: false
        };
    }

    handleEdit() {
        this
            .props
            .edit(this.props.item);
        this.toggleDropdown();
    }

    handleDelete() {
        this
            .props
            .delete(this.props.item);
        this.toggleDropdown();
    }

    toggleDropdown() {
        this.setState(() => {
            return {
                dropdownIsOpen: !this.state.dropdownIsOpen
            };
        });
    }

    render() {
        let description = this
            .props
            .item
            .description
            .toString();
        if (description.length > 200) {
            description = description.substring(0, 200) + '...';
        }
        return (
            <div className="row align-items-center price-breakdown-row">
                <div className="col-7 price-breakdown-column left">
                    <span className="price-breakdown-name">{this.props.item.name}</span>
                    {!this.props.item.isTaxable && (
                        <span className="price-breakdown-notax">Non-taxable</span>
                    )}
                    <span className="price-breakdown-desc">{description}</span>
                </div>
                <div className="col-5 price-breakdown-column right">
                    ${getMoneyRound(this.props.item.price)} {this.props.canEdit && (
                        <i
                            id={'PopoverPriceBreakdown' + this.props.item._id}
                            className="price-breakdown-icon material-icons"
                            onClick={this.toggleDropdown}>
                            more_vert
                        </i>
                    )}

                </div>
                {/* {this.props.canEdit && (
                    <Popover placement="bottom"
                    isOpen={this.state.dropdownIsOpen}
                    target={'PopoverPriceBreakdown'+this.props.item._id}
                    toggle={this.toggleDropdown}
                    >
                    <PopoverBody>
                    <button className="button-popover" onClick={this.handleEdit}>Edit</button>
                    <button className="button-popover" onClick={this.handleDelete}>Delete</button>
                    </PopoverBody>
                    </Popover>
                    )}
                */}
            </div>
        );
    }
}

export default PriceBreakdownRow;
