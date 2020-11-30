import styled from "styled-components";
import { motion } from "framer-motion";
// styled component
export const About = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
  @media (max-width: 1200px){
    display: block;
    padding: 2rem 2rem;
    text-align: center;
    button{
      margin-bottom: 5rem;
    }
  }
`;

export const Description = styled.div`
  z-index: 2;
  flex: 1;
  padding-right: 5rem;
  h2{
    font-weight: lighter;
  }
`;

export const Image = styled.div`
  z-index: 2;
  flex: 1;
  overflow: hidden;
  img{// this is needed or images crowd the viewport
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;