
const addEventToFunction = async ()=>{
    //adding event listener on .box2
   let ele = document.querySelectorAll(".box2");
   // console.log(ele);
   ele.forEach(element =>{
     element.addEventListener("click", showproduct);
   })

   //adding eventListener on likeproduct
   let likeproduct = document.querySelectorAll(".likeproduct");
   Array.from(likeproduct).forEach(element =>{
   element.addEventListener("click", addToLike);
   })

}

 //this checks the user is logined or not and based on that we show the information of cart and like. 
const validateuser = async ()=>{

      let url1 = `https://e-commerce-allenparker.onrender.com/api/auth/checkuserisvalidate`;
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
        let likeproduct = localStorage.getItem("likeproduct");
        let likeproductObj;
        if (likeproduct == null) {
            likeproductObj = [];
        } else {
            likeproductObj = JSON.parse(likeproduct);
        }
        
        let arr = document.getElementsByClassName('cart');
        Array.from(arr).forEach(element=>{
            let id = element.getAttribute("id");
            if(likeproductObj.includes(id)){
               element.children[0].classList.add("like_active");
            }
        })
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


//add product to localstorage like
function like(element){
    // console.log(element);
    var parentCart = element.parentElement;
    var parentImg = parentCart.parentElement;
    var box = parentImg.parentElement;
    // console.log(box);
    var id = box.getAttribute("value");
    // console.log(id);
    if (element.classList.contains('like_active')) {
        element.classList.remove("like_active");
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
        element.classList.add("like_active");
    }
}


//add to like only when user is logged in
const addToLike = async(event)=> {
    event.stopPropagation();
    // console.log(event.currentTarget);
    const target = event.currentTarget;
    
          
          let x = await validateuser();
          console.log(x);
          if(x===true){
             like(target);
          }
          else{
             alert("You are not authenticate, please login");
          }
        
       
}

//this will redirect you to single product page
function showproduct(event){
    event.stopPropagation();


    //console.log(event.currentTarget);
    const val = event.currentTarget.getAttribute("value");
    // console.log(val);
    window.location.href = `https://e-commerce-allenparker.onrender.com/api/index/products/${val}`;
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





