const button = document.getElementById("submitbtn");


const submitresponse = async (event) => {
    event.preventDefault();
    console.log("inside function")
    let passward = document.getElementById('Passward');
    let username = document.getElementById("userName");
    let confirmPassword = document.getElementById("confiormPassWord");

    try {

        if (passward.value === confirmPassword.value) {
            const url = "http://localhost:8000/api/users/update/userpassword";
            await fetch(url, {
                    method: "POST",
                    body: JSON.stringify({
                        username: username.value,
                        password: passward.value
                    }),
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    }
                })
                .then((response) => response.json())
                .then((json) => console.log(json));
        } else {
            alert("password and confirm parrword not matches!");
        }

    } catch (err) {
        console.log();
    }

}
button.addEventListener('click', submitresponse);