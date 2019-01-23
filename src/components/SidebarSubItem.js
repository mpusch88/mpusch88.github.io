import React from 'react';

class SidebarSubItem extends React.Component{
    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);

        this.state = {
            // userLength:[]
            userLength:1
        };
    }

    // componentDidMount(){
    //     let userLength = Object.keys(this.props.bids).filter((key) => {
    //         return this.props.bids[key]._clientId === this.props.userId;
    //     });
    //     this.setState(() => {
    //         return {userLength};
    //     })
    // }

    handleClick(){
        // if(this.state.userLength.length > 1){
        //     this.props.sendUser(this.props.userId);
        // } else {
        //     this.props.send(this.state.userLength[0]);
        // }
    }

    render(){
        let classes = 'sidebar-sub-container noselect';
        // if(this.props.type === "quotes" && this.state.userLength.includes(this.props.id)){
        //     classes += " active";
        // } else if(this.props.type === "userquotes" && this.props.id === this.props.userId){
        //     classes += " active";
        // }

        return (
            <div onClick={this.handleClick} className={classes}>
                <span className='sidebar-sub-title'>
                    {this.props.title}   <span className="sidebar-sub-status">{this.props.status}</span>
                </span>
            </div>
        );
    }
}

export default SidebarSubItem;