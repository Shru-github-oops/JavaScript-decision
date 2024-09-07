let x = 1;
let y = 2;
let z = 3;

let positiveCount = 0;
let nagativeCount = 0;

if(x>0) positiveCount++;
if(y>0) positiveCount++;
if(z>0) positiveCount++;

nagativeCount = 3 - positiveCount;

if(positiveCount === 3){
    console.log("+++");
}
else if(positiveCount === 2){
    console.log("++-");
}
else if(positiveCount === 1){
    console.log("+--");
}
else{
    console.log("---");
}