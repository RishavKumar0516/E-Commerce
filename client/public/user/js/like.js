showcontent();

function showcontent(){

let likes = localStorage.getItem("likes");
if(likes==null){
	likesObj = [];  
}  
else{
	likesObj = JSON.parse(likes);  
}

let html = "";
likesObj.forEach(function(element, index) { 
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
if(likesObj.length != 0){
	contentElems.innerHTML = html;
}
else{
  let container = document.getElementsByClassName("product-container")[0];
  container.style.height = "100px";
	contentElems.innerHTML = `Nothing to show! Use "Add a Note"  section above to add notes.`;
}
}


//removing like products


function removecart(index) {
  console.log("I am deleting", index);

  let likes = localStorage.getItem("likes"); 
  if (likes == null) {
    likesObj = [];
  } else {
    likesObj = JSON.parse(likes); 
  }

  likesObj.splice(index, 1);
  
  localStorage.setItem("likes", JSON.stringify(likesObj)); 

  showcontent(); 
}
