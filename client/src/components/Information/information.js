import React, { useEffect, useState } from 'react'
import { icons } from 'react-icons'
import { FaTrashAlt} from 'react-icons/fa'
import AddItem from '../Add/AddItem'
import './index.css'
import axios from 'axios'

const Information = ({todos, setTodos}) => {
    
    

    const [editValues, setEditValues] = useState([])

  

   
const handleCheck = (id) => {
    const listItems = todos.map((item) => item.id === id ? { item,
    checked: item.checked } : item);
    setTodos(listItems);
    localStorage.setItem('shoppinglist', JSON.stringify(listItems));
}
 
const handleDelete = async (id) => {
    const listItems = todos.filter((item) => item._id !== id);
    setTodos(listItems);
    let response = await axios({
        method: "Delete",
        url: `/delete/${id}`,
      })
      console.log(response);
      document.location.reload();

}

const handleChange = (event, index) => {
  console.log(event.target)
  console.log(event.target.value);
  let newArray = [...editValues]
  newArray[index] = event.target.value;
  setEditValues(newArray);
}

const handleEdit = async (e, id, index) => {
  e.preventDefault();
  let formData = {name: editValues[index]}
  console.log(editValues[index]);
  let response = await axios({
      method: "Put",
      url: `/update/${id}`,
      data: formData
    }) 
     console.log(response);
     document.location.reload();
    
}

  return (
    <main>
        {todos.length ? (
        <ul>
            {todos.map((item, index) => (
                <li className='item' key={item._id}>
                    <input
                    type = 'checkbox'
                    onChange={() => handleCheck(item._id)}
                    checked = {item.checked}
                    />
                    <label>{item.name}</label>
                    <form className='addForm' onSubmit={(e) => handleEdit(e, item._id, index)}>
                    <input
                    onChange={(event) => handleChange(event, index)}
                    id='editItem'
                    type='text'
                    value={editValues[index]}
                     />
                    <button type='submit'>EDIT</button>
                    </form>
                    <FaTrashAlt
                    onClick={() => handleDelete(item._id)}
                    role='button' 
                    tabIndex='0' />
                </li>
            ))}
        </ul>
  ) : (
    <p style={{marginTop: "2rem"}}>YOUR LIST IS EMPTY</p>
  )}
</main>
  )
}


export default Information