const express = require('express');




const server = express();
server.use( express.static(__dirname));

server.get('/',(req,res)=>{

//console.log(err) ? err :"";

res.sendFile(`${__dirname}\\game.html` );

})

server.listen(process.env.port || '3030',() => {console.log(`express started listening on port 3030`) } )
