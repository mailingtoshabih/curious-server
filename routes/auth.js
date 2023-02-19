const router = require('express').Router();
const User = require('../model/User')
const bcrypt = require('bcrypt')




// login
router.post('/login', async(req, res) => {

    try{ 
        const user = await User.findOne({email : req.body.email}); 

        if (user){
            const authenticated = await bcrypt.compare(req.body.password, user.password);
            if (authenticated) res.send(user);
            else res.send(false);
        }
        else{
            res.send("User not found...")
        }

    }
    catch(exc){
        res.send(exc.message);
    }

})


module.exports = router;