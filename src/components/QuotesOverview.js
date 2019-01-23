import React from 'react';
import {connect} from 'react-redux';
import Sidebar from './Sidebar';
import QuoteItem from './QuoteItem';
import {getQuotes} from '../actions/quoteAction';
import Checkbox from './Checkbox';
import TextArea from './TextArea';
import Textbox from './Textbox';
import DotMenu from './DotMenu';
import Header from './Header';
import FeedItem from './FeedItem';
import ShowMore from './ShowMore';

class QuotesOverview extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            quotes: {},
            isChecked: false,
            value: ''
        };
        this.check = this.check.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    // eslint-disable-next-line react/no-deprecated
    componentWillMount() {
        this
            .props
            .dispatch(getQuotes());
    }

    check(isChecked) {
        this.setState(() => {
            return {isChecked};
        });
    }

    handleEdit(){
        console.log('retarded test');
    }

    render() {
        let feedItem = {
            _id:1,
            _clientId:2,
            title:'example title',
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            timestamp:1301090400
        }

        let client = {            
            firstName: 'Name',
            location:{
                city:'Calgary',
                province:{
                    label:'AB'
                }
            }
        }

        return (
            <div>
                <div className='sidebar-general'>
                    <Sidebar/>
                </div>

                <div className='header'>
                    <Header title="Quotes" subtitle="Some subtitle"/>
                </div>

                <div className="main-content">
                    <Checkbox
                        text={'This is a checkbox example'}
                        checked={this.state.isChecked}
                        check={this.check}/>
                    <Textbox
                        label={'Textbox'}
                        placeholder={'This is a textbox example'}
                        error={'error'}
                    />
                    <Textbox 
                        label={'Textbox'}
                        placeholder={'This is a textbox example'}
                    />
                    <TextArea 
                        label={'TextArea'}
                        placeholder={'This is a textarea example'}
                    />
                    <DotMenu 
                        id={'id'}
                        placeholder={'This is a textarea example'}
                    >
                        <button className="button-popover" onClick={this.handleEdit}>Edit</button>
                        <button className="button-popover" onClick={this.handleDelete}>Delete</button>
                    </DotMenu>
					<ShowMore 
                        text={feedItem.description}
                    />
                    <FeedItem feedItem={feedItem} client={client}/>
                   
                    
                    
                    <span className="login-sub-title">Quotes</span>
					<div>
						<QuoteItem quotes={this.props.quotes} />
					</div>
				</div>
        </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    console.log(state);
    return {
        quotes: state.quoteReucer.quotes || {}
    };
};

export default connect(mapStateToProps)(QuotesOverview);
