

const arr = [1,2,3,4,5,6,7];
const arr2 = [8,9,10];

const combinedArr = [...arr,...arr2];
console.log('Combined Array = ',combinedArr);

const newArr1 = [...arr];
console.log(newArr1);

const [a,b,...rest] = arr;

console.log('a = '+a);
console.log('b = '+b);
console.log('rest = ',rest);

const carDetails = {
    model:'Swift',
    company:'Suzuki',
    year:2024
}

const newCarDetails = {...carDetails,color:'red'}
console.log('new details = ',newCarDetails);
