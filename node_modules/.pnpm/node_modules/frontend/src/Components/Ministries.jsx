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
       <div>
         <h2 className='slide-title'>Youth Ministry</h2>
        <div className='slider'>
          <img src={youth1} className='slide' />
           <img src={youth2} className='slide' />
            <img src={youth3} className='slide' />
        </div>
       </div>
      </div>
        <div className='slide2'>
        <div>
           <h2 className='slide-title'>House Churches</h2>
        <div className='slider'>
          <img src={house1} className='slide' />
           <img src={house2} className='slide' />
            <img src={house3} className='slide' />
           <img src={house4} className='slide' />
        </div>
        </div>
      </div>
        <div className='slide3'>
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
    </main>
  );
}

export default Ministries;