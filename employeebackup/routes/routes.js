const express = require('express')
const router = express.Router()
const signUpTemplateCopy = require('../models/SignUpModel')
const Subscriptions = require('../models/Subscriptions')

router.post('/signup',(request,response) => {
    const signedUpUser = new signUpTemplateCopy({
        fullName:request.body.fullName,
        username:request.body.username,
        email:request.body.email,
        password:request.body.password
    })
    signedUpUser.save()
    .then( data => {
        response.json(data)
    })
    .catch( error => {
        response.json(error)
    })
})

router.get("/users", async (request, response) => {
	const users = await signUpTemplateCopy.find()
	response.send(users)
})
router.get("/subscriptions", async (request, response) => {
	const subscriptions = await Subscriptions.find()
	response.send(subscriptions)
})



module.exports = router