const router = require('express').Router();
const Blog = require('../model/Blog')




// create new blog
router.post('/create', async(req, res) => {

    const newBlog = new Blog(req.body);
    try{  
        const newblog = await newBlog.save();
        newblog && res.send(newblog);
    }
    catch(exc){
        res.send(exc.message);
    }
})




// get all blogs
router.get('/all', async(req, res) => {


    try{  
        const blogs = await Blog.find();
        res.send(blogs)
    }
    catch(exc){
        res.send(exc.message);
    }
})




// get specific blog
router.get('/explore/:id', async(req, res) => {

    try{  
        const blog = await Blog.findOne({_id : req.params.id})
        blog && res.send(blog);
    }
    catch(exc){
        res.send(exc.message);
    }
})








//  update blog
// router.put('/update/:id', async(req, res) => {

//     const blog = await Blog.findOne({_id : req.params.id});
//     try{ 
//         if ()

        

//     }
//     catch(exc){
//         res.send(exc.message);
//     }
// })





//  delete blog
router.delete('/delete/:id', async(req, res) => {

    try{ 
        const blog = await Blog.findOneAndDelete({_id : req.params.id});
        blog && res.send(blog);
    }
    catch(exc){
        res.send(exc.message);
    }

})



//  like blog
router.put('/like/:id', async(req, res) => {
    try{ 
        const blog = await Blog.findOne({_id : req.params.id});
        await blog.updateOne({ $inc: { likes: 1 } })
        res.send("Blog liked")
    }
    catch(exc){
        res.send(exc.message);
    }
})

//  dislike blog
router.put('/dislike/:id', async(req, res) => {
    try{ 
        const blog = await Blog.findOne({_id : req.params.id});
        await blog.updateOne({ $inc: { likes: -1 } })
        res.send("Blog Disliked")
    }
    catch(exc){
        res.send(exc.message);
    }
})





// fetch likes
router.get("/likevalue/:id", async(req,res) => {
    try{
        const blog = await Blog.findOne({_id : req.params.id});
        blog && res.json(blog.likes);
    }
    catch(exc){
        res.send(exc.message)
    }
})





module.exports = router;