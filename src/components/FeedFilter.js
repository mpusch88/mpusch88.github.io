import React from 'react';
import {getPracticeAreas} from './../actions/getPracticeAreas';
import {Popover, PopoverBody} from 'reactstrap';
import canada from 'canada';
import SelectItem from './SelectItem';
import {connect} from 'react-redux';
import moment from 'moment';


class FeedFilter extends React.Component {
    constructor(props) {
        super(props);

        this.toggleFilterProvince = this
            .toggleFilterProvince
            .bind(this);
        this.toggleFilterPracticeAreas = this
            .toggleFilterPracticeAreas
            .bind(this);
        this.toggleFilterDate = this
            .toggleFilterDate
            .bind(this);
        this.filterProvince = this
            .filterProvince
            .bind(this);
        this.filterPracticeArea = this
            .filterPracticeArea
            .bind(this);

        this.provincesObj = {};
        this.provinces = Object
            .keys(canada.provinces)
            .map((province) => {
                let splitStr = canada
                    .provinces[province]
                    .toLowerCase()
                    .split(' ');
                for (var i = 0; i < splitStr.length; i++) {
                    splitStr[i] = splitStr[i]
                        .charAt(0)
                        .toUpperCase() + splitStr[i].substring(1);
                }
                this.provincesObj[province] = {
                    value: province,
                    label: splitStr.join(' ')
                };
                return {
                    value: province,
                    label: splitStr.join(' ')
                };
            });

        this.state = {
            provinceLabel: 'Province',
            provinceFilterOpen: false,
            provinceFilter: [],
            practiceAreas: [],
            practiceAreaFilterOpen: false,
            practiceAreaFilter: [],
            oldestFirst: true
        };
    }

    componentDidMount() {
        this
            .props
            .dispatch(getPracticeAreas())
            .then((practiceAreas) => {
                this.setState(() => {
                    console.log(practiceAreas);
                    return {
                        practiceAreas
                        // practiceAreaFilter: this.props.user.practiceAreas, provinceFilter:
                        // [this.props.user.location.province.value]
                    };
                });
            });
    }

    toggleFilterDate() {
        this.setState(() => {
            return {
                oldestFirst: !this.state.oldestFirst
            };
        });
    }

    toggleFilterPracticeAreas() {
        this.setState(() => {
            return {
                practiceAreaFilterOpen: !this.state.practiceAreaFilterOpen
            };
        });
    }

    filterPracticeArea(value) {
        if (this.state.practiceAreaFilter.includes(value)) {
            this.setState(() => {
                return {
                    practiceAreaFilter: this
                        .state
                        .practiceAreaFilter
                        .filter((item) => {
                            return item !== value;
                        })
                };
            }, () => {
                this
                    .props
                    .filterFeed(this.state.practiceAreaFilter, this.state.provinceFilter, this.state.oldestFirst);
            });
        } else {
            this.setState(() => {
                return {
                    practiceAreaFilter: this
                        .state
                        .practiceAreaFilter
                        .concat(value)
                };
            }, () => {
                this
                    .props
                    .filterFeed(this.state.practiceAreaFilter, this.state.provinceFilter, this.state.oldestFirst);
            });
        }
    }

    toggleFilterProvince() {
        this.setState(() => {
            return {
                provinceFilterOpen: !this.state.provinceFilterOpen
            };
        });
    }

    filterProvince(value) {
        if (this.state.provinceFilter.includes(value)) {
            this.setState(() => {
                return {
                    provinceFilter: this
                        .state
                        .provinceFilter
                        .filter((item) => {
                            return item !== value;
                        })
                };
            }, () => {
                this
                    .props
                    .filterFeed(this.state.practiceAreaFilter, this.state.provinceFilter, this.state.oldestFirst);
            });
        } else {
            this.setState(() => {
                return {
                    provinceFilter: this
                        .state
                        .provinceFilter
                        .concat(value)
                };
            }, () => {
                this
                    .props
                    .filterFeed(this.state.practiceAreaFilter, this.state.provinceFilter, this.state.oldestFirst);
            });
        }

    }

    render() {
        // this     .props     .feed     .filter((key) => {     }); this     .props
        // .feed     .sort((a, b) => {     });

        return (
            <div>
                {< div className = "row align-items-center lawyer-feed-header-sub" > <div className="col-12">
                    <button onClick={this.toggleFilterDate} className={'filter-button'}>
                        {this.state.oldestFirst
                            ? (
                                <span className="province-filter-label">Oldest</span>
                            )
                            : (
                                <span className="province-filter-label">Newest</span>
                            )}
                    </button>

                    <button
                        id={'FilterProvince'}
                        onClick={this.toggleFilterProvince}
                        className={this.state.provinceFilter.length > 0
                        ? ('filter-button active')
                        : ('filter-button')}>
                        {this.state.provinceFilter.length < 1
                            ? (
                                <span className="province-filter-label">Province</span>
                            )
                            : (
                                <span className="province-filter-label">
                                    {this.provincesObj[this.state.provinceFilter[0]].label}

                                </span>
                            )}

                        {this.state.provinceFilter.length > 1 && <span className="province-filter-number">{(' +' + (this.state.provinceFilter.length - 1))}</span>}
                    </button>

                    <button
                        id={'FilterPracticeArea'}
                        onClick={this.toggleFilterPracticeAreas}
                        className={this.state.practiceAreaFilter.length > 0
                        ? ('filter-button active')
                        : ('filter-button')}>
                        {this.state.practiceAreaFilter.length < 1
                            ? (
                                <span className="practicearea-filter-label">Practice Areas</span>
                            )
                            : (
                                <span className="practicearea-filter-label">
                                    {this
                                        .state
                                        .practiceAreas
                                        .filter((item) => {
                                            return this
                                                .state
                                                .practiceAreaFilter
                                                .includes(item._id);
                                        })[0]
                                        .area}

                                </span>
                            )}
                        {this.state.practiceAreaFilter.length > 1 && <span className="province-filter-number">{(' +' + (this.state.practiceAreaFilter.length - 1))}</span>}
                    </button>

                    <Popover
                        placement="bottom-start"
                        isOpen={this.state.practiceAreaFilterOpen}
                        target={'FilterPracticeArea'}
                        toggle={this.toggleFilterPracticeAreas}
                        hideArrow={true}
                        className={'lawyer-feed-province-filter'}>
                        <PopoverBody>
                            <div className="filter-popover-body">
                                {this
                                    .state
                                    .practiceAreas
                                    .map((obj) => {
                                        return (<SelectItem
                                            key={obj._id}
                                            text={obj.area}
                                            value={obj._id}
                                            select={this.filterPracticeArea}
                                            isSelected={this
                                            .state
                                            .practiceAreaFilter
                                            .includes(obj._id)}/>);
                                    })}
                            </div>
                        </PopoverBody>
                    </Popover>

                    <Popover
                        placement="bottom-start"
                        isOpen={this.state.provinceFilterOpen}
                        target={'FilterProvince'}
                        toggle={this.toggleFilterProvince}
                        hideArrow={true}
                        className={'lawyer-feed-province-filter'}>
                        <PopoverBody>
                            <div className="filter-popover-body">
                                {this
                                    .provinces
                                    .map((obj) => {
                                        return (<SelectItem
                                            key={obj.value}
                                            text={obj.label}
                                            value={obj.value}
                                            select={this.filterProvince}
                                            isSelected={this
                                            .state
                                            .provinceFilter
                                            .includes(obj.value)}/>);
                                    })}
                            </div>
                        </PopoverBody>
                    </Popover>
                </div> </div>}
            </div>
        );
    }
}

export default connect()(FeedFilter);
