import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import YouTubeIcon from '@mui/icons-material/YouTube';
import "../styles/Footer.css";
function Footer() {
  return (
    <div>
    
    <div className="footer">
      <h1 class="follow-us-section-heading"> Follow Us</h1>
      <p>EAT STREET</p>
        <div className="socialMedia">
        <LinkedInIcon/> <YouTubeIcon/>  <InstagramIcon/> <TwitterIcon/> <FacebookIcon/> 
            

        </div>
        <p>ourfood@eaststreet.com</p>


      
    </div>
    </div>
  )
}

export default Footer
