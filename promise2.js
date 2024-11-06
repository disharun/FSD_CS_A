function register() {
  
  return new Promise((resolve,reject) => {
   setTimeout(() => {
    return reject("network error");
     console.log("register end");
     
   }, 3000);
  });
  
}
function sendemail() {
  return new Promise((resolve,reject)=>{
  setTimeout(() => {
    console.log("email sent");
    resolve();
  }, 4000);
  
  })
  
  
}

function login() {
  return new Promise((resolve,reject)=>{
  setTimeout(() => {
    console.log("login");
    resolve();
  }, 5000);
  })
  
  
}
function getdata() {
  return new Promise((resolve, reject)=>{
  setTimeout(() => {
    console.log("data");
    resolve();
  }, 6000);
  })
  
}
function displaydata() {
  console.log("displayed");
}
// function waitforthreesec(){
//     const ms=3000+new Date().getTime();
//     while (ms>new Date()) {

//     }
// }
// register(function () {
//   sendemail(function () {
//     login(function () {
//       getdata(function () {
//         displaydata();
//       });
//     });
//   });
// });
register().then(sendemail).then(login).then(getdata)
.then(displaydata).catch((err)=>
{
  console.log("error", err);

})