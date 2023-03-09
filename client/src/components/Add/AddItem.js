import axios from 'axios'
import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa'


const AddItem = ({todos, setTodos}) => {

  const [item, setItem] = useState('')

  const handleChange = (event) => {
    console.log(event.target)
    console.log(event.target.value);
    setItem(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault(); // Make request to server with item data
    console.log(item);
    console.log("Submitting")
    let response = await axios({
      method: "POST",
      url: '/create_item',
      data: {item}
    })
    console.log(response);
    document.location.reload();

  }

  

  return (
    <form className='addForm' onSubmit={handleSubmit}>
        <label htmlFor='addItem'>ADD ITEM</label>
        <input
            onChange={handleChange} 
            autoFocus
            id='addItem'
            type='text'
            value={item}
            placeholder='Add Item'
            required
            />
            <button
            type='submit'
            id='Submit'
            aria-label='Add Item'
            >

            <FaPlus />
            </button>
    </form>

  )
}

export default AddItem