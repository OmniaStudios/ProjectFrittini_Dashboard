import { Component } from "react";
import { Link } from 'react-router-dom'

class Broadcast extends Component {
    render() {
        return (
            <section>
                <div className="home-container">
                    <img className="logo-code" src="images/logo.png" alt="Logo" srcset="images/logo.png" />
                    <div className="title">
                        <h3>INSERISCI MESSAGGIO BROADCAST</h3>
                    </div>
                    <hr />
                    <form className="form-code" action="" method="post">
                        <div className="row">
                            <div className="col">
                                <label htmlFor="boradcast">Messaggio</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <textarea name="broadcast" id="broadcast" cols="30" rows="2" placeholder="Inserisci messaggio broadcast..."></textarea>
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

export default Broadcast