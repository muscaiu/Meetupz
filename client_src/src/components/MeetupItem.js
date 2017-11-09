import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class MeetupItem extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            item: props.item
        }
    }

    render() {
        return (
            <li className="collection-items">{this.props.item.name}</li>
        )
    }

}

export default MeetupItem