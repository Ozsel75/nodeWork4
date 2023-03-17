/*
Ödev 4


FS File System Modülü


Node.js FS Modülü kullanarak CRUD işlemleri yapacağız.



employees.json dosyası oluşturalım ve içerisine {"name": "Employee 1 Name", "salary": 2000} verisini ekleyelim. (CREATE)
Bu veriyi okuyalım. (READ)
Bu veriyi güncelleyelim.
Dosyayı silelim.
*/

const fs = require("fs");

// CREATE   --
fs.writeFile("employees.json", '{"name": "Employee 1 Name", "salary": 2000}', "utf8", (err)=> {
    if(err) console.log(err);
    console.log("File Created")
})

// READ 
fs.readFile("employees.json", "utf8", (err, data)=>{
    if(err) console.log(err);
    console.log(`File Readed ${data}`);
})

//UPDATE
fs.appendFile("employees.json", '{"name": "Employee 2 Name", "salary": 3000}', "utf8", (err)=>{
    if(err) console.log(err);
    console.log(`File Updated`)
})


//DELETE
fs.unlink("employees.json", (err)=>{
    if(err) console.log(err);
    console.log("File deleted")
})