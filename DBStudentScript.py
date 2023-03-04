'''
Created on 4 mar 2023

@author: marga
'''
import pymongo

#This is a MongoDb Connection
client = pymongo.MongoClient("localhost", 27017)

#Create a test database
db = client.school
print(db.name)

#Drop and Create students collection
db.students.drop()
print(db.students)

#Insert one element 

print(db.students.insert_one({"name": "Jack", "major": "Biology", "gpa": 3.5}).inserted_id)

#Find_one element
print(db.students.find_one())

#Insert multiple students with insertMany instruction

print(db.students.insert_many([
  { "name": "Alice Smith", "major": "Mathematics", "gpa": 3.5 },
  { "name": "Bob Johnson", "major": "Physics", "gpa": 3.2 },
  { "name": "Charlie Brown", "major": "English", "gpa": 3.9 }
]))

#Loop through a collection
for item in db.students.find():
    print(item)
    
#Loop through a collection in a descending order
for item in db.students.find().sort("x", pymongo.DESCENDING):
    print(item)

#Update one element in a collection    
myquery = { "name": "Jack" }
newvalues = { "$set": { "gpa": 3  } }

db.students.update_one(myquery, newvalues)

  
#Delete a student with deleteOne instruction
print(db.students.delete_one(
    {"name": "Jack"}
    ))

#Update many element in a collection    
myquery = { "gpa": { "$gt": 3.2 } }
newvalues = { "$set": { "gpa": 3  } }

db.students.update_many(myquery, newvalues)

#Delete many students
print(db.students.delete_many(
    {"gpa": 3}
    ))

#print "students" after the update:
for item in db.students.find():
    print(item)   