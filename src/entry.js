import React from 'react'

class Entry extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            Salutation: 'Nor zara?',
            Welcome: 'Ongi etorri, Junkal!',
            In: false,
            Name: ''
        };

        this.GetIn = this.GetIn.bind(this);
        this.GetOut = this.GetOut.bind(this);

    }

    GetIn() {

        //Correct name
        if (this.state.Name === 'Junkal'){
            this.setState({
                In: true       
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
                    <h2>{this.state.Salutation}</h2>
                    <input type='text' name='name' 
                    value={this.state.Name} 
                    onChange={this.handleChange.bind(this)} />
                    <button onClick={this.GetIn.bind(this)}> naiz.</button>
                </div>
            );
        } else {
            return(
                <div>
                    <h2>{this.state.Welcome}</h2>
                    <button onClick={this.GetOut.bind(this)}>Agur.</button>
                </div>
            );
        }
    }
}

export default Entry;