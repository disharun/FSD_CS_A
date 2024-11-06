function register() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("register end");
      resolve();
    }, 3000);
  });
}
function sendemail() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("email sent");
       return reject("nerror");
    }, 4000);
  });
}

function login() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("login");
      resolve();
    }, 5000);
  });
}
function getdata() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data");
      resolve();
    }, 6000);
  });
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
 async function authenticate(){
    try {
        await register();
        await sendemail();
        await login();
        await getdata();
        await displaydata();
        
    } catch (err) {
        console.log("error",err);
        
        
    }
   
}
authenticate();
