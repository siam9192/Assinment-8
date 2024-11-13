import app from "./app";

const port = 5000;


function main (){
 try {
   app.listen(port,()=>{
      console.log('Server is running')
   })
 } catch (error) {
   console.log(error)
 }
}


main()