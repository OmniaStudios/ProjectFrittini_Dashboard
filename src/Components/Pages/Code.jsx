import { Component } from "react";
import { Link } from 'react-router-dom'

class Code extends Component {
    render() {
        return (
            <section>
                <div className="home-container">
                    <img className="logo-code" src="images/logo.png" alt="Logo" srcset="images/logo.png" />
                    <div className="title">
                        <h3>INSERISCI CODICE SCONTO</h3>
                    </div>
                    <hr />
                    <form className="form-code" action="" method="post">
                        <div className="row">
                            <div className="col">
                                <label htmlFor="codice">Codice</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <input type="text" name="codice" id="codice" placeholder="Inserisci codice sconto..." />
                            </div>
                        </div>
                        <hr />
                        <Link to="/">
                            <div className="link-container">
                                <i class="fas fa-arrow-right"></i>
                            </div>
                        </Link>
                    </form>

                </div>
            </section >
        )
    }
}

export default Code