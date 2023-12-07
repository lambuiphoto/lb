import React from 'react';
import Heading from '../../common/Heading';
import BomImg from '../../assets/images/more/home.jpg';
import pts from '../../assets/images/pts.png';
import premiere from '../../assets/images/premiere.png';
import blender from '../../assets/images//blender.jpg';

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
                        <p>Hi, I'm Lam.</p>
                        <br />
                        <div className='about-skills'>
                            <p>My skills include:</p>
                            <br />

                            <div className='about-skills-container'>
                                <div className='about-skills-wrapper'><img className="about-skills-img" src={pts} alt="" /><p>Photoshop</p></div>    
                                <div className='about-skills-wrapper'><img className="about-skills-img" src={premiere} alt="" /><p>Premiere</p></div>    
                                <div className='about-skills-wrapper'><img className="about-skills-img" src={blender} alt="" /><p>Blender</p></div>    
                            </div>        
                        </div>
                        <br />
                        <p>With 6 years of experience in photography, <nbsp /> I provide different services, including:</p>
                        <br />
                        <p>- Retouching images.</p>
                        <p>- Logo designing.</p>
                        <p>- Blending 3D models.</p>
                        <br />
                        <p>Take a look at my works and see if you like them :)</p>
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