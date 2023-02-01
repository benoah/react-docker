import React, { useState, useEffect } from "react";
import './App.css';
import PostForm from "./components/PostForm";

function App() {
  const [data, setData] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:5000/produksjonsplass");
      const json = await res.json();
      console.log(json);
       setData(json);
    };
    fetchData();
  }, [setData]);


  return (
    <div className="App">
    <PostForm />
     <h1>mattilsynet </h1>
     <div>
     {data.map(item => (
       <div key={item.produksjonsplassid} style={{ margin: '16px', padding: '16px', backgroundColor: '#ddd' }}>
         <h3>kommunenummer:{item.kommunenummer}</h3>
         <p>produksjonsplassid":{item.produksjonsplassid}</p>
         <p>kommunenummer:{item.kommunenummer}</p>
         <p>gaardsnummer:{item.gaardsnummer}</p>
         <p>bruksnummer:{item.bruksnummer}</p>
         <p>lastchanged":{item.lastchanged}</p>
       </div>
     ))}
   </div>
     
    </div>
  );
}

export default App;
