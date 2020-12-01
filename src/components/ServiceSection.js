import React from "react";
// import icons
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/home2.png';
// styles
import styled from 'styled-components';
import{About, Description, Image} from "../styles";
// animation
import { scrollReveal } from "../animation";
import {useScroll} from './useScroll';


const ServiceSection = () => {
  const [element, controls] = useScroll();
  return(
      <Services variants={scrollReveal} animate={controls} initial="hidden" ref={element}>

        <Description>
          <h2>High <span>quality</span> services</h2>
          
          <Cards>
            <Card>
              <div className="icon">
                <img src={clock} alt="clock"/>
                <h3>Efficient</h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </Card>
            <Card>
              <div className="icon">
                <img src={teamwork} alt="teamwork"/>
                <h3>Teamwork</h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </Card>
            <Card>
              <div className="icon">
                <img src={diaphragm} alt="diaphragm"/>
                <h3>Diaphragm</h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </Card>
            <Card>
              <div className="icon">
                <img src={money} alt="money"/>
                <h3>Affordable</h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </Card>
          </Cards>

        </Description>

        <Image>
          <img src={home2} alt="video camera"/>
        </Image>

      </Services>
  );
};

const Services = styled(About)`
h2{
  padding-bottom: 5rem;
}

p{
  width: 100%;// was 70... no good
  padding: 2rem 0 4rem 0;
}
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1200px){
    justify-content: center;
  }
`;

const Card = styled.div`
  margin: 1rem 2rem;
  flex-basis: 10rem;
  .icon{
    display: flex;
    align-items: center;
    h3{
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
`;

export default ServiceSection;