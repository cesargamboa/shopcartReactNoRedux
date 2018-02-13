import React from 'react';
import '../css/bootstrap.min.css';
import '../css/bootstrap.min-lux.css';
import cesar from '../logos/cesar.png';
import { Link } from 'react-router-dom';

const header = (props) => {
    return (
        <div className="container col-md-12">

            <nav className="navbar navbar-expand-lg navbar-primary bg-secondary">
                <a className="navbar-brand"><img src={cesar} className="img-thumbnail" alt="logo" /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor03">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <h1 className="nav-link btn-secondary"><strong><Link to="/">Store</Link></strong></h1>
                        </li>
                        <li className="nav-item">
                            <Link to="/news" className="nav-link  btn btn-secondary">News</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/releases" className="nav-link  btn btn-secondary">Releases</Link>
                        </li>

                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <div>
                            <h1 className="bg-secondary"><span className="glyphicon glyphicon-briefcase  btn-primary btn-lg" onClick={props.clicked}><Link to="/bag" className="btn-primary btn-lg">Bag</Link></span></h1>
                        </div>
                        <table>
                            <thead>
                                <tr><td>Items:</td><td><h4 className="badge-pill badge-warning">{props.counter}</h4></td></tr>
                                <tr><td>Subtotal</td><td><h4 className="badge-pill badge-warning">{props.price}$ </h4></td></tr>
                            </thead>
                        </table>
                        <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                        <button className="btn btn-primary my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>


        </div>


    )


};

export default header;