const showlikeproduct = async ()=>{
	try{
        //getting products added to like
	    let likeproduct = await localStorage.getItem("likeproduct");
	    let likeproductObj;
	    if (likeproduct == null) {
            likeproductObj = [];
        } else {
            likeproductObj = JSON.parse(likeproduct);
        }
         let html="";
        for(let i = 0; i < likeproductObj.length; i++){
           let url = `http://localhost:10000/api/products/find/${likeproductObj[i]}`;
           let response = await fetch(url);
           let product = await response.json();
           console.log(product);

           html += `
                  
            <div class="carousel-cell" data-aos="zoom-out" >
                <div class="box2" value="${product._id}">
                    <div class="image-container" id="id3">
                        <img class="image-box2" src="${product.image[0]}" alt="">
                        <div class="cart" id="${product._id}">
                            <button class="id-1 likeproduct" id="heart1"><i class="fa fa-heart"
                                    id="heart" aria-hidden="true"></i></button>
                        </div>                    </div>
                    <div class="details">
                        <span class="title">highlander</span>
                        <p id="name">${product.name}</p>
                        <div class="type">
                            <span class="price">RS ${product.discountPrice}</span>
                            <span class="price discount">RS ${product.price}</span>
                            <span class="offers">40% off</span>
                        </div>
                    </div>
                </div>
            </div>

           `;
        }

        if(html!=""){
        	document.getElementById('Product-containers').innerHTML = html;
        }
        else{
        	document.getElementById('Product-containers').innerHTML = `<h1>No product to Show Please add Products...</h1>`;
        }

        //addeventlistenertoallfunction
        addEventToFunction();
        //check user is logged in or not, based on that show user cart and like product
        validateuser().then(x =>{
          if(x===true){
             check();
          }
        });

	}
	catch(err){
		console.log(err);
	}
}


showlikeproduct();

const changesDone = ()=>{
	location.reload();
}