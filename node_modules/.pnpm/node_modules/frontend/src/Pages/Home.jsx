import Footer from '../Components/Footer';
import Ministries from '../Components/Ministries';
import PrayerForm from '../Components/PrayerForm';
import UpcomingEvents from '../Components/Upcoming-events';
import '../cssFile/Home.css';
import life from '../image/5.png';
import logo from '../image/logo.jpg';
import { Link } from 'react-router-dom';

function Home() {

  return (
    <div>
      
       <section className='hero-section' style={{
        backgroundImage: `url(${life})`,
       }}
      
    >
       <nav>
        <div className='side-nav'>
          <div className='clc'>
             <img src={logo} alt='logo' className='logo' />
            <h3 className='clc-text'>CLC</h3>
          </div>
       <div className='nav-text'>
        <span className='about'>About</span>
        <Link to='/registration' className='register'>Register</Link>
        <Link to='/login' className='login'>Login</Link>
       </div>
        </div>
      </nav>
      <div className='hero-title'>
        <div className='jesus-container'>
         <span className='jesus'>Jesus at the Center</span>

        </div>
      </div>
    </section>

    <Ministries />

    <UpcomingEvents />
    <PrayerForm />
    <Footer />


    </div>
  );
}

export default Home;