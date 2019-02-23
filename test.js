

var chai = require('chai')
expect = chai.expect;
var sqlcon = require('./mysqlcon');
var connection = require('mysql');
var assert = chai.assert;
function isEven(n) {

    return n%2===0;
}

chai.should();

describe('webchat test',function(){

it('should be true',function(){

    isEven(16).should.be.true
})


it('should return a database connection pool ',(done)=> {


expect(sqlcon()).to.have.keys( ["addchat","pool"]);
done();
 
})

it('connection should work ',(done)=> {

var conn = sqlcon();
    conn.pool.query('SELECT * FROM CHAT_HISTORY',(err,res,fields)=>{

        assert.isNull(err);
        conn.pool.end();
        done();
    })
   
     
    })

})





