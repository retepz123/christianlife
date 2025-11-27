import { useState } from 'react';
import { axiosInstance } from '../lib/axios';
import '../cssFile/prayer.css';

function PrayerForm() {
  const [form, setForm] = useState({
    name: '',
    message: '',
  });

  function handleChange (e){
    setForm({ ...form, [e.target.name]: e.target.value});
  }

  async function sendPrayer(e){
    e.preventDefault();

    const { name, message } = form;

    //validation
    if(!name || !message) {
      alert('Please fill the fields');
      return;
    }

    try{
      const res = await axiosInstance.post('/prayerRequest', form);
      alert('Prayer request sent')

    } catch (error){
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
    <div className='prayer'>
      <h2 className='prayer-title'>Prayer Request</h2>
      <form className='form' onSubmit={sendPrayer}>
        <div>
          <label>Full Name: </label>
        <input className='name-text' type='text' placeholder='' value={form.name} name='name' onChange={handleChange}/>
        </div>
        <textarea rows="4" cols="50" value={form.message} name='message' onChange={handleChange}>Message here...</textarea>
        <button className='submit' type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default PrayerForm;