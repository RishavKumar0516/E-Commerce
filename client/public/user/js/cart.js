showcontent();
totalprice();

function showcontent(){

let content = localStorage.getItem("content");
if(content==null){
	contentObj = [];  
}  
else{
	contentObj = JSON.parse(content);  
}

let html = "";  
contentObj.forEach(function(element, index) {
   html += `              
              <div class="product-box" data-aos="zoom-in" data-aos-delay="50" data-aos-duration="1500"><!-- product -2 -->
                  <div class="product-img"><!-- image-area -->
                      <img class="productImg" src="${element.image}" alt="">
                      <div class="showup">
                        <a href="" class="add-cart-seen"><i class="fa fa-eye" aria-hidden="true"></i></a>
                        <a href="" class="add-to-like"><i class="fa fa-heart-o" aria-hidden="true"></i></a>
                        <div href="" class="add-cart-item"><i class="fa fa-cart-arrow-down" aria-hidden="true"></i></div>
                      </div>
                  </div>

                  <div class="product-content"><!-- content area -->
                      <h4 class="heading product-name">${element.name}</h4>
                      <div>
                        <h2 class="heading product-price">${element.price}</h2>
                        <span class="offer-price">${element.offer}</span>
                        <div id="${index}" onclick="removecart(this.id)" class="deletebutton">remove</div>
                      </div>
                  </div>
              </div>
            `;
})

let contentElems = document.getElementsByClassName("product-container")[0];
if(contentObj.length != 0){
	contentElems.innerHTML = html;
}
else{
  let container = document.getElementsByClassName("product-container")[0];
  container.style.height = "100px";
	contentElems.innerHTML = `Nothing to show! Use "Add a Note"  section above to add notes.`;
}
}


function removecart(index) {
  // these function takes the index of the array
  console.log("I am deleting", index);

  let content = localStorage.getItem("content"); //these returns the value of key whose name is notes, stored in local storage. agar koi notes pahle sai local storage mai ai tou useea return ker do.
  if (content == null) {
    //if there is no any notes named key is stored in local storage the it is going to return null.
    contentObj = []; //if notes is null then setting the array as empty.
  } else {
    contentObj = JSON.parse(content); //json.parse() takes a valid string and convert the string in to javascript object. so it convert the string(notes) in to array.
  }

  contentObj.splice(index, 1);
  /* Array.splice(start: number, deleteCount?: number)
The zero-based location in the array from which to start removing elements.
Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
@returns — An array containing the elements that were deleted. */

/* these methods takes starting index, which is index and the second argument as the number of element you want to delete. */

  /* here we have added new node to the array but we haven't update the local storage */
  localStorage.setItem("content", JSON.stringify(contentObj)); // here we are converting the notesObj array in to the string and updating the local storage. string me hum esliye convert kiye ku ki local stroage kai andar string mai hi set karna parta hai;

  showcontent(); 
  totalprice();

}


// total price
function totalprice(){
  let eachItemPrice = document.querySelector(".price > span");
   let allPrice = document.getElementsByClassName("allprice")[0];
    let discount = document.getElementsByClassName("discount")[0];
     let discountPrice = document.getElementsByClassName("discount-price")[0];
      let total = document.getElementsByClassName("total")[0];
       let totalPrice = document.getElementsByClassName("total-allprice")[0];
       console.log(total.innerText);
       console.log(eachItemPrice.innerText);

       let content = localStorage.getItem("content");
       if(content == null){
        contentObj = [];
       }
       else{
        contentObj = JSON.parse(content);
       }
var sumallprice = 0;
var offerprice = 0;
contentObj.forEach(function(element){
    //console.log(element.price);
    //console.log(element.offer);
    //const num= Number(element.price);
    let ele1 = element.price;
    ele1 = ele1.slice(1);
    sumallprice = +sumallprice + +ele1;
    let ele2 = element.offer;
    ele2 = ele2.slice(1);
    offerprice = +offerprice + +ele2;
})

if(contentObj.length != 0){
  console.log("no elements");
  //total = Math.round(total*100)/100;
  eachItemPrice.innerText="(" + contentObj.length + " " + "items" + ")";
  allPrice.innerText = "$" + sumallprice;
  discountPrice.innerText = "$" + offerprice;
  let diffprice = sumallprice - offerprice;
  totalPrice.innerText = "$" + diffprice;
  console.log(sumallprice);
  console.log(diffprice);
}
else{
    eachItemPrice.innerText="(" + contentObj.length + " " + "items" + ")";
  allPrice.innerText = "$" + sumallprice;
  discountPrice.innerText = "$" + offerprice;
  let diffprice = sumallprice - offerprice;
  totalPrice.innerText = "$" + diffprice;
}
}
