import React from 'react';
import DotDotDot from 'react-dotdotdot';

class ShowMore extends React.Component{
    constructor(props){
        super(props);

        this.showMore = this.showMore.bind(this);

        this.state = {
            isShowMore:false
        }
    }

    showMore(){
        this.setState(() => {
            return {isShowMore:!this.state.isShowMore}
        });
    }

    render(){

        let clampLines = 3;
        let text = this.props.text;
        // text.replace('\n','<br/>');

        return (
            <div onClick={this.showMore}>
                {this.state.isShowMore ? (
                    <span className="show-more-content">{text} <span className="show-more-text">Show less</span></span>
                ) : (
                    <DotDotDot 
                        clamp={clampLines}
                        useNativeClamp={false}
                        truncationHTML={'<span class="show-more-text">Show more</span>'}
                    >
                        <span className="show-more-content">{text}</span>
                    </DotDotDot>
                )}
                
            </div>
        )
    }
}

export default ShowMore;