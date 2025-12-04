import { useEffect, useState } from 'react';
import { axiosInstance } from '../lib/axios';


function PrayerRequest() {
    const [prayers, setPrayers] = useState([]);

    useEffect(() => {
      async function fetchAllPrayers() {
        try {
          const token = localStorage.getItem('token')
          const res = await axiosInstance.get('/allPrayer')

          console.log(res.data);


          setPrayers(res.data.allPrayers || []);

        } catch (error) {
           console.error('Error in fetching the prayers', error);
      alert(error.response?.message || 'Failed to fetch the prayers');
        }
      }
      fetchAllPrayers();
    }, []) 

    async function handleRemove(id){
      try {
        const removePrayer = await axiosInstance.delete(`/removeprayer/${id}`, {withCredentials: true });
        setPrayers(prayers.filter((p) => p._id !== id));

      } catch (error){
        console.error('Error', error);
      }
    }


  return (
    <div className='prayer-main'>
      <h1 className='all-members'>Prayer Request</h1>
      <div>
        <ul className='every-list'>
          {prayers.map((p) => (
          <li key={p._id} className='prayer-list'>
            <div className='prayer-text'>
              <span>Name: {p.name} </span>
            <span>Message: {p.message}</span>
            </div>
              <span onClick={() => handleRemove(p._id)} type='submit' className='x-btn'>❌</span>
          </li>
        ))}</ul>
      </div>
    </div>
  );
}

export default PrayerRequest;