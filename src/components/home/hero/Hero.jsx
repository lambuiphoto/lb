import React, { useLayoutEffect, useEffect, useState } from 'react';


function Hero({headerHeight}) {
    const [headerH, setHeaderHeight] = useState(0)
    const setHeroTop =  () => {
        // const header = document.querySelector('.header');
        const hero = document.querySelector('.hero');
        const headerHeightData = 91;
        setHeaderHeight(headerHeightData)
        hero.style.top =  '-' + headerHeightData + 'px'
    }
    
    const showHeroHeading = () => {
        const hero = document.querySelector('.hero-heading')
        const hero2 = document.querySelector('.hero-heading-2')
        const hero3 = document.querySelector('.hero-heading-3')
        setTimeout(() => {
            hero.classList.add('show')
        }, 1000);   
        setTimeout(() => {
            hero2.classList.add('show')
        }, 2000);   
        setTimeout(() => {
            hero3.classList.add('show')
        }, 2500);   
    }

    document.addEventListener('click', () => {
        document.getElementById('sanFran').play()
    }, { once: true } )

    useLayoutEffect(() => {
        showHeroHeading()
        setHeroTop()
        document.onreadystatechange = () => {
            setHeroTop()
        }
    },[])
    
    return (
      <>
        <section className="hero" id='home'>
            <video autoPlay muted loop data-aos="fade">
                <source src='videos/bg2.mp4' type='video/mp4'/>
            </video>
            <audio controls autoPlay id='sanFran'>
                <source src="music/San Francisco - Midicronica.mp3" type="audio/mpeg" />
            </audio>
            <div className="container hero-container">
                <h1 className='hero-heading'>
                    <label htmlFor="">Lam</label>
                </h1>
                <h1 className='hero-heading-2'>
                    <label htmlFor="">Bui</label>
                </h1>
                <h1 className='hero-heading-3'>
                    <label htmlFor="">What's up?</label>
                </h1>
            </div>
        </section> 
      </>
    );
}

export default Hero;