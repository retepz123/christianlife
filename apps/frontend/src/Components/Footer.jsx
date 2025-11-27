import '../cssFile/Footer.css';
import fb from '../image/communication.png';
import logo from '../image/logo.jpg';
import IG from '../image/instagram.png';
import messenger from '../image/messenger.png';

function Footer() {

  return (
    <footer>
      <div className='sub-foot'>
        <div>
          <img src={logo} className='footer-logo' alt='CLC' />
        </div>
        <div className='line'></div>
          
              <div className='address'>
           <span className='div-address'>Address:</span>
        <span className='sub-add'>3rd Flr, YP Bldg (Blue Bldg)., Dr. A. Santos Ave., Sucat, Parañaque, Philippines</span>
        <div className='foot-icon'>
            <a href=''><img src={fb} alt='fb' className='icons'/></a>
           <a href='' > <img src={IG} alt='IG' className='icons'/></a>
           <a href='' > <img src={messenger} alt='IG' className='icons'/></a>

          </div>
        </div>
          
         
      </div>
      <div className='copyrights'>
        <span>Copyrights ©️ Christian Life Center Paranaque</span>
      </div>
    </footer>
  );
}

export default Footer;