const users = require('../models/users');


exports.getUser = (req, res) => {
const email = "tyagikrishna38@gmail.com";
console.log("reached here");

users.find({email: email})
.exec((err, users) => {
    if(err || !users)
    {
        console.log("error: ",err)
        return err
    }

    console.log("users",users);
    res.json(users); 
})
}

exports.updateUser = (req, res) => {
    const { name, email,image,phone,college,roll} = req.body;
    console.log(email,name,image,college,roll, phone)


    users.updateOne({email:email}, {$set: {college: college, name:name, image:image, roll:roll, phone:phone}}, function(err, user){
        if(err){
            console.log(err);
            res.json(err);
        }
        res.json(user);
    })
    
    
}