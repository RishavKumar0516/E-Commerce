    //extracting product id from the url
    const url = window.location.href;
    //console.log(url);
    const product_id = url.substring(url.lastIndexOf('/') + 1);
    //console.log(product_id);


let updateProduct = async () => {
    console.log("update product");
    try {
        //get request for getting data 
        let url = `http://localhost:10000/api/products/find/${product_id}`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);

        let html = "";

        html += `

    <h1>Update Products</h1>
        <form class="row g-1" action="/api/products/update" method="POST">
            <div class="col-md-6 mb-4">
                <label for="product_name" class="form-label">Product Name</label>
                <input type="text" placeholder="Enter Product Name" class="form-control" id="name" value="${data.name}" name="name">
            </div>
            <div class="col-md-6 mb-4">
                <label for="category" class="form-label">Product Category</label>
                <input type="text" placeholder="Enter Product Category" class="form-control" id="category" value="${data.category}" name="category">
            </div>
            <div class="col-md-12 mb-4">
                <label for="product_title" class="form-label">Product title</label>
                <input type="text" placeholder="Enter Product Title" class="form-control" id="product_title" value="${data.title}" name="title">
            </div>
            <div class="col-md-6 mb-4">
                <label for="images" class="form-label">Image Link 1</label>
                <input type="text" placeholder="Enter link of First Image" class="images" value="${data.image[0]}" name="image">
            </div>
            <div class="col-md-6 mb-4">
                <label for="images" class="form-label">Image Link 2</label>
                <input type="text" placeholder="Enter link of Second Image"  class="images" value="${data.image[1]}" name="image">
            </div>
            <div class="col-md-6 mb-4">
                <label for="images" class="form-label">Image Link 3</label>
                <input type="text" placeholder="Enter link of Third Image"  class="images" value="${data.image[2]}" name="image">
            </div>
            <div class="col-md-6 mb-4">
                <label for="images" class="form-label">Image Link 4</label>
                <input type="text" placeholder="Enter link of Forth Image"  class="images" value="${data.image[3]}" name="image">
            </div>
            <div class="col-md-6 mb-4">
                <label for="form-check" class="form-label">Featured</label>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="featured" id="flexRadioDefault1" value="true">
                    <label class="form-check-label" for="flexRadioDefault1">
                        True
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="featured" id="flexRadioDefault2" value="false" checked>
                    <label class="form-check-label" for="flexRadioDefault2">
                        False
                    </label>
                </div>
            </div> 
            <div class="col-md-6 mb-4">
                <label for="description" class="form-label">Description</label>
                <input type="text" class="form-control" id="description" value="${data.description}" name="description">
            </div>
            <div class="col-md-6 mb-4">
                <label for="price" class="form-label">Price</label>
                <input type="text" class="form-control" id="price" value="${data.price}" name="price">
            </div>
            <div class="col-md-6 mb-4">
                <label for="discountPercent" class="form-label">discount Percent</label>
                <input type="text" class="form-control" id="discountPercent" value="${data.discountPercent}" name="discountPercent">
            </div>
            <div class="col-md-6 mb-4">
                <label for="discountPrice" class="form-label">discount Price</label>
                <input type="text" class="form-control" id="discountPrice" value="${data.discountPrice}" name="discountPrice">
            </div>
            <div class="col-md-6 mb-4">
                <label for="countInStock" class="form-label">countInStock</label>
                <input type="text" class="form-control" id="countInStock" value="${data.countInStock}" name="countInStock">
            </div>
            <div class="col-12">
                <button onclick="update(this)" class="btn btn-primary" type="submit" id="submitbtn">Submit form</button>
            </div>
        </form>


    `

    document.getElementsByClassName("container")[0].innerHTML = html;



    } catch {
        console.log("No data is recieved");
    }
}

updateProduct();//this creates form and insert the previous value of product in the textfield



//this update the value of products
let update = async () => {
    event.preventDefault();

       const name = document.getElementById('name');
       const category = document.getElementById('category');
       const product_title = document.getElementById('product_title');
       var images = document.getElementsByClassName('images');
       const description = document.getElementById('description');
       const featured = document.getElementsByName('featured');
       const price = document.getElementById('price');
       const discountPercent = document.getElementById('discountPercent');
       const discountPrice = document.getElementById('discountPrice');
       const countInStock = document.getElementById('countInStock');

       //console.log(images);

    let Name = name.value;
    let Category = category.value;
    let Product_title = product_title.value;
    let Description = description.value;
    let Price = price.value;
    let DiscountPercent = discountPercent.value;
    let DiscountPrice = discountPrice.value;
    let CountInStock = countInStock.value;

    var imagesArray = [];
    Array.from(images).forEach((image) => {
        imagesArray.push(image.value);
    });

    var Featured = (Boolean);
    if (featured[0].checked)
        Featured = true;
    else {
        Featured = false;
    }

    //console.log(imagesArray);
        try {
            let url = `http://localhost:10000/api/products/update/${product_id}`;
            await fetch(url, {

                    // Adding method type
                    method: "PUT",

                    // Adding body or contents to send
                    body: JSON.stringify({
                        name: Name,
                        category: Category,
                        title: Product_title,
                        image: imagesArray,
                        description: Description,
                        reviews: [],
                        rating: 3,
                        numReviews: 23,
                        featured: Featured,
                        price: Price,
                        discountPercent: DiscountPercent,
                        discountPrice: DiscountPrice,
                        countInStock: CountInStock
                    }),

                    // Adding headers to the request
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    }
                })

                // Converting to JSON
                .then(response => response.json())

                // Displaying results to console
                .then(json => {
                    console.log(json)
                    const data = json;
                    document.getElementsByClassName("container")[0].innerHTML = json;
                    //after updation of product redirect to the products page
                    //window.location.assign(`http://localhost:8000/api/products/adminproducts`);

                });
        } catch{
            console.log("err")

        }
}