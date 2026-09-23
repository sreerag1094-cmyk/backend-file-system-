const fs=require("fs")

// to read file

fs.readFile("message.txt" , "utf-8" ,(err,data)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(data)
});

// to write file

fs.writeFile("message1.txt","welcome to backend",(err)=>{
    if(err){
        console.log(err)
    }
    console.log("sucess")
})

// to append file

fs.appendFile("message1.txt","\n welcome to node.js",(err)=>{
    if(err){
        console.log(err)
    }
    console.log("updated")

})

// to delete a file

// fs.unlink("message.txt" ,(err)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log("removed")

// })