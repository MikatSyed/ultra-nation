import './App.css';
import { useEffect, useState } from 'react';
import Country from './Component/Country/Country';
import Cart from './Component/Cart/Cart';

function App() {
  const[countries,setCountries] = useState([]);
  const[cart,setCart] = useState([]);
  useEffect(()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => setCountries(data))
    .catch(error => console.log(error))
  },[])

  const handleAddCountry = (country)=> {
    const newCart = [...cart,country]
    setCart(newCart)

  }

  // const data = countries.slice(0,26)
  return (
    <div className="App">
      <h2>Country Loaded: {countries.length}</h2>
     
     <Cart cart={cart}/>
     {
      countries.map(country => <Country country={country} handleAddCountry={handleAddCountry} key={country.alpha3Code}/>)
     }
    </div>
  );
}

export default App;
