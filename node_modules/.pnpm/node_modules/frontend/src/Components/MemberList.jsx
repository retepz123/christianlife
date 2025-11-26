import { useEffect } from 'react';
import { axiosInstance } from '../lib/axios';
import { useState } from 'react';


function MemberList() {
  const [members, setMembers] = useState([]);
 
  useEffect(() =>{
    async function fetchMembers() {
     try {
        const token = localStorage.getItem('token');
       const res = await axiosInstance.get('/list');
       
      setMembers(res.data.members);

     } catch (error) {
      console.error('Error in fetching the members', error);
      alert(error.response?.message || 'Failed to fetch the memebers');
     }
    }
    fetchMembers();
  }, []);

  return (
    <div>
      <h1> All Members</h1>

      <div>
        <ul>
          {members.map((m) => (
            <li key={m._id}>
              <span>{m.fullName}</span>
              <span>{m.age}</span>
              <span>{m.gender}</span>
              <span>{m.contact}</span>
              <span>{m.address}</span>
              <span>{m.whoInvitedYou}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MemberList;