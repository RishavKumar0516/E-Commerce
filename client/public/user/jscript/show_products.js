

const getfeatured_products = async ()=>{
	try{

		let url = `http://localhost:8000/api/index/products?featured=true`;
		let response = await fetch(url);
		let json = await response.json();
		// console.log(json);

		var html="";

		for (i = 0; i < 3; i++) {

      html+=`

         <div class="carousel-cell" data-aos="zoom-out" >
                <div class="box2" value="${json[i]._id}">
                    <div class="image-container" id="id3">
                        <img class="image-box2" src="${json[i].image[0]}" alt="">
                        <div class="cart" id="${json[i]._id}">
                            <button class="id-1 cartproduct" id="add"><i
                                    class="fa fa-cart-arrow-down" aria-hidden="true"></i></button>
                            <button class="id-1 likeproduct" id="heart1"><i class="fa fa-heart"
                                    id="heart" aria-hidden="true"></i></button>
                        </div>  
                    </div>       
                    <div class="details">
                        <span class="title">${json[i].title}</span>
                        <p id="name">${json[i].name}</p>
                        <div class="type">
                            <span class="price">RS ${json[i].discountPrice}</span>
                            <span class="price discount">RS ${json[i].price}</span>
                            <span class="offers">40% off</span>
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
		console.log("no products avaliable");
	}
}



const getnew_products = async (req, res)=>{
  try{

    let url = `http://localhost:8000/api/index/products?latest=true`;
    let response = await fetch(url);
    let json = await response.json();
    // console.log(json);

    var html="";

    for (i = 0; i < 4; i++) {
            html+=`
             
          <div class="right-box productBoxItems"   data-aos="zoom-out" >
                <div class="box2" value="${json[i]._id}">
                    <div class="image-container" id="id3">
                        <img class="image-box2" src="${json[i].image[0]}" alt="">
                        <div class="cart" id="${json[i]._id}">
                            <button class="id-1 cartproduct" id="add"><i
                                    class="fa fa-cart-arrow-down" aria-hidden="true"></i></button>
                            <button class="id-1 likeproduct" id="heart1"><i class="fa fa-heart"
                                    id="heart" aria-hidden="true"></i></button>
                        </div>
                    </div>
                    <div class="details">
                        <span class="title">${json[i].title}</span>
                        <p id="name">${json[i].name}</p>
                        <div class="type">
                            <span class="price">RS ${json[i].discountPrice}</span>
                            <span class="price discount">RS ${json[i].price}</span>
                            <span class="offers">40% off</span>
                        </div>
                    </div>
                </div>
         </div>

            `;
        } 

        document.getElementsByClassName('right-container')[0].innerHTML = html;

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
    console.log("no products avaliable");
  }
}



const getinspired_products = async (req, res)=>{
  try{

    let url = `http://localhost:8000/api/index/products?inspired=true`;
    let response = await fetch(url);
    let json = await response.json();
     //console.log(json);

    var html="";

    for (i = 0; i < 4; i++) {
            html+=`
             
          <div class="right-box productBoxItems" data-aos="zoom-out" >
                <div class="box2" value="${json[i]._id}">
                    <div class="image-container" id="id3">
                        <img class="image-box2" src="${json[i].image[0]}" alt="">
                        <div class="cart">
                            <button class="id-1 cartproduct" id="${json[i]._id}"><i
                                    class="fa fa-cart-arrow-down" aria-hidden="true"></i></button>
                            <button class="id-1 likeproduct" id="heart1"><i class="fa fa-heart"
                                    id="heart" aria-hidden="true"></i></button>
                        </div>
                    </div>
                    <div class="details">
                        <span class="title">${json[i].title}</span>
                        <p id="name">${json[i].name}</p>
                        <div class="type">
                            <span class="price">RS ${json[i].discountPrice}</span>
                            <span class="price discount">RS ${json[i].price}</span>
                            <span class="offers">40% off</span>
                        </div>
                    </div>
                </div>
         </div>

            `;
        } 

        document.getElementsByClassName('inspird-box')[0].innerHTML = html;

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
    console.log("no products avaliable");
  }
}






getfeatured_products();
getnew_products();
getinspired_products();


console.log("allen parker");

//this contains nothing it is only defined because of not getting error
//we have defined this function in like page to reload the page when someone remove product form like
// but we do not want same in this page so we have declare the function here, without any defination.
function changesDone(){}
