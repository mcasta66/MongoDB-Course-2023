### Mongosh Path
C:\Program Files\MongoDB\mongosh\bin\

### Mongosh Executes an external javascript file
mongosh "127.0.0.1/school" "C:\Users\marga\Downloads\scripts\CreateSchoolSchema.js"
mongosh "127.0.0.1/school" "C:\Users\marga\Downloads\scripts\GetStudents.js"

mongosh "mongodb+srv://cluster0.v5fj45k.mongodb.net/myFirstDatabase" --apiVersion 1 --username m001-student C:\Users\marga\Downloads\scripts\CreateSchoolSchema.js
mongosh "mongodb+srv://cluster0.v5fj45k.mongodb.net/myFirstDatabase" --apiVersion 1 --username m001-student C:\Users\marga\Downloads\scripts\GetStudents.js

###Execute Postman files via Newman 
newman run NttData-Student-XTEC.postman_collection.json -e NttData-Student-PRO.postman_environment.json
