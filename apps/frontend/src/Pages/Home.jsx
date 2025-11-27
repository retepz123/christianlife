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
      
       <section style={{height: "100vh", width: '100%', backgroundColor: "rgba(0, 0, 0, 0.5)",   backgroundBlendMode: "darken", backgroundSize: "cover", backgroundRepeat: "no-repeat",
      inset: 0,
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
        <span>About</span>
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