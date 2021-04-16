import { Component } from "react";
import { Link } from 'react-router-dom'


class List extends Component {



componentDidMount(){
    fetch('/sasso');
}

    render() {
        return (
            <section>
                <div className="home-container">
                    <img className="logo-code" src="images/logo.png" alt="Logo" srcset="images/logo.png" />
                    <div className="title">
                        <h3>LISTA UTENTI</h3>
                    </div>
                    <div>
                        <table className="table" align="center">
                            <thead>
                                <th>ID</th>
                                <th>Nome utente</th>
                                <th>Codice utente</th>
                                <th>Data</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Mattia</td>
                                    <td>232423e4</td>
                                    <td>232423e4</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Mattia</td>
                                    <td>232423e4</td>
                                    <td>232423e4</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Mattia</td>
                                    <td>232423e4</td>
                                    <td>232423e4</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Mattia</td>
                                    <td>232423e4</td>
                                    <td>232423e4</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Mattia</td>
                                    <td>232423e4</td>
                                    <td>232423e4</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Mattia</td>
                                    <td>232423e4</td>
                                    <td>232423e4</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Mattia</td>
                                    <td>232423e4</td>
                                    <td>232423e4</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Mattia</td>
                                    <td>232423e4</td>
                                    <td>232423e4</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Mattia</td>
                                    <td>232423e4</td>
                                    <td>232423e4</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Mattia</td>
                                    <td>232423e4</td>
                                    <td>232423e4</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        )
    }
}

export default List