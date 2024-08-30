// const http= require("http");
// const fs = require("fs");

// // const { isUtf8 } = require("buffer");

// fs.readFile('example.txt' , 'utf8' , (error,data) => {
//     if(error){
//         console.error('there is error in reading file' , error)
//         return ;
//     } else{
//         console.log(data)
//     }
// });
// const server=http.createServer( ( request , response)=>{
// response.statusCode=200;
// response.setHeader("Content-Type", "text/plain");
// response.end("This is our first server"); 

// })

// let obj = {
//      name: 'hassan',
//      email: 'hassan@gmail.com',
//      password: '12345678'
// }
//    let stringData = JSON.stringify(obj);

// fs.writeFile('example.txt', stringData , (error) => {
//    if (error) {
//     console.log(error);
//     return;
//    }
//       console.log('File write successfully');

// });
// fs.appendFile('example.txt', 'More content is here' , (error) => {
//     if (error) {
//      console.error(error);
//      return;
//     }
//        console.log('file appended successfully');
 
//  });
// fs.readFile('example.txt', 'utf8' , (error,data) => {
//    if (error) {
//     console.error(error);
//     return;
//    }
//       console.log(data);

// });

// // fs.rename('example.txt', 'file.txt' , (error) => {
// //     if (error) {
// //      console.log(error);
// //      return;
// //     }
// //        console.log('File name updated successfully');
 
// //  });
// server.listen(3000, "localhost", () => {
//     console.log("Server is started on http://localhost:3000");
// })

// // readstream

// const readStream = fs.createReadStream('example.txt',"utf8");

// readStream.on("data",(chunk) => {
//     console.log('Reading chunk');
// });
// readStream.on("end",() => {
//     console.log(' Finished chunk:', );
// });
// readStream.on("error",(error) => {
//     console.error('error occurred during reading', error);
// });




// // writestream

// const writeStream = fs.createWriteStream('example.txt');

// writeStream.write("Hello,");
// writeStream.write("World!");
// writeStream.end();


// writeStream.on("finish",() => {
//     console.log('finished writing');
// });


// writeStream.on("error",(error) => {
//     console.error('error occurred', error);
// }); 




//   EXPRESS




import express from "express";
import dotenv from  "dotenv"
import morgan from "morgan"; 

const app = express();

app.use(morgan(':method :url :status :res[content-length] - :response-time ms '))
app.get('/get', (request,response) => {
    response.send('api response get')
})

dotenv.config();
let port = process.env.PORT
app.use(express.json());
app.listen(port, ()=> {
    console.log('server is running on', port);
})