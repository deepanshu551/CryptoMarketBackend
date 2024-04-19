const mongoose=require('mongoose');
mongoose.connect(process.env.DATABASE).then(()=>{

    console.log("db connected")
}).catch((e)=>{

console.log("error in connecting to db",e)
})
