 // <button class="id-1 cartproduct" id="add"><i
 //                                    class="fa fa-cart-arrow-down" aria-hidden="true"></i></button>


const getfeatured_products = async ()=>{
	try{

		let url = `http://localhost:10000/api/index/products`;
		let response = await fetch(url);
		let json = await response.json();
		console.log(json);

		var html="";

		for (let i = 0; i < json.length; i++) {

      html+=`

         <div class="carousel-cell" data-aos="zoom-out" >
                <div class="box2" value="${json[i]._id}">
                    <div class="image-container" id="id3">
                        <img class="image-box2" src="${json[i].image[0]}" alt="">
                        <div class="cart" id="${json[i]._id}">
                            <button class="id-1 likeproduct" id="heart1"><i class="fa fa-heart"
                                    id="heart" aria-hidden="true"></i></button>
                        </div> 
                    </div>
                    <div class="details">
                        <span class="title">highlander</span>
                        <p id="name">${json[i].name}</p>
                        <div class="type">
                            <span class="price">RS ${json[i].discountPrice}</span>
                            <span class="price discount">RS ${json[i].price}</span>
                            <span class="offers">${json[i].discountPercent} off</span>
                        </div>
                    </div>
                </div>
         </div>

      `;
        } 

        document.getElementById('Product-containers').innerHTML = html;

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


getfeatured_products();

//this contains nothing it is only defined because of not getting error
//we have defined this function in like page to reload the page when someone remove product form like
// but we do not want same in this page so we have declare the function here, without any defination.
function changesDone(){}



