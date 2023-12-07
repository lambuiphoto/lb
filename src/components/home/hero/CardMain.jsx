import React from 'react';
import Heading from '../../common/Heading';
import BomImg from '../../assets/images/more/home.jpg';

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

                        <div>
                            <p>My skills:</p>
                            <div>
                                <p><img src="" alt="" />Photoshop</p>    
                                <p><img src="" alt="" />Premiere</p>    
                                <p><img src="" alt="" />Blender</p>    
                            </div>        
                        </div>
                        <br />
                        <p>With 6 years of experience in photography, <nbsp /> I provide different services, including:</p>
                        <br />
                        <p>- Retouching images.</p>
                        <p>- Logo designing.</p>
                        <p>- Blending 3D models.</p>
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