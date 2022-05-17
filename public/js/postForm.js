async function createBlogPost (event){
    event.preventDefault()

    const blogPost=document.querySelector('#blogpost').value.trim()
    const postName = document.querySelector('#name').value.trim()

    // console.log(postName)

    if(blogPost && postName){
        // console.log ("working blog")
        const res = await fetch ('/api/blog', {
            method:'POST',
            body: JSON.stringify({blogPost, postName}),
            headers: {'Content-type': "application/json"}
        })
           
        console.log(res)
        
        if(res.ok){
            document.location.replace('/')
        }
    }
}

document.getElementById("postSubmit").addEventListener("click", createBlogPost)