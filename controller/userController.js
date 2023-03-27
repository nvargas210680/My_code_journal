import User from ("../models/User")


const index = (req, res, next)=>{
    User.find()
    .then(response =>{
        res.json({
            response
        })
    })
    .catch(erros =>{
        res.json({
            message: "An error Occured!"
        })
    })
}

const show = (req, res, next)=>{
    let userID = req.body.userID 
    User.findById(userID)
    .then(response => {
        res.json({

        })
    })
    .catch(error =>{
         res.json({
             message: "An error Ocurred!"

         })
    })
}


const store = (req, res, next) => {
    let user = new User({
        name: req.body.name,
        email: req,body,email,
        password: req,body,password,
        journalName: req,body,journalName,
        file: req,body,file
    })
    User.save()
    .then(response => {
        res.json({
            message: "Journal added successfully!"
        })
    })
    .catch(error=>{
       res.json({
        message: "An error Ocurred!"
       }) 
    })
}

const update = (req, res, next)=>{
    let userID = req.body.userID

    let updatedData = {
        name: req.body.name,
        email: req,body,email,
        password: req,body,password,
        journalName: req,body,journalName,
        file: req,body,file
    }

    User.findByIdAndUpdate(userID, {$set: updatedData})
    .then(()=>{
        res.json({
            massage: "Journal updated successfully!"
        })
    })
    .catch(error=>{
        res.json({
           message: "An error Occurred!"
        })
    })
}


const destroy = (req,res, next)=>{
    let userID = req.body.userID 
    User.findByIdAndRemove(userID)
    .then(()=>{
        req.json({
            message: "User deleted successfully!"
        })
    })
    .catch(error =>{
        req.json({
            message: "An error Occurred"
        })
    })

    
}

module.exports = {
    index, show, store, update, destroy
}

