import React from 'react';
import Logo from '../Logo/Logo';
import Search from '../Search';
import './styles.css'

const Header = ({text,setText}) => {
  
  return (
      <div className='heder__cont'>
        <Logo />
        <Search
          text={text}
          setText={setText}/>
      </div>
  );
};

export default Header;