// import { Grid } from "@mui/material";

// const Home = () => {
//   return <>
//    <Grid container justifyContent='center'>
//     <Grid item sm={10}>
//     <h1>Welcome to Bank</h1>
//     <hr />
//         <p>
//         Using your Bank of India Internet Banking Account,
//          you can pay your bills like Electricity, T
//         elephone, Satellite Television, Mobile Phone etc.  </p>
//         <p>
//          You can also pay your Insurance Premium, 
//         Credit Card Bills etc.You can shop online using Bank of India Account.</p>



//         <h6>Copyright © 2021 - All Rights Reserved - Official website of Life Insurance Corporation of India.
// Content on this website is published and managed by Life Insurance Corporation of India.
// Corporate Office : Yogakshema Building, Jeevan Bima Marg, P.O. Box No – 19953, Mumbai – 400 021 IRDAI Reg No- 512
// Life Insurance Corporation of India, Administrative Officer, Corporate Communication Dept.</h6>
      
//         </Grid>
//         </Grid>

//     </>;
// };

// export default Home;

import React from 'react'
import {Link} from "react-router-dom";
import "../styles/Home.css";

function Home() {
  return (

    <div class="container">
      <div class="row">
      <div class="col-12 col-md-4 banner-section-bg-container d-flex justify-content-center flex-column">
        <div class="text-center">
          <h1 class="banner-heading mb-3">Enjoy Your Food in Town</h1>
          <p class="banner-caption mb-4">After a good dinner one can forgive anybody, even one's own relations.</p>
          <p class="banner-caption mb-4">Good Food & Good Mood</p>
          <Link to="/menu">
          
            <button class="custom-button">View Menu</button>
            <button class="custom-outline-button">Order Now</button>
          </Link>
          
          <p class="banner-para-quote mt-4">"You don't need silver fork to eat good food"</p>
        </div>
        </div>

      </div>  
      </div>
      
      
      
    
  )
}

export default Home
