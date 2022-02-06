import React, { useEffect, useState } from 'react';
import Loading from './Loading';
import Tours from './Tours';
function App() {
  const url = 'https://jsonplaceholder.typicode.com/users';
 
  const [loading, setloading] = useState(true);
  const [tours, settours] = useState([]);

  const removeTour = (id) => {
      const newTours = tours.filter((tour) => tour.id !== id);
      settours(newTours);
  };
  const fetchdata = async () => { 
    setloading(true)
    try {
    const response = await fetch(url);
      const tours = await response.json();
      settours(tours);
    setloading(false)
    }
    catch(err){
      setloading(false);
      console.log(err);
    }
  }
  useEffect(() => {
    fetchdata();
  }, []);
  

  if(loading)
 { return (
      <main>
        {" "}
        <Loading />
      </main>
  );
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
