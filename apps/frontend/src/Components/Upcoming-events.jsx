import picnic from '../image/picnic.jpg';
import sports from '../image/sports.jpg';
import '../cssFile/Home.css';

function UpcomingEvents() {
  return (
    <section className='event-main'>
      <div className='title-text'>
        <div>
          <h1 className='event-title'>Upcoming Events</h1>
        </div>
      </div>
      <div className='post-cards'>
        <div className='post'>
          <img src={picnic} className='picnic' />
           <img src={sports} className='picnic' />
          <img src={picnic} className='picnic' />

        </div>
      </div>
   
    </section>
  );
}

export default UpcomingEvents;