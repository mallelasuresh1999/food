import React from "react";
// import ReactDOM from "react-dom";

import "../styles/Menulist.css";

function Menulist() {
    return(
        <div>
        <body>
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
        <script src="https://www.w3schools.com/lib/w3.js"></script>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Amatic+SC"></link>


        <div id="menu" class="w3-container w3-black w3-xxlarge w3-padding-64">
        <h1 class="w3-center w3-jumbo w3-padding-32">THE MENU</h1>
        <div class="w3-row w3-center w3-border w3-border-dark-grey">
        <a href="#food"><div class="w3-third w3-padding-large w3-red">Food</div></a>
        <a href="#Starters"><div class="w3-third w3-padding-large w3-hover-red">Starters</div></a>
        <a href="#Drinks"><div class="w3-third w3-padding-large w3-hover-red">Drinks/Ice Creams</div></a>
        </div>
        <div id="food" class="w3-container w3-white w3-padding-32">
        <h1><b>Chicken Biryani</b> <span class="w3-right w3-tag w3-dark-grey w3-round">$12.50</span></h1>
        <img alt="menu" class="biryani-image"src="https://img.freepik.com/free-photo/mutton-lamb-biriyani-with-basmati-rice-served-bowl-moody-background_466689-72651.jpg?t=st=1657000480~exp=1657001080~hmac=dde6e52375634f89cf19a2245c90aa65579fe07e6a6a7066e1e48810f7b82378&w=996"/>
        <img alt="menu" class="biryani-image"src="https://img.freepik.com/free-photo/dum-handi-chicken-biryani-is-prepared-earthen-clay-pot-called-haandi-popular-indian-non-vegetarian-food_466689-52250.jpg?w=996"/>
        <img alt="menu" class="biryani-image"src="https://media.istockphoto.com/photos/fish-biryani-with-basmati-rice-indian-food-picture-id488481490?s=612x612"/>
        <p class="w3-text-grey">Hyderabadi Biryani, Food Mood, Fresh, Food, Onions, Tamoto</p>
        <p class="cart-para">Add To <button class="cart-button">CART</button></p>
        <hr></hr>
        <h1><b>Mutton Biryani</b> <span class="w3-right w3-tag w3-dark-grey w3-round">$15.50</span></h1>
        <img alt="menu" class="biryani-image"src="https://img.freepik.com/free-photo/pilaf-with-carrots-saffron_140725-1198.jpg?t=st=1657089630~exp=1657090230~hmac=1143cff16a6c796e565410e991968b63579753c29a98d31dd1ae7c30dbcb4ba9&w=826"/>
        <img alt="menu" class="biryani-image"src="https://img.freepik.com/free-photo/massaman-curry-frying-pan-with-spices-cement-floor_1150-20777.jpg?t=st=1657089630~exp=1657090230~hmac=7425320f598846437c8411d209796e5166db40d8f5f3490b0537ec830a30af24&w=996"/>
        <img alt="menu" class="biryani-image"src="https://img.freepik.com/free-photo/authentic-fish-biryani-served-white-plate-handi_466689-72629.jpg?t=st=1657089630~exp=1657090230~hmac=7fddc6265c1b3298ff9dafcdf282a120941d95772d6fa4463bcb98eb34984f1d&w=996"/>
        <p class="w3-text-grey">Taste Dum and Fry Biryani, Mutton, onions</p>
        <p class="cart-para">Add To <button class="cart-button">CART</button></p>
        <hr></hr>
        <h1><b>Fish Biryani</b> <span class="w3-right w3-tag w3-dark-grey w3-round">$17.00</span></h1>
        <img alt="menu" class="biryani-image"src="https://img.freepik.com/free-photo/fried-fish-carp-fresh-vegetable-salad-wooden-table-flat-lay-top-view_2829-19929.jpg?t=st=1657090598~exp=1657091198~hmac=d57670d24e4e4c8a0c4e93a9f8919fae098bb3276ff68d5046e92bc4d170d6b0&w=996"/>
        <img alt="menu" class="biryani-image"src="https://img.freepik.com/free-photo/top-view-delicious-fish-meal-tray_23-2148734692.jpg?t=st=1657090598~exp=1657091198~hmac=c246c6266176afbc2e8ac7096c3ff9c8ef4bad540549e99b948141fcbe9da082&w=996"/>
        <img alt="menu" class="biryani-image"src="https://img.freepik.com/free-photo/top-view-tasty-cooked-fish-with-fresh-vegetables-seasonings-dark-table_140725-143736.jpg?t=st=1657088768~exp=1657089368~hmac=fc5e044e48fb007c4e666e34e0b3fab204b5dd4106c2bca3ca54d5e2a55b2b97&w=996"/>
        <p class="w3-text-grey">Fish and sea food, fresh food, fresh, good mood, food</p>
        <p class="cart-para">Add To <button class="cart-button">CART</button></p>
        <hr></hr>
        <h1><b>Prawns</b> <span class="w3-right w3-tag w3-dark-grey w3-round">$16.50</span></h1>
        <img alt="menu" class="biryani-image"src="https://img.freepik.com/free-photo/thai-food-tom-yum-kung-river-prawn-spicy-soup_1150-35451.jpg?t=st=1657090793~exp=1657091393~hmac=0211b78fdd3a0dc14514ded4534d890b0cc1c989e139f5f4b06c1c7e0ef1e2c2&w=996"/>
        <img alt="menu" class="biryani-image"src="https://img.freepik.com/free-photo/grilled-shrimps-prawns-served-with-lime_79782-2305.jpg?w=996"/>
        <img alt="menu" class="biryani-image"src="https://img.freepik.com/free-photo/fried-shrimps-with-spices-plate_1220-5274.jpg?w=996"/>
        <p class="w3-text-grey">Fresh food, Fresh Prawns, Food, Good Mood</p>
        <p class="cart-para">Add To <button class="cart-button">CART</button></p>
        <hr></hr>
        <h1><b>Meals</b> <span class="w3-right w3-tag w3-dark-grey w3-round">$16.50</span></h1>
        <img alt="menu" class="biryani-image"src="https://img.freepik.com/free-photo/sambar-rice-sambar-sadam-one-pot-meal-from-south-indian-state-tamil-nadu-kerala_466689-75220.jpg?t=st=1657091179~exp=1657091779~hmac=837b32c37aeb52d5ef87f09c7bb698f809569933931f2c9ff8241da3fb452a9e&w=996"/>
        <img alt="menu" class="biryani-image"src="https://img.freepik.com/free-photo/high-angle-indian-food-arrangement_23-2148734737.jpg?t=st=1657091179~exp=1657091779~hmac=6fc2fcf4311fd3f04e054b1d50baeaac35d15ee4ce47bb4481b191b86d72a453&w=996"/>
        <img alt="menu" class="biryani-image"src="https://img.freepik.com/free-photo/sambar-rice-sambar-sadam-one-pot-meal-from-south-indian-state-tamil-nadu-kerala_466689-75198.jpg?t=st=1657091179~exp=1657091779~hmac=3c954bb44d16323ccf4b68affdd1fda8a6a53e04d3edacb25f249e9c575e8d26&w=996"/>
        <p class="w3-text-grey">Fresh food, Fresh Meals, Food, Good Mood,Food Mood</p>
        <p class="cart-para">Add To <button class="cart-button">CART</button></p>
        <hr></hr>
        <h1><b>Soups</b> <span class="w3-right w3-tag w3-dark-grey w3-round">$16.50</span></h1>
        <img alt="menu" class="biryani-image"src="https://img.freepik.com/free-photo/roasted-pumpkin-carrot-soup-with-cream-black-pepper-pumpkin-seeds-cutting-board-fresh-pumpkin-slices-black-bread_114579-1706.jpg?t=st=1657091815~exp=1657092415~hmac=2749ce938cab1ef5d8a0e6acffdce354cae029160c3d9dc341a4e1392186896f&w=996"/>
        <img alt="menu" class="biryani-image"src="https://img.freepik.com/free-photo/tomato-soup-with-green-table_140725-2447.jpg?t=st=1657091815~exp=1657092415~hmac=40cad6a467ef2ef5accdc8abe6d8e8758c8474ff0539ab9c5eaa0c7d1b685a00&w=900"/>
        <img alt="menu" class="biryani-image"src="https://img.freepik.com/free-photo/soup-set-mushroom-lentil-pumpkin-tomato-chicken-side-view_141793-12551.jpg?t=st=1657091815~exp=1657092415~hmac=99f4fd723e403e37a4a53e9d27c4b1c06b4bfc301a25d09e6759c9694e1c35a4&w=996"/>
        <p class="w3-text-grey">Fresh food, Fresh Soups, Food, Good Mood</p>
        <hr></hr>
        <h1><b>Chinese</b> <span class="w3-tag w3-red w3-round">Hot!</span>
        <span class="w3-right w3-tag w3-dark-grey w3-round">$20.00</span></h1>
        <img alt="menu" class="biryani-image"src="https://img.freepik.com/free-photo/schezwan-szechwan-hakka-noodles-with-paneer-cottage-cheese-served-bowl-selective-focus_466689-74478.jpg?t=st=1657088318~exp=1657088918~hmac=71e33a745f84fdb517c9ea81fefd186bb960b95e8ff6cfa0ac7cbb6a9d2fe8e6&w=996"/>
        <img alt="menu" class="biryani-image"src="https://img.freepik.com/free-photo/schezwan-paneer-fried-rice-with-szechuan-sauce-cottage-cheese-cubes-served-bowl-plate-pan-selective-focus_466689-74425.jpg?t=st=1657088318~exp=1657088918~hmac=e9f450731cb8c656b38a95b9fe8fa08b6048dd9c215742b5e076ad6b5ec3537d&w=996"/>
        <img alt="menu" class="biryani-image"src="https://img.freepik.com/free-photo/schezwan-fried-rice-masala-szechuan-rice-is-popular-indo-chinese-food-served-plate-bowl-with-chopsticks-selective-focus_466689-74560.jpg?t=st=1657088318~exp=1657088918~hmac=9476038350b3505360871524f7cdbdb2d3b5b3af77b4d663e1f0e090a8e1baa2&w=996"/>
        <p class="w3-text-grey">Noodels, Fried Rice, Manchuria, Chicken</p>
        <p class="cart-para">Add To <button class="cart-button">CART</button></p>
        </div>

        <h1 id="Starters" class="w3-center w3-jumbo w3-padding-32">STARTERS</h1>
        <div class="w3-container w3-white w3-padding-32">
        <h1><b>Chicken Neggets</b> <span class="w3-tag w3-grey w3-round">Popular</span>
        <span class="w3-right w3-tag w3-dark-grey w3-round">$13.50</span></h1>
        <img alt="menu" class="biryani-image"src="https://static.toiimg.com/thumb/53222328.cms?width=1200&height=900"/>
        <img alt="menu" class="biryani-image"src="https://www.licious.in/blog/wp-content/uploads/2020/12/Baked-Chicken-Nuggets-600x600.jpg"/>
        <img alt="menu" class="biryani-image"src="https://bakeitwithlove.com/wp-content/uploads/2021/05/Air-Fryer-Chicken-Nuggets-sq.jpg"/>
        <p class="w3-text-grey">Special sauce, mozzarella, parmesan, ground beef</p>
        <p class="cart-para">Add To <button class="cart-button">CART</button></p>
        <hr></hr>
        <h1><b>Today's Soup</b> <span class="w3-tag w3-grey w3-round">Seasonal</span>
        <span class="w3-right w3-tag w3-dark-grey w3-round">$5.50</span></h1>
        <img alt="menu" class="biryani-image"src="https://img.freepik.com/free-photo/mutton-lamb-biriyani-with-basmati-rice-served-bowl-moody-background_466689-72651.jpg?t=st=1657000480~exp=1657001080~hmac=dde6e52375634f89cf19a2245c90aa65579fe07e6a6a7066e1e48810f7b82378&w=996"/>
        <img alt="menu" class="biryani-image"src="https://img.freepik.com/free-photo/dum-handi-chicken-biryani-is-prepared-earthen-clay-pot-called-haandi-popular-indian-non-vegetarian-food_466689-52250.jpg?w=996"/>
        <img alt="menu" class="biryani-image"src="https://media.istockphoto.com/photos/fish-biryani-with-basmati-rice-indian-food-picture-id488481490?s=612x612"/>
        <p class="w3-text-grey">Ask the waiter</p>
        <p class="cart-para">Add To <button class="cart-button">CART</button></p>
        <hr></hr>
        <h1><b>Veg Neggets</b> <span class="w3-right w3-tag w3-dark-grey w3-round">$14.50</span></h1>
        <img alt="menu" class="biryani-image"src="https://www.realmomnutrition.com/wp-content/uploads/Veggie-Nuggets-3.jpg"/>
        <img alt="menu" class="biryani-image"src="https://i.ytimg.com/vi/E0s1G3JYtGE/maxresdefault.jpg"/>
        <img alt="menu" class="biryani-image"src="https://i.ytimg.com/vi/vtSCZ-aZwuU/maxresdefault.jpg"/>
        <p class="w3-text-grey">Ravioli filled with cheese</p>
        <p class="cart-para">Add To <button class="cart-button">CART</button></p>
        <hr></hr>
        <h1><b>French Fries</b> <span class="w3-right w3-tag w3-dark-grey w3-round">$14.50</span></h1>
        <img alt="menu" class="biryani-image"src="https://img.freepik.com/free-photo/crispy-french-fries-with-ketchup-mayonnaise_1150-26588.jpg?t=st=1657090850~exp=1657091450~hmac=ffc4ca2c4c88676707b12b870cae06960e72e486fba7112d2938912043f9ef39&w=996"/>
        <img alt="menu" class="biryani-image"src="https://img.freepik.com/free-photo/french-fries-potato-chips-with-sour-cream-ketchup_1339-138744.jpg?w=996"/>
        <img alt="menu" class="biryani-image"src="https://img.freepik.com/free-photo/french-fries-with-ketchup-wood-table_23-2148272961.jpg?w=996"/>
        <p class="w3-text-grey">Ravioli filled with cheese</p>
        <p class="cart-para">Add To <button class="cart-button">CART</button></p>
        <hr></hr>
        <h1><b>Bruschetta</b> <span class="w3-right w3-tag w3-dark-grey w3-round">$8.50</span></h1>
        <img alt="menu" class="biryani-image"src="https://img.freepik.com/free-photo/open-sandwiches-with-cottage-cheese-cherry-tomatoes-basil_114579-62694.jpg?t=st=1657092905~exp=1657093505~hmac=fe16379ac1b751380096e9a6d7e12e1556e8a65145cc6b5c25a687eff4bc458d&w=996"/>
        <img alt="menu" class="biryani-image"src="https://img.freepik.com/free-photo/open-sandwiches-with-cottage-cheese-cherry-tomatoes-basil_114579-65505.jpg?t=st=1657092905~exp=1657093505~hmac=5e54b82c1f1ad4d0718d715707581dd74f9c444ced1866642923989f748ce637&w=996"/>
        <img alt="menu" class="biryani-image"src="https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19739.jpg?t=st=1657092905~exp=1657093505~hmac=c6a6f5fb0a6f44914d985c3adbb2894bc073992f10daa8de31e60cda9db26094&w=996"/>
        <p class="w3-text-grey">Bread with pesto, tomatoes, onion, garlic</p>
        <p class="cart-para">Add To <button class="cart-button">CART</button></p>
        <hr></hr>
        <h1><b>Spring Rolls</b> <span class="w3-right w3-tag w3-dark-grey w3-round">$11.00</span></h1>
        <img alt="menu" class="biryani-image"src="https://img.freepik.com/free-photo/spring-rolls-with-cheese-dark-background_1150-45277.jpg?t=st=1657093012~exp=1657093612~hmac=c53ad4f987a9b42ade26de0ec48b3472e6d4d4d992340dfcd82cb0a5c4e3dfe8&w=996"/>
        <img alt="menu" class="biryani-image"src="https://img.freepik.com/free-photo/egg-roll-fried-spring-rolls-white-plate-thai-food_1150-21491.jpg?t=st=1657093012~exp=1657093612~hmac=1f175c2d73f7a65906ebbe18a1ee9959a2f952a277365a482031aaf988bad849&w=996"/>
        <img alt="menu" class="biryani-image"src="https://img.freepik.com/free-photo/side-view-shawarma-with-fried-potatoes-board-cookware_176474-3215.jpg?t=st=1657093012~exp=1657093612~hmac=7f850e7b21265ad3572e14b81209b5a506b5f35572e33aec2c3a4b8dc6efbff5&w=740"/>
        <p class="w3-text-grey">Fresh tomatoes, onions, ground beef</p>
        <p class="cart-para">Add To <button class="cart-button">CART</button></p>
        </div>

        <h1 id="Drinks" class="w3-center w3-jumbo w3-padding-32">Drinks</h1>
        <div class="w3-container w3-white w3-padding-32">
        <h1><b>Soft Drinks</b> <span class="w3-tag w3-grey w3-round">Seasonal</span>
        <span class="w3-right w3-tag w3-dark-grey w3-round">$5.50</span></h1>
        <img alt="menu" class="biryani-image"src="https://img.freepik.com/free-photo/indian-friends-pub-guys-girl-bar-celebration-mug-beer_1157-46988.jpg?t=st=1657093136~exp=1657093736~hmac=c327c8bc20c1dde95c800a3f1c0c60f98fe0d5ddab9bf22b6fede893378bdf2c&w=996"/>
        <img alt="menu" class="biryani-image"src="https://img.freepik.com/free-psd/premium-qualtiy-realistic-long-metal-drink-can-with-water-splash-mockup_20144-57.jpg?w=996"/>
        <img alt="menu" class="biryani-image"src="https://img.freepik.com/free-vector/realistic-soda-with-ice-advertisement_52683-8078.jpg?t=st=1657093200~exp=1657093800~hmac=f16483061409b6555cbd65709520ca4566e5abbc37c9cf3bc68d29df5b0632ed&w=740"/>
        <p class="w3-text-grey">Ask the waiter</p>
        <p class="cart-para">Add To <button class="cart-button">CART</button></p>
        <hr></hr>
        <h1><b>Ice Cremas</b> <span class="w3-right w3-tag w3-dark-grey w3-round">$8.50</span></h1>
        <img alt="menu" class="biryani-image"src="https://img.freepik.com/free-photo/plate-with-chocolate-topping-ice-cream-cups_23-2148505921.jpg?t=st=1657093389~exp=1657093989~hmac=9aecac310503b92a704392e81c86c30f2e46091b3fb899488449010479f0534a&w=900"/>
        <img alt="menu" class="biryani-image"src="https://img.freepik.com/free-photo/chocolate-ice-cream-dessert_144627-8363.jpg?t=st=1657093389~exp=1657093989~hmac=f4ea1f9fe3088a10fead7d23c981fdc4f1c200b89efa89c486e339f41e3d3a4c&w=1060"/>
        <img alt="menu" class="biryani-image"src="https://img.freepik.com/free-vector/ice-cream-glass-bowl-realistic-composition-with-fresh-berries-violet-scoops-icecream_1284-27095.jpg?t=st=1657093389~exp=1657093989~hmac=df02a3e935783c7e8850528c002d4ad3709eec633547873b47686ec369cc15e6&w=740"/>
        <p class="w3-text-grey">Summer special, Ice creams</p>
        <p class="cart-para">Add To <button class="cart-button">CART</button></p>
        
        <hr></hr>
        <h1><b>American Drinks</b> <span class="w3-right w3-tag w3-dark-grey w3-round">$9.50</span></h1>
        <img alt="menu" class="biryani-image"src="https://www.eatthis.com/wp-content/uploads/sites/4/media/images/ext/338212308/sunkist.jpg"/>
        <img alt="menu" class="biryani-image"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx9CWWV-Xqs7tRcsSt9nh5G3bqM-YKH2I3Bw&usqp=CAU"/>
        <img alt="menu" class="biryani-image"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwN5QmhBWDCk6anbbiysyOEW1eVs3Ra-i1WQ&usqp=CAU"/>
        <p class="w3-text-grey">American drinks, Seasonal special</p>
        <p class="cart-para">Add To <button class="cart-button">CART</button></p>
        </div>
        </div>
        </body>
</div>
       

    )
}

export default Menulist