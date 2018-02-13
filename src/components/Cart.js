import React from 'react';
import '../css/bootstrap.min.css';
import '../css/bootstrap.min-lux.css';

const cart = (props) => {
  return (
    <div>
      <table class="table table-hover table-warning">

        <tbody>
          <tr class="table-active">
            <th scope="row"><h1>Summary</h1></th>

            <td><h3>Total Price</h3></td>

          </tr>
          
            <td className="col-md-1 bordered">{props.newCart}</td>
            <td className="col-md-1">{props.acumPrice}</td>
          
          <tr>
          <td></td>
          <td>{props.price}$</td>
          </tr>


        </tbody>
      </table>

      <button className="btn btn-primary">Confirm Payment</button>

      <button className="btn btn-secondary" onClick={props.click}>Clear Cart</button>
    </div>
  );




}

export default cart; 