import React from 'react';
import PropTypes from 'prop-types';
import '../css/bootstrap.min.css';
import '../css/bootstrap.min-lux.css';

const cart = props => (
  <div>
    <table className="table table-hover table-warning">

      <tbody>
        <tr className="table-active">
          <th scope="row"><h1>Summary</h1></th>

          <td><h3>Total Price</h3></td>

        </tr>

        <td className="col-md-1 bordered">{props.newCart}</td>
        <td className="col-md-1">{props.acumPrice}</td>

        <tr>
          <td />
          <td>{props.price}$</td>
        </tr>


      </tbody>
    </table>

    <button className="btn btn-primary">Confirm Payment</button>

    <button className="btn btn-secondary" onClick={props.click}>Clear Cart</button>
  </div>
);
cart.propTypes = {
  newCart: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired,
  price: PropTypes.number.isRequired,
  acumPrice: PropTypes.number.isRequired,
};
export default cart;
