import React from "react";

import PropTypes from "prop-types";

import { Badge } from "../Badge/";

export const FilterBar = ({ podcastsAmount, onChange }) => {
  return (
    <div className="flex justify-end mr-4" data-testid="filter-bar">
      <Badge
        label={podcastsAmount.toString()}
        className="mr-2 bg-sky-800 text-white font-bold"
      />
      <input
        type="text"
        className="border text-sm px-2 py-1 w-64 rounded"
        onChange={onChange}
        placeholder="Filter podcasts..."
        data-testid="filter-bar-input"
      />
    </div>
  );
};

FilterBar.propTypes = {
  podcastsAmount: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};
