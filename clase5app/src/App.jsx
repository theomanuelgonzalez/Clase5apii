import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const url = 'https://jsonplaceholder.typicode.com/users'
  const [data, setData ] = useState([]);
  const [loading, setloading] = useState(true)

  useEffect( () => {
    fetch(url)
    .then(res => res.json())
    .then(res => setData(res))
  },[])

  console.log(data);
  console.log(data[0]);
  console.log(data[0].username)



  return (
    <>
    {
   loading ? <h1>cargando...</h1> : <h1>{data[0].username}</h1>
    }
    </>
  )
}

export default App
