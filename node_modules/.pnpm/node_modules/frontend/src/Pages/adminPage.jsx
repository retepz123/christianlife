import MemberList from '../Components/MemberList';
import PrayerRequest from '../Components/PrayerRequest';
import '../cssFile/admin.css';

function Admin() {

  return (
   <div className='admin-main'>
    <div className='admin-container'>
       <div >
      <MemberList />
    </div>
    <div>
      <PrayerRequest />
    </div>
    </div>
   </div>
  );
}

export default Admin;