import React from 'react'

export default class Item extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            level: this.props.level
        }
    }

    render() {
        const className = 'item level' + this.props.level
        return (
            <div className={className}>
                <img src={`/assets/img/${this.props.id}`} className="imgCarrousel" />
            </div>
        )
    }
}