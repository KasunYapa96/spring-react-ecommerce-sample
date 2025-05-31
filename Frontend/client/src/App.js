import logo from './logo.svg';
import './App.css';
import { products } from './productsData';
import axios from 'axios';
import React, { useEffect, useState } from 'react';


function App() {
  //Step	What You Did
  //1️⃣	Installed Axios using npm install axios
  //2️⃣	Imported it in App.js
  //3️⃣	Used axios.get() inside useEffect() to call Spring Boot API
  //4️⃣	Rendered the fetched data using map()
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/products")  // Update this port if needed
      .then(res => {
        setProducts(res.data);
      })
      .catch(err => {
        console.log("Error fetching products:", err);
      });
  }, []);


  return (
    <div style={{ padding: "2rem" }}>
      <h1>Kasun Yapa Deployed the web</h1>
      <div style={{ display: "flex", gap: "1rem" }}>
        {products.map((product) => (
          <div key={product.id} style={{ border: "1px solid #ccc", padding: "1rem" }}>
            <img src={product.image} alt={product.name} width="150" />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default App;
