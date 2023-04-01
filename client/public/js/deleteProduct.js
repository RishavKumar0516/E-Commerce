console.log("delete items");
const submitBtn = document.getElementById('submitbtn');
const product_id = document.getElementById('product_id'); 



       const getInfo = async (event) => {
           event.preventDefault();
           let Product_id = product_id.value;

           if (Product_id == "") {
               console.log("input");
           } else {
               try {
                   let url = `http://localhost:8000/api/products/delete/${Product_id}`;
                   fetch(url, {

                           // Adding method type
                           method: "DELETE",

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
                        
                       });
               } catch {
                   console.log("delete request not work")
               }

           }

       }

       submitBtn.addEventListener('click', getInfo);