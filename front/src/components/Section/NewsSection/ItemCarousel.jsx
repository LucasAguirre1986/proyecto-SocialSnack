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
                <div className="containerFicha">
                    <div className="div-img" >
                        <img src={`/assets/img/${this.props.id.img}`} className="imgCarrousel img" />
                        <div className="text">
                            <span className="titleImg">{this.props.id.title}</span>
                            <span className="nameImg">{this.props.id.name}</span> <span className="priceImg">${this.props.id.price}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}