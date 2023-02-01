import React, { useState } from "react";
import  Axios  from 'axios'

export default function PostForm() {




    
const url= "http://localhost:5000/registrerforflytning"
const [data, setData] = useState({
    name:"",
    date:"",
    iduser:""
})

function submit(e) {
    e.preventDefault();
    Axios.post(url,{
        name:data.name,
        date:data.date, 
        iduser:data.iduser
    })
    .then(res=>{
        console.log(res.data);
    })
}

function handle(e) {
    const newdata={...data}
    newdata[e.target.id] = e.target.value
    setData(newdata)
    console.log(newdata);
    
}



return (
    <div>
    <h1> PostForm</h1>
    <form onSubmit={(e)=> submit(e)}>
    <input onChange={(e)=>handle(e)} id="name" value={data.name} placeholder="name" type="text"></input>
    <input onChange={(e)=>handle(e)} id="date" value={data.date} placeholder="date" type="date"></input>
    <input onChange={(e)=>handle(e)} id="iduser" value={data.iduser} placeholder="iduser" type="number"></input>
    <button>submit</button>
    </form>
    
    
    </div>
  )
}



import React, { useState } from 'react';

const ForflytningForm: React.FC = () => {
  const [dyreholdId, setDyreholdId] = useState('');
  const [individ, setIndivid] = useState<[number, number]>([0, 0]);
  const [produksjonsplassId, setProduksjonsplassId] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const forflytning: Forflytning = {
      dyreholdId,
      individ,
      produksjonsplassId
    };
    fetch('http://localhost:5000/registrerforflytning', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(forflytning)
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="dyreholdId">Dyrehold ID:</label>
        <input
          type="text"
          id="dyreholdId"
          value={dyreholdId}
          onChange={event => setDyreholdId(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="individ">Individ:</label>
        <input
          type="text"
          id="individ-1"
          value={individ[0]}
          onChange={event => setIndivid([+event.target.value, individ[1]])}
        />
        <input
          type="text"
          id="individ-2"
          value={individ[1]}
          onChange={event => setIndivid([individ[0], +event.target.value])}
        />
      </div>
      <div>
        <label htmlFor="produksjonsplassId">Produksjonsplass ID:</label>
        <input
          type="text"
          id="produksjonsplassId"
          value={produksjonsplassId}
          onChange={event => setProduksjonsplassId(event.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ForflytningForm;


import React, {useState} from 'react'

export default function ForflytningForm() {
    const [dyreholdId, setDyreholdId] = useState('');
    const [individ, setIndivid] = useState([0, 0]);
    const [produksjonsplassId, setProduksjonsplassId] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const forflytning  = {
          dyreholdId,
          individ,
          produksjonsplassId
        };
        fetch('http://localhost:5000/registrerforflytning', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(forflytning)
        })
          .then(response => response.json())
          .then(data => {
            console.log('Success:', data);
          })
          .catch(error => {
            console.error('Error:', error);
          });
      };
    



  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="dyreholdId">Dyrehold ID:</label>
        <input
          type="text"
          id="dyreholdId"
          value={dyreholdId}
          onChange={event => setDyreholdId(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="individ">Individ:</label>
        <input
          type="text"
          id="individ-1"
          value={individ[0]}
          onChange={event => setIndivid([+event.target.value, individ[1]])}
        />
        <input
          type="text"
          id="individ-2"
          value={individ[1]}
          onChange={event => setIndivid([individ[0], +event.target.value])}
        />
      </div>
      <div>
        <label htmlFor="produksjonsplassId">Produksjonsplass ID:</label>
        <input
          type="text"
          id="produksjonsplassId"
          value={produksjonsplassId}
          onChange={event => setProduksjonsplassId(event.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}
