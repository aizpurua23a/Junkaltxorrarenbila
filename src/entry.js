import React from 'react'
import Rooms from './rooms.js'

class Entry extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            Salutation: 'Nor zara?',
            Welcome: 'Ongi etorri, Junkal!',
            In: false,
            Name: '',
            level: 0
        };

        this.GetIn = this.GetIn.bind(this);
        this.GetOut = this.GetOut.bind(this);

    }

    GetIn() {

        //Correct name
        if (this.state.Name === 'Junkal'){
            this.setState({
                In: true,
                level: 1       
            });
        } else {
            alert('Zoaz etxera. Zuretzat ez dago ezer hemen.')

        }
    }

    GetOut() {
        this.setState({
            In: false 
        });
    }

    handleChange(event){
        this.setState({Name: event.target.value})
    }

    render() {
        if (this.state.In === false) {
            return(
                <div>
                    <h3>{this.state.Salutation}</h3>
                    <input type='text' name='name' 
                    value={this.state.Name} 
                    onChange={this.handleChange.bind(this)} />
                    <button onClick={this.GetIn.bind(this)}> naiz.</button>
                </div>
            );
        } else {
            return(
                <div>
                    <h3>{this.state.Welcome}</h3>
                    <button onClick={this.GetOut.bind(this)}>Agur.</button>
                    <Rooms />
                </div>
            );
        }
    }
}

export default Entry;