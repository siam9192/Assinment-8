import app from "./app";

const port = 5000;


function main (){
 app.listen(port,()=>{
    console.log('Server is running')
 })
}


main()