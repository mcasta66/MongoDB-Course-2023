printjson(db.students.find({}))

print("Find all students and limit to one student ")
printjson(db.students.find({}).limit(1))

//Find one student
print ("Find one student")
printjson(db.students.findOne({}))

//Find all students ordered by name
print("Find all students ordered by name")
printjson(db.students.find().sort({name:1}))

//Find a student with findOne instruction with a filter
print("Find a student with findOne instruction with a filter")
printjson(db.students.findOne({gpa: 3.5}))

//Insert one student with insertOne instruction
print("Insert one student with insertOne instruction")
printjson(db.students.insertOne({name: "Jack", major: "Biology", gpa: 3.5}))

//Update a student with updateOne instruction
print("Update a student with updateOne instruction")
printjson(db.students.updateOne(
	{name: "Jack"},
	{ "$set": { "gpa": 3 } }
	))

//Delete a student with deleteOne instruction
print("Delete a student with deleteOne instruction")
printjson(db.students.deleteOne(
	{name: "Jack"}
	))

//Find multiple students with find instruction	
print("Find multiple students with find instruction")
printjson(db.students.find({gpa: 3.7}))	

//Insert multiple students with insertMany instruction	
print("Insert multiple students with insertMany instruction")
printjson(db.students.insertMany(	
	[{
        "name": "Beth",
        "major": "Physics",
        "gpa": 3.8
      },{
        "name": "Dorothy",
        "major": "Chemistry",
        "gpa": 3.7
      },{
        "name": "Edward",
        "major": "Law",
        "gpa": 3.6
      }]
	  ))


//Update multiple students with updateMany instruction
print("Update multiple students with updateMany instruction")
printjson(db.students.updateMany(
	{gpa: 3.7},
	{ "$set": { "gpa": 3.5 } }
	))

//Delete multiple students with deleteMany instruction
print("Delete multiple students with deleteMany instruction")
printjson(db.students.deleteMany(
	{ "gpa": 3.5 }
	))
	
//Find all students
print("Find all students")
printjson(db.students.find())

//Drop students collection
print("drop students collection")
printjson(db.students.drop())