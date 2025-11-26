import { useNavigate } from 'react-router-dom';
import { axiosInstance } from '../lib/axios';
import { useState } from 'react';

function Login() {
  const [form, setForm] = useState({
    username: '',
    password: '',
  });
  const navigate = useNavigate();

  function handleChange(e){
    setForm({...form, [e.target.name]: e.target.value});
  }

  async function handleSubmit(e){
    e.preventDefault();

    const { username, password } = form;

    if(!username || !password){
      alert('Please fill the details');
    }

    try {
      const res = await axiosInstance.post('/leader/login', {username, password});

       if (res.data?.token) {
        // Save token and user
        localStorage.setItem('token', res.data.token);
        axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${res.data.token}`;
        localStorage.setItem('user', JSON.stringify(res.data.newUser));
       };
     

      alert(res.data.message || 'Login Successfully')
        setTimeout(() => navigate('/admin'), 800);

    } catch (error){
      if (error.response?.data?.message) {
        alert(error.response.data.message);
      } else {
        alert("Login failed. Try again.");
      }
      console.error("Login error:", error);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Username' name='username' onChange={handleChange} value={form.username} />
        <input type='password' placeholder='Password' name='password' onChange={handleChange} value={form.password}/>
        <button type='submit' >Submit</button>
      </form>
    </div>
  );
}

export default Login;