import React from 'react'


import "../styles/Services.css";

function Services() {
    return(
        <div>
            
        <div class="services-section pt-5 pb-5" id="servicesSection">
        <div class="container">
        <div class="services-start">
          <div class="row">
            <div class="col-12 first-header-section">
              <h1 class="services-section-heading">Eat-StreeT  <span class="services-style">Services</span></h1>
              <p class="services-section-description">
                A Lot of Restaurents Serve Good Food. But They Don't Have Very Good Service.
              </p>
            </div>
            <div class="col-12 col-md-4 second-section">
              <div class="services-card p-3 mb-3">
                <img
                  src="https://img.freepik.com/free-vector/waitress-wearing-face-mask-serving_23-2148588602.jpg?t=st=1656400892~exp=1656401492~hmac=d5bd3d35d3e31a8f87c4e712b40b97dcc3dbde3d2a847cc622a87869a6da4e13&w=740"
                  class="services-card-image" alt="menu"
                />
                <h1 class="services-card-title mt-3">Food Service</h1>
                <p class="services-card-description">
                Profit is not the legitimate purpose of business. 
                The legitimate purpose of business is to provide a product or service 
                that people need and do it so well that it’s profitable.
                </p>
                <p class="services-card-description">“You’ve always got to work to your highest ability level. 
                    When times are great and restaurants are jamming, 
                    that’s when some restaurants get sloppy and take things 
                    for granted. Never take things for granted.” </p>
              </div>
            </div>
            <div class="col-12 col-md-4 third-section">
              <div class="services-card p-3 mb-3">
                <img
                  src="https://cdn.powerofpositivity.com/wp-content/uploads/2018/05/healthy-breakfast-food.jpeg"
                  class="services-card-image2" alt="menu"
                />
                <h1 class="services-card-title mt-3">Food Quality</h1>
                <p class="services-card-description">
                  The Fresh Food group provides fresh-cut fruits and vegetables
                  directly picked from our partner farms and farm houses so that
                  you always get them tree to plate.
                </p>
                <p class="services-card-description">"A balanced diet is a cookie in each hand.” 
                    “Let food be thy medicine and medicine be thy food.” “We all eat, and it would be a sad waste of opportunity to eat badly.”
                     “You don't need a silver fork to eat good food.”</p>
              </div>
            </div>
            <div class="col-12 col-md-4 fourth-section">
              <div class="services-card p-3 mb-3">
                <img
                  src="https://img.freepik.com/free-photo/3d-render-open-restaurant-cloche-with-golden-fifty-percent-sign-white-background_42071-2314.jpg?w=1060"
                  class="services-card-image" alt="menu"
                />
                <h1 class="services-card-title mt-3 ">Best Offers</h1>
                <p class="services-card-description">
                  Food Coupons & Offers upto 
                  <span class="offers"> 50% OFF</span>
                  and Exclusive Promo Codes on All Online Food Orders.
                  Food should be a love offering. Our Aim is to offer simple , Fresh , Good Food.
                  Ordered Food.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>

    )
}

export default Services;