import { Component } from "react";
import { Link } from 'react-router-dom'

class Home extends Component {
    render() {
        return (
            <section>
                <div className="home-container w3-animate-zoom">
                    <img src="images/logo.png" alt="Logo" srcset="images/logo.png" />
                    <hr />
                    <h3>PANNELLO AMMINISTRATIVO</h3>
                    <hr />
                    <p>Seleziona un azione:</p>
                    <div className="row">
                        <div className="col-sm-0 col-lg-3"></div>
                        <div className="col-sm-6 col-lg-3">
                            <Link to="/List">
                                <button className="btn-block"><i class="far fa-address-card"></i> <h5>Lista clienti</h5></button>
                            </Link>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <Link to="/Code">
                                <button className="btn-block"><i class="far fa-keyboard"></i> <h5>Codice sconto</h5></button>
                            </Link>
                        </div>
                        <div className="col-sm-0 col-lg-3"></div>
                        <div className="col-sm-0 col-lg-3"></div>
                        <div className="col-sm-6 col-lg-3">
                            <Link to="/Broadcast">
                                <button className="btn-block"><i class="far fa-address-card"></i> <h5>Broadcast</h5></button>
                            </Link>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <Link to="">
                                <button className="btn-block"><i class="far fa-address-card"></i> <h5>Sito</h5></button>
                            </Link>
                        </div>
                        <div className="col-sm-0 col-lg-3"></div>
                    </div>
                </div>
            </section >
        )
    }
}

export default Home;