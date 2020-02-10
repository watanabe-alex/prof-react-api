import React from 'react';

class Table extends React.Component {

    render() {
        return (
            <div>
                <h1>Tabela profissionais</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Github</th>
                        </tr>                    
                    </thead>
                    
                    <tbody>
                        {this.props.professionals.map((professional) => {
                            return(
                                <tr key={professional.id}>
                                    <td>{professional.name}</td>
                                    <td>{professional.github}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                    
                </table>
                 
            </div>
        )
    }
}

export default Table;