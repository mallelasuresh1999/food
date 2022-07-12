import React from 'react'
//import {Link} from "react-router-dom";

import "../styles/Payment.css";

function Payment() {
  return (
    <div>
             <link href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
            <script src="//netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js"></script>
            <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>

            <h1 class="header-payment">Payment Page</h1>


            <div class="container">
                <div class="payments-main">
                <div class="row">
                    <div class="col-xs-12 col-md-4">
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <h3 class="panel-title">
                                    Payment Details
                                </h3>
                                <div class="checkbox pull-right">
                                    <label>
                                        <input type="checkbox" />
                                        Remember
                                    </label>
                                </div>
                            </div>
                            <div class="panel-body">
                                <form>
                                <div class="form-group">
                                    <label for="cardNumber">
                                        ENTER CARD NUMBER</label>
                                    <div class="input-group">
                                        <input type="text" class="form-control" id="cardNumber" placeholder="Valid Card Number"
                                            required autofocus />
                                        <span class="input-group-addon"><span class="glyphicon glyphicon-lock"></span></span>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-xs-7 col-md-7">
                                        <div class="form-group">
                                            <label for="expityMonth">
                                                EXPIRY DATE</label>
                                            <div class="col-xs-6 col-lg-6 pl-ziro">
                                                <input type="text" class="form-control" id="expityMonth" placeholder="MM" required />
                                            </div>
                                            <div class="col-xs-6 col-lg-6 pl-ziro">
                                                <input type="text" class="form-control" id="expityYear" placeholder="YY" required /></div>
                                        </div>
                                    </div>
                                    <div class="col-xs-5 col-md-5 pull-right">
                                        <div class="form-group">
                                            <label for="cvCode">
                                                CV CODE</label>
                                            <input type="password" class="form-control" id="cvCode" placeholder="CV" required />
                                        </div>
                                    </div>
                                    
                                </div>
                                </form>
                            </div>
                        </div>
                        <ul class="nav nav-pills nav-stacked">
                            <li class="active"><a href="/"><span class="badge pull-right"><span class="glyphicon glyphicon-usd"></span>****</span> Final Payment</a>
                            </li>
                        </ul>
                        <br/>
                        <a href="http://www.jquery2dotnet.com" class="btn btn-success btn-lg btn-block" role="button">Pay</a>
                    </div>
                <div class="mt-3">
                <img
                  src="https://res.cloudinary.com/dxqvnb6kz/image/upload/v1656407110/master-card-img_dez2bd.png"
                  class="payment-card-img" alt="payment"
                />
                <img
                  src="https://res.cloudinary.com/dxqvnb6kz/image/upload/v1656407116/paypal-card-img_os3slc.png"
                  class="payment-card-img" alt="payment"
                />
                <img
                  src="https://res.cloudinary.com/dxqvnb6kz/image/upload/v1656407015/visa-card-img_kjoxap.png"
                  class="payment-card-img" alt="payment"
                />
                <img
                  src="https://res.cloudinary.com/dxqvnb6kz/image/upload/v1656407100/american-express-img_ruvmcu.png"
                  class="payment-card-img" alt="payment"
                />
              </div>
              <p class="payment-desc">Any Card,A payment method is a way that customers pay for a product or service. In a brick-and-mortar store,
                 accepted payment methods may include cash, a gift card, credit cards, prepaid cards, debit cards, or mobile payments</p>
                </div>
                
            </div>
            </div>

    </div>


    
  )
}

export default Payment;
