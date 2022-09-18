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
    const email = "tyagikrishna38@gmail.com";

    users.updateOne({email:email}, {$set: {college: 'ITUS'}}, function(err, user){
        if(err){
            console.log(err);
            res.json(err);
        }
        res.json(user);
    })
    
    
}