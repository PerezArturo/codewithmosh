import React from "react";
import PropTypes from "prop-types";
const Button = (props) => {
  const { label, className, iconClass, handleClick } = props;
  return (
    <React.Fragment>
      <button className={className} label={label} onClick={handleClick}>
        <i className={iconClass}></i> {label}
      </button>
    </React.Fragment>
  );
};
Button.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  iconClass: PropTypes.string,
  handleClick: PropTypes.func,
};
export default Button;
