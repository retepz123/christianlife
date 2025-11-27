import { useEffect } from 'react';
import { axiosInstance } from '../lib/axios';
import { useState } from 'react';
import '../cssFile/admin.css';


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
    <div className='member-main'>
      <h1 className='all-members'> All Members</h1>

      <div>
        <ul className='member-list'>
          {members.map((m) => (
            <li key={m._id} className='list'>
             <div className='list-list'>
               <span>Full Name: {m.fullName}</span>
              <span>Age: {m.age}</span>
              <span>Gender: {m.gender}</span>
              <span>Mobile #: {m.contact}</span>
              <span>Address: {m.address}</span>
              <span>Who invited you? {m.whoInvitedYou}</span>
             </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MemberList;