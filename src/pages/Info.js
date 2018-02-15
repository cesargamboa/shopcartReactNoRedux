import React from 'react';
import PropTypes from 'prop-types';
import '../css/bootstrap.min.css';
import '../css/bootstrap.min-lux.css';


const moreInfo = props => (
  <div className="container col-md-12">
    <div className="container col-md-8 offset-md-2 text-center">
      <img src={props.information} className="img-thumbnail btn-warning" alt="game" />

    </div>

  </div>


);
moreInfo.propTypes = {
  information: PropTypes.string.isRequired,
};
export default moreInfo;
