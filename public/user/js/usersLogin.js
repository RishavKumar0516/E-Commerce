       const submitBtn = document.getElementById('submitbtn');
       const userName = document.getElementById("userName");
       const PassWord = document.getElementById("PassWord");


       const getInfo = async (event) => {
           event.preventDefault();
           console.log("function is running");
           let UserName = userName.value;
           let Secret = PassWord.value;
           if(UserName == "") {
               console.log("input");
           } else {
               try {
                   console.log("fetching request");
                   let url = `http://localhost:8000/api/auth/login`;
                   fetch(url, {

                           // Adding method type
                           method: "POST",

                           // Adding body or contents to send
                           body: JSON.stringify({
                               username: UserName,
                               password: Secret
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
                        console.log(json.username);
                        console.log(json.details.username);
                        window.location.assign(`user/username/${json.details.username}`);

                       });
                       
               } catch {
                   console.log("post request not work")
               }
               //reset the form detail
               document.getElementById("log-form").reset()

           }

           //reset the form detail
               document.getElementById("log-form").reset();

       }

       submitBtn.addEventListener('click', getInfo);