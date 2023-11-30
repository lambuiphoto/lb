import React from 'react';
import BomImg from '../assets/images/more/woman1.png';

const About = () => {
  return (
    <section 
    className='section' id='about'>
      <div className="container sm:bg-black mx-auto pt-32">
        <div className="">
          <div
            className="">
          </div>
          <div className="">
            <img src={BomImg} alt="" />
          </div>
          <div
            className="">
            <h1 className='h1'>About me</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A accusamus explicabo libero, voluptatibus temporibus, eveniet doloribus voluptates aliquam incidunt molestiae dignissimos! Voluptatibus, ipsa fugit quidem ad vel vero culpa natus.</p>
            <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas fuga laudantium perspiciatis dicta nisi quam. Soluta ut quis maiores labore.</p>
            <a href='#works' className=''>View my work</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
