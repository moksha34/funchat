module.exports = function mysqldb(){
try{
    var connPool

const mysql =require('mysql');
const options=require('./dbinfo.js');



 connPool = mysql.createPool(options);




/***********adding chat to the db **************/
const addchat = (chatrow,connection)=> {
    connection.query('INSERT INTO CHAT_HISTORY SET ?',chatrow,(err,results,fields)=>{

        if(err) {
    
            console.log("oh there seems to be a problem with inserts.."+err.stack );
        }});
    };
    /***********fetching chat to the db **************/


return {
    pool: connPool,
    addchat:addchat,
    

}


}catch(err){
return {
    "error": err
}

}


};

