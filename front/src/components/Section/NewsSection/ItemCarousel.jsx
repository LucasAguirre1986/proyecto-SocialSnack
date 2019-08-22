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
                        <img src={`/assets/img/${this.props.id}`} className="imgCarrousel img" />
                        <div className="text">
                            <span className="titleImg">Lorem ipsum</span>
                            <span className="nameImg">Nombre Autor</span> <span className="priceImg">$344</span>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}