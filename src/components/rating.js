import React from "react";
import { FaStar } from "react-icons/fa";

const Rating = ({ rating }) => {
  const totalRating = [];

  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      totalRating.push(
        <li className="start" key={i}>
          <FaStar />
        </li>
      );
    } else {
      totalRating.push(
        <li className="start-o" key={i}>
          <FaStar />
        </li>
      );
    }
  }
  return <h1>Rating</h1>;
};

export default Rating;
