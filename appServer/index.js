// this is the server that the app runs from 
/* import the modules, use commonjs since only node 12 supports 
ESM and then only behind an --experimental-modules flag */



const express = require('express')

const path = require('path');

const app = express();

app.get('/', (req,res)=>{

res.end('hello world')
}
)
app.listen(3000, ()=>console.log("server running..."))