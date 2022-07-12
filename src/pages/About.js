import React from "react";
import logo from "../assets/logo.png";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <h1 class="header-tag">ABOUT US</h1>
      <h1 class="footer-section-text">Eat Street</h1>
      
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${logo})` }}
      ></div>
      <div className="aboutBottom">


        
        
        <p>
        Food is what people and animals eat to live. 
        Every organism needs energy to carry on with 
        the process of living which comes from food. 
        Food usually comes from animals and plants. 
        It is eaten by living things to provide energy and nutrition.
        Food contains the nutrition that people and animals need to be healthy. 
        The consumption of food is normally enjoyable to humans.
        Food produced by farmers or gardeners can be changed by 
        industrial processes (the food industry). 
        Processed food usually contains several natural 
        ingredients and food additives (such as preservatives, antioxidants, emulsifiers, flavor enhancers). 
        For example, bread is processed food.
        </p>
        
        
        <p class="footer-section-address">
                TechM Team, Our Food, Eat Street, India.
        </p>
        
        
      </div>
    </div>
  );
}

export default About;