import React from "react";
// animaitons
import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "../animation";
import styled from 'styled-components';

const ContactUs = () => {
  return(
    <ContactStyle 
      variants={pageAnimation} 
      initial="hidden" 
      animate="show" 
      exit="exit" 
      style={{background: "#fff"}}>
    <Title>
      <Hide>
        <motion.h2 variants={titleAnim}>Get in touch.</motion.h2>
      </Hide>
    </Title>
    <div>
      <Hide>
        <Social variants={titleAnim}>
          <Circle/>
          <h2>Send A Message</h2>
        </Social>
      </Hide>
      <Hide>
        <Social variants={titleAnim}>
          <Circle/>
          <h2>Send an email</h2>
        </Social>
      </Hide>
      <Hide>
        <Social variants={titleAnim}>
          <Circle/>
          <h2>Social media</h2>
        </Social>
      </Hide>
    </div>
  </ContactStyle>
  );
};


const ContactStyle = styled(motion.div)`
  padding: 3rem 10rem;
  color: #353535;
  min-height: 90vh;
  @media (max-width: 1200px){
    min-height: 75vh;
    padding: 2rem 1rem;
    overflow: hidden;
    h2{
      font-size: 2rem;
    }
  }
`;

const Title = styled.div`
  margin-bottom: 2rem;
  color: black;
  @media (max-width: 1200px){
    margin-top: 5rem;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
  }
`;

const Circle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: #353535;
`;


export default ContactUs;