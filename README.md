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
- in folder newman we will get an html report file

###Execute CRUD_StudentsExercise.js to Atlas MongoDB Database
mongosh "mongodb+srv://cluster0.v5fj45k.mongodb.net/myFirstDatabase" --apiVersion 1 --username m001-student C:\Users\marga\Downloads\scripts\CRUD_StudentsExercise.js

