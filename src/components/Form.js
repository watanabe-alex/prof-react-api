import React from 'react';

export default class Form extends React.Component {

    salvarProfessional(nome, git, conhecimento) {

        let config = {
            headers:{
                "Content-Type":"application/json"
            },
            method: "post",
            body: JSON.stringify({name:'novo_nome', github:'novo_github', knowledge:'novo_knoledge'})
        }

        fetch('http://localhost:8000/api/professionals', config)
        .then(function(resposta) {
            return resposta.json();
        }).then(function(json) {
            console.log(json);
        }).catch(function(error){
            console.log(error);
        });
    }

    render() {
        return (
            <div className="border">
                <form className="m-3">
                    <h3 className="mb-2">FORMULÁRIO</h3>
                    <div className="form-group">
                        <label>Nome:</label>
                        <input type="text" name="name" placeholder="nome"/>
                    </div>
                    <div className="form-group">
                        <label>Github:</label>
                        <input type="url" name="github" placeholder="github"/>
                    </div>
                    <button type="submit" onClick={this.salvarProfessional}>Enviar</button>
                </form>
            </div>
        )
    }

}