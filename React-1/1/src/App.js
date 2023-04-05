import React from 'react';
import ReactDOM from 'react-dom/client';

function Car(props) {
  return <li>{ props.brand }</li>;
}



function Colors() {
  const cars = ['Red', 'Orange', 'Yellow'];
  return (
    <>
	    <h1 id="a">Different Colors</h1>
      <p>
	    <ol>
        {cars.map((car) => <Car brand={car} />)}
      </ol>
      </p>

    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Colors/>);
export default App;