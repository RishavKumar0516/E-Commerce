

const getUsers = async()=>{
	try{
        const url = `http://localhost:8000/api/users`;
		const users = await fetch(url);
		const json = await users.json();
		console.log(json);

		let html="";
		json.forEach( (element, index)=>{
			html+=`
             
                    <div class="product-box2">
                      <h4>${index+1}</h4>
                      <div class="content">
                        <div class="left">
                          <h4 class="productName">${element.username}</h4>
                        </div>
                      </div>
                      <div class="right">
                          <div class="button-element rmargin">
                              <a href="/api/users/usersinfo/${element._id}" class="btn">Details</a>
                          </div>
                      </div>
                    </div>

			`
		})

		document.getElementById("container").innerHTML = html;


	}catch(err){
       console.log(`cannot fetch the users ${err}`, err);
	}
}

getUsers();


