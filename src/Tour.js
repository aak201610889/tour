import React, { useState } from 'react';

const Tour = ({ tour, removeTour }) => {
  const [readMore, setreadMore] = useState(false);
  return (
    <article>
      <h3>{tour.name}</h3>
      <h4>{tour.email}</h4>
      <p>{tour.address.street}</p>
      <p
        style={{ backgroundColor: "red", width: "90px" }}
        onClick={() => {
          setreadMore(!readMore);
        }}
      >
        {!readMore ? "readmore" : "readless"}
      </p>
      {readMore && (
        <div>
          <h3>{tour.address.zipcode}</h3>
          <h4>{tour.phone}</h4>
        </div>
      )}
      <button onClick={() => {removeTour(tour.id)}}>not intersted</button>
    </article>
  );
};

export default Tour;
