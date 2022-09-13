const Event = require('../models/events');


exports.addEvent = (req, res) => {
    console.log(req.body);
    const {eventName, lastRegistrationDate,namereq, phonereq,rollnoreq,emailreq,yearreq,sectionreq,deptreq,otherDetails} = req.body;

    if (!eventName || !lastRegistrationDate) {
        return res.json({ error: "Provide all the necessary Information" });
      }

    const event = new Event({eventName, lastRegistrationDate,namereq, phonereq,rollnoreq,emailreq,yearreq,sectionreq,deptreq,otherDetails})  


    event.save()
    .then(result => {
        console.log("res: ", result)
        res.json({event: result})
    })
    .catch(err =>  {
        console.log("error:", err)
        res.json({ error: err })})
    
}
