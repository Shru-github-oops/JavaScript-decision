let fruit = "orange";
let color;

switch(fruit){
    case "banana":
    case "lemon":
        color = "yellow";
        break;

        case "apple":
            case "cherry":
                color = "red";
                break;
 default:
    color = "unknow";
}

console.log(color);