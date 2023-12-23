const {MongoClient, ObjectId} = require('mongodb')
const blogschema = require('../schema/blogschema')
const { isValidObjectId } = require('mongoose')
const homecontroller = (req, res)=>{
    blogschema.find({}).sort({"title": 1}).then((data)=>{
        res.json(data)
    }).catch((err)=>{
        res.json({error: err})
    })
    
}

const homeWithId = (req, res)=>{
    if(isValidObjectId(req.params.id)){
        console.log(req.params.id)
        blogschema.findById({"_id" : new ObjectId(req.params.id)}).then((data)=>{
            res.status(200).json(data)
        }).catch((err)=>{
            res.json({error: err})
        })
    }else{
        res.json({"res": "id is invalid"})
    }
   
}

const uploaditems = (req, res)=>{
    const {title, body} = req.body;

   blogschema.create({title, body}).then((data)=>{
    res.status(200).json(data)
   }).catch((err)=>{
    res.status(400).json(err)
   })
    
}

const deleteitem = (req, res)=>{
    blogschema.deleteOne({"_id": new ObjectId(req.params.id)}).then((data)=>{
        res.json(data)
    }).catch((err)=>{
        res.json({error: err})
    })
}

const updateItem = (req, res)=>{
    blogschema.updateOne({"_id": new ObjectId(req.params.id)}, {"title": "just updated"}).then((data)=>{
        res.json(data)
    }).catch((err)=>{
        res.json({error: err})
    })
}
module.exports = {homecontroller, homeWithId, uploaditems, deleteitem, updateItem}