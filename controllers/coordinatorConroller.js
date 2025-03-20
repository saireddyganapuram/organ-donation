const coordinatorModel = require('../models/coordinatorModel')

const coregister = async (req, res) => {
    const { coordinatorId , password } = req.body

    const newCoordinator = new coordinatorModel({
        coordinatorId,
        password
    })

    await newCoordinator.save()
    res.send("success")
}

module.exports = coregister 
