import React from 'react';
import Table from './Table';
import Form from './Form';

class App extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            professionals: []
        }

    }

    componentDidMount() {

        //puxa dados de profissionais via 
        let config = { method: "get" }
        fetch('http://localhost:8000/api/professionals', config)
        .then((resposta) => {
            return (resposta.json());
        }).then((json) => {
            this.setState({
                ...this.state,
                professionals: json
            }); 
        }).catch(function(error){
            console.log(error);
        });
        
    }

    render() {
        return (
            <React.Fragment>
                <Table professionals={this.state.professionals}/>
                <Form />
            </React.Fragment>
        )
    }
}

export default App;