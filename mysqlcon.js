module.exports = function mysqldb(){

const mysql =require('mysql');
const options=require('./dbinfo.js');



const connection = mysql.createConnection(options);

connection.connect(err => {

if(err) {

    console.log(err.stack)
} 

console.log("db connected");

});


/***********adding chat to the db **************/
const addchat = (chatrow,connection)=> {
    connection.query('INSERT INTO CHAT_HISTORY SET ?',chatrow,(err,results,fields)=>{

        if(err) {
    
            console.log("oh there seems to be a problem with inserts.."+err.stack );
        }});
    };
    /***********fetching chat to the db **************/
const getAllChat =(connection)=>{
   connection.query('SELECT * FROM CHAT_HISTORY',(err,results,fields)=>{

        if(err) {
    
            console.log("oh there seems to be a problem with query."+err.stack );
        }

        for(var i in results) {
            console.log(results[i].time+" "+results[i].user +":"+results[i].chat);
        }
        
     return results;
    
    });


};

return {
    pool: connection,
    addchat:addchat,
    getAllChat:getAllChat

}


};



