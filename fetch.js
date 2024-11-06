const promice = fetch("https://api.github.com/users/disharun")
promice.then(
    (res)=>{
        return res.json();
    }
).then(
    (data)=>console.log(data)
    
).catch(
    (err)=>console.log("Error",err)
    
);