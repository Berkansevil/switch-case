let islem = function(a, b, operator) {
    switch(operator) {
        case "topla":
            return a + b;
        break;
        case 'cikar':
            return a - b;
        break;
        case 'carp':
            return a * b;
        break;
        case 'bol':
            return a / b;
        break;
        case 'karekok':
            return   Math.sqrt(a,b) ;
            break;
            case 'kare':
                return   Math.pow(a,b) ;
                break;
        default:
            return 'Tanimlanmamis islem';
        break;
    }
};
console.log(islem(5, 3, 'kare'));  
console.log(islem(10, 3, 'mod'));     
