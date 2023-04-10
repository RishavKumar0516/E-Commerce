
const showDetails = async ()=>{
     const url = window.location.href;
     const id = url.split('/').pop();

    try{
        let url = `http://localhost:10000/api/users/${id}`;
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);

        let html = "";

        html+=`
          <div class="product-box3">
              <div class="box">
                 <p>ID  :</p>
                 <p>${json._id}</p>
              </div>
              <div class="box">
                 <p>Name  :</p>
                 <p>${json.username}</p>
              </div>
              <div class="box">
                 <p>Email ID  :</p>
                 <p>${json.email}</p>
              </div>
              <div class="box">
                 <p>Created Time  :</p>
                 <p>${json.createdAt}</p>
              </div>
         </div>
          
        `;

        document.getElementById("container").innerHTML = html;
    }
    catch(err){
    	console.log("fetch function not works");
    }
}

showDetails();