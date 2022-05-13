const express = require("express")
const Todos = require("../Modals/TodosModal");

const router = express.Router()

router.post("",async(req,res) => {
    try {
        console.log(req.body)
        const data = await Todos.create(req.body)
        return res.send(data)
    } catch (error) {
       return res.send(500).send({message: error.message})
    }
})



router.get("", async (req, res) => {
    try {
      const data = await Todos.find().lean().exec();
      console.log(data)
      return res.send(data)
    } catch (error) {
      return res.send(error);
    }
  });

module.exports= router