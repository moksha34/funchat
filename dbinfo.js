const dboptions = {
 
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DB,
        host: process.env.HOSTIP,
        connectionLimit: 10
        
        }


module.exports=dboptions;
