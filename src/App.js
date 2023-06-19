import './App.css';
import Title from './components/Title';
import React ,{useState} from 'react';

function App() {
  const [name,setName]=useState("Vivi");
  const [date,setDate]=useState("DOB");
  const handleNameChange=(e)=>{
     setName(e.target.value);
  }
  const handleDateChange=(e)=>{
     setDate(e.target.value);
  }
  return (
    <div className='container-fluid'>
     <h1 className="text-center">Signature App</h1>
     <Title text={name}/>
     <Title text={date}/>
     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis itaque perspiciatis similique est, quibusdam accusantium rem velit culpa repellat vero illum, voluptate, tempore vel voluptatibus maiores corrupti! Numquam, tenetur placeat!</p>
     <div className='d-flex input-boxes'>
      <input type="date" value={date} onChange={handleDateChange}/>

      <input type="text" value={name} onChange={handleNameChange}/>
     </div>
    </div>
  );
}

export default App;
