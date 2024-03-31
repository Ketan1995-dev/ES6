
function AddNumbers(a,b){
    return a+b;
}

var sum = AddNumbers(2,3);
console.log(sum);

const Add = function(a,b){
    return a+b;
}

const AddNum = (a,b)=>{return a+b}

var total = AddNum(3,4);  
console.log('Total = ',total);

const AddNum1 = (a,b)=>a+b;
console.log(AddNum1(4,5));

const display = message => console.log(message);
display('Hello World');