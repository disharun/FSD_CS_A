const num=[1,2,3,4,6];
const c=num.filter((n)=>(n%2==0))
console.log(c);
const d=num.map((n)=>(n*2));
console.log(d);
const e=num.filter((n)=>(n%2==0)).map((n)=>(n*2))
.reduce((n,s)=>(n+s));
console.log(e);