
import { Suspense } from 'react'
import './App.css'
import Bottles from './components/Bottles/Bottles'




const bottlePromise = fetch("../public/bottle.json")
.then(res => res.json())







function App() {
 

  // const bottles = [
  //   {id: 1, name: 'Nike Bottle', price: 200, color: 'Pink'},
  //   {id: 2, name: 'Common Bottle', price: 250, color: 'Blue'},
  //   {id: 3, name: 'Travel Bottle', price: 500, color: 'Gray'},
  //   {id: 4, name: 'Long Neck Bottle', price: 300, color: 'Green'},
  //   {id: 5, name: 'Cartoon Bottle', price: 430, color: 'Yellow'},
  // ];

  return (
    <>
      
      <h1>Buy Awesome Water Bottles</h1>

      <Suspense fallback = {<h3>Bottles are Loading....</h3>}>
        <Bottles bottlePromise = {bottlePromise}></Bottles>
      </Suspense>

    </>
  )
}

export default App
