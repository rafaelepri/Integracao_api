import React, { useState, useEffect } from 'react'
import './App.css';

interface CardsPT {
  _id: string,
  name: string,
  description: string,
  url: string, 
  images: string[]
}


function App() {
  const [ serverData, setServerData ] = useState([])

  async function fetchData() {
    const response = await fetch('https://app.purpletech.com.br/getPortfolio').then((e) => e.json())

    setServerData(response)
  }

    useEffect(() => {
      fetchData()
    }, [])

    return (
      <body>
        <div className="row">
          {serverData.map((item: CardsPT) => (
            <div key={item._id} className="cards">
              <h1>{item.name}</h1>
              <h2>{item.description}</h2>
              <img src={item.images[0]} alt="imagem" />
              <a href={item.url} target="_blank">Visite o site</a>
            </div>
          ))}
        </div>
        <footer>
          <p>Desenvolvido por <a href="https://purpletech.com.br/" target="_blank">PurpleTech</a></p>
        </footer>
      </body>
    )
}

export default App;

