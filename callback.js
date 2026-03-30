function buyBread(cb) {
    console.log('Bread le aya');
    cb();
}
function sauceSpread(cb) {
    console.log('Sauce laga di');
    cb();
}
function filling(cb) {
    console.log('Filling kardi');
    cb();
}
function grilling(cb) {
    console.log('Grilling kardi');
    cb();
   
}
buyBread(()=>{
    sauceSpread(()=>{
        filling(()=>{
            grilling(()=>{
                console.log('grilling khatam bhai');
                
            }
            );
        })
    })
})