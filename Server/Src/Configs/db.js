const mongoose = require("mongoose");

module.exports = () => {
return mongoose.connect("mongodb+srv://pranav:pranav123@cluster0.gvulk.mongodb.net/TodosData?retryWrites=true&w=majority");
};