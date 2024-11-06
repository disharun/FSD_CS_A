const mymap=new Map([
    [12,"js"],
    ["key1",2345],
    [true,123]
]);
console.log(mymap.get(12));
mymap.set(23,43);
console.log(mymap);

const myset=new Set();
myset.add(12);
myset.add(1);
myset.add(1);
myset.add(125);
myset.add(1872);
myset.add(17882);
myset.add(17782);
console.log(myset);
