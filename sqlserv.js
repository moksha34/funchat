

module.exports = async function mysqldb(){
    try{
        var connPool
    
    const mysql =require('mssql');
    const options=require('./msdbinfo.js');
    
    
    
     connpool = await mysql.ConnectionPool(options).connect();
    
    const request = connpool.request();
    
    /***********adding chat to the db **************/
    const addchat = (chatrow,connection)=> {
        connection.query('INSERT INTO CHAT_HISTORY SET ?',chatrow,(err,results,fields)=>{
    
            if(err) {
        
                console.log("oh there seems to be a problem with inserts.."+err.stack );
            }});
        };
        /***********fetching chat to the db **************/
    
    
    return {
        pool: request,
        addchat:addchat,
        
    
    }
    
    
    }catch(err){
    return {
        "error": err
    }
    
    }
    
    
    };
    