import React from 'react';
import Table from './Table';

class App extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            professionals: []
        }

        this.handleSubmit = this.handleSubmit.bind(this); 
    }

    componentDidMount() {

        //puxa dados de profissionais via 
        let config = { method: "get" }
        fetch('http://localhost:8000/api/professionals', config)
        .then(function(resposta) {
            return (resposta.json());
        }).then(function(json) {
            console.log(json);

            this.state = {
                professionals: json.values
            }
 
        }).catch(function(error){
            console.log(error);
        });
        
    }

    render() {
        return (
            <Table professionals={this.state.professionals}/>
        )
    }
}

export default App;