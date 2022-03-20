> use sports
switched to db sports
> dp
uncaught exception: ReferenceError: dp is not defined :
@(shell):1:1
> dp
uncaught exception: ReferenceError: dp is not defined :
@(shell):1:1
> db
sports
> show db
uncaught exception: Error: don't know how to show [db] :
shellHelper.show@src/mongo/shell/utils.js:1211:11
shellHelper@src/mongo/shell/utils.js:838:15
@(shellhelp2):1:1
> show dps
uncaught exception: Error: don't know how to show [dps] :
shellHelper.show@src/mongo/shell/utils.js:1211:11
shellHelper@src/mongo/shell/utils.js:838:15
@(shellhelp2):1:1
> show dbs
admin   0.000GB
config  0.000GB
local   0.000GB
> db.createCollection("cricket");
{ "ok" : 1 }
> db.createCollection("football");
{ "ok" : 1 }
> db.createCollection("TT");
{ "ok" : 1 }
> db.cricket.insert({name:"dhoni",age:21,email:"smmane1100",bid_price:20});
WriteResult({ "nInserted" : 1 })
> db.cricket.find();
{ "_id" : ObjectId("6236c9d6f5dccfcae71ba46b"), "name" : "dhoni", "age" : 21, "email" : "smmane1100", "bid_price" : 20 }
> db.football.insert({name:"sun",age:22,email:mmmm@,bid_price:30});
uncaught exception: SyntaxError: illegal character :
@(shell):1:48
> db.football.insert({name:"sun",age:22,email:"mmmm@",bid_price:30});
WriteResult({ "nInserted" : 1 })
> db.TT.insert({name:"suraj",age:21,email:"name",bid_price:30});
WriteResult({ "nInserted" : 1 })
> show collections
TT
cricket
football
> db.TT.renameCollection("tennis");
{ "ok" : 1 }
> db.createCollection("khokho", { capped : true, size : 5242880, max : 3 } );
{ "ok" : 1 }
> db.khokho.insert({name:"suraj"});
WriteResult({ "nInserted" : 1 })
> db.khokho.insert({name:"suraj"});
WriteResult({ "nInserted" : 1 })
> db.khokho.insert({name:"suraj"});
WriteResult({ "nInserted" : 1 })
> db.khokho.insert({name:"suraj"});
WriteResult({ "nInserted" : 1 })
> db.khokho.insert({name:"suraj"});
WriteResult({ "nInserted" : 1 })
> db.khokho.insert({name:"suraj"});
WriteResult({ "nInserted" : 1 })
> db.khokho.insert({name:"suraj"});
WriteResult({ "nInserted" : 1 })
> db.khokho.insert({name:"suraj"});
WriteResult({ "nInserted" : 1 })
> db.khokho.insert({name:"suraj"});
WriteResult({ "nInserted" : 1 })
> db.khokho.insert({name:"suraj"});
WriteResult({ "nInserted" : 1 })
> db.khokho.isCapped()
true
> db.football.drop();
true
> db.cricket.drop();
true
> db.dropDatabase();
{ "ok" : 1 }
> show dbs
admin   0.000GB
config  0.000GB
local   0.000GB
> 