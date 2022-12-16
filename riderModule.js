//import the module
const riders =require("./riderdb.json");
const myriders=(error,data)=>{if (error){
    console.log("Unable to load the riders database")
}
else{return riders }}
myriders();
module.exports={myriders}
