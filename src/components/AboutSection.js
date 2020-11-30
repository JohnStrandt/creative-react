import React from "react";
import home1 from "../img/home1.png"
// styled
import{About, Description, Image, Hide} from "../styles"
// framer motion
import {motion} from 'framer-motion';
import {titleAnim, fade, photoAnim} from "../animation";
import Wave from "./wave";

const AboutSection = () => {

  return(
    // jsx
    <About>

      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>We work to </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>make your <span>dreams </span></motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>come true.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>Contact us for any photography or videography ideas that you have.  We have proffessionals with amazing skills.</motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </Description>

      <Image>
          <motion.img variants={photoAnim} src={home1} alt="guy with a camera"/>
      </Image>
      <Wave />

    </About>
  );
};

// styled component
export default AboutSection;