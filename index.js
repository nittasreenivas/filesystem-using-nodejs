const fs = require('fs')

// fs.writeFile("hi.txt","hii vasu bro ela unnavu",function(err){
//     if(err){
//         console.log(err.message)
//     }else{
//         console.log(`writeFile executed`)
//     }
// })

// fs.appendFile("hi.txt","\nnenu banee unnanu tammudu",function(err){
//     if(err){
//         console.log(err.message)
//     }else{
//         console.log(`appendFile executed`)
//     }
// })

// fs.readFile("hi.txt",function(err,data){
//     if(err){
//         console.log(err)
//     }else{
//         console.log('data:::',data.toString())
//     }
// })

// fs.rename("hi.txt","hey.txt",function(err){
//     if(err){
//         console.log(err.message)
//     }else{
//         console.log(`renameFile executed`)
//     }
// })

// fs.copyFile("hey.txt","./sree/vasu.txt",function(err){
//     if(err){
//         console.log(err)
//     }else{
//         console.log(`copyFile executed`)
//     }
// })

// fs.unlink("index.html",function(err){
//     if(err){
//         console.log(err)
//     }else{
//         console.log(`file Deleted succesfully`)
//     }
// })

fs.rm("./sree",{recursive:true},function(err){
    if(err){
        console.log(err.message)
    }else{
        console.log(`folder deleted succesfully`)
    }
})