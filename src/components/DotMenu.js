import React from 'react';
import {Popover, PopoverBody} from 'reactstrap';

class DotMenu extends React.Component {
    constructor(props) {
        super(props);
        
        this.toggle = this.toggle.bind(this);

        this.state = {
            dropdownIsOpen:false
        };
    }

    toggle(){
        this.setState(() => {
            return {
                dropdownIsOpen: !this.state.dropdownIsOpen
            };
        });
    }

    render() {
        return (
            <div className="dotmenu container">
                <i
                    onClick={this.toggle}
                    id={this.props.id}
                    className="dotmenu-icon material-icons">
                    more_vert
                </i>
                <Popover
                    placement="bottom"
                    isOpen={this.state.dropdownIsOpen}
                    target={this.props.id}
                    toggle={this.toggle}
                    >
                    <PopoverBody onClick={this.toggle}>
                        {this.props.children}
                    </PopoverBody>
                </Popover>
            </div>
        );
    }

}

export default DotMenu;
