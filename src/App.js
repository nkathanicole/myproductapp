import './App.css';
import React from 'react';
import Card from 'react-bootstrap/Card';
import Name from './components/name';
import Description from './product';
import Price from './components/price';
import Image from './components/url';
import ProductCard from './components/productcard';
 
function App() {
  return (
<div className='APP' style={{ padding: '20px',}}>
      <ProductCard />
    </div>
  );
 

   
  
}

export default App;
