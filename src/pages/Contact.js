import React from "react";

import "../styles/Contact.css";

function Contact() {
  return (
    <div class="contact-section d-flex flex-column justify-content-left">
      <div>
       
      <h1 class="header-part">Contact Us</h1>
      
      <div class="row">
      <div class="column">
      <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name :</label>
          <input name="name" placeholder="Enter full name..." type="text" /><br></br><br></br>
          <label htmlFor="email">Email:</label>
          <input name="email" placeholder="Enter email..." type="email" /><br></br><br></br>
          <label htmlFor="email">Mobile:</label>
          <input name="mobile" placeholder="Mobile number..." type="phone" /><br></br><br></br>
          <label htmlFor="message">Suggestion:</label>
          

          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
          <label htmlFor="email">Country:</label>
          
          <select id="country" name="country">
          <option value="india">-Select-</option>
          <option value="india">India</option>
          <option value="australia">Australia</option>
          <option value="canada">Canada</option>
          <option value="usa">USA</option>
          <option value="india">UK</option>
        </select><br></br><br></br>
          <button type="submit"> Send Message</button>
          
        </form>
        <img alt="menu" class="image-contact" target="_blank" src="https://img.freepik.com/free-vector/contact-us-concept-landing-page_52683-12860.jpg?w=996&t=st=1656917185~exp=1656917785~hmac=76261376e271c952940575ba6bebe46a578ca5eff8439dccb677be6325eaddc8"/>
      
      </div>
      
      </div>
      

    </div>
    <div class="healthy-food-section pt-5 pb-5">
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-5">
              <div class="text-center">
                
                
              </div>
            </div>
            <div class="col-12 col-md-7">
              <h1 class="healthy-food-section-heading">
                Fresh, Healthy, Organic, Delicious Fruits
              </h1>
              <p class="healthy-food-section-description">
                Say no to harmful chemicals and go fully organic with our range of
                fresh fruits and veggies. Pamper your body and your senses with
                the true and unadulterated gifts from mother nature. with the true
                and unadulterated gifts from mother nature.
              </p>
             <a href="https://youtu.be/LS6TWtYWaPA" alt="video"><button class="video-tag">Watch Video</button></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
