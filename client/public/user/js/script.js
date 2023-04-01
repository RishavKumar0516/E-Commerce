console.log("allen parker");

  
//console.log(localStorage);    
let addcart = document.querySelectorAll(".add-cart-item");
//console.log(addcart);
           addcart.forEach(element => {
  element.addEventListener('click', (event) => { 
    event.preventDefault();

    //console.log(event);
    console.log(event.target);             
    let button = event.target;
    let showproducts = button.parentElement;  
    console.log(showproducts);
    let parentproduct = showproducts.parentElement;
    //console.log(parentproduct);    
    let grandparent = parentproduct.parentElement;
    //console.log(grandparent);  
    var productImg = grandparent.getElementsByClassName("productImg")[0].src;
    //console.log(productImg);
    let productContainer = grandparent.parentElement;
    //console.log(productContainer);
    //let productContent = productContainer.getElementsByClassName("product-content")[0];
    //console.log(productContent);
    let productName = productContainer.getElementsByClassName("product-name")[0].innerText;
    //console.log(productName);
    let productPrice = productContainer.getElementsByClassName("product-price")[0].innerText;
    //console.log(productPrice);
    let offerPrice = productContainer.getElementsByClassName("offer-price")[0].innerText;
    //console.log(offerPrice);


    let content = localStorage.getItem("content");
    if(content==null){
      contentObj = [];
    }
    else{
      contentObj = JSON.parse(content);
    }


  
    myObj = {
      image: productImg,
      name: productName,
      offer: offerPrice,
      price: productPrice
    }
    contentObj.push(myObj);
    //adding content to localStorage
    localStorage.setItem("content", JSON.stringify(contentObj));
    //console.log(contentObj);

        //add clickable animation
    //console.log(showproducts.classList);
    showproducts.classList.add("clickable");
    setTimeout(() => {  // Here in place of function name we are using arrow function
          showproducts.classList.remove("clickable");
          //console.log("we are inside settimeout");
      }, 2000);

  })  
})


/*function validate(itemname){
  console.log(itemname);
  let content = localStorage.getItem("content");
  if(content==null){
    contentObj = [];
  }
  else{
    contentObj = JSON.parse(content);
  }
  //console.log(contentObj);
  contentObj.forEach(function(element){
    if(element.name != itemname){
      return true;
    }
    else{
      alert('You have already added this item to cart');
      //return false;
    }
  })
}*/


//adding likes
let addingLikes = document.querySelectorAll(".add-to-like");
//console.log(addingLikes);
addingLikes.forEach(element => {
    element.addEventListener('click', (event) => {
      event.preventDefault();

    let button = event.target;
    let showproducts = button.parentElement;  
    //console.log(showproducts);
    let parentproduct = showproducts.parentElement;
    //console.log(parentproduct);    
    let grandparent = parentproduct.parentElement;
    //console.log(grandparent);  
    var productImg = grandparent.getElementsByClassName("productImg")[0].src;
    //console.log(productImg);
    let productContainer = grandparent.parentElement;
    //console.log(productContainer);
    //let productContent = productContainer.getElementsByClassName("product-content")[0];
    //console.log(productContent);
    let productName = productContainer.getElementsByClassName("product-name")[0].innerText;
    //console.log(productName);
    let productPrice = productContainer.getElementsByClassName("product-price")[0].innerText;
    //console.log(productPrice);
    let offerPrice = productContainer.getElementsByClassName("offer-price")[0].innerText;
    //console.log(offerPrice);


    let likes = localStorage.getItem("likes");
    if(likes==null){
      likesObj = [];
    }
    else{
      likesObj = JSON.parse(likes);
    }

    myObj = {
      image: productImg,
      name: productName,
      offer: offerPrice,
      price: productPrice
    }

    likesObj.push(myObj);
    localStorage.setItem("likes", JSON.stringify(likesObj));
    //console.log(likesObj);


    //add clickable animation
    //console.log(showproducts.classList);
    showproducts.classList.add("clickable");
    setTimeout(() => {  // Here in place of function name we are using arrow function
          showproducts.classList.remove("clickable");
          //console.log("we are inside settimeout");
      }, 1000);

    })
})


//showing products in product page

let addproducts = document.querySelectorAll(".productBoxItems");
//console.log(addproducts);
addproducts.forEach(element => {
    element.addEventListener('click', (event) => {
      event.stopPropagation();
      let product = event.target;
       if(product.classList.contains('productBoxItems')) {
           //console.log(product);
           let child = product.children;
           console.log(child[0]);
           let sib = child[0].children;
           console.log(sib);
           let imageContainer = sib[0];
           //console.log(imageContainer);
           let contentContainer = sib[1];
           //console.log(contentContainer);
           var productImg = imageContainer.getElementsByClassName("productImg")[0].src;
           console.log(productImg);
           let productName = contentContainer.getElementsByClassName("product-name")[0].innerText;
           console.log(productName);
           let productPrice = contentContainer.getElementsByClassName("product-price")[0].innerText;
           console.log(productPrice);
           let offerPrice = contentContainer.getElementsByClassName("offer-price")[0].innerText;
           console.log(offerPrice);

           removecart();/*before adding any element removing whole element from array so that array or local storage 
           always contains only 1 element. it contain only one element which we want to show as product */
           let products = localStorage.getItem("products");
           if(products==null){
                    productsObj = [];
                  }
                  else{
                    productsObj = JSON.parse(products);
                  }
       
                  myObj = {
                    image: productImg,
                    name: productName,
                    offer: offerPrice,
                    price: productPrice
                  }
       
           productsObj.push(myObj);
           localStorage.setItem("products", JSON.stringify(productsObj));
           console.log(productsObj);
           //removecart();

           window.location.href = "product_page.html";
       }
       

    })
})



//removing products


function removecart() {
  //console.log("I am deleting", index);

  let products = localStorage.getItem("products"); 
  if (products == null) {
    productsObj = [];
  } else {
    productsObj = JSON.parse(products); 
  }
  productsObj = [];
  localStorage.setItem("products", JSON.stringify(productsObj));
  console.log(localStorage); 

}

