import logo from './logo.svg';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/header/header';
import AddItem from './components/Add/AddItem';
import Information from './components/Information/information';
import { useState, useEffect } from 'react';
import axios from 'axios';
import newPage from './components/NewPage/newPage';

function App() {

  const [todos, setTodos] = useState([])

  useEffect(() => {
    async function getTodos(){
      let response = await axios({
        method: "GET",
        url: '/get_items'
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
       <BrowserRouter>
       <Routes>
        <Route path='newPage' element={<newPage />} />
       </Routes>
       </BrowserRouter>
       </div>
  )     
}

export default App;
