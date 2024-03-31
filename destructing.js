// Destructing

const arr = ['Mahindra','Suzuki','Tata'];

const mahindra = arr[0];
const Suzuki = arr[1];
const tata = arr[2];

console.log(mahindra);
console.log(Suzuki);
console.log(tata);

const [m,s,t] = arr;

console.log('m = ',m);

const Person = {
    name:'Chetan',
    age:29,
    Address:{
        Country:'India',
        State:'Maharashtra'
    }
}

const {age,name,Address:{State}} = Person;

console.log('age = '+age);
console.log('name = '+name);
console.log('State = '+State);

