import React, { useEffect, useState } from 'react';
import $ from 'jquery'; 
import logo from '../assets/images/icon.webp';
import { useLocation } from 'react-router-dom';
import { connect, useDispatch, useSelector } from 'react-redux';
import Socials from '../home/Socials';

function Header(props) {
    window.addEventListener('scroll', function (e) {
        const header = document.querySelector('.header')
        const hero = document.querySelector('.hero')
        const story = document.querySelector('.cardmain')
        // const rect = story.getBoundingClientRect()
        // const isInViewPort = rect.top >= 0 &&
        // rect.left >= 0 &&
        // rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        // rect.right <= (window.innerWidth || document.documentElement.clientWidth);

        header.classList.toggle('active', this.window.scrollY > 70)
        hero.classList.toggle('is-trans', this.window.scrollY > 70)
        story.classList.toggle('active', this.window.scrollY > 70)

        // if (isInViewPort && this.window.scrollY < 70) {
        //     story.scrollIntoView()    
        // }

    })

    // set state for mobile menu
    const [mobile, setMobile] = useState(false);

    function scrollToSection(ele, sectionId) {
        $(ele).click(() => {
            $("html, body").animate(
              {
                scrollTop: $(sectionId).offset().top,
              },
              1000
            );
            setMobile(false);
        });
    }

    const scrollOnClick = () => {
        scrollToSection(".link.home", "#home");
        scrollToSection(".link.about", "#about");
        scrollToSection(".link.gallery", "#storyslider");
        scrollToSection(".link.contact", "#contact");
    };

    useEffect(() => {
        scrollOnClick()
    },[])

    return (
       <header className='header'>
            <div className="container">
                <nav className='menu-wrapper'>
                    <div className="toggle">
                        <button onClick={() => setMobile(!mobile)}>
                            <div className={mobile ? 'bar one active' : 'bar one'}></div>
                            <div className={mobile ? 'bar two active' : 'bar two'}></div>
                            <div className={mobile ? 'bar three active' : 'bar three'}></div>
                        </button>
                    </div>
                    <div className="left">
                        <img src={logo} alt="" />
                    </div>
                    <div className={mobile ? 'center open' : 'center'}>
                        <ul className={mobile ? 'mobile-nav' : 'menu'}>
                            <li>
                                <a href='#home' className='link home'>home</a>
                            </li>
                            <li>
                                <a href='#about' className='link about'>about</a>
                            </li>
                            <li>
                                <a href='#storyslider' className='link gallery'>Gallery</a>
                            </li>
                            <li>
                                <a href='#contact' className='link contact'>contact</a>
                            </li>
                            <li>
                                <a href='#' target='_blank' rel="noreferrer" download>Download CV</a>
                            </li>
                            <Socials/>
                        </ul>
                    </div>
                </nav>
            </div>
       </header>
    );
}


const mapStateToProps = (state, ownProps) => {
    return {
        amount: state.amount
    }
}
connect(mapStateToProps)(Header)


export default Header;