import React from "react";
import styled from "styled-components";
import {About} from "../styles";
import Toggle  from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";

// animation
import {fade} from "../animation";
import {useScroll} from './useScroll';


const FaqSection = () => {
  const [element, controls] = useScroll();
  return(
    <Faq variants={fade} animate={controls} initial="hidden" ref={element}>
      <h2>Any Questions <span>FAQ</span></h2>
      <AnimateSharedLayout>
        <Toggle title="How Do I Start?">
          <div className="answer">
            <p>Start by plugging it in.</p>
            <p>You need to go back and read the directions, my friend.</p>
          </div>
        </Toggle>
        <Toggle title="Daily Schedule">
          <div className="answer">
            <p>If the lights are on, we're here.</p>
            <p>We work when we feel like it.  Take it, or leave it.</p>
          </div>
        </Toggle>
        <Toggle title="Different Payment Methods">
          <div className="answer">
            <p>We prefer cash.</p>
            <p>...and plenty of it.</p>
          </div>
        </Toggle>
        <Toggle title="What Products do You Offer?">
          <div className="answer">
            <p>We offer products in every color.</p>
            <p>...as long as the color is black.</p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  span{
    display: block;
  }
  h2{
    padding-bottom: 1rem;
    font-weight: lighter;
  }
  .faq-line{
    background: #ccc;
    height: 0.2rem;
    margin: 2rem 0;
    width: 100%;
  }
  .question{
    padding: 1rem 0;
    cursor: pointer;
  }
  .answer{
    padding: 2rem 0;
    p{
      padding: 1rem 0;
    }
  }
`;

export default FaqSection;