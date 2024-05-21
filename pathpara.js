// let express = require('express')
// let app = express()

// app.get ('/',(req,res)=>
// {
//     res.send('Adity')
// })


// app.get('/:r/:a',(req,res)=>
// {
//     let {r,a} = req.params
//     res.send(`${r} and ${a}`)

// })

// app.listen(4000,()=>
//     {
//         console.log('server run on 4000');
//     })
    
let express = require('express')
let app = express()                              // http://localhost:2000/cat/dog
app.get('/',(req,res)=>
{
    res.send('run')
})

app.get('/:r/:s',(req,res)=>
{
    let {r,s} = req.params
    res.send(`${r} and ${s}`)

})

app.listen(2000,()=>
{
console.log('server is ok 2000');
})