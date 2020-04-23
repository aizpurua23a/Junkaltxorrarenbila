import React from 'react'

import RoomOne from './rooms/room_one.js'

import RoomTwo from './rooms/room_two.js'
import RoomThree from './rooms/room_three.js'
import RoomFour from './rooms/room_four.js'

import RoomFive from './rooms/room_five.js'
import RoomSix from './rooms/room_six.js'
import RoomSeven from './rooms/room_seven.js'

import RoomEight from './rooms/room_eight.js'
import RoomNine from './rooms/room_nine.js'
import RoomTen from './rooms/room_ten.js'
import RoomEleven from './rooms/room_eleven.js'
import RoomTwelve from './rooms/room_twelve.js'
import RoomThirteen from './rooms/room_thirteen.js'

import RoomFourteen from './rooms/room_fourteen.js'

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

                <RoomFive level = {this.state.level} next = {this.Next}/>
                <RoomSix level = {this.state.level} next = {this.Next}/>
                <RoomSeven level = {this.state.level} next = {this.Next}/>

                <RoomEight level = {this.state.level} next = {this.Next}/>
                <RoomNine level = {this.state.level} next = {this.Next}/>
                <RoomTen level = {this.state.level} next = {this.Next}/>
                <RoomEleven level = {this.state.level} next = {this.Next}/>
                <RoomTwelve level = {this.state.level} next = {this.Next}/>
                <RoomThirteen level = {this.state.level} next = {this.Next}/>

                <RoomFourteen level = {this.state.level} next = {this.Next}/>

                <End level = {this.state.level} />
            </div>
        )
    }

}

export default Rooms