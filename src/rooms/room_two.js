import React from 'react'


class RoomTwo extends React.Component {
    constructor(props){
        super(props);
        const room_number = 2;
        this.state = {
            number: room_number,
            title: '¿Quién eres?',
            description: 'Una voz te pregunta. ¿Quién eres?. Sabes que vienes del siglo XXI. Nada más.',
            description_2: 'La voz continúa, cantando: "Si tú me llamas / nos vamo\' pa\' tu casa / Nos quedamo\' en la cama". ¿Sin qué?',
            expected_answer: "pijama",
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
                    </div>

                )

            }
        }
    }
}

export default RoomTwo;