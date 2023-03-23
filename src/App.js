import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  // const products = [
  //   {name: 'laptop' , price: 47000},
  //   {name: 'phone', price: 75000},
  //   {name: 'watch', price: 3500}
  // ]
  return (
    <div className="App">
      {/* {
        products.map(product => <Product name={product.name} price={product.price}></Product>)
      } */}
      {/* <Product name='laptop' price='47000'></Product>
      <Product name='phone' price='75000'></Product>
      <Product name='watch' price='3500'></Product> */}

      {/* <Counter></Counter> */}

      <ExternalUsers></ExternalUsers>
    </div>
  );
}

function ExternalUsers (){
  //step 1
  const [users, setUsers] = useState([]);
  //step 2 - useEffect 
  useEffect(() => {
    // step 3 - data load
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data)) //step 4 = setUsers
  }, [])
  return (
    <div>
      <h2>External Users</h2>
      <p>{users.length}</p> 
      {/* step 5 - show dynamic data using map  */}
      {
        users.map(user => <User name = {user.name} email = {user.email} ></User>)
      }
    </div>
  )
}

function User(props){
  return (
    <div style={{border: '2px solid red', margin: '10px'}}>
      <h3>Name: {props.name}</h3>
      <h3>Email: {props.email}</h3>
    </div>
  )
}

function Counter (props) {
  const [count, setCount] = useState(50)
  const increaseCount = () => setCount(count + 10);
  const decreaseCount = () => setCount(count - 10);

  // const increaseCount = () => {
  //   const newCount = count + 1;
  //   setCount(newCount);
  // }
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}

function Product(props){
  return (
    <div className='product'>
      <h3>Name: {props.name}</h3>
      <p>Price: {props.price}</p>
    </div>
  )
}
export default App;
