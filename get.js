let express = require('express')
let app = express ()



app.get('/mobile',(req,res)=>
{
    res.send('Mobile is device it can perform multitasjing function')
})


app.get('/laptop',(req,res)=>
{
    res.send('There are various type of laptop present on india')
})

app.get('/room',(req,res)=>
    {
        res.send('room is close area in home ')
    })


app.listen(5050,()=>
{
    console.log('server on 5050');
})

