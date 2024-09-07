let value = "123";

switch(typeof value){
    case "string":
        console.log('this is string value')
        break;
    case "number":
         console.log('this is number value') 
         break;
    case "boolean":
        console.log('this is boolean value')  
        break;
    default:
        console.log('this is not string,boolean,number value')    
}