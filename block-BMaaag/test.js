/* use mountains;
db.createColletion()


> use mountains;
switched to db mountains
> db.createCollection("himalayas");
{ "ok" : 1 }
> db.himalayas.insert({name: 'Dhauldhar range', height: '4000 mtrs'});
WriteResult({ "nInserted" : 1 })
> db.himalayas.([])
uncaught exception: SyntaxError: missing name after . operator :
@(shell):1:13
> db.himalayas.([ { item: "card", qty: 15 },])
uncaught exception: SyntaxError: missing name after . operator :
@(shell):1:13
>       { item: "envelope", qty: 20 },
... db.himalayas.insertMany([ { item: "card", qty: 15 },]);
uncaught exception: SyntaxError: unexpected token: ':' :
@(shell):1:23
> db.himalayas.insertMany([ { item: "card", qty: 15 },])
{
	"acknowledged" : true,
	"insertedIds" : [
		ObjectId("623709046167af3e3f4dc98f")
	]
}
>       { item: "envelope", qty: 20 },
... db.himalayas.insertMany([ { item: "card", qty: 15 },])
uncaught exception: SyntaxError: unexpected token: ':' :
@(shell):1:23
> db.himalayas.insertMany([{name:"suraj"},{age:21},{email:"smmmane"}]);
{
	"acknowledged" : true,
	"insertedIds" : [
		ObjectId("623709526167af3e3f4dc990"),
		ObjectId("623709526167af3e3f4dc991"),
		ObjectId("623709526167af3e3f4dc992")
	]
}
> db.himalayas.find();
{ "_id" : ObjectId("623707af6167af3e3f4dc98e"), "name" : "Dhauldhar range", "height" : "4000 mtrs" }
{ "_id" : ObjectId("623709046167af3e3f4dc98f"), "item" : "card", "qty" : 15 }
{ "_id" : ObjectId("623709526167af3e3f4dc990"), "name" : "suraj" }
{ "_id" : ObjectId("623709526167af3e3f4dc991"), "age" : 21 }
{ "_id" : ObjectId("623709526167af3e3f4dc992"), "email" : "smmmane" }
> db.himalayas.find({age: 21});
{ "_id" : ObjectId("623709526167af3e3f4dc991"), "age" : 21 }
> 



*/