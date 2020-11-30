import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {motion} from 'framer-motion';
import {useLocation} from 'react-router-dom';

const Nav = () => {
  const {pathname} = useLocation();
  return(
    <StyledNav>
      <h1><Link id="logo" to="/">Capture</Link></h1>
      <ul>
        <li>
          <Link to="/">About Us</Link>
          <Line 
          transition={{duration: 0.75}} 
          initial={{width: "0%"}} 
          animate={{width: pathname === "/" ? "100%" : "0%"}}
          />
        </li>
        <li>
          <Link to="/work">Our Work</Link>
          <Line 
          transition={{duration: 0.75}} 
          initial={{width: "0%"}} 
          animate={{width: pathname === "/work" ? "100%" : "0%"}}
          />
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
          <Line 
          transition={{duration: 0.75}} 
          initial={{width: "0%"}} 
          animate={{width: pathname === "/contact" ? "100%" : "0%"}}
          />
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 10;
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #282828;
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
  }
  li {
    padding-left: 7rem;
    padding-bottom: 5px;
    position: relative;
  }
#logo{
    font-size: 1.5rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
  }
@media (max-width: 1200px){
  flex-direction: column;
  padding: 2rem 1rem;
  #logo {
    display: inline-block;
    margin: 2rem;
  }
  ul{
    padding: 2rem;
    justify-content: space-around;
    width: 100%;
    li{
      padding: 0;
    }
  }
}

`;

const Line = styled(motion.div)`
  height: 0.3rem;
  background-color: #23d997;
  width: 0%;
  margin-top: 2px;
  /* position: relative; */
  /* bottom: 80%; */
  /* left: 60%; */
`;

export default Nav;