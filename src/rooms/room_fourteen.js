import React from 'react'


class RoomFourteen extends React.Component {
    constructor(props){
        super(props);
        const room_number = 14;
        this.state = {
            number: room_number,
            title: 'En estilo no hay quien le gane',
            description: 'Lip-syncs memorables.',
            description_2: 'Y su sonrisa es preciosa.',
            expected_answer: "valentina",
            answer: '',
            cleared: false,
            visible: this.props.level >= room_number,
            deployed: this.props.level === room_number,
        };

        this.componentDidUpdate = this.componentDidUpdate.bind(this)
    }

    componentDidUpdate(prevProps){
        if (this.props.level > prevProps.level) {
            console.log('state updated')
            this.setState({
                visible: this.props.level >= this.state.number,
                deployed: this.props.level === this.state.number
            })
        }
    }

    handleChange(event){
        this.setState({
            answer: event.target.value
        })
    }

    clear(){
        if (this.state.answer === this.state.expected_answer){
            this.setState({
                cleared: true
            });
            this.props.next();
            this.setState({deployed: false})
        } else {
            alert('No es correcto, rebote.')
        }
    }

    pista(){
        alert('You look like Linda Evangelista!')
    }


    render() {
        if (this.state.visible === false) {
            return null;
        } else {
            if (this.state.deployed === false) {
                return(
                    <div>
                        <h3 style={{ color: 'green'}}>Sala {this.state.number}: {this.state.title}</h3>
                    </div>
                );
            } else {
                return(
                    <div>
                        <h3>Sala {this.state.number}: {this.state.title}</h3>
                        <p>{this.state.description}</p>
                        <p>{this.state.description_2}</p>

                        <input type='text' name='name' 
                        value={this.state.Name} 
                        onChange={this.handleChange.bind(this)} />

                        <button onClick={this.clear.bind(this)}>Enviar</button>
                        
                        <button onClick={this.pista.bind(this)}>Pista</button>
                    </div>

                )

            }
        }
    }
}

export default RoomFourteen;