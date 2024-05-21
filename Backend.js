
const { log } = require('console')
let fs = require  ('fs')    // creat file

// fs.writeFileSync('fsd.txt','hello')



// fs.renameSync('fsd.txt','fsd7.js')  // rename file


// let data = fs.readFileSync('fsd8.txt')
// console.log(data.toString());



// fs.writeFileSync('fsd8.html','<h1> hello  new file <h/>',(err)=>       // html file creat in future fike err to show a message
// {
//     if(err) throw err
//         console.log('file create ho gyaa');
// })




 fs.readFile('fsd8.html',(err,data )=>
{
    if(err) throw err
    console.log(data.toString());
})                                                // read