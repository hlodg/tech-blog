

async function getLoginData (event){
    event.preventDefault()
 
    const email = document.querySelector('#email').value.trim()
    const password = document.querySelector('#password').value.trim()

    // console.log (email);


    if (email && password){
        console.log("working login input")
        const res = await fetch ('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({email, password}),
            headers:{'Content-type': "application/json"}
        })
        if(res.ok){
            document.location.replace('/')
        }
    } else{
        console.log("enter email and password")
    }

    // console.log(res)
}

document.getElementById("submitBtn").addEventListener("click", getLoginData)
