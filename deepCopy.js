let person = {
    fname : "Aryaman",
    lname : "prasad",
    address : {
        city :"delhi",
    },
};
// Object.freeze(person);
// Object.seal(person);

// let {city} = person;
// console.log(city);

// shallow copy

// let person2 = {...person};
// person2.address.city="agra";
// // console.log(person2);

// deep copy
// let person2 = structuredClone(person);
// person2.address.city = " agra";
// console.log(person);
// console.log(person2);

//deepcopy
// let person2 = JSON.parse(JSON.stringify(person));
// person2.address.city = " agra";
// console.log(person);
// console.log(person2);

// let fruit = ["apple", 'banana','mango'];
// let [first,...rest] = fruit;
// console.log(first);
// console.log(rest);

// IIFE
// ((fname) => {
//     console.log(fname);
    
// })('aryaman');


// (() => {
//     console.log('aryaman');
    
// })();


// let obj1 = {
//     fname : 'Aryaman',
//     age : 21,
//     print: function(city){
//         console.log(this.fname,this.age,city);
        
//     },
// };

// let obj2 ={
//     fname : 'sanchu',
//     age : '17',
// };
// obj1.print.call(obj2,'delhi');
// obj1.print.apply(obj2,['delhi']);
// obj1.print.bind(obj2,'delhi')();

// let num = prompt("enter your number");
// for (let i = 0; i < 10; i++) {
//     console.log(num*i);
    
// }









