function register(cb){
    
    setTimeout(() => {
        console.log("register end");
        cb();
        
    }, 1000);
    
    
    
}
function sendemail(cb){
    
    setTimeout(() => {
      console.log("email sent");
      cb();
    },2000);
    
    
    
    
}

function login(cb){
   
    setTimeout(() => {
       console.log("login");
       cb();
    }, 3000);
    

 
}
function getdata(cb) {
 
  
 setTimeout(() => {
   console.log("data");
   cb();
 }, 4000);

}
function displaydata() {
     setTimeout(() => {
       console.log("displayed");
       cb();
     }, 4000);
  
 
}
// function waitforthreesec(){
//     const ms=3000+new Date().getTime();
//     while (ms>new Date()) {
        
//     }
// }
//callback hell
register(
    function(){
        sendemail( function(){
            login(
                function (){
                    getdata(function () {
                        displaydata();
                    });
                }
            );
        });
        
       
    }
);
