//quary parameter backend data serch and data output  aferr ? in include in quarrey parameter with the help of serch in data base 


let express = require('express')
let app = express()

app.get ('/serch',(req,res)=>
{
    console.log("hero");
    console.log(req.query);

    let {firstName,LastName}= req.query
    res.send(`${firstName} ${LastName} `)
})

                                                           //http://localhost:4000/serch?firstName=Aditya&LastName=kumar


app.listen(4000,()=>
    {
        console.log('server run on 4000');
    })
    

