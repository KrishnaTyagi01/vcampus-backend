const Event = require('../models/events');


exports.addEvent = (req, res) => {
    console.log(req.body);
    const {eventName, lastRegistrationDate,eventDetails,checkedValues,otherDetails} = req.body;
    const {namereq, phonereq,rollnoreq,emailreq,yearreq,sectionreq,deptreq} = checkedValues;

    if (!eventName || !lastRegistrationDate) {
        return res.json({ error: "Provide all the necessary Information" });
      }

    const event = new Event({eventName, lastRegistrationDate,eventDetails,namereq, phonereq,rollnoreq,emailreq,yearreq,sectionreq,deptreq,otherDetails})  
    event.save()
    .then(result => {
       
        res.json({event: result})
    })
    .catch(err =>  {
        
        res.json({ error: err })
    })
    
}


exports.getAllEvents = (req, res) => {
    Event.find()
    .exec((err, events) => {
        if(err || !events){
            return res.json({error: err})
        }

        
        return res.json(events);
    })
}


