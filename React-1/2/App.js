import ReactDOM from 'react-dom/client';
import React, { useState } from 'react';

function Car(props) {
  return <li> { props.brand }</li>;
}



function Colors() {
  const [cars, setCars] = useState(['Red', 'Orange', 'Yellow']);
  const [newCar, setNewCar] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    setCars([...cars, newCar]);
    setNewCar('');
  }
  return (
    <>
	    <h1>Different Colors</h1>
      <p>
	    <ol>
        {cars.map((car) => <Car brand={car} />)}
      </ol>
      <ul>
      <form onSubmit={handleSubmit}>
        <label>Color:</label>
        <input type="text" value={newCar} onChange={(event) => setNewCar(event.target.value)} />
        &nbsp;
        <button type="submit">Add Color</button>
      </form>
      </ul>
      </p>
    </>
  );
}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Colors/>);
export default App;