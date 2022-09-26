const registrations = require('../models/registration');

exports.register = (req, res) => {
    const { event,username, name, email,phone, roll, year, section,dept, otherDetails } = req.body;

    console.log(event,username, name, email,phone, roll, year, section,dept, otherDetails)

    const register = new registrations({event,username, name, email,phone, roll, year, section,dept, otherDetails})

    register.save()
    .then(result => {
        console.log("result:", result);
        res.json(result)
    })
    .catch(err => {
        console.log("error:", err);
        res.json({error: err})
    })


    // res.send("ok")
}