import React, {useState} from 'react'
import './App.css'
import Axios from "axios";

function App() {

    const [values, setValues] = useState();

    const handleChangeValues = (value) => {
        setValues((prevValue) => ({
            ...prevValue,
            [value.target.name]: value.target.value,
        }))
    }

    const handleClickButton = () => {
        Axios.post("http://localhost:3001/register", {
            name: values.name,
            cost: values.cost,
            category: values.category,
        }).then((response) =>{
            console.log(response)
        });
    }

  return (
    <div className="App">
        <h2>Game Shop</h2>
      <div className="register-container">
          <input className="register-input" type="text" name="name" placeholder="name" onChange={handleChangeValues} />
          <input className="register-input" type="text" name="cost" placeholder="cost" onChange={handleChangeValues} />
          <input className="register-input" type="text" name="category" placeholder="category" onChange={handleChangeValues} />
          <button onClick={handleClickButton}>Register</button>
      </div>
    </div>
  )
}

export default App
