import React from "react";
//const ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Item from './ItemCarousel'

export default class Carousel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: this.props.items,
            active: this.props.active,
            direction: '',
            width: window.innerWidth,
        }
        this.rightClick = this.moveRight.bind(this)
        this.leftClick = this.moveLeft.bind(this)
    }

    generateItems() {
        var items = []
        var level
        for (var i = this.state.active - 2; i < this.state.active + 3; i++) {
            var index = i
            if (i < 0) {
                index = this.state.items.length + i
            } else if (i >= this.state.items.length) {
                index = i % this.state.items.length
            }
            level = this.state.active - i
            items.push(<Item key={index} id={this.state.items[index]} level={level} />)
        }
        return items
    }

    moveLeft() {
        var newActive = this.state.active
        newActive--
        this.setState({
            active: newActive < 0 ? this.state.items.length - 1 : newActive,
            direction: 'left'
        })
    }

    moveRight() {
        var newActive = this.state.active
        this.setState({
            active: (newActive + 1) % this.state.items.length,
            direction: 'right'
        })
    }

    render() {
        
        return (
            <div id="carousel" className="noselect">
                <div className="arrow arrow-left arrowSize" onClick={this.leftClick}><i className="fas fa-arrow-alt-circle-left"></i></div>

                <ReactCSSTransitionGroup
                    transitionName={this.state.direction}
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>
                    {this.generateItems()}
                </ReactCSSTransitionGroup>

                <div className="arrow arrow-right arrowSize" onClick={this.rightClick}><i className="fas fa-arrow-alt-circle-right"></i></div>
            </div>
        )
    }
}