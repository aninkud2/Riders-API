const {myriders}=require("./riderModule.js")
const getAllRiders=
async(req,res)=>{try
     {let driders=await myriders();
    res.writeHead(200,{"content-type":"application/json"})
    res.end(JSON.stringify(driders))
    
} catch (error) {res.end(JSON.stringify({"welcome":"message"}))
    
}}
   module.exports={getAllRiders} 
/*module.exports={getAllRiders}
//import the  student portal
const {db}=require ("./studentmodel");
// function to get all students from the db
const getallstudents = async (req,res)=>{
    try {let students=await db();
    res.writeHead(200,{"content-type":"application/json"})
    res.end(JSON.stringify(students));
   
} catch (error)
{res.end(JSON.stringify({"message":"welcome "}))
    
}}
//export all controllers
module.exports={getallstudents,}*/
