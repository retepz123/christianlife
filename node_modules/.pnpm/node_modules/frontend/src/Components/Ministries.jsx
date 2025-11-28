import youth1 from '../image/youth/1.jpg';
import youth2 from '../image/youth/2.jpg';
import youth3 from '../image/youth/3.jpg';
import house1 from '../image/house/house1.jpg';
import house2 from '../image/house/house2.jpg';
import house3 from '../image/house/house3.jpg';
import house4 from '../image/house/house4.jpg';
import campus1 from '../image/campus/campus1.jpg';
import campus2 from '../image/campus/campus2.jpg';
import campus3 from '../image/campus/campus3.jpg';
import campus4 from '../image/campus/campus4.jpg';

import '../cssFile/Ministries.css';

function Ministries() {

  return (
    <main className='slide-main'>
      <div className='slides-container'>
        <div className='sub-slides'>
          <div className='reverse'>
            <div className='slide-text'>
            <span>"A place where faith meets fun! Our youth ministry brings students together for worship, teaching, games, and unforgettable moments with God. We help young people build strong friendships, deepen their faith, and live boldly as disciples of Jesus in today’s world."</span>
          </div>
          <div >
            <div className='title-ministry'>
                <span className='youth-text'>Youth Ministry</span>
                 <div className='slider'>
              <img src={youth1} className='slide' />
               <img src={youth2} className='slide' />
                <img src={youth3} className='slide' />
            </div>
            </div>
           
          </div>
          </div>
        </div>

          <div className='sub-slides'>
          <div className='reverse'> 
            <div className='slide-text'>
            <span>"A House Church is a warm, welcoming space where believers gather in smaller, personal settings to worship, study the Word, pray, and support one another. It’s a place for authentic community, deep connections, and spiritual growth—where faith is lived out in everyday life. Here, everyone has the opportunity to participate, share, and grow together as a family of God."</span>
          </div>
          <div >
            <div className='title-ministry'>
                <span className='youth-text'>House Churches</span>
                 <div className='slider'>
              <img src={house1} className='slide' />
              <img src={house2} className='slide' />
              <img src={house3} className='slide' />
            </div>
            </div>
           
          </div>
          </div>
        </div>

          <div className='sub-slides'>
            <div className='reverse'>
               <div className='slide-text'>
            <span>"Campus Ministry is a vibrant community where students and young adults explore faith, build meaningful relationships, and live out Christ’s teachings on campus. Through worship, Bible studies, mentorship, and service opportunities, students are equipped to grow spiritually, lead with purpose, and impact their schools and communities with God’s love."</span>
          </div>
          <div >
            <div className='title-ministry'>
                <span className='youth-text'>Campus Ministry</span>
                 <div className='slider'>
              <img src={campus1} className='slide' />
              <img src={campus2} className='slide' />
              <img src={campus3} className='slide' />
              <img src={campus4} className='slide' />
            </div>
            </div>
           
          </div>
            </div>
        </div>
      </div>
    </main>
  )
}

export default Ministries;