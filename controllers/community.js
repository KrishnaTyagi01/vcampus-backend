const Community = require('../models/community');

exports.createNew = (req, res) =>{
    const {communityName, purpose, description} = req.body;

    console.log("communityName: ", communityName)
    console.log("purpose: ", purpose)
    console.log("description: ", description)

    const com = new Community({communityName, purpose, description})

    com.save()
    .then(result => {
        
        res.json({community: result})
    })
    .catch(err => {
        
        res.status(400).json({error: err})
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