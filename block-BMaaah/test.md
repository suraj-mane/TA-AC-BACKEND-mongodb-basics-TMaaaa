use blogtest
> use blog
switched to db blog
> show collections
articles
> db.articles.insertMany([{title:"laptop",date:21-08-1998,details:"used for codeing",author:{name:"suraj",email:"smm@",age:21},tag:["js","java"]},{title:"phone",date:21-10-1990,details:"used for codeing",author:{name:"sun",email:"smm@",age:21},tag:["js","java","css"]}, {title:"computer",date:01-08-1980,details:"used for office",author:{name:"sandeep",email:"smm@mane",age:24},tag:["js","java","html"]} ]);
{
	"acknowledged" : true,
	"insertedIds" : [
		ObjectId("623722b2c164a2817a4f36ce"),
		ObjectId("623722b2c164a2817a4f36cf"),
		ObjectId("623722b2c164a2817a4f36d0")
	]
}
> db.articles.find();
{ "_id" : ObjectId("623722b2c164a2817a4f36ce"), "title" : "laptop", "date" : -1985, "details" : "used for codeing", "author" : { "name" : "suraj", "email" : "smm@", "age" : 21 }, "tag" : [ "js", "java" ] }
{ "_id" : ObjectId("623722b2c164a2817a4f36cf"), "title" : "phone", "date" : -1979, "details" : "used for codeing", "author" : { "name" : "sun", "email" : "smm@", "age" : 21 }, "tag" : [ "js", "java", "css" ] }
{ "_id" : ObjectId("623722b2c164a2817a4f36d0"), "title" : "computer", "date" : -1987, "details" : "used for office", "author" : { "name" : "sandeep", "email" : "smm@mane", "age" : 24 }, "tag" : [ "js", "java", "html" ] }
> db.articles.find({id});
uncaught exception: ReferenceError: id is not defined :
@(shell):1:19
> db.articles.find({_id});
uncaught exception: ReferenceError: _id is not defined :
@(shell):1:19
> db.articles.find({_id : ObjectId("623722b2c164a2817a4f36ce")});
{ "_id" : ObjectId("623722b2c164a2817a4f36ce"), "title" : "laptop", "date" : -1985, "details" : "used for codeing", "author" : { "name" : "suraj", "email" : "smm@", "age" : 21 }, "tag" : [ "js", "java" ] }
> db.articles.find({title: "phone"});
{ "_id" : ObjectId("623722b2c164a2817a4f36cf"), "title" : "phone", "date" : -1979, "details" : "used for codeing", "author" : { "name" : "sun", "email" : "smm@", "age" : 21 }, "tag" : [ "js", "java", "css" ] }
> db.articles.find({author:{name:"sun"}});
> db.articles.find({author:{name:"sun"}});
> db.articles.find({author:{name:"snadeep"}});
> db.articles.find({author:{name:"sandeep"}});
> db.articles.find({tag:["js"]});
> db.articles.update({_id : ObjectId("623722b2c164a2817a4f36ce")},{title:"game laptop"});
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> db.articles.update({title:"phone"},{author:{name:"moon"}});
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> db.articles.update({title: "game laptop"},{$set:{date:1999}});
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> db.articles.update({title: "phone"},{date:1999});
WriteResult({ "nMatched" : 0, "nUpserted" : 0, "nModified" : 0 })
> db.articles.find({title:"phone"});
> db.articles.find();
{ "_id" : ObjectId("623722b2c164a2817a4f36ce"), "title" : "game laptop", "date" : 1999 }
{ "_id" : ObjectId("623722b2c164a2817a4f36cf"), "author" : { "name" : "moon" } }
{ "_id" : ObjectId("623722b2c164a2817a4f36d0"), "title" : "computer", "date" : -1987, "details" : "used for office", "author" : { "name" : "sandeep", "email" : "smm@mane", "age" : 24 }, "tag" : [ "js", "java", "html" ] }
> db.articles.update({title: "computer"},{$inc:{author:age:5}});
uncaught exception: SyntaxError: missing } after property list :
@(shell):1:56
> db.articles.update({title: "computer"},{$inc:{author:{age:5}}});
WriteResult({
	"nMatched" : 0,
	"nUpserted" : 0,
	"nModified" : 0,
	"writeError" : {
		"code" : 14,
		"errmsg" : "Cannot increment with non-numeric argument: {author: { age: 5.0 }}"
	}
})
> db.aeticles.remove(_id : ObjectId("623722b2c164a2817a4f36cf"));
uncaught exception: SyntaxError: missing ) after argument list :
@(shell):1:23
> db.articles.remove(_id : ObjectId("623722b2c164a2817a4f36cf"));
uncaught exception: SyntaxError: missing ) after argument list :
@(shell):1:23
> db.articles.remove();
uncaught exception: Error: remove needs a query :
DBCollection.prototype._parseRemove@src/mongo/shell/collection.js:364:15
DBCollection.prototype.remove@src/mongo/shell/collection.js:394:18
@(shell):1:1
> db.articles.remove(title:"computer");
uncaught exception: SyntaxError: missing ) after argument list :
@(shell):1:24
> db.articles.remove({_id : ObjectId("623722b2c164a2817a4f36cf")});
WriteResult({ "nRemoved" : 1 })
> 

