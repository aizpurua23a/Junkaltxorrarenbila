import React from 'react'


class End extends React.Component {
    constructor(props){
        super(props);
        const room_number = 5;
        this.state = {
            number: room_number,
            title: 'Fin!',
            description: '¡Ya está! ¡Ya eres libre!',
            expected_answer: "",
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

    render() {
        if (this.state.visible === false) {
            return null;
        } else { 
        
            return(
                <div>
                    <h3>{this.state.title}</h3>
                    <p>{this.state.description}</p>
                </div>

            )

        }

    }
}

export default End;