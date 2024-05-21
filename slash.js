let express = require('express')
let app = express()

app.get ('/',(req,res)=>
{
    res.send('Adity')
})

app.get('/cat',(req,res)=>
    {
        res.send('cat')
    })

    app.get('*',(req,res)=>
        {
            res.send('asol,o,o,o')
        })
    ''
app.listen(4000,()=>
{
    console.log('server run on 4000');
})


