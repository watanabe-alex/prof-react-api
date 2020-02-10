import React from 'react';

class Table extends React.Component {

    render() {
        return (
            <div>
                {this.props.professionals}
                <h1>Tabela profissionais</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Github</th>
                        </tr>                    
                    </thead>
                    
                    <tbody>
                        <tr>
                            <td>nome</td>
                            <td>git</td>
                        </tr>
                    </tbody>
                    
                </table>
                 
            </div>
        )
    }
}

export default Table;