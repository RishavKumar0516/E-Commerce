
const addEventToFunction = async ()=>{
    //adding event listener on .box2
   let ele = document.querySelectorAll(".box2");
   // console.log(ele);
   ele.forEach(element =>{
     element.addEventListener("click", showproduct);
   })

   //adding eventListener on cartproduct
   let cartproduct = document.querySelectorAll(".cartproduct");
   cartproduct.forEach(element =>{
     element.addEventListener("click", addToCart);
   })

   //adding eventListener on likeproduct
   let likeproduct = document.querySelectorAll(".likeproduct");
   likeproduct.forEach(element =>{
   element.addEventListener("click", addToLike);
   })

}

 //this checks the user is logined or not and based on that we show the information of cart and like. 
const validateuser = async ()=>{

      let url1 = `http://localhost:8000/api/auth/checkuserisvalidate`;
      let useris = await fetch(url1);
      let userinfo = await useris.json();
      // console.log(userinfo.username);
      if(userinfo.username== ""){
          return false;
      }
      return true;
}



const check = async ()=>{
     //for cart product
        let cartproduct = localStorage.getItem("cartproduct");
        let likeproduct = localStorage.getItem("likeproduct");
        let cartproductObj;
        let likeproductObj;
        if (cartproduct == null) {
            cartproductObj = [];
        } else {
            cartproductObj = JSON.parse(cartproduct);
        }
        if (likeproduct == null) {
            likeproductObj = [];
        } else {
            likeproductObj = JSON.parse(likeproduct);
        }
        
        let arr = document.getElementsByClassName('cart');
        // console.log(arr);
        Array.from(arr).forEach(element=>{
            let id = element.getAttribute("id");
            if(cartproductObj.includes(id)){
               element.children[0].classList.add("cart_active");
            }

            if(likeproductObj.includes(id)){
               element.children[1].classList.add("like_active");
            }
        })
}



//add to cart
function removecart(item) {
  console.log("delete the element with id " + item);

  let cartproduct = localStorage.getItem("cartproduct"); //these returns the value of key whose name is notes, stored in local storage. agar koi notes pahle sai local storage mai ai tou useea return ker do.
  if (cartproduct == null) {
    //if there is no any notes named key is stored in local storage the it is going to return null.
    cartproductObj = []; //if notes is null then setting the array as empty.
  } else {
    cartproductObj = JSON.parse(cartproduct); //json.parse() takes a valid string and convert the string in to javascript object. so it convert the string(notes) in to array.
  }
  var index = cartproductObj.indexOf(item);
  console.log(index);
if (index !== -1) {
  cartproductObj.splice(index, 1);
}
  localStorage.setItem("cartproduct", JSON.stringify(cartproductObj)); 
  console.log(cartproduct);
}

//add to cart only when user is logged in
function addToCart(event) {
    event.stopPropagation();
    // console.log(event.currentTarget);
    cart(event);
}

//add product to localstorage cart
const cart = async (event)=>{
    console.log(event.currentTarget);
    var parentCart = event.currentTarget.parentElement;
    var parentImg = parentCart.parentElement;
    var box = parentImg.parentElement;
    // console.log(box);
    var id = box.getAttribute("value");
    // console.log(id);
    if (event.currentTarget.classList.contains('cart_active')) {
        event.currentTarget.classList.remove("cart_active");
        removecart(id);
    } else {
         // console.log(id);
        let cartproduct = localStorage.getItem("cartproduct");
        if (cartproduct == null) {
            cartproductObj = [];
        } else {
            cartproductObj = JSON.parse(cartproduct);
        }

        cartproductObj.push(id);
        //adding content to localStorage
        localStorage.setItem("cartproduct", JSON.stringify(cartproductObj));
        console.log(cartproductObj);
        event.currentTarget.classList.add("cart_active");
    }
}


//add to like

//remove from like
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
  // console.log(index);
if (index !== -1) {
  likeproductObj.splice(index, 1);
}
  localStorage.setItem("likeproduct", JSON.stringify(likeproductObj)); 
  // console.log(likeproduct);
  
  //this will only work when user visit to like page
   changesDone();
}

//add to like only when user is logged in
function addToLike(event) {
    // console.log(event.currentTarget);
    event.stopPropagation();
    like(event);
}


//add product to localstorage like
const like = async (event)=>{
    console.log(event.currentTarget);
    var parentCart = event.currentTarget.parentElement;
    var parentImg = parentCart.parentElement;
    var box = parentImg.parentElement;
    // console.log(box);
    var id = box.getAttribute("value");
    // console.log(id);
    if (event.currentTarget.classList.contains('like_active')) {
        event.currentTarget.classList.remove("like_active");
        removelike(id);
    } else {
         // console.log(id);
        let likeproduct = localStorage.getItem("likeproduct");
        if (likeproduct == null) {
            likeproductObj = [];
        } else {
            likeproductObj = JSON.parse(likeproduct);
        }

        likeproductObj.push(id);
        //adding content to localStorage
        localStorage.setItem("likeproduct", JSON.stringify(likeproductObj));
        // console.log(likeproductObj);
        event.currentTarget.classList.add("like_active");
    }
}


//this will redirect you to single product page
function showproduct(event){
    event.stopPropagation();


    //console.log(event.currentTarget);
    const val = event.currentTarget.getAttribute("value");
    // console.log(val);
    window.location.href = `http://localhost:8000/api/index/products/${val}`;
}


/*
About "event.currentTarget"
When you add an event listener to a parent element in JavaScript, and then use the event.target property
 to access the element that triggered the event, you may get a child element instead of the parent element.
  This is because the event.target property always returns the element that actually triggered the event, even
   if it is a child of the parent element where the event listener was added.

   If you want to make sure that you only get the parent element in this scenario, you can use
   the event.currentTarget property instead of event.target. The event.currentTarget property always
    refers to the element where the event listener was added, regardless of which element actually triggered
     the event. So in our example, if you replace event.target with event.currentTarget in the handleClick 
     function, you will get the parent div element instead of the child button element.


     About "event.stopPropagation"
     To stop an event listener action on another element in JavaScript, you can use the stopPropagation method.
      This method prevents the event from bubbling up to the parent elements, so the event will only trigger
       on the element where it was originally fired.

*/





