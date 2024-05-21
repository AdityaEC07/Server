// console.log("hiii");

// let joke = require ('give-me-a-joke')
                                              // joke
// console.log (joke,"hiiiiii");

// joke.getRandomDadJoke((joke)=>{
//     console.log(joke);


// })

// let http = require('http')
// // console.log(http,"yaad nhi aana ");
// let server = http.createServer((req,res)=>{
//     console.log('hii');
//     res.end('hello!!!')
// })

// server.listen(9000,()=>
// {
//     console.log('server runing ok  9000');
// })


// let http = require('http')
// console.log(http,"run ho gya");
// let server = http.createServer((req,res)=>
// {
//     console.log('good');
//     res.end('rame is good gy')
// })
// server.listen(1000,()=>
// {
// console.log('Server runing ok 1000');
// })



// let express = require('express')
// let app = express()

// app.set ('view engine','ejs')
// app.use(express.static('public'))

// app.get('/random',(req,res)=>
// {
//     let a =  Math.floor(Math.random()*100)
//     // let a = Math.random()*100
//     res.render('random',{a},)
// })



// app.get('/random',(req,res)=>{

// let arr =['hello','hii','good!!']
   
//         let a =  Math.floor(Math.random()*100)
//         // let a = Math.random()*100
//         res.render('random',{arr,a})
//     })
    
//     app.listen(4000,()=>
//         {
//             console.log('server run on 4000');
//         })

//         let arr = ["a","b","a","a","b","a","a"]
        
//  app.get('/a/:b',(req,res)=>
//  {
//      let {ab}=  require.
//           // let a = Math.random()*100
//      res.render('random',{a},)
//  })

// let express = require('express')
// let app = express()

// app.set ('view engine','ejs')

// app.use(express.static('public'))

// app.get('/',(req,res)=>{

//     //    let a = Math.random()*100
//     res.render('index ')
// })
        
//         app.listen(8000,()=>
//             {
//                 console.log('server run on 8000');
//             })











// let express=   require('express')
//  let app=   express()
//  app.use(express.urlencoded({extended:true}))
//  app.use(express.json)
 
// let arr=['hello ','hiii','byee!!']
//  app.set('view engine', 'ejs')
// app.use(express.static('public'))
//  app.get('/',(req,res)=>{
//   res.render('index')

//  })
//  app.get('/random',(req,res)=>{
//   let a=   Math.floor( Math.random()*100)
//   res.render('random', {arr})

//  })

//   app.get('/user',(req,res)=>{
//     console.log(req.query,"heheh");
//     let {name,email,password}=req.query
//     res.send(`${name}  ${email},  ${password}`)
//     res.send('hii')

//   })

//   app.post('/user',(req,res)=>{
//     console.log(req.body,"rrrr");
//     res.send('formmmm!!!!')

//   })

//  app.listen(8000,()=>{
//   console.log("server runnning 8000");

//  })


 



       
//  let express=   require('express')
//  let app=   express()
//  app.use(express.urlencoded({extended:true}))
//  app.use(express.json)

// let arr=['hello ','hiii','byee!!']
//  app.set('view engine', 'ejs')
// app.use(express.static('public'))

//  app.get('/',(req,res)=>{
//   res.render('index')

//  })
//  app.get('/random',(req,res)=>{
//   let a=   Math.floor( Math.random()*100)
//   res.render('random', {arr})

//  })

//   app.get('/user',(req,res)=>{
//     console.log(req.query,"heheh");
//     let {name,email,password}=req.query
//     res.send(`${name}  ${email},  ${password}`)
//     res.send('hello')

//   })

//   app.post('/user',(req,res)=>{
//     console.log(req.body,"rrrr");
//     res.send('formmmm!!!!')

//   })




//   app.get('/blog/:id',(req,res)=>
//     {
//       let {id}= req.params
//       console.log(id,"hello id");
//     })


//  app.listen(8000,()=>{
//   console.log('local host 8000');

//  })






// Restful API :-)  
  
const express = require('express');  
const app = express();  
  
app.set("view engine", "ejs");  
app.use(express.urlencoded({ extended: true }));  
  
  
let comments = [  
    {  
        id:0,  
        username:"Sam",  
        comment:"chitkara is a nice university 0"  
    },  
    {  
        id:1,  
        username:"g2",  
        comment:"chitkara is a nice university 1"  
    },  
    {  
        id:2,  
        username:"vohra",  
        comment:"chitkara is a nice university 2"  
    }  
  ]  
  
app.get('/', (req, res) => {  
  res.send('Hello');  
});  
  
app.get('/blogs', (req, res) => {  
  res.render('index', {comments});  
});  
  
app.get('/blogs/new', (req, res) => {  
  res.render('new');  
});  
  
app.post('/blogs', (req, res) => {  
    console.log(req.body, "Hiiiii");  
    let{username, comment} = req.body;  
    comments.push({id:comments.length, username, comment});  
    res.redirect('/blogs');  
    // res.send("Send");  
});1  
  

app.listen(4000,()=>{
    console.log('local host 4000');
  


})





// let express=  require('express')
// let methodOverride = require('method-override');
// let app=  express()
// app.use(methodOverride('_method'));
//  app.use(express.urlencoded({ extended: true }));
// let comments = [
//   {
//       id:0,
//       username:"Sam",
//       comment:"chitkara is a nice university 0"
//   },
//   {
//       id:1,
//       username:"g2",
//       comment:"chitkara is a nice university 1"
//   },
//   {
//       id:2,
//       username:"vohra",
//       comment:"chitkara is a nice university 2"
//   }
// ]

// app.set('view engine','ejs')

// app.get('/blog',(req,res)=>{
//   res.render('index',{comments})

// })

// app.get('/blog/new',(req,res)=>{
//   res.render('new')

// })

// app.post('/blog',(req,res)=>{
//   console.log(req.body,"heheh");
//   let {username,comment}=req.body
//   comments.push({username,comment,id:comments.length})
//   res.redirect('/blog')

//   // res.send('sendddd')


// })

// app.get('/blog/:id',(req,res)=>{
//   let {id}=req.params
// console.log(id,"ididid");

//    let data=  comments.find((data)=>{return data.id==id})
//    console.log(data,"dagta");
//    res.render('edit',{data})


// })


// app.patch('/blog/:id',(req,res)=>{
//   let {id}=req.params
//   console.log(id,'eje');
//   let {username,comment}=req.body

//   let data=  comments.find((data)=>{return data.id==id})
//   console.log(data,"datata");

//   data.comment=comment
//   data.username=username
//   res.redirect('/blog')

// })

// app.listen(5000,()=>{
//   console.log('server ....')

// })

       



