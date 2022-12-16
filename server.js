const http=require("http")
const{getAllRiders}=require("./riderscontroller.js")
const port=3434

const app=http.createServer((req,res)=>{
   if(req.url==="/"){res.writeHead(200,{"content-type":"application/json"})
    res.end(JSON.stringify({"Message":"Thank you for visiting our page"}))
   }

else if(req.url==="./riders" && req.method ==="GET")
res.writeHead(200,{"content-type":"application/json"})
   getAllRiders(req,res)

}
)
app.listen(port,()=>{console.log("listening to port "+port)})