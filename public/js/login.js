const { json } = require("express/lib/response")

document.getElementById("submitBtn").addEventListener("click", (e)=>{
    e.preventDefault()
    const email = document.querySelector('email').value
    const password = document.querySelector('password').value

    if (email && password){
        console.log("working login input")
        const res = await fetch ('/api/login', {
            method: 'POST',
            body: JSON.stringify({email, password})
        })
    }

    console.log(res)

})

