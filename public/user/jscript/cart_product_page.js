const cartproducts = async ()=>{
	let cartproduct = localStorage.getItem("cartproduct");
	if(cartproduct==null){
		cartproductObj = [];
	}
	else{
		cartproductObj = JSON.parse(cartproduct);
	}
    
    try{

    	let html="";
        let total=0;
        let productdiscountPrice=0;
        let totalproducts = cartproductObj.length;

	for(let i = 0; i < cartproductObj.length; i++){
		let url = `https://e-commerce-allenparker.onrender.com/api/products/find/${cartproductObj[i].productId}`;
		let response = await fetch(url);
		let product = await response.json();
		console.log(product);

		if(cartproductObj[i].size==0){
			html+=`

	          <div class="productBox">      
                <div class="image">
                  <img src="${product.image[0]}" alt="">
                </div>
                <div class="content">
                  <div class="left3">
                    <h4 class="productName">${product.name}</h4>
                    <div class="combinebox">
                      <p class="discount">Rs ${product.discountPrice}</p>
                      <p class="price">Rs  ${product.price}</p>
                    </div>
                  </div>
                </div>
                <div class="right">
                    <div class="button-element rmargin">
                        <button onclick="remove(this)" class="btn deletebtn" value=${product._id} >remove</button>
                    </div>
                </div>
              </div>
		`;
		}
		else{

			html+=`

	         <div class="productBox">
                <div class="image">
                  <img src="${product.image[0]}" alt="">
                </div>
                <div class="content">
                  <div class="left3">
                    <h4 class="productName">${product.name}</h4>
                    <div class="combinebox">
                      <p class="discount">Rs ${product.discountPrice}</p>
                      <p class="price">Rs  ${product.price}</p>
                    </div>
                    <div class="combinebox">
                      <p class="size">size ${cartproductObj[i].size}</p>
                    </div>
                  </div>
                </div>
                <div class="right">
                    <div class="button-element rmargin">
                        <button onclick="remove(this)" class="btn deletebtn" value=${product._id} >remove</button>
                    </div>
                </div>
             </div>


		`;

		}
         total+= product.price;
         productdiscountPrice +=parseInt(product.discountPrice);
         console.log(productdiscountPrice);
	}
    console.log(productdiscountPrice);
    console.log(total);

   let eachItemPrice = document.querySelector(".price > span");
   let allPrice = document.querySelector(".allprice > span");
   let discount = document.getElementsByClassName("discount")[0];
   let elediscountPrice = document.querySelector(".discount-price > span");
   let eletotal = document.getElementsByClassName("total")[0];
   let totalPrice = document.querySelector(".total-allprice > span");
    console.log(total.innerText);
    console.log(eachItemPrice.innerText);

	let contentElems = document.getElementsByClassName("containerproducts")[0];
    if(cartproductObj.length != 0){
    	contentElems.innerHTML = html;

        eachItemPrice.innerText="(" + totalproducts + " " + "items" + ")";
        let diffprice = total - productdiscountPrice;
        allPrice.innerText = total;
        elediscountPrice.innerText = diffprice;
        totalPrice.innerText = productdiscountPrice;
        console.log(total);
        console.log(discountPrice);
    }
    else{
      let container = document.getElementsByClassName("containerproducts")[0];
      // container.style.height = "100px";
      contentElems.innerHTML = `Nothing to show! Use "Add a Note"  section above to add notes.`;
    }
    }catch(err){
    	console.log(err);
    }
}


cartproducts();



//find the product is present in the array of objects
const find_product = ((cartproductObj, id)=>{
    for(let i = 0; i < cartproductObj.length; i++){
        if(cartproductObj[i].productId == id) return i;
    }
    return -1;
})


//for removing product from the cart

const remove = async (element)=>{
   console.log(element);
     // console.log("delete the element with id " + index);
        
        let id = element.getAttribute("value");
        console.log(id);

        let cartproduct = localStorage.getItem("cartproduct");
        if (cartproduct == null) {
            cartproductObj = [];
        } else {
            cartproductObj = JSON.parse(cartproduct);
        }
        const index = await find_product(cartproductObj, id);
        console.log(index);
        if(index!= -1){
           cartproductObj.splice(index, 1);
        }
       cartproductObj.splice(index, 1);
       await localStorage.setItem("cartproduct", JSON.stringify(cartproductObj)); 
       console.log(cartproductObj);

       cartproducts();
}