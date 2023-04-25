import React from "react";

import PropTypes from "prop-types";

export const EpisodesTitle = ({ amount }) => {
  return (
    <h1 className="border m-4 shadow-md font-bold truncate max-w-full text-lg h-12 px-2 pt-2" data-testid="episodes-title-amount">{`Episodes: ${amount}`}</h1>
  );
};

EpisodesTitle.propTypes = {
  amount: PropTypes.number.isRequired,
};