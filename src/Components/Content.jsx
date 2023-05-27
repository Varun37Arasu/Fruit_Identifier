import React from 'react';
import Leaf from "../images/leaf.png";

const Content = () => {
  return (
    <div className='content'>
        <div className="leaves">
            <img className='left' src={Leaf} alt="Leaf" />
            <img className='left' src={Leaf} alt="Leaf" />
            <img className='left' src={Leaf} alt="Leaf" />
            {/* <img className='left' src={Leaf} alt="Leaf" /> */}
        </div>
        <div className="center">
            <div className="card">
            <h2 className='Question'>What it does?</h2>
            <p className='Answer'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas corrupti praesentium earum ipsum impedit nihil doloremque consequatur, quis, sapiente incidunt aliquam eaque molestiae ex Voluptas corrupti praesentium earum ipsum impedit nihil doloremque consequatur, quis, sapiente incidunt aliquam eaque molestiae ex inventore nulla sed voluptates reprehenderit facere!</p>
            <button className='btn'>More</button>
            </div>
            <div className="card">
            <h2 className='Question'>What it does?</h2>
            <p className='Answer'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas corrupti praesentium earum ipsum impedit nihil doloremque consequatur, quis, sapiente incidunt aliquam eaque molestiae ex Voluptas corrupti praesentium earum ipsum impedit nihil doloremque consequatur, quis, sapiente incidunt aliquam eaque molestiae ex inventore nulla sed voluptates reprehenderit facere!</p>
            <button className='btn'>More</button>
            <button className='btn trynow'>Try Now !</button>

            </div>
        </div>
        <div className="leaves">
            <img className='right' src={Leaf} alt="Leaf" />
            <img className='right' src={Leaf} alt="Leaf" />
            <img className='right' src={Leaf} alt="Leaf" />
        </div>
    </div>
  )
}

export default Content