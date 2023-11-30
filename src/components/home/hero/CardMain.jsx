import React from 'react';
import Heading from '../../common/Heading';
import BomImg from '../../assets/images/more/woman2.png';

function CardMain(props) {
    return (
        <>
            <section className="cardmain card-section" id='about' data-aos="fade">
                <p className='card-story'>Just a guy with passion for photography</p>
                <Heading title="About Me" />
                <div className="section-bg"></div>
                <div className="container card-container about-info ">
                    <div className="about-cover" data-aos="fade-left">
                        <img src={BomImg} alt="cover" />
                    </div>
                    <div
                        className="about-info-detail" data-aos="fade-right">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A accusamus explicabo libero, voluptatibus temporibus, eveniet doloribus voluptates aliquam incidunt molestiae dignissimos! Voluptatibus, ipsa fugit quidem ad vel vero culpa natus.</p>
                        <br />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas fuga laudantium perspiciatis dicta nisi quam. Soluta ut quis maiores labore.</p>
                        <br />
                        {/* <a href='#works' className='about-info-button'>View my work</a> */}
                    </div>
                </div>
            </section>
            <div className="card-icon">
                <hr className='end' />
                <p>xoxo</p>
            </div>
        </>
    );
}

export default CardMain;