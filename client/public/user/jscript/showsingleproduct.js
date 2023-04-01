
const showsingleproduct = async ()=>{

try{
var path = window.location.pathname;
var id = path.substring(path.lastIndexOf('/') + 1);
console.log(id);

let url = `http://localhost:8000/api/products/find/${id}`;
let response = await fetch(url);
let product = await response.json();
console.log(product);

    let html1 = "";  
   html1 += `              
                <div class="image-container">
                    <div class="secondary">
                      
                    </div>
                    <div class="mini-container">
                       
                        <img src="${product.image[0]}" alt="" id="product-image" class="product-image">
                       
                        <div onclick="addtolike('${product._id}')" class="heart2 addtolike">
                            <i class="fa-solid fa-heart fa-xl"></i>
                        </div>
                    </div>
                </div>
                <div class="addto">
                    <div onclick="addtocart('${product._id}')" class="buynow colo">
                        <!--<i class="fa fa-shopping-cart" style="font-size:19px;"aria-hidden="true"></i>-->
                        <object data="img/cart.svg"></object>
                        <h4 class="ava avali white carttext">ADD TO CART</h4>
                    </div>
                    <div class="buynow">
                        <!--<i class="fa fa-bolt" style="font-size:19px;" aria-hidden="true"></i>-->
                        <object data="img/bolt-solid.svg"></object>
                        <span class="_3iRXzi"></span>
                        <h4 class="ava avali white">BUY NOW</h4>
                    </div>
                </div>
            `;


let contentElems = document.getElementsByClassName("product1")[0];
	contentElems.innerHTML = html1;

    let html3 = "";
    for(let i = 0; i < product.image.length; i++){
        if(i===0){
            html3+=`
                      <div onclick="changeimage(this)" class="small-image active">
                        <img src="${product.image[0]}" alt="" class="smallImg" />
                      </div>       
            `;
        }
        else{

            html3+=`
                      <div onclick="changeimage(this)" class="small-image">
                        <img src="${product.image[i]}" alt="" class="smallImg" />
                      </div>       
            `;

        }
    }

    document.getElementsByClassName('secondary')[0].innerHTML = html3;


    let html4 = "";

    html4+=`

          <div class="about-product flexBoxCol">
                    <div class="3452">
                        
                        <!--  names and other information of products-->
                    </div>
                    <!--  information of rating and review--->
                    <div class="rating-review">
                        <div class="combine offerbox">
                            <h4 class="Inline white">${product.rating}</h4>
                            <i class="fa-solid fa-star Inline"></i>
                        </div>
                        
                    </div>
                    <!--  offers information--->
                    <div class="avaliable-offer">
                        <h4 class="mg-b">Avaliable Offers</h4>
                        <section class="list">
                            <div class="combine2 ">
                                <i class="fa-solid fa-tag Inline green"></i>
                                <li class="Inline black offer-para">
                                    <p class="Inline black ">
                                        <h4 class="Inline">Special Price</h4> Get extra 14% off (price inclusive of discount) <span>T&C</span>
                                    </p>
                            </div>
                            <div class="combine2">
                                <i class="fa-solid fa-tag Inline green"></i>
                                <li class="Inline black offer-para">
                                    <p class="Inline">
                                        <h4 class="Inline">Bank Offer</h4> 5% Unlimited Cashback on Flipkart Axis Bank Credit Card <span>T&C</span>
                                    </p>
                                </li>
                            </div>
                            <div class="combine2">
                                <i class="fa-solid fa-tag Inline green"></i>
                                <li class="Inline black offer-para">
                                    <p class="Inline">
                                        <h4 class="Inline">Bank Offer</h4> 5% Unlimited Cashback on Flipkart Axis Bank Credit Card <span>T&C</span>
                                    </p>
                                </li>
                            </div>
                            <div class="combine2">
                                <i class="fa-solid fa-tag Inline green"></i>
                                <li class="Inline black offer-para">
                                    <p class="Inline">
                                        <h4 class="Inline">Bank Offer</h4> ₹20 Off on first prepaid transaction using UPI payments, minimum order ₹750/- <span>T&C</span>
                                    </p>
                                </li>
                            </div>
                            <div class="combine2">
                                <i class="fa-solid fa-tag Inline green"></i>
                                <li class="Inline black offer-para">
                                    <p class="Inline">
                                        <h4 class="Inline">Bank Offer</h4> ₹20 Off on first prepaid transaction using RuPay debit card, minimum order value ₹750/- <span>T&C</span>
                                    </p>
                                </li>
                            </div>
                        </section>
                    </div>
                    <!--  check for delivery pin--->
                    <div class="deliverto">
                        <div class="flexBoxCol">
                            <div class="Inline-block">
                                <div class="combine">
                                    <i class="fa-solid fa-location-dot Inline"></i>
                                    <h4 class="Inline grey">Deliver to</h4>
                                </div>
                                <section class="Inline right-side">
                                    <h4 class="Inline grey">services</h4>
                                    <div class="combine mg-l">
                                        <div class="circle inline blue">
                                            <i class="fa-solid fa-indian-rupee-sign Inline white"></i>
                                        </div>
                                        <p class="Inline a2345 black">Cash on Delivery</p>
                                    </div>
                                </section>
                            </div>
                            <div class="days">
                                <div class="combine">
                                    <h4 class="Inline">Usually delivered in 7 days</h4>
                                    <i class="fa-solid fa-question Inline circle lheight"></i>
                                </div>
                            </div>
                            <p class="s-black">Enter pincode for exact delivery dates/charges</p>
                        </div>
                    </div>
                    <!--  view size of product section--->
                    <div class="viewdetail">
                        <div class="flexBoxCol">
                            <h4 class="offers mg-b c-blue">View detail</h4>
                            <div class="aboutsize flexBox mg-t">
                                <h4 class="Inline mg-r top">Size</h4>
                                <div class="combine">
                                    <h3 onclick="addActive(this)" class="boxsizes ">30</h3>
                                    <h3 onclick="addActive(this)" class="boxsizes ">32</h3>
                                    <h3 onclick="addActive(this)" class="boxsizes ">34</h3>
                                    <h3 onclick="addActive(this)" class="boxsizes ">36</h3>
                                    <h3 onclick="addActive(this)" class="boxsizes ">38</h3>
                                </div>
                                <div class="combine normal">
                                    <h4 class="offers mg-b Inline c-blue">Size chart</h4>
                                    <i class="fa-solid fa-ruler c-blue"></i>
                                </div>
                            </div>
                            <div class="flexBox sellerinfo mg-t">
                                <h4 class="Inline seller top">Seller</h4>
                                <div class="flexBoxCol">
                                    <div class="Inline mg-b">
                                        <h4 class="Inline mg-s-r c-blue">RetailNet</h4>
                                        <div class="combine offerbox2 blue">
                                            <h5 class="Inline">${product.rating}</h5>
                                            <i class="fa-solid fa-star Inline"></i>
                                        </div>
                                    </div>
                                    <ul class="mg-s-l">
                                        <li class="mg-b">
                                            <div class="combine">
                                                <p class="Inline black">10 Days Return Policy</p>
                                                <i class="fa-solid fa-question Inline circle lheight"></i>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="combine">
                                                <p class="Inline black">GST invoice avaliable</p>
                                                <i class="fa-solid fa-question Inline circle lheight"></i>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--  product detail section--->
                    <div class="productdetail mg-t">
                        <div class="combine">
                            <h2 class="Inline">Products Details</h2>
                            <section class="right-side">
                                <i class="fa-solid fa-plus"></i>
                            </section>
                        </div>
                    </div>
                    <!--  rating and review section--->
                    <div class="ratingandreview clear">
                        <div class="flexBoxCol">
                            <div class="Inline mg-b">
                                <h2 class="Inline mg-s-r clear">Ratings & reviews</h2>
                                <div class="right-side mg-s-t">
                                    <div class="combine offerbox">
                                        <h4 class="Inline white">${product.rating}</h4>
                                        <i class="fa-solid fa-star Inline"></i>
                                    </div>
                                    <p class="Inline grey">${product.reviews.length} review and ${product.rating} rating</p>
                                    <h4 class="rate-product Inline-block mg-l">Rate Product</h4>
                                </div>
                            </div>
                        </div>
                        <!--  review image upload section--->
                        <div class="imageupload mg-s-t">
                            <h4>Images uploaded by customer</h4>
                            <div class="imgupl mg-s2-t">
                                <div class="gallery2">
                                    <a href="img/j2.jpeg" data-lightbox="second-page-image" data-title=" awesome products"><img src="img/j2.jpeg" width="100px" height="100px"></a>
                                    <!--15-->
                                </div>
                                <div class="gallery2">
                                    <a href="img/j3.jpeg" data-lightbox="second-page-image" data-title=" awesome products"><img src="img/j2.jpeg" width="100px" height="100px"></a>
                                    <!--15-->
                                </div>
                            </div>
                        </div>
                        <!--  comment section--->
                        <div class="comment">
                            <div class="comment-container">
                                <div class="osm">
                                    <div class="offerbox5">
                                        <h2 class="inline">4</h2>
                                        <i class="fa-solid fa-star star-fa Inline"></i>
                                    </div>
                                    <p class="Inline comment-color">Osm Product</p>
                                </div>
                                <div class="products">
                                    <div class="left-pro">
                                        <h4 class="flipkart">Allen parker Customer</h4>
                                        <p class="daysago">6 days ago</p>
                                    </div>
                                    <div class="right-pro">
                                        <span class="thumb"><i class="fa fa-thumbs-up thumb-size " style="margin-left:0px"  style="color:rgb(204, 196, 196);" aria-hidden="true"></i>5</span>
                                        <span class="thumb margin-left"><i class="fa fa-thumbs-down thumb-size"  style="color:rgb(204, 196, 196);" aria-hidden="true"></i>2</span>
                                        <span class="thumb margin-left" id="mar-right"><i class="fa fa-ellipsis-v thumb-size"  style="color:rgb(204, 196, 196);" aria-hidden="true"></i></span>
                                    </div>
                                </div>
                                <div class="left-pro certified">
                                    <span class="buyer daysago"><i class="fa-solid fa-circle-check checkcircle"></i>
                                        Certified Buyer</span>
                                </div>
                            </div>
                            <div class="horizental"></div>
                            <div class="comment-container">
                                <div class="osm">
                                    <div class="offerbox5">
                                        <h2 class="inline">4</h2>
                                        <i class="fa-solid fa-star star-fa Inline"></i>
                                    </div>
                                    <p class="Inline comment-color">Osm Product</p>
                                </div>
                                <div class="products">
                                    <div class="left-pro">
                                        <h4 class="flipkart">Allen parker Customer</h4>
                                        <p class="daysago">6 days ago</p>
                                    </div>
                                    <div class="right-pro">
                                        <span class="thumb"><i class="fa fa-thumbs-up thumb-size " style="margin-left:0px"  style="color:rgb(204, 196, 196);" aria-hidden="true"></i>5</span>
                                        <span class="thumb margin-left"><i class="fa fa-thumbs-down thumb-size"  style="color:rgb(204, 196, 196);" aria-hidden="true"></i>2</span>
                                        <span class="thumb margin-left" id="mar-right"><i class="fa fa-ellipsis-v thumb-size"  style="color:rgb(204, 196, 196);" aria-hidden="true"></i></span>
                                    </div>
                                </div>
                                <div class="left-pro certified">
                                    <span class="buyer daysago"><i class="fa-solid fa-circle-check checkcircle"></i>
                                        Certified Buyer</span>
                                </div>
                            </div>
                            <div class="horizental"></div>
                            <div class="comment-container">
                                <div class="osm">
                                    <div class="offerbox5">
                                        <h2 class="inline">4</h2>
                                        <i class="fa-solid fa-star star-fa Inline"></i>
                                    </div>
                                    <p class="Inline comment-color">Osm Product</p>
                                </div>
                                <div class="products">
                                    <div class="left-pro">
                                        <h4 class="flipkart">Allen parker Customer</h4>
                                        <p class="daysago">6 days ago</p>
                                    </div>
                                    <div class="right-pro">
                                        <span class="thumb"><i class="fa fa-thumbs-up thumb-size " style="margin-left:0px"  style="color:rgb(204, 196, 196);" aria-hidden="true"></i>5</span>
                                        <span class="thumb margin-left"><i class="fa fa-thumbs-down thumb-size"  style="color:rgb(204, 196, 196);" aria-hidden="true"></i>2</span>
                                        <span class="thumb margin-left" id="mar-right"><i class="fa fa-ellipsis-v thumb-size"  style="color:rgb(204, 196, 196);" aria-hidden="true"></i></span>
                                    </div>
                                </div>
                                <div class="left-pro certified">
                                    <span class="buyer daysago"><i class="fa-solid fa-circle-check checkcircle"></i>
                                        Certified Buyer</span>
                                </div>
                            </div>
                            <div class="horizental"></div>
                            <div class="comment-container">
                                <div class="osm">
                                    <div class="offerbox5">
                                        <h2 class="inline">4</h2>
                                        <i class="fa-solid fa-star star-fa Inline"></i>
                                    </div>
                                    <p class="Inline comment-color">Osm Product</p>
                                </div>
                                <div class="products">
                                    <div class="left-pro">
                                        <h4 class="flipkart">Allen parker Customer</h4>
                                        <p class="daysago">6 days ago</p>
                                    </div>
                                    <div class="right-pro">
                                        <span class="thumb"><i class="fa fa-thumbs-up thumb-size " style="margin-left:0px"  style="color:rgb(204, 196, 196);" aria-hidden="true"></i>5</span>
                                        <span class="thumb margin-left"><i class="fa fa-thumbs-down thumb-size"  style="color:rgb(204, 196, 196);" aria-hidden="true"></i>2</span>
                                        <span class="thumb margin-left" id="mar-right"><i class="fa fa-ellipsis-v thumb-size"  style="color:rgb(204, 196, 196);" aria-hidden="true"></i></span>
                                    </div>
                                </div>
                                <div class="left-pro certified">
                                    <span class="buyer daysago"><i class="fa-solid fa-circle-check checkcircle"></i>
                                        Certified Buyer</span>
                                </div>
                            </div>
                            <div class="horizental"></div>
                        </div>
                    </div>
                </div>

    `;
    document.getElementsByClassName('product2')[0].innerHTML = html4;



    let html = "";  
   html += `              
              <div class="product-name">
                            <h3 class="flexBoxCol mg-b">
                                <span class="brand grey">Killer</span>
                                <span class="productname">${product.name}</span>
                            </h3>
                            <h4 class="offers mg-b green">Special price</h4>
                        </div>
                        <div class="product-price">
                            <div class="combine">
                                <h1 class=" Inline"><i class="fa-solid fa-indian-rupee-sign symbol"></i></h1>
                                <h1 class="price1 Inline">${product.price}</h1>
                            </div>
                            <div class="combine price2">
                                <i class="fa-solid fa-indian-rupee-sign flatoff Inline"></i>
                                <span class="Inline flatoff">${product.discountPrice}</span>
                            </div>
                            <h4 class="price3 Inline green">33% off</h4>
                            <span class="circle">i</span>
                        </div>  
            `;

let contentElems2 = document.getElementsByClassName("3452")[0];
    contentElems2.innerHTML = html;
    
    //check user is login or not

    validateuser().then(x =>{
    if(x===true){
        check(id);
    }
   });


   
}
catch(err){
	console.log("cannot get product");
}

}



// //this checks the user is logined or not and based on that we show the information of cart. 
const validateuser = async ()=>{

      let url1 = `http://localhost:8000/api/auth/checkuserisvalidate`;
      let useris = await fetch(url1);
      let userinfo = await useris.json();
      console.log(userinfo.username);
      if(userinfo.username== ""){
          return false;
      }
      return true;
}

 showsingleproduct();




//change the image of big container when someone click on small image
function changeimage(element){
    var mainImg = document.getElementById('product-image');
    let imgele = element.getElementsByClassName("smallImg")[0];
    mainImg.src = imgele.src;
    let smallImg = document.getElementsByClassName("small-image");
    // console.log(smallImg);
    for(let i = 0; i < smallImg.length; i++){
        smallImg[i].classList.remove("active");
    }
    element.classList.add("active");
}

//remove product from the cart localstorage
function removecart(item) {
  console.log("delete the element with id " + item);

  let cartproduct = localStorage.getItem("cartproduct"); 
  if (cartproduct == null) {
    cartproductObj = []; 
  } else {
    cartproductObj = JSON.parse(cartproduct); 
  }
  var index = cartproductObj.indexOf(item);
  console.log(index);
if (index !== -1) {
  cartproductObj.splice(index, 1);
}
  localStorage.setItem("cartproduct", JSON.stringify(cartproductObj)); 
  console.log(cartproduct);
}

//add product to the cart
const addtocart = async (id)=>{
   console.log(id);
    validateuser().then(x =>{
    if(x===true){
        check(id);
        cart(id);
    }
    else alert("You are not authoried please login...")
 });

}
//add cart product to localstorage
const cart = async (id)=>{
       check(id);
   var pro = document.getElementsByClassName("carttext")[0];
   console.log(pro);
   
        let cartproduct = localStorage.getItem("cartproduct");
        if (cartproduct == null) {
            cartproductObj = [];
        } else {
            cartproductObj = JSON.parse(cartproduct);
        }
        if(cartproductObj.includes(id)){
           await removecart(id);
           document.getElementsByClassName("carttext")[0].innerText = "ADD TO CART";
        }
        else{

         await cartproductObj.push(id);
        //adding content to localStorage
        localStorage.setItem("cartproduct", JSON.stringify(cartproductObj));
        console.log(cartproductObj);
        document.getElementsByClassName("carttext")[0].innerText = "REMOVE";
    }
}


//remove product from like
function removelike(item) {
  console.log("delete the element with id " + item);

  let likeproduct = localStorage.getItem("likeproduct"); //these returns the value of key whose name is notes, stored in local storage. agar koi notes pahle sai local storage mai ai tou useea return ker do.
  if (likeproduct == null) {
    //if there is no any notes named key is stored in local storage the it is going to return null.
    likeproductObj = []; //if notes is null then setting the array as empty.
  } else {
    likeproductObj = JSON.parse(likeproduct); //json.parse() takes a valid string and convert the string in to javascript object. so it convert the string(notes) in to array.
  }
  var index = likeproductObj.indexOf(item);
  console.log(index);
if (index !== -1) {
  likeproductObj.splice(index, 1);
}
  localStorage.setItem("likeproduct", JSON.stringify(likeproductObj)); 
  console.log(likeproduct);
}



//add product from like
const addtolike = async (id)=>{
   console.log(id);
       validateuser().then(x =>{
    if(x===true){
        check(id);
        like(id);
    }
    else alert("You are not authoried please login...")
 });
}

//like
const like = async (id)=>{
       check(id);
   var pro = document.getElementsByClassName("addtolike")[0];
   console.log(pro);
   
        let likeproduct = localStorage.getItem("likeproduct");
        if (likeproduct == null) {
            likeproductObj = [];
        } else {
            likeproductObj = JSON.parse(likeproduct);
        }
        if(likeproductObj.includes(id)){
           await removelike(id);
           document.getElementsByClassName("addtolike")[0].style.color = "#fff";
        }
        else{

         await likeproductObj.push(id);
        //adding content to localStorage
        localStorage.setItem("likeproduct", JSON.stringify(likeproductObj));
        console.log(likeproductObj);
        document.getElementsByClassName("addtolike")[0].style.color = "red";
    }
}



//check the product is already added in cart if yes then show "remove", else show "add to cart" and it only works
//when user is logged in.
// this function is only called when user is logged in.
const check = async (id)=>{
    console.log(id);
     //for cart product
        let cartproduct = localStorage.getItem("cartproduct");
        if (cartproduct == null) {
            cartproductObj = [];
        } else {
            cartproductObj = JSON.parse(cartproduct);
        }
        console.log(cartproductObj.includes(id));
        if(cartproductObj.includes(id)){
           document.getElementsByClassName("carttext")[0].innerText = "REMOVE";
        }
        else{
        document.getElementsByClassName("carttext")[0].innerText = "ADD TO CART";

      //for like product
        let likeproduct = localStorage.getItem("likeproduct");
        if (likeproduct == null) {
            likeproductObj = [];
        } else {
            likeproductObj = JSON.parse(likeproduct);
        }
        console.log(likeproductObj.includes(id));
        if(likeproductObj.includes(id)){
           document.getElementsByClassName("addtolike")[0].style.color = "red";                                                              
        }
        else{
        document.getElementsByClassName("addtolike")[0].style.color ="#fff"; 
          }
    }
}



