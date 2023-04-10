console.log("createProducts");


       const submitBtn = document.getElementById('submitbtn');
       const name = document.getElementById('name');
       const category = document.getElementById('category');
       const subcategory = document.getElementById('subcategory');
       const product_title = document.getElementById('product_title');
       var images = document.getElementsByClassName('images');
       const description = document.getElementById('description');
       const featured = document.getElementsByName('featured');
       const inspired = document.getElementsByName('inspired');
       const newpro = document.getElementsByName('new');
       const price = document.getElementById('price');
       const discountPercent = document.getElementById('discountPercent');
       const discountPrice = document.getElementById('discountPrice');
       const countInStock = document.getElementById('countInStock');

       console.log(images);


       const getInfo = async (event) => {
           event.preventDefault();
           let Name = name.value;
           let Category = category.value;
           let subCategory = subcategory.value;
           let Product_title = product_title.value;
           let Description = description.value;
           let Price = price.value;
           let DiscountPercent = discountPercent.value;
           let DiscountPrice = discountPrice.value;
           let CountInStock = countInStock.value;

           var imagesArray = [];
       Array.from(images).forEach( (image)=>{
           if(image.value != ""){
              imagesArray.push(image.value);
           }
       });

           var Featured = (Boolean);
           if(featured[0].checked)
            Featured = true;
           else{
            Featured = false;
           }

           var Inspired = (Boolean);
           if(inspired[0].checked)
            Inspired = true;
           else{
            Inspired = false;
           }

           var NewProd = (Boolean);
           if(newpro[0].checked)
            NewProd = true;
           else{
            NewProd = false;
           }

       console.log(imagesArray);

           console.log(Name,Category,Product_title,Price,DiscountPercent);
           if (Name == "") {
               console.log("input");
           } else {

            try{

                   let url = `https://e-commerce-allenparker.onrender.com/api/products/create`;
                   const fetchResult = await fetch(url, {

                           // Adding method type
                           method: "POST",

                           // Adding body or contents to send
                           body: JSON.stringify({
                               name: Name,
                               category: Category,
                               subcategory: subCategory,
                               title:Product_title,
                               image:imagesArray,
                               description:Description,
                               reviews:[],
                               rating:3,
                               numReviews:23,
                               featured:Featured,
                               inspired:Inspired,
                               new:NewProd,
                               price:Price,
                               discountPercent:DiscountPercent,
                               discountPrice:DiscountPrice,
                               countInStock:CountInStock
                           }),

                           // Adding headers to the request
                           headers: {
                               "Content-type": "application/json; charset=UTF-8"
                           }
                       })


                        const result = await fetchResult.json();

                        if (fetchResult.ok) {
                            document.getElementById("log-form").reset();
                          return result;
                        }
                        else{
                            console.log(result);
                            document.getElementById("log-form").reset();
                            console.log("hii");
                        }

                }catch{
                   console.log("product cannot created");
                   document.getElementById("log-form").reset();
                }

           }

       }

       submitBtn.addEventListener('click', getInfo);