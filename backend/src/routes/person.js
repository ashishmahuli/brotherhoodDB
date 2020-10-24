let express = require("express")

let router = express.Router()

//localhost:3000/person?name=ashish&age=20
router.get('/person', (req,res) =>{ 
    if(req.query.name) {
        res.send("you have requested " + req.query.name)
    }
    else{
        res.send("you have requested a person")
    }
})  

//localhost:3000/person/ashish
router.get('/person/:name', (req,res) =>{ 
    res.send("you have requested " + req.params.name)
    }   
)

router.get("/error", (req, res) => {
    throw new Error("This is a forced error")
})






module.exports = router