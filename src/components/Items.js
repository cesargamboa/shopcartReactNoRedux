import React from 'react';
import '../css/bootstrap.min.css';
import '../css/bootstrap.min-lux.css';

const game = (props) => {

    return (
        <div className="container">
            <table className="table table-hover">

                <tbody className="table-secondary">
                    <tr className="table-active">
                        <div className="container col-md-3">
                            <td className="text-left" >
                                <h3 className="text-primary">  {props.game}</h3>
                            </td>
                        </div>
                        <div className="container col-md-3">
                            <td className="text-left" >

                                <img src={props.img} className="img-thumbnail btn-warning" alt="game" />
                            </td>
                        </div>
                        <div className="container col-md-3">
                            <td>
                                <h3 className="text-primary">  {props.price}$ </h3>
                            </td>
                        </div>
                        <div className="container col-md-3">
                            <td>
                                <button className="btn btn-warning text-primary" onClick={() => props.changed(props.price, props.game)}><span className="glyphicon glyphicon-shopping-cart"></span></button>
                            </td>
                            <td>
                                <button className="btn btn-warning text-primary">Game Review</button>
                            </td>
                        </div>
                    </tr>
                </tbody>

            </table>

        </div>
    )
};

export default game; 
