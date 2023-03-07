import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import AddItem from './components/Add/AddItem';
import Information from './components/Information/information';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [todos, setTodos] = useState([])

  useEffect(() => {
    async function getTodos(){
      let response = await axios({
        method: "GET",
        url: 'http://localhost:5000/get_items'
      })
      console.log(response.data);
      setTodos(response.data);
    }
    
    getTodos();
  }, [])
  

  return (
    <div>
      <Header />
      <AddItem todos={todos} setTodos={setTodos}/>
       <Information todos={todos} setTodos={setTodos}/>
       </div>
  )     
}

export default App;
