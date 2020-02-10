import React from 'react';
import Table from './Table';

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
        .then(function(resposta) {
            console.log(resposta.json());
        }).then(function(json) {
            console.log(json);
        }).catch(function(error){
            console.log(error);
        });
        
    }

    render() {
        return (
            <Table />
        )
    }
}

export default App;