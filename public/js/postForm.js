async function createBlogPost (event){
    event.preventDefault()

    const blogPost=document.querySelector('#blogpost').value.trim()
    const postName = document.querySelector('#name').value.trim()

    console.log(postName)

    if(blogPost && postName){
        console.log ("working blog")
        const res = await fetch ('/')

        res.status(200).json(res)
        
        if(res.ok){
            document.location.replace('/')
        }
    }
}

document.getElementById("postSubmit").addEventListener("click", createBlogPost)