### Mongosh Path
C:\Program Files\MongoDB\mongosh\bin\

### Mongosh Executes an external javascript file
mongosh "127.0.0.1/school" "C:\Users\marga\Downloads\scripts\CreateSchoolSchema.js"
mongosh "127.0.0.1/school" "C:\Users\marga\Downloads\scripts\GetStudents.js"

mongosh "mongodb+srv://cluster0.v5fj45k.mongodb.net/myFirstDatabase" --apiVersion 1 --username m001-student C:\Users\marga\Downloads\scripts\CreateSchoolSchema.js
mongosh "mongodb+srv://cluster0.v5fj45k.mongodb.net/myFirstDatabase" --apiVersion 1 --username m001-student C:\Users\marga\Downloads\scripts\GetStudents.js

###Execute Postman files via Newman 
newman run NttData-Student-XTEC.postman_collection.json -e NttData-Student-PRO.postman_environment.json

###Execute Newman's Report
npm install -g newman-reporter-htmlextra
newman run NttData-Student-XTEC.postman_collection.json -e NttData-Student-PRO.postman_environment.json -r htmlextra
###in folder newman we will get an html report file

###Execute CRUD_StudentsExercise.js to Atlas MongoDB Database
mongosh "mongodb+srv://cluster0.v5fj45k.mongodb.net/myFirstDatabase" --apiVersion 1 --username m001-student C:\Users\marga\Downloads\scripts\CRUD_StudentsExercise.js

###You must install python

###You must install first pymongo via pip
python -m pip install pymongo
python DatabaseScript.py

###GitHub Pages reports html
https://mcasta66.github.io/MongoDB-Course-2023/newman/NttData-Student-XTEC-2023-02-24-21-58-13-009-0.html
https://mcasta66.github.io/MongoDB-Course-2023/newman/MongoDB%20Data%20API-2023-03-02-15-51-32-847-0.html

###Added schema validation