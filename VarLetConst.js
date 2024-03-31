
var a = 10;
const b = 45;
console.log(a);
a = 12;
console.log(a);

function display(){
    var a = 25;
    console.log('a inside function ',a);

    for(var i=0;i<2;i++){
        let a = 1;
        const d = 78;
        c = 34;
        a = a+i;
    }
    console.log('d = ',d);
    console.log('c = ',c);
    console.log('a in the last statement of function ',a);
}

display();
c = 35;
console.log(' c most outside ',c);
console.log(a);




