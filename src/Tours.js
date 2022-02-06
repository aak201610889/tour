import React from 'react';
import Tour from './Tour';



const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div className="title">
        <h2>
          {tours.length >= 1 ?
            (<h2> ours tours are{tours.length}</h2>) :
            (<h2>no tours</h2>)}

        </h2>
        <div className="underline"></div>
        <div>
          {tours.map((tour) => {
            return (
              <Tour key={tour.id} tour={tour} removeTour={removeTour}></Tour>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Tours;
