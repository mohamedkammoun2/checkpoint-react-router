import React from "react";
import StarRating from "./StarRating";

const Surch = ({
  filterRating,
  filterText,
  handleTextFiler,
  handleRatingFilter,
}) => {
  return (
    <div>
      <form>
        <input
          type="text"
          value={filterText}
          onChange={(e) => handleTextFiler(e.target.value)}
        />
        <StarRating rating={filterRating} handleRating={handleRatingFilter} />
      </form>
    </div>
  );
};

export default Surch;
