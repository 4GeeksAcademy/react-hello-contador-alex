import React from "react";
import PropTypes from "prop-types";


const Contador = (props) => {
  const contador = props.Number.toString().padStart(6, "0");

  return (
  
    <div className="bigCounter">
      <div className="Seconds">
        <div className="Number">
          {contador}
        </div>
      </div>
    </div>
  
  );
};

Contador.propTypes = {
  Number: PropTypes.number.isRequired,
};

export default Contador;
