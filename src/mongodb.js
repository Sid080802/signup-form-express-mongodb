const mongoose = require('mongoose')
require('dotenv').config({ path: '../.env' });


mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log('mongodb connected');
})
.catch(()=>{
    console.log('Failed to connect');
    
})

const signupSchema = new mongoose.Schema({
    username: {
        type: String,
        required:true,  
      },
      email: {
        type: String,
        required:true,  
      },
      password: {
        type: String,
        required:true,
      },
      confirmPassword: {
        type: String,
        required:true,
      },

})

const collection = new mongoose.model("Collection1", signupSchema)

module.exports=collection




