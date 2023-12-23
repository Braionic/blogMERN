const mongoose = require('mongoose')
const express = require('express')
const app = express()
const router = express.Router()
const blogmodel = require('./schema/blogschema')
const {homecontroller, homeWithId, uploaditems, deleteitem, updateItem} = require('./controllers/controllers')




router.get('/', homecontroller)

router.get('/:id', homeWithId)

router.post('/', uploaditems)

router.delete('/:id', deleteitem)

router.patch('/:id', updateItem)

module.exports = router

// this try catch block also works
/*

try {
        const blog = await blogmodel.create({title: 1, body: "body bang is all that matters to west coast"})
        res.json(blog)
    } catch (err) {
        res.status(400).json(err)
   }

   */