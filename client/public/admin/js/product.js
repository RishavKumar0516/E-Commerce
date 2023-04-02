const container = document.getElementById('container');

const getProduct = async () => {
    //event.preventDefault();

    try {
        let url = `http://localhost:8000/api/products`;
        //Await: Await function is used to wait for the promise. It could be used within the async block only.
        // It makes the code wait until the promise returns a result. It only makes the async block wait.

        // await is used for wait until the whole data is fetched in this case.
        const response = await fetch(url);
        const data = await response.json();
        //console.log(data);
        const arrData = [data];
        //console.log(arrData);

        let html = "";
        data.forEach(function(element) {
            console.log(element);
            /*html+=` 

            <div class="product-box productBoxItems" data-aos="zoom-in" data-aos-delay="50" data-aos-duration="1500"><!-- product -2 -->
                <div class="robert">
                  <div class="product-img"><!-- image-area -->
                      <img class="productImg" src="${element.image[0]}" alt="${element.name}">
                  </div>

                  <div class="product-content"><!-- content area -->
                      <h4 class="heading product-name">${element.name}</h4>
                      <div>
                        <h2 class="heading product-price">${element.discountPrice}</h2>
                        <span class="offer-price">${element.price}</span>
                      </div>
                  </div>
              </div>
              </div>

            `;*/

            html += `

    <div class="product-box2">
      <div class="image">
        <img src="${element.image[0]}" alt="">
      </div>
      <div class="content">
        <div class="left">
          <h4 class="productName">${element.name}</h4>
          <div class="combine">
            <p class="price">Rs  ${element.price}</p>
                        <p class="discount">Rs ${element.discountPrice}</p>
          </div>
        </div>
      </div>
      <div class="right">
          <div class="button-element rmargin">
              <button onclick="updateProduct(this)" class="btn deletebtn" value=${element._id} >Update</button>
          </div>
          <div class="button-element">
              <button onclick="deleteProduct(this)" class="btn deletebtn" value=${element._id} >Delete</button>
          </div>
      </div>
    </div>

            `
        });

        container.innerHTML = html;
    } catch {
        //city_name.innerText = `plz enter the city name properly`;
        console.log("No Data Recieved");
    }

}

getProduct();//show products calling


//deleting product related code

let deleteProduct = async (element) => {
    console.log(element.value);

    try {
        let url = `http://localhost:8000/api/products/delete/${element.value}`;

        await fetch(url, {
                //Adding method type
                method: "DELETE",
                //Adding headers to the request
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
            .then(response => response.json()) //converting to JSON
            .then(json => {
                console.log(json);
            });
    } catch {
        console.log("fetch request does not work");
    }
    await getProduct();
}

//calling for updating products 
let updateProduct = async (element) => {
   window.location.assign(`http://localhost:8000/api/products/update/${element.value}`)
}


