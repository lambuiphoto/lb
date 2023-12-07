import React from 'react';
import { ImFacebook, ImInstagram } from 'react-icons/im'

const Socials = () => {
  return <div className='socials'>
    <ul className='flex'>
      <li>
        <a href='https://www.facebook.com/profile.php?id=100004349471605' target='_blank' rel="noreferrer"><ImFacebook/></a>
      </li>
      <li>
        <a href='http://www.instagram.com' target='_blank' rel="noreferrer"><ImInstagram/></a>
      </li>
    </ul>
  </div>;
};

export default Socials;
