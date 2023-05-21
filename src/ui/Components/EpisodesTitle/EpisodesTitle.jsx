import React from "react";

import PropTypes from "prop-types";

export const EpisodesTitle = ({ amount }) => {
  return (
    <h1 className="border-b md:border md:m-4 md:shadow-md font-bold truncate max-w-full text-lg h-12 px-2 pt-2" data-testid="episodes-title-amount">{`Episodes: ${amount}`}</h1>
  );
};

EpisodesTitle.propTypes = {
  amount: PropTypes.number.isRequired,
};