const Event = require('../models/events');
const registrations = require('../models/registration');


exports.addEvent = (req, res) => {
    console.log(req.body);
    const {eventName, lastRegistrationDate,eventDetails,checkedValues,otherDetails, createdBy, college} = req.body;
    const {namereq, phonereq,rollnoreq,emailreq,yearreq,sectionreq,deptreq} = checkedValues;

    if (!eventName || !lastRegistrationDate) {
        return res.json({ error: "Provide all the necessary Information" });
      }

    const event = new Event({eventName,college, lastRegistrationDate,eventDetails,namereq, phonereq,rollnoreq,emailreq,yearreq,sectionreq,deptreq,otherDetails,createdBy})  
    event.save()
    .then(result => {
        console.log("result1", result)
        res.json({event: result})
    })
    .catch(err =>  {
        console.log("err", err)
        res.json({ error: err })
    })
    
}


exports.getAllEvents = (req, res) => {
    Event.find()
    .sort({updatedAt: '-1'})
    .exec((err, events) => {
        if(err || !events){
            return res.json({error: err})
        }

        
        return res.json(events);
    })
}




exports.deleteEvent = (req, res) =>{
    const {eventId} = req.body;
  
    registrations.deleteMany({event: eventId})
    .then((res)=> {
        console.log("reg delete: ", res)
    })
    .catch(err => console.log(err))

    Event.findById(eventId)
    .exec((err, event)=>{
      if(err || !event){
        return res.status(422).json({error: err})
      }
  
      event.remove((error, deletedEvent)=>{
        if(error){
          return res.status(400).json({error: error})
        }
  
        res.json({message: "Event deleted successfully"});
      })
      
    })
  }