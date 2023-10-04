const fs = require("fs");

function createDir(directoryPath, recursive) {
  fs.mkdir(directoryPath, { recursive: recursive }, (err) => {
    if (err) {
      return "Error creating directory:" + err;
    } else {
      return "Directory created successfully";
    }
  });
}

function deleteDir(directoryPath, recursive) {
  fs.rm(directoryPath, { recursive: recursive }, (error) => {
    if (error) {
      console.error(error);
    } else {
      console.log("done");
    }
  });
}

// createDir('test/testOne',true);

// deleteDir('test',true)

let products = [
    { id: 1, name: "Apple", price: 150 },
    { id: 2, name: "Samsung", price: 100 },
    { id: 1, name: "Oppo", price: 90 },
    { id: 4, name: "Lenovo", price: 130 },
    { id: 5, name: "HP", price: 110 },
];

// function createFile(path,content){

//     fs.writeFile(path,JSON.stringify( content ), (err)=>{
//         if(err ) console.log(err);
//         if(!err) console.log("done")
//     })
// }

// createFile('uploads/myFile.json',products)


// function readFile(path){
//     fs.readFile(path, 'utf8', (err, data)=>{
//         if(err) console.log(err);
//         console.log(data);
//     })
// }

// readFile('uploads/myFile.json')


// Yargs



// function isFound(path){
//     fs.stat(path,(err,stat)=>{
//         if(err){
//             if(err.code == 'ENOENT'){
//                 console.log("File not found");
//             }else{
//                 console.log(err);
//             }
//         }else{
//             console.log("file exists");
//         }
//     })
// }

// isFound('uploads/myFie.txt')

// what is (ENOENT)?
// (ENOENT) => error no entity


// function deleteFile(path){
//     fs.unlink(path, (err)=>{
//         if (err){
//             console.log(err);
//         } else{
//             console.log("file deleted");
//         }
//     })
// }

// deleteFile('uploads/myFile.txt')

