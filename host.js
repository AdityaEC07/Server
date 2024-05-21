// let express = require('express')
// let app = express()
// app.use((req,res)=>
// {

//     res.send('hello Aditya')
// })
// app.listen(4000,()=>
// {
//     console.log('server run on 4000');
// })


let express = require('express')
let app = express()
app.use((req,res)=>
{
    res.send('hogya h host')
})
app.listen(2000,()=>
{
    console.log("server run 2000");
})