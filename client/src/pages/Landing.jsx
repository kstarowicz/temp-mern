import styled from 'styled-components';
import Wrapper from '../assets/wrappers/LandingPage';
import main from '../assets/images/main.svg';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';
//import Logo from '../assets/images/logo.svg';
//import React from 'react'


const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
     </nav>
        <div className='container page'>
          <div className="info">
            <h1>
              job <span>tracking</span> app
            </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Nulla architecto fuga quo optio unde odio maiores quibusdam
                accusantium placeat omnis, perspiciatis esse deserunt distinctio
                porro magni assumenda obcaecati dolore. Sapiente.
              </p>
              <Link to='/register' className='btn register-link'>
              Register
              </Link>
              <Link to='/login' className='btn'>
              Login / Demo User
              </Link>
          </div>
          <img src={main} alt="work hunt" className='img main-img' />
        </div>

    </Wrapper>
  )
}


export default Landing;