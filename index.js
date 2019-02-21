const express = require('express');
const server = express();
const httpServer = require('http').Server(server);
const io = require('socket.io')(httpServer);
const mysqlcon = require('./mysqlcon.js')();
server.use( express.static(__dirname));
const conn =mysqlcon.pool;
io.on("connection" , (socket) => {

    console.log("new client connected") ;
    conn.query('SELECT * FROM CHAT_HISTORY',(err,results,fields)=>{

        if(err) {
    
            console.log("oh there seems to be a problem with query."+err.stack );
        }
         
        socket.emit("msg-from-server",{msg : "Cloudservices Bot :hey welcome to DSG cloud services",prev : results})
    
    });
    
    


    socket.on('new-chat',(evt)=>{
        console.log(evt.time+" " +evt.user + ":"+ evt.chat );
        socket.broadcast.emit("chat-reply" , {msg : evt.time+" " +evt.user + ":"+ evt.chat})
        mysqlcon.addchat(evt,conn);

       
    });



})


server.get('/',(req,res)=>{

//console.log(err) ? err :"";

res.sendFile(`${__dirname}/game.html` );

})

httpServer.listen(process.env.port || '3030');



