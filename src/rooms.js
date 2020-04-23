import React from 'react'

import RoomOne from './rooms/room_one.js'

import RoomTwo from './rooms/room_two.js'
import RoomThree from './rooms/room_three.js'
import RoomFour from './rooms/room_four.js'


import End from './rooms/end.js'

class Rooms extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            level: 1
        };
        this.Next = this.Next.bind(this);
    }

    Next() {
        var old_level = this.state.level;
        this.setState({
            level: old_level + 1
        })
    }

    render() {
        return(
            <div>
                <RoomOne level = {this.state.level} next = {this.Next}/>
                <RoomTwo level = {this.state.level} next = {this.Next}/>
                <RoomThree level = {this.state.level} next = {this.Next}/>
                <RoomFour level = {this.state.level} next = {this.Next}/>
                <End level = {this.state.level} />
            </div>
        )
    }

}

export default Rooms