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
    <main>
      <div className='sub-container'>
          <div className='slide1'>
         
               <div className='inner-slide'>
               <div className='youth-text'>
                 <span>"Our Youth Ministry empowers the next generation to rise in faith, character, and leadership. We challenge students to pursue a real relationship with Jesus, grow in biblical truth, and influence their world with courage and compassion. Through worship, discipleship, service, and community, we equip young people to become world-changers for Christ."</span>
               </div>
          <div className='in-con'>
             <h2 className='slide-title'>Youth Ministry</h2>
        <div className='slider'>
          <img src={youth1} className='slide' />
           <img src={youth2} className='slide' />
            <img src={youth3} className='slide' />
        </div>
          </div>
       </div>
      </div>

        <div className='slide2'>
        <div className='inner-slide'>
         <div>
            <h2 className='slide-title'>House Churches</h2>
        <div className='slider'>
          <img src={house1} className='slide' />
           <img src={house2} className='slide' />
            <img src={house3} className='slide' />
           <img src={house4} className='slide' />
        </div>
         </div>
         <div className='youth-text'>
          <span>"House Churches are the heartbeat of our ministry—a network of home-based gatherings that equip believers to grow deeper in discipleship, live out the gospel, and impact their neighborhoods. In these smaller communities, we encounter God, develop spiritual maturity, and live on mission together. Every house becomes a place of worship, fellowship, and transformation."</span>
         </div>
        </div>
      </div>

        <div className='slide3'>
        <div  className='inner-slide' >
          <div className='youth-text'>
            <span>
              "The Campus Ministry is a welcoming community of students who gather to explore faith, build relationships, and find purpose. Through small groups, prayer gatherings, mentoring, and campus outreach, we create a space where students can belong, be encouraged, and be empowered to live out their faith confidently in school."
            </span>
          </div>
           <div>
             <h2 className='slide-title'>Campus Ministry</h2>
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
    </main>
  );
}

export default Ministries;