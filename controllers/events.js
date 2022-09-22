const Event = require('../models/events');


exports.addEvent = (req, res) => {
    console.log(req.body);
    const {eventName, lastRegistrationDate,eventDetails,checkedValues,otherDetails} = req.body;
    const {namereq, phonereq,rollnoreq,emailreq,yearreq,sectionreq,deptreq} = checkedValues;
    
    console.log(eventName, lastRegistrationDate,eventDetails,checkedValues,otherDetails);

    if (!eventName || !lastRegistrationDate) {
        return res.json({ error: "Provide all the necessary Information" });
      }

    const event = new Event({eventName, lastRegistrationDate,eventDetails,namereq, phonereq,rollnoreq,emailreq,yearreq,sectionreq,deptreq,otherDetails})  


    event.save()
    .then(result => {
        console.log("res: ", result)
        res.json({event: result})
    })
    .catch(err =>  {
        console.log("error:", err)
        res.json({ error: err })
    })
    
}


exports.getAllEvents = (req, res) => {
    Event.find()
    .exec((err, events) => {
        if(err || !events){
            return res.json({error: err})
        }

        console.log("Events: ", events);
        return res.json({events: events})
    })
}