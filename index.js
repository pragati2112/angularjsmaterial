const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname+'/'));
Morgan((dev));
app.get('/routeone', (req,res)=>
{
   res.sendFile(__dirname + '/index.html');
})

app.get('/routetwo', (req,res)=>
{
   res.sendFile(__dirname + '/index02.html');
})

app.get('/*', (req,res)=>
{
   res.sendFile(__dirname + '/index03.html');
})

app.listen(4100, ()=>{console.log("server is listening on port 4100")});