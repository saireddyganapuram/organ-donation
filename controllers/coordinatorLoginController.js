const express = require('express')
const coordinatorModel = require('../models/coordinatorModel')

const cologin = async (req, res) => {
    const { coordinatorId, password } = req.body

    const coordinator = await coordinatorModel.findOne({ coordinatorId})
    if(coordinator) {
        res.redirect("/coordinators/services")
    }

}

module.exports = cologin