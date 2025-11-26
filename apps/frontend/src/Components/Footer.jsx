import '../cssFile/Footer.css';
import fb from '../image/communication.png';
import youtube from '../image/youtube.png';


function Footer() {

  return (
    <footer>
      <div className='sub-footer'>
        <div>
        <h2>Christian Life Center Paranaque</h2>
      </div>
      <div className='line'></div>
        <div className='icons'> 
          <img src={fb} className='icon' />
          <img src={youtube} className='icon' />
        </div>
      </div>
      <div className='copyright'>
        <p>©️ Copyright, All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;