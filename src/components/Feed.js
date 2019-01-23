import React from 'react';
import {connect} from 'react-redux';
import {getFeed} from '../actions/feedAction';
import Sidebar from './Sidebar';
import Header from './Header';
import FeedItems from './FeedItems';
import FeedFilter from './FeedFilter';
import {addBid} from '../actions/bidAction';

class Feed extends React.Component {
    constructor(props) {
        super(props);

        this.createBid = this
            .createBid
            .bind(this);
        this.getFeedItems = this
            .getFeedItems
            .bind(this);
        this.filterFeed = this
            .filterFeed
            .bind(this);

        this.state = {
            jobs: [],
            editQuote: false,
            currentItem: undefined,
            quotePrice: '',
            quoteDescription: '',
            quoteMessage: '',
            quoteRetainer: '',
            isUpdating: false,
            filteredFeed: []
        };
    }

    filterFeed(practiceAreaFilter, provinceFilter, oldestFirst) {

        let new_feed = this
            .state
            .jobs
            .filter((item) => {
                let hasPracticeAreas = true;
                let hasProvinceFilter = true;

                if (practiceAreaFilter.length > 0) {
                    hasPracticeAreas = item
                        .practiceAreas
                        .filter((practiceAreaItem) => {
                            return practiceAreaFilter.includes(practiceAreaItem);
                        })
                        .length;
                }

                if (provinceFilter.length > 0) {
                    hasProvinceFilter = provinceFilter.includes(item._clientId.location.province.value);
                }

                if (hasPracticeAreas && hasProvinceFilter) {
                    return true;
                } else 
                    return false;
                }
            );

        console.log('NewFEED', new_feed);

        if (!practiceAreaFilter.length > 0 && !provinceFilter.length > 0) {
            this.setState(() => {
                return {filteredFeed: this.state.jobs};
            });
        } else {
            this.setState(() => {
                return {filteredFeed: new_feed};
            });
        }
    }

    getFeedItems() {
        this
            .props
            .dispatch(getFeed())
            .then(result => {
                this.setState(() => {
                    return {jobs: result, filteredFeed: result};
                });
            });
    }

    createBid(jobId, clientId) {
        let bidId = null;
        this
            .props
            .dispatch(addBid(jobId, clientId, this.props.user._id))
            .then((bid) => {
                bidId = bid._id;
                // let p1 = this.props.dispatch(getConvos()); // not yet implemented let p2 =
                // this.props.dispatch(getMyBids()); // not yet implemented return
                // Promise.all([p1, p2]) // not yet implemented
            })
            .then((bids) => {
                if (bidId) {
                    this
                        .props
                        .history
                        .push('/some/path/to/bid/' + bidId);
                }
            })
            .catch(() => {});
    }

    componentDidMount() {
        this.getFeedItems();
    }

    render() {
        console.log(this.state.jobs, "in render");

        return (
            <div>
                <div className="sidebar-general">
                    <Sidebar/>
                </div>

                <div className="header">
                    <Header title="Feed" subtitle="Available Jobs"></Header>
                </div>

                <div className="main-content">
                    <FeedFilter filterFeed={this.filterFeed}/>
                    <FeedItems feed={this.state.filteredFeed}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {user: state.userReducer.user};
};

export default connect(mapStateToProps)(Feed);
