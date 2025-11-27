import { useState } from 'react';
import {axiosInstance} from '../lib/axios';
import { useNavigate } from 'react-router-dom';
import '../cssFile/Registration.css';



function FormRegistration() {
  const [form, setForm] = useState({
    fullName: '',
    age: '',
    address: '',
    contact: '',
    gender: 'Male',
    whoInvitedYou: '',
  });
  const navigate = useNavigate();

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value});
  };

  async function handleSubmit(e){
    e.preventDefault();

   const { fullName, age, address, contact, gender, whoInvitedYou } = form;
    
   //validation
    if (!fullName || !age || !address || !contact || !gender || !whoInvitedYou ){
      alert('Please fill in the fields');
      return;
    }

    try {
      const res = await axiosInstance.post('/form', form);
      alert('Successfully Register');

       setTimeout(() => 
      navigate('/'), 1000
     );

    } catch (error) {
      if (error.response && error.response.data.error){
        alert(error.response.data.error);
      } else if (error.response && error.response.data.message) {
    alert(error.response.data.message); 
    } else {
      console.error('Error in Registration', error);
      alert('Internal server Error');
    }
    }
  }


  return (
    <div className='register-main'>
      <h1 className='title-reg'>Welcome Form</h1>
      <form className='register-form' onSubmit={handleSubmit}>
        <input className='input-form' type='text' placeholder='Full Name' name='fullName' onChange={handleChange} value={form.fullName}/>
        <input className='input-form' type='Number' placeholder='Age' name='age' onChange={handleChange} value={form.age}/>
        <input className='input-form' type='text' placeholder='Address' name='address' onChange={handleChange} value={form.address}/>
        <input className='input-form' type='Number' placeholder='Mobile Number' name='contact' onChange={handleChange} value={form.contact}/>

        <select name='gender' onChange={handleChange} value={form.gender} >
          <option value='Male'>Male</option>
          <option value='Female'>Female</option>
        </select>

        <input className='input-form' type='text' placeholder='Who Invited You?' name='whoInvitedYou' onChange={handleChange} value={form.whoInvitedYou} />
        <button className='submit' type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default FormRegistration;