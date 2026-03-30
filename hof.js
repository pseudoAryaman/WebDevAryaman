let arr = [1000,2000,3000,4000];
function calculateTenPercent(salary){
    return salary*0.1;
}
function calculateTwentyPercent(salary){
    return salary*0.2;
}
function calculateThirtyPercent(salary){
    return salary*0.3;
}
Array.prototype.calculateSalary = function(cb){
    let res = [];
    for(let i = 0; i<this.length;i++){
        res.push(cb(this[i]));
    }
    return res;
}
console.log(arr.calculateSalary(calculateTenPercent));






