suraj:~$ mongoimport --host <host_name> --username <user_name> --password <password> --db
bash: host_name: No such file or directory
suraj:~$ DB_NAME --collection COLLECTION_NAME --file cities.json(file location) --jsonArray
bash: syntax error near unexpected token `('
suraj:~$ mongoimport --jsonArray  --db user --collection usersDetial --file /home/suraj/Desktop/generated.json
2022-03-20T20:52:52.473+0530	connected to: mongodb://localhost/
2022-03-20T20:52:52.503+0530	30 document(s) imported successfully. 0 document(s) failed to import.
suraj:~$ mongo
MongoDB shell version v5.0.6
connecting to: mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb
Implicit session: session { "id" : UUID("63a09dd0-8735-467a-9bc2-52b10f6754c7") }
MongoDB server version: 5.0.6
================
Warning: the "mongo" shell has been superseded by "mongosh",
which delivers improved usability and compatibility.The "mongo" shell has been deprecated and will be removed in
an upcoming release.
For installation instructions, see
https://docs.mongodb.com/mongodb-shell/install/
================
---
The server generated these startup warnings when booting: 
        2022-03-20T11:30:42.450+05:30: Using the XFS filesystem is strongly recommended with the WiredTiger storage engine. See http://dochub.mongodb.org/core/prodnotes-filesystem
        2022-03-20T11:30:43.099+05:30: Access control is not enabled for the database. Read and write access to data and configuration is unrestricted
---
---
        Enable MongoDB's free cloud-based monitoring service, which will then receive and display
        metrics about your deployment (disk utilization, CPU, operation statistics, etc).

        The monitoring data will be available on a MongoDB website with a unique URL accessible to you
        and anyone you share the URL with. MongoDB may use this information to make product
        improvements and to suggest MongoDB products and deployment options to you.

        To enable free monitoring, run the following command: db.enableFreeMonitoring()
        To permanently disable this reminder, run the following command: db.disableFreeMonitoring()
---
> show dbs
admin      0.000GB
blog       0.000GB
config     0.000GB
local      0.000GB
mountains  0.000GB
user       0.000GB
users      0.000GB
> use users
switched to db users
> use user
switched to db user
> show collection
uncaught exception: Error: don't know how to show [collection] :
shellHelper.show@src/mongo/shell/utils.js:1211:11
shellHelper@src/mongo/shell/utils.js:838:15
@(shellhelp2):1:1
> show collections
usersDetial
> db.usersDetial.find().pretty();
{
	"_id" : "62373263a4f09648d355d355",
	"age" : 37,
	"name" : "Montoya Foster",
	"gender" : "male",
	"company" : "RETRACK",
	"email" : "montoyafoster@retrack.com",
	"phone" : "+1 (892) 484-2292",
	"tags" : [
		"pariatur",
		"magna"
	]
}
{
	"_id" : "62373263af1d431473f18ad4",
	"age" : 25,
	"name" : "Cooper Hoffman",
	"gender" : "male",
	"company" : "AQUACINE",
	"email" : "cooperhoffman@aquacine.com",
	"phone" : "+1 (905) 582-3929",
	"tags" : [
		"eu",
		"commodo"
	]
}
{
	"_id" : "62373263ce0c1dd31bd1b077",
	"age" : 27,
	"name" : "Lindsay Cruz",
	"gender" : "female",
	"company" : "POLARAX",
	"email" : "lindsaycruz@polarax.com",
	"phone" : "+1 (967) 457-3969",
	"tags" : [
		"officia",
		"officia"
	]
}
{
	"_id" : "62373263c0e7f868efee4fe8",
	"age" : 36,
	"name" : "Mooney Ashley",
	"gender" : "male",
	"company" : "EXOSTREAM",
	"email" : "mooneyashley@exostream.com",
	"phone" : "+1 (823) 545-3644",
	"tags" : [
		"excepteur",
		"sint"
	]
}
{
	"_id" : "62373263a2d7e3db6d413840",
	"age" : 39,
	"name" : "Maryanne Guzman",
	"gender" : "female",
	"company" : "NORSUL",
	"email" : "maryanneguzman@norsul.com",
	"phone" : "+1 (980) 472-3837",
	"tags" : [
		"pariatur",
		"labore"
	]
}
{
	"_id" : "62373263fcced9e419797e22",
	"age" : 37,
	"name" : "Robbins Hobbs",
	"gender" : "male",
	"company" : "ZENTURY",
	"email" : "robbinshobbs@zentury.com",
	"phone" : "+1 (832) 472-2338",
	"tags" : [
		"exercitation",
		"voluptate"
	]
}
{
	"_id" : "62373263449d03c995783397",
	"age" : 33,
	"name" : "Flossie Carver",
	"gender" : "female",
	"company" : "KAGGLE",
	"email" : "flossiecarver@kaggle.com",
	"phone" : "+1 (958) 521-2360",
	"tags" : [
		"nostrud",
		"deserunt"
	]
}
{
	"_id" : "623732636e822f6437d99a4a",
	"age" : 32,
	"name" : "Franco Cunningham",
	"gender" : "male",
	"company" : "HAIRPORT",
	"email" : "francocunningham@hairport.com",
	"phone" : "+1 (844) 516-2164",
	"tags" : [
		"labore",
		"incididunt"
	]
}
{
	"_id" : "623732634e1432dc51386097",
	"age" : 23,
	"name" : "Lula Orr",
	"gender" : "female",
	"company" : "DIGITALUS",
	"email" : "lulaorr@digitalus.com",
	"phone" : "+1 (812) 514-2810",
	"tags" : [
		"non",
		"et"
	]
}
{
	"_id" : "62373263bd70c1de075264bd",
	"age" : 36,
	"name" : "Sophia Beach",
	"gender" : "female",
	"company" : "RECOGNIA",
	"email" : "sophiabeach@recognia.com",
	"phone" : "+1 (997) 406-3873",
	"tags" : [
		"eiusmod",
		"ex"
	]
}
{
	"_id" : "6237326338bfa6258d1bc20b",
	"age" : 38,
	"name" : "Sellers Rogers",
	"gender" : "male",
	"company" : "ATGEN",
	"email" : "sellersrogers@atgen.com",
	"phone" : "+1 (927) 567-3064",
	"tags" : [
		"irure",
		"commodo"
	]
}
{
	"_id" : "62373263a2a59c73cb50b0cb",
	"age" : 30,
	"name" : "Mclaughlin Ayers",
	"gender" : "male",
	"company" : "KIGGLE",
	"email" : "mclaughlinayers@kiggle.com",
	"phone" : "+1 (901) 528-3691",
	"tags" : [
		"laboris",
		"exercitation"
	]
}
{
	"_id" : "62373263f9d6d741b1dcc208",
	"age" : 30,
	"name" : "Bowen Phillips",
	"gender" : "male",
	"company" : "YOGASM",
	"email" : "bowenphillips@yogasm.com",
	"phone" : "+1 (833) 518-2377",
	"tags" : [
		"exercitation",
		"esse"
	]
}
{
	"_id" : "62373263a48f8b7502ddabba",
	"age" : 22,
	"name" : "Ebony Bradley",
	"gender" : "female",
	"company" : "QUANTALIA",
	"email" : "ebonybradley@quantalia.com",
	"phone" : "+1 (901) 542-2894",
	"tags" : [
		"ea",
		"proident"
	]
}
{
	"_id" : "6237326330a32dcd0007de67",
	"age" : 29,
	"name" : "Huffman Steele",
	"gender" : "male",
	"company" : "ZOSIS",
	"email" : "huffmansteele@zosis.com",
	"phone" : "+1 (834) 472-2518",
	"tags" : [
		"excepteur",
		"esse"
	]
}
{
	"_id" : "62373263a081a58452ebbbcd",
	"age" : 31,
	"name" : "Davis Rice",
	"gender" : "male",
	"company" : "EXERTA",
	"email" : "davisrice@exerta.com",
	"phone" : "+1 (995) 430-2785",
	"tags" : [
		"excepteur",
		"commodo"
	]
}
{
	"_id" : "6237326304cd46a598522368",
	"age" : 31,
	"name" : "Bridgett Jensen",
	"gender" : "female",
	"company" : "PEARLESSA",
	"email" : "bridgettjensen@pearlessa.com",
	"phone" : "+1 (980) 439-3448",
	"tags" : [
		"velit",
		"adipisicing"
	]
}
{
	"_id" : "623732633b748ac944337c27",
	"age" : 24,
	"name" : "Shari Mccoy",
	"gender" : "female",
	"company" : "ANARCO",
	"email" : "sharimccoy@anarco.com",
	"phone" : "+1 (905) 597-3503",
	"tags" : [
		"nulla",
		"incididunt"
	]
}
{
	"_id" : "623732630d8a0c6643374572",
	"age" : 40,
	"name" : "Allie Obrien",
	"gender" : "female",
	"company" : "TSUNAMIA",
	"email" : "allieobrien@tsunamia.com",
	"phone" : "+1 (815) 434-3585",
	"tags" : [
		"duis",
		"officia"
	]
}
{
	"_id" : "62373263a913c3bd03550993",
	"age" : 27,
	"name" : "Patti Long",
	"gender" : "female",
	"company" : "RADIANTIX",
	"email" : "pattilong@radiantix.com",
	"phone" : "+1 (944) 531-3549",
	"tags" : [
		"nisi",
		"proident"
	]
}
Type "it" for more
> 
