import React from "react";

import PropTypes from "prop-types";

export const Badge = ({ label, className }) => {
  return (
    <div className={`px-1 rounded-lg self-center ${className}`} data-testid="badge">{label}</div>
  );
};

Badge.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
};
