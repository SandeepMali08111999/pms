const mongoose=require('mongoose')
const mongoosePaginate = require('mongoose-paginate');
mongoose.connect('mongodb://localhost:27017/pms',{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    console.log('connect Sucessfully')
}).catch((err)=>{
    console.log('something went wrong',err)
})


const passSchema=new mongoose.Schema({
  
    password_category:{
        type:String,
        require:true,
        
    },
     
   project_Name:{
        type:String,
        require:true,

    },
    
    password_detail:{
        type:String,
        require:true,
    },
    date:{
        type:Date,
        default:Date.now
    }
})
passSchema.plugin(mongoosePaginate );
const passModel=mongoose.model('password_details',passSchema)

module.exports=passModel;