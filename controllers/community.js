const Community = require('../models/community');

exports.createNew = (req, res) =>{
    const {communityName, purpose, description} = req.body;

    console.log("communityName: ", communityName)
    console.log("purpose: ", purpose)
    console.log("description: ", description)

    const com = new Community({communityName, purpose, description})

    com.save()
    .then(result => {
        
        res.json({community: result, comcreated: true})
    })
    .catch(err => {
        
        res.status(400).json({error: err, comcreated: false})
    })

}

exports.getAllCommunities = (req, res) => {

    Community.find({}, "communityName")
    .populate()
    .exec((err, com) => {
        if(err)
        {
            res.json({error: err});
            return;

        }
        console.log(com)
        res.json({communities: com})

    })

}


exports.isUnique = (req, res) => {
    const {comName} = req.params;

    Community.countDocuments({
        communityName: comName}, function (err, count){
            console.log("count: ", count) 
        if(count>0){
            //document exists });
            res.json({isValid: false})
        } else {
            res.json({isValid: true});
        }
    }); 



}